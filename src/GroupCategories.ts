import { Group, GroupCategory, Progress, Scope, User } from '../types/models';
import {
  AssignUnassignedMembersParams,
  CreateGroupCategoryParams,
  ImportCategoryGroupsParams,
  ListUsersInGroupCategoryParams,
  UpdateGroupCategoryParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class GroupCategories extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGroupCategoriesForContext(account_id: string): Promise<GroupCategory[]> {
    const endpoint = `/accounts/${account_id}/group_categories`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleGroupCategory(group_category_id: string): Promise<GroupCategory> {
    const endpoint = `/group_categories/${group_category_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createGroupCategory(account_id: string, params: CreateGroupCategoryParams): Promise<GroupCategory> {
    const endpoint = `/accounts/${account_id}/group_categories`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async importCategoryGroups(group_category_id: string, params: ImportCategoryGroupsParams): Promise<Progress> {
    const endpoint = `/group_categories/${group_category_id}/import`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateGroupCategory(
    group_category_id: string,
    params: UpdateGroupCategoryParams,
  ): Promise<GroupCategory> {
    const endpoint = `/group_categories/${group_category_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteGroupCategory(group_category_id: string): Promise<Scope> {
    const endpoint = `/group_categories/${group_category_id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listGroupsInGroupCategory(group_category_id: string): Promise<Group[]> {
    const endpoint = `/group_categories/${group_category_id}/groups`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async exportGroupsInUsersInCategory(group_category_id: string): Promise<any> {
    const endpoint = `/group_categories/${group_category_id}/export`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listUsersInGroupCategory(
    group_category_id: string,
    params: ListUsersInGroupCategoryParams,
  ): Promise<User[]> {
    const endpoint = `/group_categories/${group_category_id}/users`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async assignUnassignedMembers(
    group_category_id: string,
    params: AssignUnassignedMembersParams,
  ): Promise<Scope> {
    const endpoint = `/group_categories/${group_category_id}/assign_unassigned_members`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
