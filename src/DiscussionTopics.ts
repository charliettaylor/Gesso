import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { ReorderPinnedTopicsParams, ListEntriesParams, UpdateAnEntryParams, UpdateTopicParams, MarkAllEntriesAsUnreadParams, MarkAllEntriesAsReadParams, PostReplyParams, PostAnEntryParams, MarkEntryAsReadParams, RateEntryParams, MarkEntryAsUnreadParams, CreateNewDiscussionTopicParams, ListDiscussionTopicsParams, GetSingleTopicParams } from '../types/params';
  
export class DiscussionTopics extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listDiscussionTopics(course_id: string, params?: ListDiscussionTopicsParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics`;
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

  public async createNewDiscussionTopic(course_id: string, params?: CreateNewDiscussionTopicParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics`;
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

  public async updateTopic(course_id: string, topic_id: string, params?: UpdateTopicParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}`;
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

  public async deleteTopic(course_id: string, topic_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async reorderPinnedTopics(course_id: string, params?: ReorderPinnedTopicsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/reorder`;
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

  public async updateAnEntry(course_id: string, topic_id: string, id: string, params?: UpdateAnEntryParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/entries/${id}`;
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

  public async deleteAnEntry(course_id: string, topic_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/entries/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleTopic(course_id: string, topic_id: string, params?: GetSingleTopicParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}`;
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

  public async getTheFullTopic(course_id: string, topic_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/view`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async postAnEntry(course_id: string, topic_id: string, params?: PostAnEntryParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/entries`;
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

  public async duplicateDiscussionTopic(course_id: string, topic_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/duplicate`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listTopicEntries(course_id: string, topic_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/entries`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async postReply(course_id: string, topic_id: string, entry_id: string, params?: PostReplyParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/entries/${entry_id}/replies`;
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

  public async listEntryReplies(course_id: string, topic_id: string, entry_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/entries/${entry_id}/replies`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listEntries(course_id: string, topic_id: string, params?: ListEntriesParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/entry_list`;
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

  public async markTopicAsRead(course_id: string, topic_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/read`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markTopicAsUnread(course_id: string, topic_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/read`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markAllEntriesAsRead(course_id: string, topic_id: string, params?: MarkAllEntriesAsReadParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/read_all`;
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

  public async markAllEntriesAsUnread(course_id: string, topic_id: string, params?: MarkAllEntriesAsUnreadParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/read_all`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markEntryAsRead(course_id: string, topic_id: string, entry_id: string, params?: MarkEntryAsReadParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/entries/${entry_id}/read`;
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

  public async markEntryAsUnread(course_id: string, topic_id: string, entry_id: string, params?: MarkEntryAsUnreadParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/entries/${entry_id}/read`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async rateEntry(course_id: string, topic_id: string, entry_id: string, params?: RateEntryParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/entries/${entry_id}/rating`;
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

  public async subscribeToTopic(course_id: string, topic_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/subscribed`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async unsubscribeFromTopic(course_id: string, topic_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/discussion_topics/${topic_id}/subscribed`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
