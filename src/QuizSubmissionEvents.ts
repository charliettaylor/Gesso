import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";
import {
  RetrieveCapturedEventsParams,
  SubmitCapturedEventsParams,
} from "../types/params.ts";

export class QuizSubmissionEvents extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async submitCapturedEvents(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: SubmitCapturedEventsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}/events`;
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

  public async retrieveCapturedEvents(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: RetrieveCapturedEventsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}/events`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
