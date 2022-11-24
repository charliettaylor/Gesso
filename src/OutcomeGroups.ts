import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { UpdateAnOutcomeGroupParams, ListLinkedOutcomesParams, CreateSubgroupParams, ImportAnOutcomeGroupParams, CreateAnOutcomeParams } from '../types/params';
  
export class OutcomeGroups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async redirectToRootOutcomeGroupForContext(body?: any): Promise<any> {
    const endpoint = '/api/v1/global/root_outcome_group';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAllOutcomeGroupsForContext(account_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/outcome_groups`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAllOutcomeLinksForContext(account_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/outcome_group_links`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showAnOutcomeGroup(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/global/outcome_groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAnOutcomeGroup(id: string, params?: UpdateAnOutcomeGroupParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/global/outcome_groups/${id}`;
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

  public async deleteAnOutcomeGroup(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/global/outcome_groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listLinkedOutcomes(id: string, params?: ListLinkedOutcomesParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/outcomes`;
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

  public async createAnOutcome(id: string, params?: CreateAnOutcomeParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/outcomes`;
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

  public async unlinkAnOutcome(id: string, outcome_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/outcomes/${outcome_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listSubgroups(id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/subgroups`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSubgroup(id: string, params?: CreateSubgroupParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/subgroups`;
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

  public async importAnOutcomeGroup(id: string, params?: ImportAnOutcomeGroupParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/import`;
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

}
