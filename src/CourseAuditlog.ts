import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { CourseEvent } from '../types/models';
import { QueryByAccountParams, QueryByCourseParams } from '../types/params';

export class CourseAuditlog extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async queryByCourse(course_id: string, params: QueryByCourseParams): Promise<CourseEvent[]> {
    const endpoint = `/audit/course/courses/${course_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async queryByAccount(account_id: string, params: QueryByAccountParams): Promise<CourseEvent[]> {
    const endpoint = `/audit/course/accounts/${account_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
