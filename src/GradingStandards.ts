import { GradingStandard } from '../types/models';
import { CreateNewGradingStandardParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class GradingStandards extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createNewGradingStandard(
    account_id: string,
    params: CreateNewGradingStandardParams,
  ): Promise<GradingStandard> {
    const endpoint = `/accounts/${account_id}/grading_standards`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listTheGradingStandardsAvailableInContext(course_id: string): Promise<GradingStandard[]> {
    const endpoint = `/courses/${course_id}/grading_standards`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleGradingStandardInContext(
    course_id: string,
    grading_standard_id: string,
  ): Promise<GradingStandard> {
    const endpoint = `/courses/${course_id}/grading_standards/${grading_standard_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
