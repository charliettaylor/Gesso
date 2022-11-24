import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { ListOfCommmessagesForUserParams } from '../types/params';
  
export class CommMessages extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listOfCommmessagesForUser(params?: ListOfCommmessagesForUserParams, body?: any): Promise<any[]> {
    const endpoint = '/api/v1/comm_messages';
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
