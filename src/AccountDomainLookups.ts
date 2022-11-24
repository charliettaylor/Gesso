import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import { SearchAccountDomainsParams } from "../types/params.ts";

export class AccountDomainLookups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async searchAccountDomains(
    params?: SearchAccountDomainsParams,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint = "/api/v1/accounts/search";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown[];
    }

    return Promise.reject(response);
  }
}
