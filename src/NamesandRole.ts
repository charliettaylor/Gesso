import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { NamesAndRoleMembership } from "../types/models.ts";
import {
  ListCourseMembershipsParams,
  ListGroupMembershipsParams,
} from "../types/params.ts";

export class NamesandRole extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCourseMemberships(
    course_id: string,
    params?: ListCourseMembershipsParams,
    body?: unknown,
  ): Promise<NamesAndRoleMembership> {
    const endpoint = `/api/v1/api/lti/courses/${course_id}/names_and_roles`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as NamesAndRoleMembership;
    }

    return Promise.reject(response);
  }

  public async listGroupMemberships(
    group_id: string,
    params?: ListGroupMembershipsParams,
    body?: unknown,
  ): Promise<NamesAndRoleMembership> {
    const endpoint = `/api/v1/api/lti/groups/${group_id}/names_and_roles`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as NamesAndRoleMembership;
    }

    return Promise.reject(response);
  }
}
