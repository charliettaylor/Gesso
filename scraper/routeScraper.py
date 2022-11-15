from time import sleep
from dataclasses import dataclass
import requests
from bs4 import BeautifulSoup, PageElement
import sys
import textwrap
import string
import re


@dataclass
class Param:
  name: str
  type: str
  description: str


@dataclass
class Route:
  name: str
  funcName: str
  paramName: str
  route: str
  method: str
  params: list[Param]
  returnType: str


def get_entities():
  entities = []
  with open('../types/entities.txt', 'r') as f:
    for line in f.readlines():
      entities.append(line.strip())
  return entities


def clean_text(text: str):
  # removes punctuation
  text = text.translate(str.maketrans('', '', string.punctuation))
  return text.strip().replace('[deprecated]', '').replace(' ', '')


def format_description(description: str):
  lines = textwrap.wrap(description, width=80)
  return '\n'.join([textwrap.indent(line, '  ') for line in lines])


def convert_to_func_name(name: str):
  words = name.split()
  name = []
  name.append(words[0].lower().split('/')[0])
  words.pop(0)

  for word in words:
    if word not in ["and", "a", "your"]:
      if '/' in word:
        name.append(word.split('/')[0].capitalize())
      else:
        name.append(word.capitalize())

  return name


def create_params_and_route(tag: PageElement) -> Route:
  params = []

  # find the route name
  routeName = tag.find('h2', 'api_method_name')
  if routeName is not None:
    routeName = routeName.a.string.strip()
  else:
    routeName = "FUCK ROUTE NAME"

  routeNameList = convert_to_func_name(routeName)
  routeName = ''.join(routeNameList)

  # get the endpoint name and endpoint
  thing = tag.find('h3', class_="endpoint")
  if thing is not None:
    method, endpoint = thing.string.strip().split()
  else:
    method, endpoint = "FUCK METHOD", "FUCK ENDPOINT"

  endpoint = endpoint.replace("api/v1/", "")

  # parse descriptions
  for row in tag.select('tbody tr'):
    row_text = [x.text.strip() for x in row.find_all('td')]

    if 'Allowed values' in row_text[3]:
      row_text[3] = 'Allowed values: ' + row_text[3].split(
        'Allowed values:')[1].strip().replace(')', '').replace(']', '')

    params.append(Param(row_text[0], row_text[2], row_text[3]))

  # write interfaces to params file
  paramName = f"{''.join([x.capitalize() for x in routeNameList])}Params.ts"

  # parse out the return type
  entities = get_entities()
  returnStr = tag.get_text().split('Returns')[-1].strip()
  entity = [ele for ele in entities if(ele in returnStr)]
  entity = entity[0] if len(entity) > 0 else "any"

  if 'a list of' in returnStr:
    entity += '[]'

  route = Route(routeName, clean_text(routeName), clean_text(f"{paramName[:-9]}Params"), endpoint, method, params, entity)
  
  if len(route.params) > 0:
    with open(f"../types/params.ts", "a") as f:
      f.write(create_interface(route, paramName[:-3]))

  return route


def create_interface(route: Route, interfaceName: str):
  interfaceName = clean_text(interfaceName)
  interface = f'export interface {interfaceName} {{\n'

  names = []
  typeDict = {
    "integer": "number",
    "datetime": "Date",
    "date": "Date",
    "float": "number",
    "file": "any",
    "url": "string",
    "array": "any[]",
    "hash": "any",
    "serializedhash": "any",
    "json": "any",
    "numeric": "number",
  }

  for param in route.params:
    if param.type.lower() == "deprecated":
      continue

    name = param.name
    type = param.type

    if type.startswith('[') and type.endswith(']'):
      removedBrackets = type[1:][:-1].lower()
      if removedBrackets in typeDict:
        type = typeDict[removedBrackets]
      type = f'{type}[]'
    else:
      type = typeDict[param.type.lower()] if param.type.lower(
      ) in typeDict else param.type

    if name[-1] == ']' and name[-2] == '[':
      name = name[:-2]
      type = f'{type}[]'
    else:
      name = clean_text(name)

    if param.type.startswith('multiple'):
      if type.endswith('s'):
        type = type[:-1]
      type = f'{type[8:]}[]'

    name = f'"{name}"'

    if name in names:
      continue

    interface += f'  /**\n{format_description(param.description)} */\n'
    interface += f'  {name}: {type};\n'
    names.append(name)

  interface += '}\n\n'
  return interface


