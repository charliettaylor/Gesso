import { ContentShare, Scope } from '../types/models';
import { AddUsersToContentShareParams, CreateContentShareParams, UpdateContentShareParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class ContentShares extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createContentShare(user_id: string, params: CreateContentShareParams): Promise<ContentShare> {
    const endpoint = `/users/${user_id}/content_shares`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listContentShares(user_id: string): Promise<ContentShare[]> {
    const endpoint = `/users/${user_id}/content_shares/sent`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUnreadSharesCount(user_id: string): Promise<Scope> {
    const endpoint = `/users/${user_id}/content_shares/unread_count`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getContentShare(user_id: string, id: string): Promise<ContentShare> {
    const endpoint = `/users/${user_id}/content_shares/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeContentShare(user_id: string, id: string): Promise<Scope> {
    const endpoint = `/users/${user_id}/content_shares/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addUsersToContentShare(
    user_id: string,
    id: string,
    params: AddUsersToContentShareParams,
  ): Promise<ContentShare> {
    const endpoint = `/users/${user_id}/content_shares/${id}/add_users`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateContentShare(
    user_id: string,
    id: string,
    params: UpdateContentShareParams,
  ): Promise<ContentShare> {
    const endpoint = `/users/${user_id}/content_shares/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
