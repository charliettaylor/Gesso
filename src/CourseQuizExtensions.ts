import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { SetExtensionsForStudentQuizSubmissionsParams } from '../types/params';
  
export class CourseQuizExtensions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async setExtensionsForStudentQuizSubmissions(course_id: string, params?: SetExtensionsForStudentQuizSubmissionsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/quiz_extensions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
