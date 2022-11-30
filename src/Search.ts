import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";
import { FindRecipientsParams, ListAllCoursesParams } from "../types/params.ts";

export class Search extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async findRecipients(
    params?: FindRecipientsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/conversations/find_recipients";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async listAllCourses(
    params?: ListAllCoursesParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/search/all_courses";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
