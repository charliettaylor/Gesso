# Gesso 🎨

_An ESM library for the Canvas LMS REST API_

👷‍♂️🏗**UNDER CONSTRUCTION**👷‍♀️🔨

The goal of this library is to provide types and methods for the Canvas LMS REST
API.

Also available on [NPM!](https://www.npmjs.com/package/gesso-canvas-api)

## Quick Start Example

```ts
import {
  Assignments,
  Configuration,
} from "https://deno.land/x/gesso@v0.1/src/mod.ts";

async function getCourses() {
  const thing = {
    // your canvas domain
    domain: "https://csufullerton.instructure.com",
    // auth with a key
    apiKey: "your API key",
    // or tokens...
    tokens: { accessToken: "", refreshToken: "" },
  };

  // create a new Configuration object
  const config = new Configuration(thing);
  // instantiate the class you'd like to make calls on
  const courseApi = new Courses(config);

  try {
    // and get back a list of Course objects!
    return await courseApi.listCourses();
  } catch (error) {
    return error;
  }
}
```

## Repo Structure

### `/types`

This folder contains all of the TypeScript interfaces for the models and query
parameters for each route.

The `/types/json` folder contains the JSON examples from the
[Canvas LMS REST API documentation](https://canvas.instructure.com/doc/api/)
that is scraped by the scripts in `/scrapers`

### `/src`

This folder contains all of the classes that are generated from the route
information in the API docs, as well as the BaseApi and Configuration classes.

### `/scrapers`

The most important folder, all of the interfaces and classes are generated by
the Python scripts in here.

`entityScraper.py`

This file scrapes all of the example JSON models and saves them to
`/types/json`, as well as creating a list of type names in `/temp/entities.txt`
for `routeScraper` to use. THIS SHOULD BE RAN BEFORE `routeScraper.py`

`routeScraper.py`

This file creates both the query param interfaces as well as the classes. (To be
split into 2 separate scrapers)

`makeMain.py`

Creates the `mod.ts` in `/src` to export the types for Deno 🦕
