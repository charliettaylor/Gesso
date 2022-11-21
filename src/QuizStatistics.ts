import { Scope } from '../types/models';
import { FetchingTheLatestQuizStatisticsParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class QuizStatistics extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async fetchingTheLatestQuizStatistics(
    course_id: string,
    quiz_id: string,
    params: FetchingTheLatestQuizStatisticsParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/quizzes/${quiz_id}/statistics`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