def create_class(className: str, routes: list[Route]) -> str:
  entities = []
  
  for route in routes:
    type = route.returnType
    if not type.endswith('[]') and type != 'any' and type not in entities:
      entities.append(type)
  
  params = [route.paramName for route in routes]

  # read text from params.ts
  with open('../types/params.ts', 'r') as f:
    paramsText = f.read()

  for param in params:
    if param not in paramsText:
      params.remove(param)

  out = f'''import {{ BaseApi }} from './BaseApi';
import {{ Configuration }} from './Configuration';
import {{ {', '.join(entities)} }} from '../types/models';
import {{ {', '.join(set(params))} }} from '../types/params';
  
export class {className} extends BaseApi {{
  constructor(config: Configuration) {{
    super(config);
  }}

  '''

  for route in routes:
    out += create_function(route)

  out += '}\n'

  return out


def create_function(route: Route) -> str:
  method = route.method.lower()
  funcParams = parse_route_parameters(route.route)
  params = f'params: {route.paramName}' if len(route.params) > 0 else ''
  
  routeWithParams = replace_route_params(route.route)
  requestParams = '' if params == '' else f', params'

  if len(params) > 0 and len(funcParams) > 0:
    funcParams += ' '
  elif len(params) == 0 and len(funcParams) > 0:
    funcParams = funcParams[:-1]
  funcParams = funcParams + params

  function = f'''public async {route.funcName}({funcParams}): Promise<{route.returnType}> {{
    const endpoint = `{routeWithParams}`;
    const response = await this.{method}(endpoint{requestParams});
    if (response.ok) {{
      return await response.json();
    }}

    return Promise.reject(response);
  }}\n
  '''
  # function = textwrap.indent(function, '  ')

  return function


def replace_route_params(route: str):
  regex = r':\w*'
  routeParams = re.findall(regex, route)
  paramDict = {}
  for p in routeParams:
    paramDict[p] = f'${{{p[1:]}}}'
  
  routeWithParams = []
  for chunk in route.split('/'):
    if chunk in paramDict:
      routeWithParams.append(paramDict[chunk])
    else:
      routeWithParams.append(chunk)
  
  return '/'.join(routeWithParams)


def parse_route_parameters(route: str):
  chunks = route.split('/')

  if len(chunks) <= 2:
    return ''

  params = []
  for chunk in chunks:
    if chunk.startswith(':'):
      params.append(chunk[1:])

  return ': string, '.join(params) + ': string,'


# stackoverflow: https://stackoverflow.com/questions/3173320/text-progress-bar-in-terminal-with-block-characters
def printProgressBar(iteration, total, prefix='', suffix='', decimals=1, length=100, fill='█', printEnd="\r") -> None:
  """
  Call in a loop to create terminal progress bar
  @params:
    iteration   - Required  : current iteration (Int)
    total     - Required  : total iterations (Int)
    prefix    - Optional  : prefix string (Str)
    suffix    - Optional  : suffix string (Str)
    decimals  - Optional  : positive number of decimals in percent complete (Int)
    length    - Optional  : character length of bar (Int)
    fill    - Optional  : bar fill character (Str)
    printEnd  - Optional  : end character (e.g. "\r", "\r\n") (Str)
  """
  percent = ("{0:." + str(decimals) + "f}").format(100 *
                           (iteration / float(total)))
  filledLength = int(length * iteration // total)
  bar = fill * filledLength + '-' * (length - filledLength)
  print(f'\r{prefix} |{bar}| {percent}% {suffix}', end=printEnd)
  # Print New Line on Complete
  if iteration == total:
    print()


def main():
  with open("endpoints.txt", "r") as f:
    endpoints = f.readlines()

  progCount = 0
  total = len(endpoints)

  for end in ['https://canvas.instructure.com/doc/api/account_calendars.html']:
    page = requests.get(end.strip())

    if page.status_code == 403:
      print("You are being rate limited. Please wait a few minutes and try again.")
      sys.exit()

    soup = BeautifulSoup(page.content, 'html.parser')
    tags = soup.find_all('div', class_='method_details')

    className = soup.find('div', 'service')
    if className is not None:
      className = className.find('h1').string.replace('API', '').split()
      className = ''.join(className)
    else:
      className = 'FUCK CLASS NAME'

    routes = []
    for tag in tags:
      routes.append(create_params_and_route(tag))

    
    # write output of create_class to file
    with open(f"../src/{className}.ts", "w") as f:
      f.write(create_class(className, routes))

    # epic progress
    progCount += 1
    printProgressBar(progCount, total, 'Generating Routes', length=50)
    # they temporarily ban you if you make too many requests
    sleep(0.1)


if __name__ == "__main__":
  main()
