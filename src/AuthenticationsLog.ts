import { Scope } from '../types/models';
import { QueryByAccountParams, QueryByLoginParams, QueryByUserParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class AuthenticationsLog extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async queryByLogin(login_id: string, params: QueryByLoginParams): Promise<Scope> {
    const endpoint = `/audit/authentication/logins/${login_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async queryByAccount(account_id: string, params: QueryByAccountParams): Promise<Scope> {
    const endpoint = `/audit/authentication/accounts/${account_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async queryByUser(user_id: string, params: QueryByUserParams): Promise<Scope> {
    const endpoint = `/audit/authentication/users/${user_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
