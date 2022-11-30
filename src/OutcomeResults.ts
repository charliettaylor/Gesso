import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Account, Scope } from "../types/models.ts";
import {
  GetOutcomeResultRollupsParams,
  GetOutcomeResultsParams,
} from "../types/params.ts";

export class OutcomeResults extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getOutcomeResults(
    course_id: string,
    params?: GetOutcomeResultsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/outcome_results`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async getOutcomeResultRollups(
    course_id: string,
    params?: GetOutcomeResultRollupsParams,
    body?: unknown,
  ): Promise<Account> {
    const endpoint = `/api/v1/courses/${course_id}/outcome_rollups`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Account;
    }

    return Promise.reject(response.statusText);
  }
}
