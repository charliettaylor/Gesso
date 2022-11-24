import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';


  
export class History extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listRecentHistoryForUser(user_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${user_id}/history`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
