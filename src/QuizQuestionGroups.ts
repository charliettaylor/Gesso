import { Group, Scope } from '../types/models';
import { CreateQuestionGroupParams, ReorderQuestionGroupsParams, UpdateQuestionGroupParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class QuizQuestionGroups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSingleQuizGroup(course_id: string, quiz_id: string, id: string): Promise<Group> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/groups/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createQuestionGroup(
    course_id: string,
    quiz_id: string,
    params: CreateQuestionGroupParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/groups`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateQuestionGroup(
    course_id: string,
    quiz_id: string,
    id: string,
    params: UpdateQuestionGroupParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/groups/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteQuestionGroup(course_id: string, quiz_id: string, id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/groups/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async reorderQuestionGroups(
    course_id: string,
    quiz_id: string,
    id: string,
    params: ReorderQuestionGroupsParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/groups/${id}/reorder`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
