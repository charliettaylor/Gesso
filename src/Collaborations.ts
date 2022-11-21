import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Collaboration, Collaborator, User } from '../types/models';
import { ListMembersOfCollaborationParams } from '../types/params';

export class Collaborations extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCollaborations(course_id: string): Promise<Collaboration[]> {
    const endpoint = `/courses/${course_id}/collaborations`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listMembersOfCollaboration(
    id: string,
    params: ListMembersOfCollaborationParams,
  ): Promise<Collaborator[]> {
    const endpoint = `/collaborations/${id}/members`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listPotentialMembers(course_id: string): Promise<User[]> {
    const endpoint = `/courses/${course_id}/potential_collaborators`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
