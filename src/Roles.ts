import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Role } from "../types/models.ts";
import {
  ActivateRoleParams,
  CreateNewRoleParams,
  DeactivateRoleParams,
  GetSingleRoleParams,
  ListRolesParams,
  UpdateRoleParams,
} from "../types/params.ts";

export class Roles extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listRoles(
    account_id: string,
    params?: ListRolesParams,
    body?: unknown,
  ): Promise<Role[]> {
    const endpoint = `/api/v1/accounts/${account_id}/roles`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Role[];
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleRole(
    account_id: string,
    id: string,
    params?: GetSingleRoleParams,
    body?: unknown,
  ): Promise<Role> {
    const endpoint = `/api/v1/accounts/${account_id}/roles/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Role;
    }

    return Promise.reject(response.statusText);
  }

  public async createNewRole(
    account_id: string,
    params?: CreateNewRoleParams,
    body?: unknown,
  ): Promise<Role> {
    const endpoint = `/api/v1/accounts/${account_id}/roles`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Role;
    }

    return Promise.reject(response.statusText);
  }

  public async deactivateRole(
    account_id: string,
    id: string,
    params?: DeactivateRoleParams,
    body?: unknown,
  ): Promise<Role> {
    const endpoint = `/api/v1/accounts/${account_id}/roles/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Role;
    }

    return Promise.reject(response.statusText);
  }

  public async activateRole(
    account_id: string,
    id: string,
    params?: ActivateRoleParams,
    body?: unknown,
  ): Promise<Role> {
    const endpoint = `/api/v1/accounts/${account_id}/roles/${id}/activate`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Role;
    }

    return Promise.reject(response.statusText);
  }

  public async updateRole(
    account_id: string,
    id: string,
    params?: UpdateRoleParams,
    body?: unknown,
  ): Promise<Role> {
    const endpoint = `/api/v1/accounts/${account_id}/roles/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Role;
    }

    return Promise.reject(response.statusText);
  }
}
