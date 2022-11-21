import { ExternalFeed } from '../types/models';
import { CreateAnExternalFeedParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class AnnouncementExternalFeeds extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listExternalFeeds(course_id: string): Promise<ExternalFeed[]> {
    const endpoint = `/courses/${course_id}/external_feeds`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createAnExternalFeed(course_id: string, params: CreateAnExternalFeedParams): Promise<ExternalFeed> {
    const endpoint = `/courses/${course_id}/external_feeds`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteAnExternalFeed(course_id: string, external_feed_id: string): Promise<ExternalFeed> {
    const endpoint = `/courses/${course_id}/external_feeds/${external_feed_id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
