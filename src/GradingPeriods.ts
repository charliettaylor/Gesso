import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { GradingPeriod, Scope } from "../types/models.ts";
import {
  BatchUpdateGradingPeriodsParams,
  UpdateSingleGradingPeriodParams,
} from "../types/params.ts";

export class GradingPeriods extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listGradingPeriods(
    account_id: string,
    body?: unknown,
  ): Promise<GradingPeriod> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_periods`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as GradingPeriod;
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleGradingPeriod(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<GradingPeriod> {
    const endpoint = `/api/v1/courses/${course_id}/grading_periods/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as GradingPeriod;
    }

    return Promise.reject(response.statusText);
  }

  public async updateSingleGradingPeriod(
    course_id: string,
    id: string,
    params?: UpdateSingleGradingPeriodParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/grading_periods/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteGradingPeriod(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/grading_periods/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async batchUpdateGradingPeriods(
    course_id: string,
    params?: BatchUpdateGradingPeriodsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/grading_periods/batch_update`;
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
}
