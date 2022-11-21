import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import { UploadFileParams } from '../types/params';

export class QuizSubmissionFiles extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async uploadFile(course_id: string, quiz_id: string, params: UploadFileParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/submissions/self/files`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
