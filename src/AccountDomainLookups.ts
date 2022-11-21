import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import {} from '../types/models';
import { SearchAccountDomainsParams } from '../types/params';

export class AccountDomainLookups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async searchAccountDomains(params: SearchAccountDomainsParams): Promise<any[]> {
    const endpoint = `/accounts/search`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
