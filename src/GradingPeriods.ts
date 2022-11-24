import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { BatchUpdateGradingPeriodsParams, UpdateSingleGradingPeriodParams } from '../types/params';
  
export class GradingPeriods extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGradingPeriods(account_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_periods`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleGradingPeriod(course_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/grading_periods/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateSingleGradingPeriod(course_id: string, id: string, params?: UpdateSingleGradingPeriodParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/grading_periods/${id}`;
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

  public async deleteGradingPeriod(course_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/grading_periods/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async batchUpdateGradingPeriods(course_id: string, params?: BatchUpdateGradingPeriodsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/grading_periods/batch_update`;
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

}
