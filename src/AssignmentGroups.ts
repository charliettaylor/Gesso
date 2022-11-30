import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { AssignmentGroup } from "../types/models.ts";
import {
  CreateAnAssignmentGroupParams,
  DestroyAnAssignmentGroupParams,
  GetAnAssignmentGroupParams,
  ListAssignmentGroupsParams,
} from "../types/params.ts";

export class AssignmentGroups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAssignmentGroups(
    course_id: string,
    params?: ListAssignmentGroupsParams,
    body?: unknown,
  ): Promise<AssignmentGroup[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignment_groups`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as AssignmentGroup[];
    }

    return Promise.reject(response.statusText);
  }

  public async getAnAssignmentGroup(
    course_id: string,
    assignment_group_id: string,
    params?: GetAnAssignmentGroupParams,
    body?: unknown,
  ): Promise<AssignmentGroup> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignment_groups/${assignment_group_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as AssignmentGroup;
    }

    return Promise.reject(response.statusText);
  }

  public async createAnAssignmentGroup(
    course_id: string,
    params?: CreateAnAssignmentGroupParams,
    body?: unknown,
  ): Promise<AssignmentGroup> {
    const endpoint = `/api/v1/courses/${course_id}/assignment_groups`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as AssignmentGroup;
    }

    return Promise.reject(response.statusText);
  }

  public async editAnAssignmentGroup(
    course_id: string,
    assignment_group_id: string,
    body?: unknown,
  ): Promise<AssignmentGroup> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignment_groups/${assignment_group_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as AssignmentGroup;
    }

    return Promise.reject(response.statusText);
  }

  public async destroyAnAssignmentGroup(
    course_id: string,
    assignment_group_id: string,
    params?: DestroyAnAssignmentGroupParams,
    body?: unknown,
  ): Promise<AssignmentGroup> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignment_groups/${assignment_group_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as AssignmentGroup;
    }

    return Promise.reject(response.statusText);
  }
}
