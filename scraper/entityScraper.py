from time import sleep
import requests
from bs4 import BeautifulSoup
import re

# https://stackoverflow.com/questions/2319019/using-regex-to-remove-comments-from-source-files
# try this too: https://codereview.stackexchange.com/questions/148305/remove-comments-from-c-like-source-code
def remove_comments(string):
  pattern = r"(\".*?\"|\'.*?\')|(/\*.*?\*/|//[^\r\n]*$)"
  regex = re.compile(pattern, re.MULTILINE | re.DOTALL)

  def _replacer(match):
    if match.group(2) is not None:
      return ""
    else:
      return match.group(1)

  return regex.sub(_replacer, string)


def main():
  with open("endpoints.txt", "r") as f:
    endpoints = f.readlines()

  # empty file
  with open(f"../temp/entities.txt", "r+") as f:
    f.truncate(0)

  for end in endpoints:
    page = requests.get(end.strip())
    soup = BeautifulSoup(page.content, 'html.parser')
    tags = soup.find_all('div', class_='object_definition')

    for tag in tags:
      name = tag.find('a')['name']
      content = remove_comments(
        tag.find('pre', class_='example code prettyprint').string)
      with open(f"../types/json/{name}.json", "w") as f:
        f.write(content)

      with open(f"../temp/entities.txt", "a") as f:
        f.write(f'{name}\n')
    # they temporarily ban you if you make too many requests
    sleep(0.1)

if __name__ == "__main__":
  main()