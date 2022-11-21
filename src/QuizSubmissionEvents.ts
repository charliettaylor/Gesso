import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import { SubmitCapturedEventsParams, RetrieveCapturedEventsParams } from '../types/params';

export class QuizSubmissionEvents extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async submitCapturedEvents(
    course_id: string,
    quiz_id: string,
    id: string,
    params: SubmitCapturedEventsParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}/events`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async retrieveCapturedEvents(
    course_id: string,
    quiz_id: string,
    id: string,
    params: RetrieveCapturedEventsParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/submissions/${id}/events`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
