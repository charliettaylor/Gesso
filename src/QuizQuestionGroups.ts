import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import {
  CreateQuestionGroupParams,
  ReorderQuestionGroupsParams,
  UpdateQuestionGroupParams,
} from "../types/params.ts";

export class QuizQuestionGroups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSingleQuizGroup(
    course_id: string,
    quiz_id: string,
    id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createQuestionGroup(
    course_id: string,
    quiz_id: string,
    params?: CreateQuestionGroupParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/groups`;
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

  public async updateQuestionGroup(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: UpdateQuestionGroupParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/groups/${id}`;
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

  public async deleteQuestionGroup(
    course_id: string,
    quiz_id: string,
    id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async reorderQuestionGroups(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: ReorderQuestionGroupsParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/groups/${id}/reorder`;
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
}
