import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

export class InstAccesstokens extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createInstaccessToken(body?: unknown): Promise<unknown> {
    const endpoint = "/api/v1/inst_access_tokens";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
