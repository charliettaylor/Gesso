import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { SubmitCapturedEventsParams, RetrieveCapturedEventsParams } from '../types/params';
  
export class QuizSubmissionEvents extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async submitCapturedEvents(course_id: string, quiz_id: string, id: string, params?: SubmitCapturedEventsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}/events`;
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

  public async retrieveCapturedEvents(course_id: string, quiz_id: string, id: string, params?: RetrieveCapturedEventsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}/events`;
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

}
