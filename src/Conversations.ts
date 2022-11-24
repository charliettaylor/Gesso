import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import {
  AddMessageParams,
  AddRecipientsParams,
  BatchUpdateConversationsParams,
  CreateConversationParams,
  DeleteMessageParams,
  EditConversationParams,
  GetSingleConversationParams,
  ListConversationsParams,
} from "../types/params.ts";

export class Conversations extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listConversations(
    params?: ListConversationsParams,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint = "/api/v1/conversations";
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

  public async createConversation(
    params?: CreateConversationParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = "/api/v1/conversations";
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

  public async getRunningBatches(body?: unknown): Promise<unknown> {
    const endpoint = "/api/v1/conversations/batches";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleConversation(
    id: string,
    params?: GetSingleConversationParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/conversations/${id}`;
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

  public async editConversation(
    id: string,
    params?: EditConversationParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/conversations/${id}`;
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

  public async markAllAsRead(body?: unknown): Promise<unknown> {
    const endpoint = "/api/v1/conversations/mark_all_as_read";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteConversation(id: string, body?: unknown): Promise<unknown> {
    const endpoint = `/api/v1/conversations/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addRecipients(
    id: string,
    params?: AddRecipientsParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/conversations/${id}/add_recipients`;
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

  public async addMessage(
    id: string,
    params?: AddMessageParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/conversations/${id}/add_message`;
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

  public async deleteMessage(
    id: string,
    params?: DeleteMessageParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/conversations/${id}/remove_messages`;
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

  public async batchUpdateConversations(
    params?: BatchUpdateConversationsParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = "/api/v1/conversations";
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

  public async findRecipients(body?: unknown): Promise<unknown> {
    const endpoint = "/api/v1/conversations/find_recipients";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async unreadCount(body?: unknown): Promise<unknown> {
    const endpoint = "/api/v1/conversations/unread_count";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
