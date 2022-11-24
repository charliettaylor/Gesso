import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';


export class PlagiarismDetectionPlatformUsers extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSingleUserlti(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/api/lti/users/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAllUsersInGrouplti(group_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/api/lti/groups/${group_id}/users`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
