import { Configuration, Courses } from "./deps.ts";

export interface Client {
  courses: Courses;
}

export interface ClientOptions {
  domain: string;
  apiKey: string;
}

export function makeClient(o: ClientOptions): Client {
  const c = new Configuration(o);
  return {
    courses: new Courses(c),
  };
}
