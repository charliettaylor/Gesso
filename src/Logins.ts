import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import { CreateUserLoginParams, EditUserLoginParams } from '../types/params';

export class Logins extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listUserLogins(account_id: string): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/logins`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async kickoffPasswordRecoveryFlow(): Promise<Scope> {
    const endpoint = `/users/reset_password`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createUserLogin(account_id: string, params: CreateUserLoginParams): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/logins`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editUserLogin(account_id: string, id: string, params: EditUserLoginParams): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/logins/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteUserLogin(user_id: string, id: string): Promise<Scope> {
    const endpoint = `/users/${user_id}/logins/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
