import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { SharedBrandConfig } from "../types/models.ts";
import { ShareBrandconfigthemeParams } from "../types/params.ts";

export class SharedBrandConfigs extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async shareBrandconfigtheme(
    account_id: string,
    params?: ShareBrandconfigthemeParams,
    body?: unknown,
  ): Promise<SharedBrandConfig> {
    const endpoint = `/api/v1/accounts/${account_id}/shared_brand_configs`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as SharedBrandConfig;
    }

    return Promise.reject(response);
  }

  public async updateSharedTheme(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<SharedBrandConfig> {
    const endpoint =
      `/api/v1/accounts/${account_id}/shared_brand_configs/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as SharedBrandConfig;
    }

    return Promise.reject(response);
  }

  public async unshareBrandconfigtheme(
    id: string,
    body?: unknown,
  ): Promise<SharedBrandConfig> {
    const endpoint = `/api/v1/shared_brand_configs/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as SharedBrandConfig;
    }

    return Promise.reject(response);
  }
}
