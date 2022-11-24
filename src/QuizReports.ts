import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Report } from '../types/models';
import { GetQuizReportParams, CreateQuizReportParams, RetrieveAllQuizReportsParams } from '../types/params';
  
export class QuizReports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async retrieveAllQuizReports(course_id: string, quiz_id: string, params?: RetrieveAllQuizReportsParams, body?: any): Promise<Report[]> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/reports`;
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

  public async createQuizReport(course_id: string, quiz_id: string, params?: CreateQuizReportParams, body?: any): Promise<Report> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/reports`;
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

  public async getQuizReport(course_id: string, quiz_id: string, id: string, params?: GetQuizReportParams, body?: any): Promise<Report> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/reports/${id}`;
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

  public async abortTheGenerationOfReportOrRemovePreviouslyGeneratedOne(course_id: string, quiz_id: string, id: string, body?: any): Promise<Report> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/reports/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
