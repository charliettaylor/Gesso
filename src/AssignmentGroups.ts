import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { AssignmentGroup } from '../types/models';
import {
  ListAssignmentGroupsParams,
  DestroyAnAssignmentGroupParams,
  GetAnAssignmentGroupParams,
  CreateAnAssignmentGroupParams,
} from '../types/params';

export class AssignmentGroups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAssignmentGroups(course_id: string, params: ListAssignmentGroupsParams): Promise<AssignmentGroup[]> {
    const endpoint = `/courses/${course_id}/assignment_groups`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAnAssignmentGroup(
    course_id: string,
    assignment_group_id: string,
    params: GetAnAssignmentGroupParams,
  ): Promise<AssignmentGroup> {
    const endpoint = `/courses/${course_id}/assignment_groups/${assignment_group_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createAnAssignmentGroup(
    course_id: string,
    params: CreateAnAssignmentGroupParams,
  ): Promise<AssignmentGroup> {
    const endpoint = `/courses/${course_id}/assignment_groups`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editAnAssignmentGroup(course_id: string, assignment_group_id: string): Promise<AssignmentGroup> {
    const endpoint = `/courses/${course_id}/assignment_groups/${assignment_group_id}`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async destroyAnAssignmentGroup(
    course_id: string,
    assignment_group_id: string,
    params: DestroyAnAssignmentGroupParams,
  ): Promise<AssignmentGroup> {
    const endpoint = `/courses/${course_id}/assignment_groups/${assignment_group_id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
