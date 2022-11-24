import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { ListConferencesForTheCurrentUserParams } from '../types/params';
  
export class Conferences extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listConferences(course_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/conferences`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listConferencesForTheCurrentUser(params?: ListConferencesForTheCurrentUserParams, body?: any): Promise<any[]> {
    const endpoint = '/api/v1/conferences';
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
