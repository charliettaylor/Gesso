# JSON Types

These example JSON values are scraped from the Canvas API docs, and then
turned into TypeScript interfaces using [QuickType](https://quicktype.io/).

To scrape and generate updated types, run these commands:

```
python3 scraper.py
cd types
npx quicktype json -o models.ts
```
