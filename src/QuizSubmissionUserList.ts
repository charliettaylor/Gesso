import { Scope } from '../types/models';
import { SendMessageToUnsubmittedOrSubmittedUsersForTheQuizParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class QuizSubmissionUserList extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async sendMessageToUnsubmittedOrSubmittedUsersForTheQuiz(
    course_id: string,
    id: string,
    params: SendMessageToUnsubmittedOrSubmittedUsersForTheQuizParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${id}/submission_users/message`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
