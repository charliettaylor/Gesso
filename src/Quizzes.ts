import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Quiz, Scope } from '../types/models';
import {
  ReorderQuizItemsParams,
  ValidateQuizAccessCodeParams,
  CreateQuizParams,
  EditQuizParams,
  ListQuizzesInCourseParams,
} from '../types/params';

export class Quizzes extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listQuizzesInCourse(course_id: string, params: ListQuizzesInCourseParams): Promise<Quiz[]> {
    const endpoint = `/courses/${course_id}/quizzes`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleQuiz(course_id: string, id: string): Promise<Quiz> {
    const endpoint = `/courses/${course_id}/quizzes/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createQuiz(course_id: string, params: CreateQuizParams): Promise<Quiz> {
    const endpoint = `/courses/${course_id}/quizzes`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editQuiz(course_id: string, id: string, params: EditQuizParams): Promise<Quiz> {
    const endpoint = `/courses/${course_id}/quizzes/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteQuiz(course_id: string, id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async reorderQuizItems(course_id: string, id: string, params: ReorderQuizItemsParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${id}/reorder`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async validateQuizAccessCode(
    course_id: string,
    id: string,
    params: ValidateQuizAccessCodeParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${id}/validate_access_code`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
