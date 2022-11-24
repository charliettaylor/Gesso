import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Account, Scope } from "../types/models.ts";
import {
  AddAnAllowedDomainToAccountParams,
  AddMultipleAllowedDomainsToAnAccountParams,
  EnableDisableOrClearExplicitCspSettingParams,
  LockOrUnlockCurrentCspSettingsForSubaccountsCoursesParams,
  RemoveDomainFromAccountParams,
} from "../types/params.ts";

export class ContentSecurityPolicySettings extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getCurrentSettingsForAccountOrCourse(
    course_id: string,
    body?: unknown,
  ): Promise<Account> {
    const endpoint = `/api/v1/courses/${course_id}/csp_settings`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Account;
    }

    return Promise.reject(response);
  }

  public async enableDisableOrClearExplicitCspSetting(
    course_id: string,
    params?: EnableDisableOrClearExplicitCspSettingParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/csp_settings`;
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

    return Promise.reject(response);
  }

  public async lockOrUnlockCurrentCspSettingsForSubaccountsCourses(
    account_id: string,
    params?: LockOrUnlockCurrentCspSettingsForSubaccountsCoursesParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/accounts/${account_id}/csp_settings/lock`;
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

    return Promise.reject(response);
  }

  public async addAnAllowedDomainToAccount(
    account_id: string,
    params?: AddAnAllowedDomainToAccountParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/accounts/${account_id}/csp_settings/domains`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async addMultipleAllowedDomainsToAnAccount(
    account_id: string,
    params?: AddMultipleAllowedDomainsToAnAccountParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/accounts/${account_id}/csp_settings/domains/batch_create`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async retrieveReportedCspViolationsForAccount(
    account_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/accounts/${account_id}/csp_log`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async removeDomainFromAccount(
    account_id: string,
    params?: RemoveDomainFromAccountParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/accounts/${account_id}/csp_settings/domains`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }
}
