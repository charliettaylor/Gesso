import { Scope } from '../types/models';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Services extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getKalturaConfig(): Promise<Scope> {
    const endpoint = `/services/kaltura`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async startKalturaSession(): Promise<Scope> {
    const endpoint = `/services/kaltura_session`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
