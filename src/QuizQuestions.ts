import { QuizQuestion, Scope } from '../types/models';
import {
  CreateSingleQuizQuestionParams,
  DeleteQuizQuestionParams,
  GetSingleQuizQuestionParams,
  ListQuestionsInQuizOrSubmissionParams,
  UpdateAnExistingQuizQuestionParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class QuizQuestions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listQuestionsInQuizOrSubmission(
    course_id: string,
    quiz_id: string,
    params: ListQuestionsInQuizOrSubmissionParams,
  ): Promise<QuizQuestion[]> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/questions`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleQuizQuestion(
    course_id: string,
    quiz_id: string,
    id: string,
    params: GetSingleQuizQuestionParams,
  ): Promise<QuizQuestion> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSingleQuizQuestion(
    course_id: string,
    quiz_id: string,
    params: CreateSingleQuizQuestionParams,
  ): Promise<QuizQuestion> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/questions`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAnExistingQuizQuestion(
    course_id: string,
    quiz_id: string,
    id: string,
    params: UpdateAnExistingQuizQuestionParams,
  ): Promise<QuizQuestion> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteQuizQuestion(
    course_id: string,
    quiz_id: string,
    id: string,
    params: DeleteQuizQuestionParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
