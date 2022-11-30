import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Account, Group, Scope, User } from "../types/models.ts";
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
} from "../types/params.ts";

export class Groups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGroups(
    params?: ListGroupsParams,
    body?: unknown,
  ): Promise<Group[]> {
    const endpoint = "/api/v1/users/self/groups";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group[];
    }

    return Promise.reject(response.statusText);
  }

  public async listTheGroupsAvailableInContext(
    account_id: string,
    params?: ListTheGroupsAvailableInContextParams,
    body?: unknown,
  ): Promise<Group[]> {
    const endpoint = `/api/v1/accounts/${account_id}/groups`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group[];
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleGroup(
    group_id: string,
    params?: GetSingleGroupParams,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = `/api/v1/groups/${group_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async createGroup(
    params?: CreateGroupParams,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = "/api/v1/groups";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async editGroup(
    group_id: string,
    params?: EditGroupParams,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = `/api/v1/groups/${group_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteGroup(group_id: string, body?: unknown): Promise<Group> {
    const endpoint = `/api/v1/groups/${group_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async inviteOthersToGroup(
    group_id: string,
    params?: InviteOthersToGroupParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/groups/${group_id}/invite`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async listGroupsUsers(
    group_id: string,
    params?: ListGroupsUsersParams,
    body?: unknown,
  ): Promise<User[]> {
    const endpoint = `/api/v1/groups/${group_id}/users`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as User[];
    }

    return Promise.reject(response.statusText);
  }

  public async uploadFile(group_id: string, body?: unknown): Promise<Scope> {
    const endpoint = `/api/v1/groups/${group_id}/files`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async previewProcessedHtml(
    group_id: string,
    params?: PreviewProcessedHtmlParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/groups/${group_id}/preview_html`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async groupActivityStream(
    group_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/groups/${group_id}/activity_stream`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async groupActivityStreamSummary(
    group_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/groups/${group_id}/activity_stream/summary`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async permissions(
    group_id: string,
    params?: PermissionsParams,
    body?: unknown,
  ): Promise<Account> {
    const endpoint = `/api/v1/groups/${group_id}/permissions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Account;
    }

    return Promise.reject(response.statusText);
  }

  public async listGroupMemberships(
    group_id: string,
    params?: ListGroupMembershipsParams,
    body?: unknown,
  ): Promise<Group[]> {
    const endpoint = `/api/v1/groups/${group_id}/memberships`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group[];
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleGroupMembership(
    group_id: string,
    membership_id: string,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = `/api/v1/groups/${group_id}/memberships/${membership_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async createMembership(
    group_id: string,
    params?: CreateMembershipParams,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = `/api/v1/groups/${group_id}/memberships`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async updateMembership(
    group_id: string,
    membership_id: string,
    params?: UpdateMembershipParams,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = `/api/v1/groups/${group_id}/memberships/${membership_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async leaveGroup(
    group_id: string,
    membership_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/groups/${group_id}/memberships/${membership_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
