import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { DiscussionTopic } from "../types/models.ts";
import { ListAnnouncementsParams } from "../types/params.ts";

export class Announcements extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAnnouncements(
    params?: ListAnnouncementsParams,
    body?: unknown,
  ): Promise<DiscussionTopic[]> {
    const endpoint = "/api/v1/announcements";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as DiscussionTopic[];
    }

    return Promise.reject(response);
  }
}
