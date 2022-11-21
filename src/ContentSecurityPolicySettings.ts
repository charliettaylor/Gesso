import { Account, Scope } from '../types/models';
import {
  AddAnAllowedDomainToAccountParams,
  AddMultipleAllowedDomainsToAnAccountParams,
  EnableDisableOrClearExplicitCspSettingParams,
  LockOrUnlockCurrentCspSettingsForSubaccountsCoursesParams,
  RemoveDomainFromAccountParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class ContentSecurityPolicySettings extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getCurrentSettingsForAccountOrCourse(course_id: string): Promise<Account> {
    const endpoint = `/courses/${course_id}/csp_settings`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async enableDisableOrClearExplicitCspSetting(
    course_id: string,
    params: EnableDisableOrClearExplicitCspSettingParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/csp_settings`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async lockOrUnlockCurrentCspSettingsForSubaccountsCourses(
    account_id: string,
    params: LockOrUnlockCurrentCspSettingsForSubaccountsCoursesParams,
  ): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/csp_settings/lock`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addAnAllowedDomainToAccount(
    account_id: string,
    params: AddAnAllowedDomainToAccountParams,
  ): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/csp_settings/domains`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addMultipleAllowedDomainsToAnAccount(
    account_id: string,
    params: AddMultipleAllowedDomainsToAnAccountParams,
  ): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/csp_settings/domains/batch_create`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async retrieveReportedCspViolationsForAccount(account_id: string): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/csp_log`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeDomainFromAccount(account_id: string, params: RemoveDomainFromAccountParams): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/csp_settings/domains`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
