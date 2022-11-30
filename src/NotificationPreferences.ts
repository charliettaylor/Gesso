import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { NotificationPreference, Scope } from "../types/models.ts";
import {
  UpdateMultiplePreferencesParams,
  UpdatePreferenceParams,
  UpdatePreferencesByCategoryParams,
} from "../types/params.ts";

export class NotificationPreferences extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPreferences(
    user_id: string,
    communication_channel_id: string,
    body?: unknown,
  ): Promise<NotificationPreference[]> {
    const endpoint =
      `/api/v1/users/${user_id}/communication_channels/${communication_channel_id}/notification_preferences`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as NotificationPreference[];
    }

    return Promise.reject(response.statusText);
  }

  public async listOfPreferenceCategories(
    user_id: string,
    communication_channel_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/users/${user_id}/communication_channels/${communication_channel_id}/notification_preference_categories`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async getPreference(
    user_id: string,
    communication_channel_id: string,
    notification: string,
    body?: unknown,
  ): Promise<NotificationPreference> {
    const endpoint =
      `/api/v1/users/${user_id}/communication_channels/${communication_channel_id}/notification_preferences/${notification}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as NotificationPreference;
    }

    return Promise.reject(response.statusText);
  }

  public async updatePreference(
    communication_channel_id: string,
    notification: string,
    params?: UpdatePreferenceParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/users/self/communication_channels/${communication_channel_id}/notification_preferences/${notification}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async updatePreferencesByCategory(
    communication_channel_id: string,
    category: string,
    params?: UpdatePreferencesByCategoryParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/users/self/communication_channels/${communication_channel_id}/notification_preference_categories/${category}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async updateMultiplePreferences(
    communication_channel_id: string,
    params?: UpdateMultiplePreferencesParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/users/self/communication_channels/${communication_channel_id}/notification_preferences`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
