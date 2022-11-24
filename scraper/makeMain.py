# read file names from the directory
# and write them to a file

import os

# get the list of files in the directory
files = os.listdir('../src')
# open the file to write
f = open('../src/mod.ts', 'w')
# write the file names to the file
for file in files:
  if file == 'main.ts':
    continue
  cleanFile = file.replace('(', '').replace(')', '')
  f.write(f'export {{ {cleanFile[:-3]} }} from "./{file}";\n')

f.close()