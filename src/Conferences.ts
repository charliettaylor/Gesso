import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Conference } from '../types/models';
import { ListConferencesForTheCurrentUserParams } from '../types/params';

export class Conferences extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listConferences(course_id: string): Promise<Conference[]> {
    const endpoint = `/courses/${course_id}/conferences`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listConferencesForTheCurrentUser(params: ListConferencesForTheCurrentUserParams): Promise<Conference[]> {
    const endpoint = `/conferences`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
