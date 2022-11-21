import { AccountCalendar } from '../types/models';
import {
  ListAllAccountCalendarsParams,
  ListAvailableAccountCalendarsParams,
  UpdateCalendarsVisibilityParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class AccountCalendars extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAvailableAccountCalendars(params: ListAvailableAccountCalendarsParams): Promise<AccountCalendar[]> {
    const endpoint = `/account_calendars`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleAccountCalendar(account_id: string): Promise<AccountCalendar> {
    const endpoint = `/account_calendars/${account_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateCalendarsVisibility(
    account_id: string,
    params: UpdateCalendarsVisibilityParams,
  ): Promise<AccountCalendar> {
    const endpoint = `/account_calendars/${account_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateManyCalendarsVisibility(account_id: string): Promise<AccountCalendar> {
    const endpoint = `/accounts/${account_id}/account_calendars`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAllAccountCalendars(
    account_id: string,
    params: ListAllAccountCalendarsParams,
  ): Promise<AccountCalendar[]> {
    const endpoint = `/accounts/${account_id}/account_calendars`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async countOfAllVisibleAccountCalendars(account_id: string): Promise<any> {
    const endpoint = `/accounts/${account_id}/visible_calendars_count`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
