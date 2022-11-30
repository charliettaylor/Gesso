import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { GradingPeriod, Scope } from "../types/models.ts";
import {
  CreateGradingPeriodSetParams,
  UpdateGradingPeriodSetParams,
} from "../types/params.ts";

export class GradingPeriodSets extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGradingPeriodSets(
    account_id: string,
    body?: unknown,
  ): Promise<GradingPeriod> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_period_sets`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as GradingPeriod;
    }

    return Promise.reject(response.statusText);
  }

  public async createGradingPeriodSet(
    account_id: string,
    params?: CreateGradingPeriodSetParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_period_sets`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async updateGradingPeriodSet(
    account_id: string,
    id: string,
    params?: UpdateGradingPeriodSetParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_period_sets/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.patch(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteGradingPeriodSet(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_period_sets/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
