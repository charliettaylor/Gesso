import { Account, Course, HelpLink, TermsOfService, User } from '../types/models';
import {
  CreateNewSubaccountParams,
  GetTheSubaccountsOfAnAccountParams,
  ListAccountsParams,
  ListActiveCoursesInAnAccountParams,
  PermissionsParams,
  UpdateAnAccountParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Accounts extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAccounts(params: ListAccountsParams): Promise<Account[]> {
    const endpoint = `/accounts`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAccountsThatAdminsCanManage(): Promise<Account[]> {
    const endpoint = `/manageable_accounts`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAccountsForCourseAdmins(): Promise<Account[]> {
    const endpoint = `/course_accounts`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleAccount(id: string): Promise<Account> {
    const endpoint = `/accounts/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async settings(account_id: string): Promise<Account> {
    const endpoint = `/accounts/${account_id}/settings`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async permissions(account_id: string, params: PermissionsParams): Promise<Course> {
    const endpoint = `/accounts/${account_id}/permissions`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheSubaccountsOfAnAccount(
    account_id: string,
    params: GetTheSubaccountsOfAnAccountParams,
  ): Promise<Account[]> {
    const endpoint = `/accounts/${account_id}/sub_accounts`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheTermsOfService(account_id: string): Promise<TermsOfService> {
    const endpoint = `/accounts/${account_id}/terms_of_service`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getHelpLinks(account_id: string): Promise<HelpLink> {
    const endpoint = `/accounts/${account_id}/help_links`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheManuallycreatedCoursesSubaccountForTheDomainRootAccount(): Promise<Account> {
    const endpoint = `/manually_created_courses_account`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listActiveCoursesInAnAccount(
    account_id: string,
    params: ListActiveCoursesInAnAccountParams,
  ): Promise<Course[]> {
    const endpoint = `/accounts/${account_id}/courses`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAnAccount(id: string, params: UpdateAnAccountParams): Promise<Account> {
    const endpoint = `/accounts/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteUserFromTheRootAccount(account_id: string, user_id: string): Promise<User> {
    const endpoint = `/accounts/${account_id}/users/${user_id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createNewSubaccount(account_id: string, params: CreateNewSubaccountParams): Promise<Account> {
    const endpoint = `/accounts/${account_id}/sub_accounts`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteSubaccount(account_id: string, id: string): Promise<Account> {
    const endpoint = `/accounts/${account_id}/sub_accounts/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
