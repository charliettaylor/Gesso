import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { LatePolicy, Scope } from "../types/models.ts";
import {
  CreateLatePolicyParams,
  PatchLatePolicyParams,
} from "../types/params.ts";

export class LatePolicy extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getLatePolicy(id: string, body?: unknown): Promise<LatePolicy> {
    const endpoint = `/api/v1/courses/${id}/late_policy`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createLatePolicy(
    id: string,
    params?: CreateLatePolicyParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${id}/late_policy`;
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

  public async patchLatePolicy(
    id: string,
    params?: PatchLatePolicyParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${id}/late_policy`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.patch(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
