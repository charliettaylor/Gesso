import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { QueryByUserParams, QueryByAccountParams, QueryByLoginParams } from '../types/params';
  
export class AuthenticationsLog extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async queryByLogin(login_id: string, params?: QueryByLoginParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/audit/authentication/logins/${login_id}`;
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

  public async queryByAccount(account_id: string, params?: QueryByAccountParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/audit/authentication/accounts/${account_id}`;
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

  public async queryByUser(user_id: string, params?: QueryByUserParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/audit/authentication/users/${user_id}`;
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
