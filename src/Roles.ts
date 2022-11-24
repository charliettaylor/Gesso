import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { ListRolesParams, UpdateRoleParams, CreateNewRoleParams, ActivateRoleParams, DeactivateRoleParams, GetSingleRoleParams } from '../types/params';
  
export class Roles extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listRoles(account_id: string, params?: ListRolesParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/accounts/${account_id}/roles`;
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

  public async getSingleRole(account_id: string, id: string, params?: GetSingleRoleParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/roles/${id}`;
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

  public async createNewRole(account_id: string, params?: CreateNewRoleParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/roles`;
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

  public async deactivateRole(account_id: string, id: string, params?: DeactivateRoleParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/roles/${id}`;
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

  public async activateRole(account_id: string, id: string, params?: ActivateRoleParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/roles/${id}/activate`;
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

  public async updateRole(account_id: string, id: string, params?: UpdateRoleParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/roles/${id}`;
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

}
