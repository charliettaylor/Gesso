import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";
import { SetExtensionsForStudentQuizSubmissionsParams } from "../types/params.ts";

export class QuizExtensions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async setExtensionsForStudentQuizSubmissions(
    course_id: string,
    quiz_id: string,
    params?: SetExtensionsForStudentQuizSubmissionsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/extensions`;
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

    return Promise.reject(response);
  }
}
