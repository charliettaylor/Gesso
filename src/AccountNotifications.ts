import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { AccountNotification } from "../types/models.ts";
import {
  CreateGlobalNotificationParams,
  IndexOfActiveGlobalNotificationForTheUserParams,
  UpdateGlobalNotificationParams,
} from "../types/params.ts";

export class AccountNotifications extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async indexOfActiveGlobalNotificationForTheUser(
    account_id: string,
    params?: IndexOfActiveGlobalNotificationForTheUserParams,
    body?: unknown,
  ): Promise<AccountNotification[]> {
    const endpoint = `/api/v1/accounts/${account_id}/account_notifications`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showGlobalNotification(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<AccountNotification> {
    const endpoint =
      `/api/v1/accounts/${account_id}/account_notifications/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async closeNotificationForUser(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<AccountNotification> {
    const endpoint =
      `/api/v1/accounts/${account_id}/account_notifications/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createGlobalNotification(
    account_id: string,
    params?: CreateGlobalNotificationParams,
    body?: unknown,
  ): Promise<AccountNotification> {
    const endpoint = `/api/v1/accounts/${account_id}/account_notifications`;
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

  public async updateGlobalNotification(
    account_id: string,
    id: string,
    params?: UpdateGlobalNotificationParams,
    body?: unknown,
  ): Promise<AccountNotification> {
    const endpoint =
      `/api/v1/accounts/${account_id}/account_notifications/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
