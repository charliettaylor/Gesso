import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";

export class BrandConfigs extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getTheBrandConfigVariablesThatShouldBeUsedForThisDomain(
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/brand_variables";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
