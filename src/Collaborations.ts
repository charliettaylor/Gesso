import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import { ListMembersOfCollaborationParams } from "../types/params.ts";

export class Collaborations extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCollaborations(
    course_id: string,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint = `/api/v1/courses/${course_id}/collaborations`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listMembersOfCollaboration(
    id: string,
    params?: ListMembersOfCollaborationParams,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint = `/api/v1/collaborations/${id}/members`;
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

  public async listPotentialMembers(
    course_id: string,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint = `/api/v1/courses/${course_id}/potential_collaborators`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
