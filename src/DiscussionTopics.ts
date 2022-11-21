import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { DiscussionTopic, Scope } from '../types/models';
import {
  MarkAllEntriesAsUnreadParams,
  PostAnEntryParams,
  ListDiscussionTopicsParams,
  GetSingleTopicParams,
  PostReplyParams,
  RateEntryParams,
  MarkAllEntriesAsReadParams,
  UpdateAnEntryParams,
  CreateNewDiscussionTopicParams,
  MarkEntryAsUnreadParams,
  ReorderPinnedTopicsParams,
  ListEntriesParams,
  UpdateTopicParams,
  MarkEntryAsReadParams,
} from '../types/params';

export class DiscussionTopics extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listDiscussionTopics(course_id: string, params: ListDiscussionTopicsParams): Promise<DiscussionTopic[]> {
    const endpoint = `/courses/${course_id}/discussion_topics`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createNewDiscussionTopic(course_id: string, params: CreateNewDiscussionTopicParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateTopic(course_id: string, topic_id: string, params: UpdateTopicParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteTopic(course_id: string, topic_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async reorderPinnedTopics(course_id: string, params: ReorderPinnedTopicsParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/reorder`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAnEntry(
    course_id: string,
    topic_id: string,
    id: string,
    params: UpdateAnEntryParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/entries/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteAnEntry(course_id: string, topic_id: string, id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/entries/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleTopic(course_id: string, topic_id: string, params: GetSingleTopicParams): Promise<any> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheFullTopic(course_id: string, topic_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/view`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async postAnEntry(course_id: string, topic_id: string, params: PostAnEntryParams): Promise<any> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/entries`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async duplicateDiscussionTopic(course_id: string, topic_id: string): Promise<DiscussionTopic> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/duplicate`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listTopicEntries(course_id: string, topic_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/entries`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async postReply(course_id: string, topic_id: string, entry_id: string, params: PostReplyParams): Promise<any> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/entries/${entry_id}/replies`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listEntryReplies(course_id: string, topic_id: string, entry_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/entries/${entry_id}/replies`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listEntries(course_id: string, topic_id: string, params: ListEntriesParams): Promise<Scope[]> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/entry_list`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markTopicAsRead(course_id: string, topic_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/read`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markTopicAsUnread(course_id: string, topic_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/read`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markAllEntriesAsRead(
    course_id: string,
    topic_id: string,
    params: MarkAllEntriesAsReadParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/read_all`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markAllEntriesAsUnread(
    course_id: string,
    topic_id: string,
    params: MarkAllEntriesAsUnreadParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/read_all`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markEntryAsRead(
    course_id: string,
    topic_id: string,
    entry_id: string,
    params: MarkEntryAsReadParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/entries/${entry_id}/read`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markEntryAsUnread(
    course_id: string,
    topic_id: string,
    entry_id: string,
    params: MarkEntryAsUnreadParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/entries/${entry_id}/read`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async rateEntry(
    course_id: string,
    topic_id: string,
    entry_id: string,
    params: RateEntryParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/entries/${entry_id}/rating`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async subscribeToTopic(course_id: string, topic_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/subscribed`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async unsubscribeFromTopic(course_id: string, topic_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/discussion_topics/${topic_id}/subscribed`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
