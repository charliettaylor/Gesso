import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Report } from '../types/models';
import { GetQuizReportParams, CreateQuizReportParams, RetrieveAllQuizReportsParams } from '../types/params';

export class QuizReports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async retrieveAllQuizReports(
    course_id: string,
    quiz_id: string,
    params: RetrieveAllQuizReportsParams,
  ): Promise<Report[]> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/reports`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createQuizReport(course_id: string, quiz_id: string, params: CreateQuizReportParams): Promise<Report> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/reports`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getQuizReport(
    course_id: string,
    quiz_id: string,
    id: string,
    params: GetQuizReportParams,
  ): Promise<Report> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/reports/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async abortTheGenerationOfReportOrRemovePreviouslyGeneratedOne(
    course_id: string,
    quiz_id: string,
    id: string,
  ): Promise<Report> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/reports/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
