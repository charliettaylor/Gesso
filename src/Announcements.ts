import { DiscussionTopic } from '../types/models';
import { ListAnnouncementsParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Announcements extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAnnouncements(params: ListAnnouncementsParams): Promise<DiscussionTopic[]> {
    const endpoint = `/announcements`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
