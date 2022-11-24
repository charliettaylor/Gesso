import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Account } from '../types/models';
import { GetOutcomeResultRollupsParams, GetOutcomeResultsParams } from '../types/params';
  
export class OutcomeResults extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getOutcomeResults(course_id: string, params?: GetOutcomeResultsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/outcome_results`;
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

  public async getOutcomeResultRollups(course_id: string, params?: GetOutcomeResultRollupsParams, body?: any): Promise<Account> {
    const endpoint = `/api/v1/courses/${course_id}/outcome_rollups`;
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

}
