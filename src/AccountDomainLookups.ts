import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { SearchAccountDomainsParams } from '../types/params';
  
export class AccountDomainLookups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async searchAccountDomains(params?: SearchAccountDomainsParams, body?: any): Promise<any[]> {
    const endpoint = '/api/v1/accounts/search';
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
