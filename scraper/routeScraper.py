from asyncio import sleep
from dataclasses import dataclass
import requests
from bs4 import BeautifulSoup
import re
import textwrap

@dataclass
class Param:
  name: str
  type: str
  description: str

@dataclass
class Route:
  name: str
  route: str
  params: list[Param]


def convert_to_func_name(name):
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


def create_interface(route: Route, interfaceName: str):
  interface = f'export interface {interfaceName} {{\n'
  for param in route.params:
    type = param.type if param.type != 'integer' else 'number'
    name = param.name

    if param.name[-1] == ']' and param.name[-2] == '[':
      name = name[:-2]
      type = f'{type}[]'
    
    interface += f'  /**\n{format_description(param.description)} */\n'
    interface += f'  {name}: {type};\n'
  interface += '}\n\n'
  return interface

def format_description(description: str):
  lines = textwrap.wrap(description, width=80)
  return '\n'.join([textwrap.indent(line, '  ') for line in lines])

with open("endpoints.txt", "r") as f:
  endpoints = f.readlines()

for end in ['https://canvas.instructure.com/doc/api/courses.html']:
  page = requests.get(end.strip())
  soup = BeautifulSoup(page.content, 'html.parser')
  tags = soup.find_all('div', class_='method_details')

  for tag in [tags[0], tags[1]]:
    routeName = tag.find('h2', 'api_method_name').a.string.strip()
    routeNameList = convert_to_func_name(routeName)
    routeName = ''.join(routeNameList)

    print(routeName)
    method, endpoint = tag.find('h3', class_="endpoint").string.strip().split()
    endpoint = endpoint.replace("api/v1/", "")
    # print(endpoint)
    params = []
    for row in tag.select('tbody tr'):
      row_text = [x.text.strip() for x in row.find_all('td')]

      if 'Allowed values' in row_text[3]:
        row_text[3] = 'Allowed values: ' + row_text[3].split('Allowed values:')[1].strip().replace(')', '').replace(']', '')

      params.append(Param(row_text[0], row_text[2], row_text[3]))
    
    route = Route(routeName, endpoint, params)

    # write interfaces to params file
    paramName = f"{''.join([x.capitalize() for x in routeNameList])}Params.ts"
    with open(f"../types/params.ts", "a") as f:
      f.write(create_interface(route, paramName[:-3]))


    # make function to form endpoint functions from Route

        
  # they temporarily ban you if you make too many requests
  # sleep(0.1)
