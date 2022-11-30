import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { QuizQuestion, Scope } from "../types/models.ts";
import {
  CreateSingleQuizQuestionParams,
  DeleteQuizQuestionParams,
  GetSingleQuizQuestionParams,
  ListQuestionsInQuizOrSubmissionParams,
  UpdateAnExistingQuizQuestionParams,
} from "../types/params.ts";

export class QuizQuestions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listQuestionsInQuizOrSubmission(
    course_id: string,
    quiz_id: string,
    params?: ListQuestionsInQuizOrSubmissionParams,
    body?: unknown,
  ): Promise<QuizQuestion[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/questions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as QuizQuestion[];
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleQuizQuestion(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: GetSingleQuizQuestionParams,
    body?: unknown,
  ): Promise<QuizQuestion> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as QuizQuestion;
    }

    return Promise.reject(response.statusText);
  }

  public async createSingleQuizQuestion(
    course_id: string,
    quiz_id: string,
    params?: CreateSingleQuizQuestionParams,
    body?: unknown,
  ): Promise<QuizQuestion> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/questions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as QuizQuestion;
    }

    return Promise.reject(response.statusText);
  }

  public async updateAnExistingQuizQuestion(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: UpdateAnExistingQuizQuestionParams,
    body?: unknown,
  ): Promise<QuizQuestion> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as QuizQuestion;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteQuizQuestion(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: DeleteQuizQuestionParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
