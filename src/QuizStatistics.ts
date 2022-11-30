import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";
import { FetchingTheLatestQuizStatisticsParams } from "../types/params.ts";

export class QuizStatistics extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async fetchingTheLatestQuizStatistics(
    course_id: string,
    quiz_id: string,
    params?: FetchingTheLatestQuizStatisticsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/statistics`;
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
