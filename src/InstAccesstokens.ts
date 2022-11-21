import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { InstAccessToken } from '../types/models';
import {} from '../types/params';

export class InstAccesstokens extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createInstaccessToken(): Promise<InstAccessToken> {
    const endpoint = `/inst_access_tokens`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
