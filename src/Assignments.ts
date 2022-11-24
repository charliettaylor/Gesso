import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { DuplicateAssignnmentParams, EditAnAssignmentParams, BatchCreateOverridesInCourseParams, ListAssignmentsParams, CreateAnAssignmentParams, GetSingleAssignmentParams, BatchUpdateOverridesInCourseParams, UpdateAnAssignmentOverrideParams, CreateAnAssignmentOverrideParams, BatchRetrieveOverridesInCourseParams } from '../types/params';
  
export class Assignments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async deleteAnAssignment(course_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAssignments(course_id: string, params?: ListAssignmentsParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignments`;
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

  public async listAssignmentsForUser(user_id: string, course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/courses/${course_id}/assignments`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async duplicateAssignnment(course_id: string, assignment_id: string, params?: DuplicateAssignnmentParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${assignment_id}/duplicate`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleAssignment(course_id: string, id: string, params?: GetSingleAssignmentParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${id}`;
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

  public async createAnAssignment(course_id: string, params?: CreateAnAssignmentParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editAnAssignment(course_id: string, id: string, params?: EditAnAssignmentParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${id}`;
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

  public async bulkUpdateAssignmentDates(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/bulk_update`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAssignmentOverrides(course_id: string, assignment_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleAssignmentOverride(course_id: string, assignment_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async redirectToTheAssignmentOverrideForGroup(group_id: string, assignment_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/groups/${group_id}/assignments/${assignment_id}/override`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async redirectToTheAssignmentOverrideForSection(course_section_id: string, assignment_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/sections/${course_section_id}/assignments/${assignment_id}/override`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createAnAssignmentOverride(course_id: string, assignment_id: string, params?: CreateAnAssignmentOverrideParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAnAssignmentOverride(course_id: string, assignment_id: string, id: string, params?: UpdateAnAssignmentOverrideParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`;
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

  public async deleteAnAssignmentOverride(course_id: string, assignment_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async batchRetrieveOverridesInCourse(course_id: string, params?: BatchRetrieveOverridesInCourseParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/overrides`;
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

  public async batchCreateOverridesInCourse(course_id: string, params?: BatchCreateOverridesInCourseParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/overrides`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async batchUpdateOverridesInCourse(course_id: string, params?: BatchUpdateOverridesInCourseParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/overrides`;
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
