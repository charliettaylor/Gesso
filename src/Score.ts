import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Grade } from '../types/models';
import { CreateScoreParams } from '../types/params';

export class Score extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createScore(course_id: string, line_item_id: string, params: CreateScoreParams): Promise<Grade> {
    const endpoint = `/api/lti/courses/${course_id}/line_items/${line_item_id}/scores`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
