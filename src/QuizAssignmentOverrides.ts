import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Assignment } from "../types/models.ts";
import {
  RetrieveAssignmentoverriddenDatesForClassicQuizzesParams,
  RetrieveAssignmentoverriddenDatesForNewQuizzesParams,
} from "../types/params.ts";

export class QuizAssignmentOverrides extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async retrieveAssignmentoverriddenDatesForClassicQuizzes(
    course_id: string,
    params?: RetrieveAssignmentoverriddenDatesForClassicQuizzesParams,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/assignment_overrides`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async retrieveAssignmentoverriddenDatesForNewQuizzes(
    course_id: string,
    params?: RetrieveAssignmentoverriddenDatesForNewQuizzesParams,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint =
      `/api/v1/courses/${course_id}/new_quizzes/assignment_overrides`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }
}
