import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Result as ResultModel } from '../types/models';

export class Result extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async showCollectionOfResults(course_id: string, line_item_id: string): Promise<ResultModel> {
    const endpoint = `/api/lti/courses/${course_id}/line_items/${line_item_id}/results`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showResult(course_id: string, line_item_id: string, id: string): Promise<ResultModel> {
    const endpoint = `/api/lti/courses/${course_id}/line_items/${line_item_id}/results/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
