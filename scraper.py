import requests
from bs4 import BeautifulSoup
import re

def remove_comments(string):
    pattern = r'//.*?\n'
    return re.sub(pattern, '', string)




# read html file
with open('example.htm', 'r') as html_file:
  content = html_file.read()
  # parse html
  soup = BeautifulSoup(content, 'html.parser')

  # find tags
  tags = soup.find_all(
    'pre', class_='example code prettyprint prettyprinted')

  # filter strings that start with {
  # and end with }
  # and remove comments
  for tag in tags:
    code = tag.text
    if code.startswith('{') and code.endswith('}'):
      code = remove_comments(code)
      # write code to file
      with open('example.json', 'w') as json_file:
        json_file.write(code)