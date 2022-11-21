import { Scope } from '../types/models';
import { SetExtensionsForStudentQuizSubmissionsParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class QuizExtensions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async setExtensionsForStudentQuizSubmissions(
    course_id: string,
    quiz_id: string,
    params: SetExtensionsForStudentQuizSubmissionsParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/extensions`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
