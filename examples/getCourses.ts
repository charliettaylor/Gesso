import { Courses } from '../src/Courses';
import { Configuration } from '../src/Configuration';
import { Accounts } from '../src/Accounts';

async function getCourses() {

  const thing = {
    domain: 'https://csufullerton.instructure.com', 
    apiKey: '349~haw4l0jOktRNQ2P8NTLq9e329W9wmzKyWyAqnf7a4GfF7V6DN8M0jqgGaZMErT41'
  }

  console.log('thing:')
  console.log(JSON.stringify(thing));

  const config = new Configuration({
    domain: 'https://csufullerton.instructure.com', 
    apiKey: '349~haw4l0jOktRNQ2P8NTLq9e329W9wmzKyWyAqnf7a4GfF7V6DN8M0jqgGaZMErT41'
  });
  const courseApi = new Accounts(config);
  
  try {
    return await courseApi.listAccounts({
      include: ['services']
    });
  } catch (error) {
    return error;
  }
}

getCourses().then(t => console.log(t));