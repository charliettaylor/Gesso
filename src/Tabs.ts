import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { ListAvailableTabsForCourseOrGroupParams, UpdateTabForCourseParams } from '../types/params';
  
export class Tabs extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAvailableTabsForCourseOrGroup(account_id: string, params?: ListAvailableTabsForCourseOrGroupParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/tabs`;
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

  public async updateTabForCourse(course_id: string, tab_id: string, params?: UpdateTabForCourseParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/tabs/${tab_id}`;
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

}
