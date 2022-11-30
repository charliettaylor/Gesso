import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";
import { SendMessageToUnsubmittedOrSubmittedUsersForTheQuizParams } from "../types/params.ts";

export class QuizSubmissionUserList extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async sendMessageToUnsubmittedOrSubmittedUsersForTheQuiz(
    course_id: string,
    id: string,
    params?: SendMessageToUnsubmittedOrSubmittedUsersForTheQuizParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${id}/submission_users/message`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
