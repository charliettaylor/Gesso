import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import { CreateJwtParams, RefreshJwtParams } from "../types/params.ts";

export class JWTs extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createJwt(params?: CreateJwtParams, body?: unknown): Promise<unknown> {
    const endpoint = "/api/v1/jwts";
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

  public async refreshJwt(params?: RefreshJwtParams, body?: unknown): Promise<unknown> {
    const endpoint = "/api/v1/jwts/refresh";
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
