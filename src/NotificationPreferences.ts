import { NotificationPreference, Scope } from '../types/models';
import {
  UpdateMultiplePreferencesParams,
  UpdatePreferenceParams,
  UpdatePreferencesByCategoryParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class NotificationPreferences extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPreferences(user_id: string, communication_channel_id: string): Promise<NotificationPreference[]> {
    const endpoint = `/users/${user_id}/communication_channels/${communication_channel_id}/notification_preferences`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listOfPreferenceCategories(user_id: string, communication_channel_id: string): Promise<Scope> {
    const endpoint = `/users/${user_id}/communication_channels/${communication_channel_id}/notification_preference_categories`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getPreference(
    user_id: string,
    communication_channel_id: string,
    notification: string,
  ): Promise<NotificationPreference> {
    const endpoint = `/users/${user_id}/communication_channels/${communication_channel_id}/notification_preferences/${notification}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePreference(
    communication_channel_id: string,
    notification: string,
    params: UpdatePreferenceParams,
  ): Promise<Scope> {
    const endpoint = `/users/self/communication_channels/${communication_channel_id}/notification_preferences/${notification}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePreferencesByCategory(
    communication_channel_id: string,
    category: string,
    params: UpdatePreferencesByCategoryParams,
  ): Promise<Scope> {
    const endpoint = `/users/self/communication_channels/${communication_channel_id}/notification_preference_categories/${category}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateMultiplePreferences(
    communication_channel_id: string,
    params: UpdateMultiplePreferencesParams,
  ): Promise<Scope> {
    const endpoint = `/users/self/communication_channels/${communication_channel_id}/notification_preferences`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
