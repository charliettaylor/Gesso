import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Group, OutcomeLink, Scope } from "../types/models.ts";
import {
  CreateAnOutcomeParams,
  CreateSubgroupParams,
  ImportAnOutcomeGroupParams,
  ListLinkedOutcomesParams,
  UpdateAnOutcomeGroupParams,
} from "../types/params.ts";

export class OutcomeGroups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async redirectToRootOutcomeGroupForContext(
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/global/root_outcome_group";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async getAllOutcomeGroupsForContext(
    account_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/accounts/${account_id}/outcome_groups`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async getAllOutcomeLinksForContext(
    account_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/accounts/${account_id}/outcome_group_links`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async showAnOutcomeGroup(id: string, body?: unknown): Promise<Scope> {
    const endpoint = `/api/v1/global/outcome_groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async updateAnOutcomeGroup(
    id: string,
    params?: UpdateAnOutcomeGroupParams,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = `/api/v1/global/outcome_groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteAnOutcomeGroup(
    id: string,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = `/api/v1/global/outcome_groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async listLinkedOutcomes(
    id: string,
    params?: ListLinkedOutcomesParams,
    body?: unknown,
  ): Promise<OutcomeLink[]> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/outcomes`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as OutcomeLink[];
    }

    return Promise.reject(response.statusText);
  }

  public async createAnOutcome(
    id: string,
    params?: CreateAnOutcomeParams,
    body?: unknown,
  ): Promise<OutcomeLink> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/outcomes`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as OutcomeLink;
    }

    return Promise.reject(response.statusText);
  }

  public async unlinkAnOutcome(
    id: string,
    outcome_id: string,
    body?: unknown,
  ): Promise<OutcomeLink> {
    const endpoint =
      `/api/v1/global/outcome_groups/${id}/outcomes/${outcome_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as OutcomeLink;
    }

    return Promise.reject(response.statusText);
  }

  public async listSubgroups(id: string, body?: unknown): Promise<Group[]> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/subgroups`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group[];
    }

    return Promise.reject(response.statusText);
  }

  public async createSubgroup(
    id: string,
    params?: CreateSubgroupParams,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/subgroups`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }

  public async importAnOutcomeGroup(
    id: string,
    params?: ImportAnOutcomeGroupParams,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = `/api/v1/global/outcome_groups/${id}/import`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response.statusText);
  }
}
