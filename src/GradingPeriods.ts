import { GradingPeriod, Scope } from '../types/models';
import { BatchUpdateGradingPeriodsParams, UpdateSingleGradingPeriodParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class GradingPeriods extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGradingPeriods(account_id: string): Promise<GradingPeriod> {
    const endpoint = `/accounts/${account_id}/grading_periods`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleGradingPeriod(course_id: string, id: string): Promise<GradingPeriod> {
    const endpoint = `/courses/${course_id}/grading_periods/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateSingleGradingPeriod(
    course_id: string,
    id: string,
    params: UpdateSingleGradingPeriodParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/grading_periods/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteGradingPeriod(course_id: string, id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/grading_periods/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async batchUpdateGradingPeriods(course_id: string, params: BatchUpdateGradingPeriodsParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/grading_periods/batch_update`;
    const response = await this.patch(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
