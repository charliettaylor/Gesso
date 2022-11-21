import { OutcomeImport, Scope } from '../types/models';
import { ImportOutcomesParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class OutcomeImports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async importOutcomes(
    account_id: string,
    learning_outcome_group_id: string,
    params: ImportOutcomesParams,
  ): Promise<OutcomeImport> {
    const endpoint = `/accounts/${account_id}/outcome_imports(/group/${learning_outcome_group_id})`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getOutcomeImportStatus(account_id: string, id: string): Promise<OutcomeImport> {
    const endpoint = `/accounts/${account_id}/outcome_imports/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getIdsOfOutcomeGroupsCreatedAfterSuccessfulImport(account_id: string, id: string): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/outcome_imports/${id}/created_group_ids`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
