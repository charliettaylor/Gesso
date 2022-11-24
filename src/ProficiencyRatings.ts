import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Proficiency } from "../types/models.ts";
import { CreateProficiencyRatingsParams } from "../types/params.ts";

export class ProficiencyRatings extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createProficiencyRatings(
    account_id: string,
    params?: CreateProficiencyRatingsParams,
    body?: unknown,
  ): Promise<Proficiency> {
    const endpoint = `/api/v1/accounts/${account_id}/outcome_proficiency`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Proficiency;
    }

    return Promise.reject(response);
  }

  public async getProficiencyRatings(
    account_id: string,
    body?: unknown,
  ): Promise<Proficiency> {
    const endpoint = `/api/v1/accounts/${account_id}/outcome_proficiency`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Proficiency;
    }

    return Promise.reject(response);
  }
}
