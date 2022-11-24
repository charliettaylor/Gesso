import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { InstAccessToken } from "../types/models.ts";

export class InstAccesstokens extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createInstaccessToken(body?: unknown): Promise<InstAccessToken> {
    const endpoint = "/api/v1/inst_access_tokens";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as InstAccessToken;
    }

    return Promise.reject(response);
  }
}
