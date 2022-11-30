import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Jwt } from "../types/models.ts";
import { CreateJwtParams, RefreshJwtParams } from "../types/params.ts";

export class JWTs extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createJwt(
    params?: CreateJwtParams,
    body?: unknown,
  ): Promise<Jwt> {
    const endpoint = "/api/v1/jwts";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Jwt;
    }

    return Promise.reject(response.statusText);
  }

  public async refreshJwt(
    params?: RefreshJwtParams,
    body?: unknown,
  ): Promise<Jwt> {
    const endpoint = "/api/v1/jwts/refresh";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Jwt;
    }

    return Promise.reject(response.statusText);
  }
}
