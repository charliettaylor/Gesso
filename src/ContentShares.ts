import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import {
  AddUsersToContentShareParams,
  CreateContentShareParams,
  UpdateContentShareParams,
} from "../types/params.ts";

export class ContentShares extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createContentShare(
    user_id: string,
    params?: CreateContentShareParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/users/${user_id}/content_shares`;
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

  public async listContentShares(user_id: string, body?: unknown): Promise<unknown[]> {
    const endpoint = `/api/v1/users/${user_id}/content_shares/sent`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUnreadSharesCount(user_id: string, body?: unknown): Promise<unknown> {
    const endpoint = `/api/v1/users/${user_id}/content_shares/unread_count`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getContentShare(
    user_id: string,
    id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/users/${user_id}/content_shares/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeContentShare(
    user_id: string,
    id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/users/${user_id}/content_shares/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addUsersToContentShare(
    user_id: string,
    id: string,
    params?: AddUsersToContentShareParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/users/${user_id}/content_shares/${id}/add_users`;
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

  public async updateContentShare(
    user_id: string,
    id: string,
    params?: UpdateContentShareParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/users/${user_id}/content_shares/${id}`;
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
