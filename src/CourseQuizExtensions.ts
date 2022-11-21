import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import { SetExtensionsForStudentQuizSubmissionsParams } from '../types/params';

export class CourseQuizExtensions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async setExtensionsForStudentQuizSubmissions(
    course_id: string,
    params: SetExtensionsForStudentQuizSubmissionsParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quiz_extensions`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
