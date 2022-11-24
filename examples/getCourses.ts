import { Configuration } from '../src/Configuration';
import { Courses } from '../src/Courses';

async function getCourses() {
  const thing = {
    domain: 'https://csufullerton.instructure.com',
    apiKey: '',
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
