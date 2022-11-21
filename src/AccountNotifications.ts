import { AccountNotification } from '../types/models';
import {
  CreateGlobalNotificationParams,
  IndexOfActiveGlobalNotificationForTheUserParams,
  UpdateGlobalNotificationParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class AccountNotifications extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async indexOfActiveGlobalNotificationForTheUser(
    account_id: string,
    params: IndexOfActiveGlobalNotificationForTheUserParams,
  ): Promise<AccountNotification[]> {
    const endpoint = `/accounts/${account_id}/account_notifications`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showGlobalNotification(account_id: string, id: string): Promise<AccountNotification> {
    const endpoint = `/accounts/${account_id}/account_notifications/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async closeNotificationForUser(account_id: string, id: string): Promise<AccountNotification> {
    const endpoint = `/accounts/${account_id}/account_notifications/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createGlobalNotification(
    account_id: string,
    params: CreateGlobalNotificationParams,
  ): Promise<AccountNotification> {
    const endpoint = `/accounts/${account_id}/account_notifications`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateGlobalNotification(
    account_id: string,
    id: string,
    params: UpdateGlobalNotificationParams,
  ): Promise<AccountNotification> {
    const endpoint = `/accounts/${account_id}/account_notifications/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
