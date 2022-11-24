import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { UpdateGradingPeriodSetParams, CreateGradingPeriodSetParams } from '../types/params';
  
export class GradingPeriodSets extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGradingPeriodSets(account_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_period_sets`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createGradingPeriodSet(account_id: string, params?: CreateGradingPeriodSetParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_period_sets`;
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

  public async updateGradingPeriodSet(account_id: string, id: string, params?: UpdateGradingPeriodSetParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_period_sets/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.patch(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteGradingPeriodSet(account_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_period_sets/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
