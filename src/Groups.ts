import { Account, Group, Scope, User } from '../types/models';
import {
  CreateGroupParams,
  CreateMembershipParams,
  EditGroupParams,
  GetSingleGroupParams,
  InviteOthersToGroupParams,
  ListGroupMembershipsParams,
  ListGroupsParams,
  ListGroupsUsersParams,
  ListTheGroupsAvailableInContextParams,
  PermissionsParams,
  PreviewProcessedHtmlParams,
  UpdateMembershipParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Groups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGroups(params: ListGroupsParams): Promise<Group[]> {
    const endpoint = `/users/self/groups`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listTheGroupsAvailableInContext(
    account_id: string,
    params: ListTheGroupsAvailableInContextParams,
  ): Promise<Group[]> {
    const endpoint = `/accounts/${account_id}/groups`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleGroup(group_id: string, params: GetSingleGroupParams): Promise<Group> {
    const endpoint = `/groups/${group_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createGroup(params: CreateGroupParams): Promise<Group> {
    const endpoint = `/groups`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editGroup(group_id: string, params: EditGroupParams): Promise<Group> {
    const endpoint = `/groups/${group_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteGroup(group_id: string): Promise<Group> {
    const endpoint = `/groups/${group_id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async inviteOthersToGroup(group_id: string, params: InviteOthersToGroupParams): Promise<Scope> {
    const endpoint = `/groups/${group_id}/invite`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listGroupsUsers(group_id: string, params: ListGroupsUsersParams): Promise<User[]> {
    const endpoint = `/groups/${group_id}/users`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async uploadFile(group_id: string): Promise<Scope> {
    const endpoint = `/groups/${group_id}/files`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async previewProcessedHtml(group_id: string, params: PreviewProcessedHtmlParams): Promise<Scope> {
    const endpoint = `/groups/${group_id}/preview_html`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async groupActivityStream(group_id: string): Promise<any> {
    const endpoint = `/groups/${group_id}/activity_stream`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async groupActivityStreamSummary(group_id: string): Promise<any> {
    const endpoint = `/groups/${group_id}/activity_stream/summary`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async permissions(group_id: string, params: PermissionsParams): Promise<Account> {
    const endpoint = `/groups/${group_id}/permissions`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listGroupMemberships(group_id: string, params: ListGroupMembershipsParams): Promise<Group[]> {
    const endpoint = `/groups/${group_id}/memberships`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleGroupMembership(group_id: string, membership_id: string): Promise<Group> {
    const endpoint = `/groups/${group_id}/memberships/${membership_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createMembership(group_id: string, params: CreateMembershipParams): Promise<Group> {
    const endpoint = `/groups/${group_id}/memberships`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateMembership(
    group_id: string,
    membership_id: string,
    params: UpdateMembershipParams,
  ): Promise<Group> {
    const endpoint = `/groups/${group_id}/memberships/${membership_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async leaveGroup(group_id: string, membership_id: string): Promise<Scope> {
    const endpoint = `/groups/${group_id}/memberships/${membership_id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
