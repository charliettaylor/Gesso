import { Scope } from '../types/models';
import {
  CompleteTheQuizSubmissionturnItInParams,
  CreateTheQuizSubmissionstartQuiztakingSessionParams,
  GetAllQuizSubmissionsParams,
  GetSingleQuizSubmissionParams,
  GetTheQuizSubmissionParams,
  UpdateStudentQuestionScoresCommentsParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class QuizSubmissions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAllQuizSubmissions(
    course_id: string,
    quiz_id: string,
    params: GetAllQuizSubmissionsParams,
  ): Promise<Scope[]> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/submissions`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheQuizSubmission(
    course_id: string,
    quiz_id: string,
    params: GetTheQuizSubmissionParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/submission`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleQuizSubmission(
    course_id: string,
    quiz_id: string,
    id: string,
    params: GetSingleQuizSubmissionParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createTheQuizSubmissionstartQuiztakingSession(
    course_id: string,
    quiz_id: string,
    params: CreateTheQuizSubmissionstartQuiztakingSessionParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/submissions`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateStudentQuestionScoresComments(
    course_id: string,
    quiz_id: string,
    id: string,
    params: UpdateStudentQuestionScoresCommentsParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async completeTheQuizSubmissionturnItIn(
    course_id: string,
    quiz_id: string,
    id: string,
    params: CompleteTheQuizSubmissionturnItInParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}/complete`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCurrentQuizSubmissionTimes(course_id: string, quiz_id: string, id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}/time`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
