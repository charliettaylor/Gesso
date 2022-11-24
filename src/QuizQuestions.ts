import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { CreateSingleQuizQuestionParams, ListQuestionsInQuizOrSubmissionParams, UpdateAnExistingQuizQuestionParams, GetSingleQuizQuestionParams, DeleteQuizQuestionParams } from '../types/params';
  
export class QuizQuestions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listQuestionsInQuizOrSubmission(course_id: string, quiz_id: string, params?: ListQuestionsInQuizOrSubmissionParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/questions`;
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

  public async getSingleQuizQuestion(course_id: string, quiz_id: string, id: string, params?: GetSingleQuizQuestionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`;
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

  public async createSingleQuizQuestion(course_id: string, quiz_id: string, params?: CreateSingleQuizQuestionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/questions`;
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

  public async updateAnExistingQuizQuestion(course_id: string, quiz_id: string, id: string, params?: UpdateAnExistingQuizQuestionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`;
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

  public async deleteQuizQuestion(course_id: string, quiz_id: string, id: string, params?: DeleteQuizQuestionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
