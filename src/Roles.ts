import { Role } from '../types/models';
import {
  ActivateRoleParams,
  CreateNewRoleParams,
  DeactivateRoleParams,
  GetSingleRoleParams,
  ListRolesParams,
  UpdateRoleParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Roles extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listRoles(account_id: string, params: ListRolesParams): Promise<Role[]> {
    const endpoint = `/accounts/${account_id}/roles`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleRole(account_id: string, id: string, params: GetSingleRoleParams): Promise<Role> {
    const endpoint = `/accounts/${account_id}/roles/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createNewRole(account_id: string, params: CreateNewRoleParams): Promise<Role> {
    const endpoint = `/accounts/${account_id}/roles`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deactivateRole(account_id: string, id: string, params: DeactivateRoleParams): Promise<Role> {
    const endpoint = `/accounts/${account_id}/roles/${id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async activateRole(account_id: string, id: string, params: ActivateRoleParams): Promise<Role> {
    const endpoint = `/accounts/${account_id}/roles/${id}/activate`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateRole(account_id: string, id: string, params: UpdateRoleParams): Promise<Role> {
    const endpoint = `/accounts/${account_id}/roles/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
