import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Proficiency } from '../types/models';
import { CreateProficiencyRatingsParams } from '../types/params';

export class ProficiencyRatings extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createProficiencyRatings(
    account_id: string,
    params: CreateProficiencyRatingsParams,
  ): Promise<Proficiency> {
    const endpoint = `/accounts/${account_id}/outcome_proficiency`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getProficiencyRatings(account_id: string): Promise<Proficiency> {
    const endpoint = `/accounts/${account_id}/outcome_proficiency`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
