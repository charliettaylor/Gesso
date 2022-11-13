from asyncio import sleep
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


with open("endpoints.txt", "r") as f:
  endpoints = f.readlines()

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
  # they temporarily ban you if you make too many requests
  sleep(0.1)
