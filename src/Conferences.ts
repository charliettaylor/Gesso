import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Conference } from "../types/models.ts";
import { ListConferencesForTheCurrentUserParams } from "../types/params.ts";

export class Conferences extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listConferences(
    course_id: string,
    body?: unknown,
  ): Promise<Conference[]> {
    const endpoint = `/api/v1/courses/${course_id}/conferences`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Conference[];
    }

    return Promise.reject(response);
  }

  public async listConferencesForTheCurrentUser(
    params?: ListConferencesForTheCurrentUserParams,
    body?: unknown,
  ): Promise<Conference[]> {
    const endpoint = "/api/v1/conferences";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Conference[];
    }

    return Promise.reject(response);
  }
}
