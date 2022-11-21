import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import {} from '../types/params';

export class QuizIPFilters extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAvailableQuizIpFilters(course_id: string, quiz_id: string): Promise<Scope[]> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/ip_filters`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
