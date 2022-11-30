import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Group, Scope } from "../types/models.ts";
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
  ): Promise<Group> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async createQuestionGroup(
    course_id: string,
    quiz_id: string,
    params?: CreateQuestionGroupParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/groups`;
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

  public async updateQuestionGroup(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: UpdateQuestionGroupParams,
    body?: unknown,
  ): Promise<Scope> {
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
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteQuestionGroup(
    course_id: string,
    quiz_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${quiz_id}/groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async reorderQuestionGroups(
    course_id: string,
    quiz_id: string,
    id: string,
    params?: ReorderQuestionGroupsParams,
    body?: unknown,
  ): Promise<Scope> {
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
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
