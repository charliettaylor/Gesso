import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';


  
export class InstAccesstokens extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createInstaccessToken(body?: any): Promise<any> {
    const endpoint = '/api/v1/inst_access_tokens';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
