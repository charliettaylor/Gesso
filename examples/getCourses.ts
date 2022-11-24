import { Configuration } from "../src/Configuration.ts";
import { Courses } from "../src/Courses.ts";

async function getCourses() {
  const thing = {
    domain: "https://csufullerton.instructure.com",
    apiKey: "",
  };

  const config = new Configuration(thing);
  const courseApi = new Courses(config);

  try {
    return await courseApi.listCourses();
  } catch (error) {
    return error;
  }
}

getCourses().then((t) => console.log(t));
