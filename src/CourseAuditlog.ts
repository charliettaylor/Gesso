import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { QueryByCourseParams, QueryByAccountParams } from '../types/params';
  
export class CourseAuditlog extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async queryByCourse(course_id: string, params?: QueryByCourseParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/audit/course/courses/${course_id}`;
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

  public async queryByAccount(account_id: string, params?: QueryByAccountParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/audit/course/accounts/${account_id}`;
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
