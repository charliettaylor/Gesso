import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { QueryByCourseParams, QueryByAssignmentParams, QueryByStudentParams, AdvancedQueryParams, QueryByGraderParams } from '../types/params';
  
export class GradeChangeLog extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async queryByAssignment(assignment_id: string, params?: QueryByAssignmentParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/audit/grade_change/assignments/${assignment_id}`;
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

  public async queryByCourse(course_id: string, params?: QueryByCourseParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/audit/grade_change/courses/${course_id}`;
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

  public async queryByStudent(student_id: string, params?: QueryByStudentParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/audit/grade_change/students/${student_id}`;
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

  public async queryByGrader(grader_id: string, params?: QueryByGraderParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/audit/grade_change/graders/${grader_id}`;
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

  public async advancedQuery(params?: AdvancedQueryParams, body?: any): Promise<any[]> {
    const endpoint = '/api/v1/audit/grade_change';
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
