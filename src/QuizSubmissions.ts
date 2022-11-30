import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";
import {
  CompleteTheQuizSubmissionturnItInParams,
  CreateTheQuizSubmissionstartQuiztakingSessionParams,
  GetAllQuizSubmissionsParams,
  GetSingleQuizSubmissionParams,
  GetTheQuizSubmissionParams,
  UpdateStudentQuestionScoresCommentsParams,
} from "../types/params.ts";

export class QuizSubmissions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAllQuizSubmissions(
    course_id: string,
    quiz_id: string,
    params?: GetAllQuizSubmissionsParams,
    body?: unknown,
  ): Promise<Scope[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submissions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope[];
    }

    return Promise.reject(response.statusText);
  }

  public async getTheQuizSubmission(
    course_id: string,
    quiz_id: string,
    params?: GetTheQuizSubmissionParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submission`;
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

  public async getSingleQuizSubmission(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: GetSingleQuizSubmissionParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}`;
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

  public async createTheQuizSubmissionstartQuiztakingSession(
    course_id: string,
    quiz_id: string,
    params?: CreateTheQuizSubmissionstartQuiztakingSessionParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submissions`;
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

  public async updateStudentQuestionScoresComments(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: UpdateStudentQuestionScoresCommentsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async completeTheQuizSubmissionturnItIn(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: CompleteTheQuizSubmissionturnItInParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}/complete`;
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

  public async getCurrentQuizSubmissionTimes(
    course_id: string,
    quiz_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}/time`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
