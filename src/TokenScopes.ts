import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";
import { ListScopesParams } from "../types/params.ts";

export class TokenScopes extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listScopes(
    account_id: string,
    params?: ListScopesParams,
    body?: unknown,
  ): Promise<Scope[]> {
    const endpoint = `/api/v1/accounts/${account_id}/scopes`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope[];
    }

    return Promise.reject(response);
  }
}
