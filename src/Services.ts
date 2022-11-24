import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

export class Services extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getKalturaConfig(body?: unknown): Promise<unknown> {
    const endpoint = "/api/v1/services/kaltura";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async startKalturaSession(body?: unknown): Promise<unknown> {
    const endpoint = "/api/v1/services/kaltura_session";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
