import { Assignment, Progress, Scope } from '../types/models';
import {
  BatchCreateOverridesInCourseParams,
  BatchRetrieveOverridesInCourseParams,
  BatchUpdateOverridesInCourseParams,
  CreateAnAssignmentOverrideParams,
  CreateAnAssignmentParams,
  DuplicateAssignnmentParams,
  EditAnAssignmentParams,
  GetSingleAssignmentParams,
  ListAssignmentsParams,
  UpdateAnAssignmentOverrideParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Assignments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async deleteAnAssignment(course_id: string, id: string): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/assignments/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAssignments(course_id: string, params: ListAssignmentsParams): Promise<Assignment[]> {
    const endpoint = `/courses/${course_id}/assignments`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAssignmentsForUser(user_id: string, course_id: string): Promise<any> {
    const endpoint = `/users/${user_id}/courses/${course_id}/assignments`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async duplicateAssignnment(
    course_id: string,
    assignment_id: string,
    params: DuplicateAssignnmentParams,
  ): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/duplicate`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleAssignment(
    course_id: string,
    id: string,
    params: GetSingleAssignmentParams,
  ): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/assignments/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createAnAssignment(course_id: string, params: CreateAnAssignmentParams): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/assignments`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editAnAssignment(course_id: string, id: string, params: EditAnAssignmentParams): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/assignments/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async bulkUpdateAssignmentDates(course_id: string): Promise<Progress> {
    const endpoint = `/courses/${course_id}/assignments/bulk_update`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAssignmentOverrides(course_id: string, assignment_id: string): Promise<Assignment[]> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/overrides`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleAssignmentOverride(course_id: string, assignment_id: string, id: string): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async redirectToTheAssignmentOverrideForGroup(group_id: string, assignment_id: string): Promise<Scope> {
    const endpoint = `/groups/${group_id}/assignments/${assignment_id}/override`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async redirectToTheAssignmentOverrideForSection(
    course_section_id: string,
    assignment_id: string,
  ): Promise<Scope> {
    const endpoint = `/sections/${course_section_id}/assignments/${assignment_id}/override`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createAnAssignmentOverride(
    course_id: string,
    assignment_id: string,
    params: CreateAnAssignmentOverrideParams,
  ): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/overrides`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAnAssignmentOverride(
    course_id: string,
    assignment_id: string,
    id: string,
    params: UpdateAnAssignmentOverrideParams,
  ): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteAnAssignmentOverride(course_id: string, assignment_id: string, id: string): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async batchRetrieveOverridesInCourse(
    course_id: string,
    params: BatchRetrieveOverridesInCourseParams,
  ): Promise<Assignment[]> {
    const endpoint = `/courses/${course_id}/assignments/overrides`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async batchCreateOverridesInCourse(
    course_id: string,
    params: BatchCreateOverridesInCourseParams,
  ): Promise<Assignment[]> {
    const endpoint = `/courses/${course_id}/assignments/overrides`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async batchUpdateOverridesInCourse(
    course_id: string,
    params: BatchUpdateOverridesInCourseParams,
  ): Promise<Assignment[]> {
    const endpoint = `/courses/${course_id}/assignments/overrides`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
