import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Grade, Tab } from '../types/models';
import { UpdateTabForCourseParams, ListAvailableTabsForCourseOrGroupParams } from '../types/params';

export class Tabs extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAvailableTabsForCourseOrGroup(
    account_id: string,
    params: ListAvailableTabsForCourseOrGroupParams,
  ): Promise<Grade> {
    const endpoint = `/accounts/${account_id}/tabs`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateTabForCourse(course_id: string, tab_id: string, params: UpdateTabForCourseParams): Promise<Tab> {
    const endpoint = `/courses/${course_id}/tabs/${tab_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
