import { GradingPeriod, Scope } from '../types/models';
import { CreateGradingPeriodSetParams, UpdateGradingPeriodSetParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class GradingPeriodSets extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGradingPeriodSets(account_id: string): Promise<GradingPeriod> {
    const endpoint = `/accounts/${account_id}/grading_period_sets`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createGradingPeriodSet(account_id: string, params: CreateGradingPeriodSetParams): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/grading_period_sets`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateGradingPeriodSet(
    account_id: string,
    id: string,
    params: UpdateGradingPeriodSetParams,
  ): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/grading_period_sets/${id}`;
    const response = await this.patch(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteGradingPeriodSet(account_id: string, id: string): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/grading_period_sets/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
