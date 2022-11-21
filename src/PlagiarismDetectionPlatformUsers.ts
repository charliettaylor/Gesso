import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { User } from '../types/models';

export class PlagiarismDetectionPlatformUsers extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSingleUserlti(id: string): Promise<User> {
    const endpoint = `/api/lti/users/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAllUsersInGrouplti(group_id: string): Promise<User[]> {
    const endpoint = `/api/lti/groups/${group_id}/users`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
