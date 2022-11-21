import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Progress as ProgressModel } from '../types/models';

export class Progress extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async queryProgress(id: string): Promise<ProgressModel> {
    const endpoint = `/progress/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async cancelProgress(id: string): Promise<ProgressModel> {
    const endpoint = `/progress/${id}/cancel`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async queryLtiProgress(course_id: string, id: string): Promise<ProgressModel> {
    const endpoint = `/api/lti/courses/${course_id}/progress/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
