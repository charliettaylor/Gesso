import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Conversation, Scope, Submission, Admin, Progress } from '../types/models';
import {
  EditConversationParams,
  BatchUpdateConversationsParams,
  GetSingleConversationParams,
  DeleteMessageParams,
  AddRecipientsParams,
  CreateConversationParams,
  ListConversationsParams,
  AddMessageParams,
} from '../types/params';

export class Conversations extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listConversations(params: ListConversationsParams): Promise<Conversation[]> {
    const endpoint = `/conversations`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createConversation(params: CreateConversationParams): Promise<Scope> {
    const endpoint = `/conversations`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getRunningBatches(): Promise<Conversation> {
    const endpoint = `/conversations/batches`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleConversation(id: string, params: GetSingleConversationParams): Promise<Submission> {
    const endpoint = `/conversations/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editConversation(id: string, params: EditConversationParams): Promise<Scope> {
    const endpoint = `/conversations/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markAllAsRead(): Promise<Scope> {
    const endpoint = `/conversations/mark_all_as_read`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteConversation(id: string): Promise<Scope> {
    const endpoint = `/conversations/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addRecipients(id: string, params: AddRecipientsParams): Promise<Admin> {
    const endpoint = `/conversations/${id}/add_recipients`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addMessage(id: string, params: AddMessageParams): Promise<Scope> {
    const endpoint = `/conversations/${id}/add_message`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteMessage(id: string, params: DeleteMessageParams): Promise<Scope> {
    const endpoint = `/conversations/${id}/remove_messages`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async batchUpdateConversations(params: BatchUpdateConversationsParams): Promise<Progress> {
    const endpoint = `/conversations`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async findRecipients(): Promise<Scope> {
    const endpoint = `/conversations/find_recipients`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async unreadCount(): Promise<Scope> {
    const endpoint = `/conversations/unread_count`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
