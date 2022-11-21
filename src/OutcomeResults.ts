import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope, Account } from '../types/models';
import { GetOutcomeResultRollupsParams, GetOutcomeResultsParams } from '../types/params';

export class OutcomeResults extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getOutcomeResults(course_id: string, params: GetOutcomeResultsParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/outcome_results`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getOutcomeResultRollups(course_id: string, params: GetOutcomeResultRollupsParams): Promise<Account> {
    const endpoint = `/courses/${course_id}/outcome_rollups`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
