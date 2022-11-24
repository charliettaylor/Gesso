import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { CreateCommunicationChannelParams } from '../types/params';
  
export class CommunicationChannels extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listUserCommunicationChannels(user_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${user_id}/communication_channels`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createCommunicationChannel(user_id: string, params?: CreateCommunicationChannelParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/communication_channels`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteCommunicationChannel(user_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/communication_channels/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deletePushNotificationEndpoint(body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/communication_channels/push';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
