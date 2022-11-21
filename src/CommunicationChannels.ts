import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { CommunicationChannel, Scope } from '../types/models';
import { CreateCommunicationChannelParams } from '../types/params';

export class CommunicationChannels extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listUserCommunicationChannels(user_id: string): Promise<CommunicationChannel[]> {
    const endpoint = `/users/${user_id}/communication_channels`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createCommunicationChannel(
    user_id: string,
    params: CreateCommunicationChannelParams,
  ): Promise<CommunicationChannel> {
    const endpoint = `/users/${user_id}/communication_channels`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteCommunicationChannel(user_id: string, id: string): Promise<CommunicationChannel> {
    const endpoint = `/users/${user_id}/communication_channels/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deletePushNotificationEndpoint(): Promise<Scope> {
    const endpoint = `/users/self/communication_channels/push`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
