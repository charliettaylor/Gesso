import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { ListCourseMembershipsParams, ListGroupMembershipsParams } from '../types/params';
  
export class NamesandRole extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCourseMemberships(course_id: string, params?: ListCourseMembershipsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/api/lti/courses/${course_id}/names_and_roles`;
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

  public async listGroupMemberships(group_id: string, params?: ListGroupMembershipsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/api/lti/groups/${group_id}/names_and_roles`;
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

}
