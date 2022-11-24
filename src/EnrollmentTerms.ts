import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { CreateEnrollmentTermParams, ListEnrollmentTermsParams, UpdateEnrollmentTermParams } from '../types/params';
  
export class EnrollmentTerms extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createEnrollmentTerm(account_id: string, params?: CreateEnrollmentTermParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/terms`;
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

  public async updateEnrollmentTerm(account_id: string, id: string, params?: UpdateEnrollmentTermParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/terms/${id}`;
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

  public async deleteEnrollmentTerm(account_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/terms/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listEnrollmentTerms(account_id: string, params?: ListEnrollmentTermsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/terms`;
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

  public async retrieveEnrollmentTerm(account_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/terms/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
