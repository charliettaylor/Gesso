import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { HistoryEntry } from "../types/models.ts";

export class History extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listRecentHistoryForUser(
    user_id: string,
    body?: unknown,
  ): Promise<HistoryEntry[]> {
    const endpoint = `/api/v1/users/${user_id}/history`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as HistoryEntry[];
    }

    return Promise.reject(response);
  }
}
