import { Account } from '../types/models';
import {} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class AccountsLTI extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAccount(account_id: string): Promise<Account> {
    const endpoint = `/api/lti/accounts/${account_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
