import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { AccountCalendar } from "../types/models.ts";
import {
  ListAllAccountCalendarsParams,
  ListAvailableAccountCalendarsParams,
  UpdateCalendarsVisibilityParams,
} from "../types/params.ts";

export class AccountCalendars extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAvailableAccountCalendars(
    params?: ListAvailableAccountCalendarsParams,
    body?: unknown,
  ): Promise<AccountCalendar[]> {
    const endpoint = "/api/v1/account_calendars";
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

  public async getSingleAccountCalendar(
    account_id: string,
    body?: unknown,
  ): Promise<AccountCalendar> {
    const endpoint = `/api/v1/account_calendars/${account_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateCalendarsVisibility(
    account_id: string,
    params?: UpdateCalendarsVisibilityParams,
    body?: unknown,
  ): Promise<AccountCalendar> {
    const endpoint = `/api/v1/account_calendars/${account_id}`;
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

  public async updateMunknownCalendarsVisibility(
    account_id: string,
    body?: unknown,
  ): Promise<AccountCalendar> {
    const endpoint = `/api/v1/accounts/${account_id}/account_calendars`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAllAccountCalendars(
    account_id: string,
    params?: ListAllAccountCalendarsParams,
    body?: unknown,
  ): Promise<AccountCalendar[]> {
    const endpoint = `/api/v1/accounts/${account_id}/account_calendars`;
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

  public async countOfAllVisibleAccountCalendars(
    account_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/accounts/${account_id}/visible_calendars_count`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
