import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { EditUserLoginParams, CreateUserLoginParams } from '../types/params';
  
export class Logins extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listUserLogins(account_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/logins`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async kickoffPasswordRecoveryFlow(body?: any): Promise<any> {
    const endpoint = '/api/v1/users/reset_password';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createUserLogin(account_id: string, params?: CreateUserLoginParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/logins`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editUserLogin(account_id: string, id: string, params?: EditUserLoginParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/logins/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteUserLogin(user_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/logins/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
