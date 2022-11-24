import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import {
  AssignUnassignedMembersParams,
  CreateGroupCategoryParams,
  ImportCategoryGroupsParams,
  ListUsersInGroupCategoryParams,
  UpdateGroupCategoryParams,
} from "../types/params.ts";

export class GroupCategories extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGroupCategoriesForContext(
    account_id: string,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint = `/api/v1/accounts/${account_id}/group_categories`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleGroupCategory(
    group_category_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/group_categories/${group_category_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createGroupCategory(
    account_id: string,
    params?: CreateGroupCategoryParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/accounts/${account_id}/group_categories`;
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

  public async importCategoryGroups(
    group_category_id: string,
    params?: ImportCategoryGroupsParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/group_categories/${group_category_id}/import`;
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

  public async updateGroupCategory(
    group_category_id: string,
    params?: UpdateGroupCategoryParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/group_categories/${group_category_id}`;
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

  public async deleteGroupCategory(
    group_category_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/group_categories/${group_category_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listGroupsInGroupCategory(
    group_category_id: string,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint = `/api/v1/group_categories/${group_category_id}/groups`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async exportGroupsInUsersInCategory(
    group_category_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/group_categories/${group_category_id}/export`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listUsersInGroupCategory(
    group_category_id: string,
    params?: ListUsersInGroupCategoryParams,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint = `/api/v1/group_categories/${group_category_id}/users`;
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

  public async assignUnassignedMembers(
    group_category_id: string,
    params?: AssignUnassignedMembersParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/group_categories/${group_category_id}/assign_unassigned_members`;
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
}
