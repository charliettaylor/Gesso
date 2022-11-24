import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { ImportOutcomesParams } from '../types/params';
  
export class OutcomeImports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async importAccountOutcomes(account_id: string, learning_outcome_group_id: string, params?: ImportOutcomesParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/outcome_imports/group/${learning_outcome_group_id})`;
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

  public async importCourseOutcomes(course_id: string, learning_outcome_group_id: string, params?: ImportOutcomesParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${course_id}/outcome_imports/group/${learning_outcome_group_id})`;
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

  public async getOutcomeImportStatus(account_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/outcome_imports/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getIdsOfOutcomeGroupsCreatedAfterSuccessfulImport(account_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/outcome_imports/${id}/created_group_ids`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
