import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { NamesAndRoleMembership } from '../types/models';
import { ListCourseMembershipsParams, ListGroupMembershipsParams } from '../types/params';

export class NamesandRole extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCourseMemberships(
    course_id: string,
    params: ListCourseMembershipsParams,
  ): Promise<NamesAndRoleMembership> {
    const endpoint = `/api/lti/courses/${course_id}/names_and_roles`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listGroupMemberships(
    group_id: string,
    params: ListGroupMembershipsParams,
  ): Promise<NamesAndRoleMembership> {
    const endpoint = `/api/lti/groups/${group_id}/names_and_roles`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
