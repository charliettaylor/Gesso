import { QuizSubmissionQuestion, Scope } from '../types/models';
import {
  AnsweringQuestionsParams,
  FlaggingQuestionParams,
  GetAllQuizSubmissionQuestionsParams,
  GetFormattedStudentNumericalAnswerParams,
  UnflaggingQuestionParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class QuizSubmissionQuestions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAllQuizSubmissionQuestions(
    quiz_submission_id: string,
    params: GetAllQuizSubmissionQuestionsParams,
  ): Promise<Scope[]> {
    const endpoint = `/quiz_submissions/${quiz_submission_id}/questions`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async answeringQuestions(
    quiz_submission_id: string,
    params: AnsweringQuestionsParams,
  ): Promise<QuizSubmissionQuestion[]> {
    const endpoint = `/quiz_submissions/${quiz_submission_id}/questions`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getFormattedStudentNumericalAnswer(
    quiz_submission_id: string,
    id: string,
    params: GetFormattedStudentNumericalAnswerParams,
  ): Promise<Scope> {
    const endpoint = `/quiz_submissions/${quiz_submission_id}/questions/${id}/formatted_answer`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async flaggingQuestion(
    quiz_submission_id: string,
    id: string,
    params: FlaggingQuestionParams,
  ): Promise<Scope> {
    const endpoint = `/quiz_submissions/${quiz_submission_id}/questions/${id}/flag`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async unflaggingQuestion(
    quiz_submission_id: string,
    id: string,
    params: UnflaggingQuestionParams,
  ): Promise<Scope> {
    const endpoint = `/quiz_submissions/${quiz_submission_id}/questions/${id}/unflag`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
