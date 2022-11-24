import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { DeveloperKey } from "../types/models.ts";
import { UpdatePublicJwkParams } from "../types/params.ts";

export class PublicJWK extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async updatePublicJwk(
    params?: UpdatePublicJwkParams,
    body?: unknown,
  ): Promise<DeveloperKey> {
    const endpoint = "/api/v1/api/lti/developer_key/update_public_jwk";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as DeveloperKey;
    }

    return Promise.reject(response);
  }
}
