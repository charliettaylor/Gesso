import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Grade, Tab } from "../types/models.ts";
import {
  ListAvailableTabsForCourseOrGroupParams,
  UpdateTabForCourseParams,
} from "../types/params.ts";

export class Tabs extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAvailableTabsForCourseOrGroup(
    account_id: string,
    params?: ListAvailableTabsForCourseOrGroupParams,
    body?: unknown,
  ): Promise<Grade> {
    const endpoint = `/api/v1/accounts/${account_id}/tabs`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Grade;
    }

    return Promise.reject(response);
  }

  public async updateTabForCourse(
    course_id: string,
    tab_id: string,
    params?: UpdateTabForCourseParams,
    body?: unknown,
  ): Promise<Tab> {
    const endpoint = `/api/v1/courses/${course_id}/tabs/${tab_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Tab;
    }

    return Promise.reject(response);
  }
}
