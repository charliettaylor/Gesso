import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { QuizSubmissionQuestion, Scope } from "../types/models.ts";
import {
  AnsweringQuestionsParams,
  FlaggingQuestionParams,
  GetAllQuizSubmissionQuestionsParams,
  GetFormattedStudentNumericalAnswerParams,
  UnflaggingQuestionParams,
} from "../types/params.ts";

export class QuizSubmissionQuestions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAllQuizSubmissionQuestions(
    quiz_submission_id: string,
    params?: GetAllQuizSubmissionQuestionsParams,
    body?: unknown,
  ): Promise<Scope[]> {
    const endpoint = `/api/v1/quiz_submissions/${quiz_submission_id}/questions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async answeringQuestions(
    quiz_submission_id: string,
    params?: AnsweringQuestionsParams,
    body?: unknown,
  ): Promise<QuizSubmissionQuestion[]> {
    const endpoint = `/api/v1/quiz_submissions/${quiz_submission_id}/questions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getFormattedStudentNumericalAnswer(
    quiz_submission_id: string,
    id: string,
    params?: GetFormattedStudentNumericalAnswerParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/quiz_submissions/${quiz_submission_id}/questions/${id}/formatted_answer`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async flaggingQuestion(
    quiz_submission_id: string,
    id: string,
    params?: FlaggingQuestionParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/quiz_submissions/${quiz_submission_id}/questions/${id}/flag`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async unflaggingQuestion(
    quiz_submission_id: string,
    id: string,
    params?: UnflaggingQuestionParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/quiz_submissions/${quiz_submission_id}/questions/${id}/unflag`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
