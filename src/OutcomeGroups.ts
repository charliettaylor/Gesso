import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope, Group, OutcomeLink } from '../types/models';
import {
  CreateSubgroupParams,
  CreateAnOutcomeParams,
  UpdateAnOutcomeGroupParams,
  ImportAnOutcomeGroupParams,
  ListLinkedOutcomesParams,
} from '../types/params';

export class OutcomeGroups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async redirectToRootOutcomeGroupForContext(): Promise<Scope> {
    const endpoint = `/global/root_outcome_group`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAllOutcomeGroupsForContext(account_id: string): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/outcome_groups`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAllOutcomeLinksForContext(account_id: string): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/outcome_group_links`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showAnOutcomeGroup(id: string): Promise<Scope> {
    const endpoint = `/global/outcome_groups/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAnOutcomeGroup(id: string, params: UpdateAnOutcomeGroupParams): Promise<Group> {
    const endpoint = `/global/outcome_groups/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteAnOutcomeGroup(id: string): Promise<Group> {
    const endpoint = `/global/outcome_groups/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listLinkedOutcomes(id: string, params: ListLinkedOutcomesParams): Promise<OutcomeLink[]> {
    const endpoint = `/global/outcome_groups/${id}/outcomes`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createAnOutcome(id: string, params: CreateAnOutcomeParams): Promise<OutcomeLink> {
    const endpoint = `/global/outcome_groups/${id}/outcomes`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async unlinkAnOutcome(id: string, outcome_id: string): Promise<OutcomeLink> {
    const endpoint = `/global/outcome_groups/${id}/outcomes/${outcome_id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listSubgroups(id: string): Promise<Group[]> {
    const endpoint = `/global/outcome_groups/${id}/subgroups`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSubgroup(id: string, params: CreateSubgroupParams): Promise<Group> {
    const endpoint = `/global/outcome_groups/${id}/subgroups`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async importAnOutcomeGroup(id: string, params: ImportAnOutcomeGroupParams): Promise<Group> {
    const endpoint = `/global/outcome_groups/${id}/import`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
