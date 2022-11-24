import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Account } from '../types/models';
import { InviteOthersToGroupParams, ListGroupMembershipsParams, CreateMembershipParams, PermissionsParams, UpdateMembershipParams, GetSingleGroupParams, PreviewProcessedHtmlParams, EditGroupParams, ListGroupsParams, ListTheGroupsAvailableInContextParams, ListGroupsUsersParams, CreateGroupParams } from '../types/params';
  
export class Groups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGroups(params?: ListGroupsParams, body?: any): Promise<any[]> {
    const endpoint = '/api/v1/users/self/groups';
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

  public async listTheGroupsAvailableInContext(account_id: string, params?: ListTheGroupsAvailableInContextParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/accounts/${account_id}/groups`;
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

  public async getSingleGroup(group_id: string, params?: GetSingleGroupParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}`;
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

  public async createGroup(params?: CreateGroupParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/groups';
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

  public async editGroup(group_id: string, params?: EditGroupParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}`;
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

  public async deleteGroup(group_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async inviteOthersToGroup(group_id: string, params?: InviteOthersToGroupParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}/invite`;
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

  public async listGroupsUsers(group_id: string, params?: ListGroupsUsersParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/groups/${group_id}/users`;
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

  public async uploadFile(group_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}/files`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async previewProcessedHtml(group_id: string, params?: PreviewProcessedHtmlParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}/preview_html`;
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

  public async groupActivityStream(group_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}/activity_stream`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async groupActivityStreamSummary(group_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}/activity_stream/summary`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async permissions(group_id: string, params?: PermissionsParams, body?: any): Promise<Account> {
    const endpoint = `/api/v1/groups/${group_id}/permissions`;
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

  public async listGroupMemberships(group_id: string, params?: ListGroupMembershipsParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/groups/${group_id}/memberships`;
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

  public async getSingleGroupMembership(group_id: string, membership_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}/memberships/${membership_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createMembership(group_id: string, params?: CreateMembershipParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}/memberships`;
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

  public async updateMembership(group_id: string, membership_id: string, params?: UpdateMembershipParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}/memberships/${membership_id}`;
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

  public async leaveGroup(group_id: string, membership_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}/memberships/${membership_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
