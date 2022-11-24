import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Account, TermsOfService, HelpLink } from '../types/models';
import { PermissionsParams, ListAccountsParams, UpdateAnAccountParams, ListActiveCoursesInAnAccountParams, CreateNewSubaccountParams, GetTheSubaccountsOfAnAccountParams } from '../types/params';
  
export class Accounts extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAccounts(params?: ListAccountsParams, body?: any): Promise<Account[]> {
    const endpoint = '/api/v1/accounts';
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

  public async getAccountsThatAdminsCanManage(body?: any): Promise<Account[]> {
    const endpoint = '/api/v1/manageable_accounts';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAccountsForCourseAdmins(body?: any): Promise<Account[]> {
    const endpoint = '/api/v1/course_accounts';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleAccount(id: string, body?: any): Promise<Account> {
    const endpoint = `/api/v1/accounts/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async settings(account_id: string, body?: any): Promise<Account> {
    const endpoint = `/api/v1/accounts/${account_id}/settings`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async permissions(account_id: string, params?: PermissionsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/permissions`;
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

  public async getTheSubaccountsOfAnAccount(account_id: string, params?: GetTheSubaccountsOfAnAccountParams, body?: any): Promise<Account[]> {
    const endpoint = `/api/v1/accounts/${account_id}/sub_accounts`;
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

  public async getTheTermsOfService(account_id: string, body?: any): Promise<TermsOfService> {
    const endpoint = `/api/v1/accounts/${account_id}/terms_of_service`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getHelpLinks(account_id: string, body?: any): Promise<HelpLink> {
    const endpoint = `/api/v1/accounts/${account_id}/help_links`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheManuallycreatedCoursesSubaccountForTheDomainRootAccount(body?: any): Promise<Account> {
    const endpoint = '/api/v1/manually_created_courses_account';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listActiveCoursesInAnAccount(account_id: string, params?: ListActiveCoursesInAnAccountParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/accounts/${account_id}/courses`;
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

  public async updateAnAccount(id: string, params?: UpdateAnAccountParams, body?: any): Promise<Account> {
    const endpoint = `/api/v1/accounts/${id}`;
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

  public async deleteUserFromTheRootAccount(account_id: string, user_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/users/${user_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createNewSubaccount(account_id: string, params?: CreateNewSubaccountParams, body?: any): Promise<Account> {
    const endpoint = `/api/v1/accounts/${account_id}/sub_accounts`;
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

  public async deleteSubaccount(account_id: string, id: string, body?: any): Promise<Account> {
    const endpoint = `/api/v1/accounts/${account_id}/sub_accounts/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
