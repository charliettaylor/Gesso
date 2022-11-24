import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Account } from '../types/models';

  
export class AccountsLTI extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAccount(account_id: string, body?: any): Promise<Account> {
    const endpoint = `/api/v1/api/lti/accounts/${account_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
