import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { RemoveAccountAdminParams, ListAccountAdminsParams, MakeAnAccountAdminParams } from '../types/params';
  
export class Admins extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async makeAnAccountAdmin(account_id: string, params?: MakeAnAccountAdminParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/admins`;
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

  public async removeAccountAdmin(account_id: string, user_id: string, params?: RemoveAccountAdminParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/admins/${user_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAccountAdmins(account_id: string, params?: ListAccountAdminsParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/accounts/${account_id}/admins`;
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
