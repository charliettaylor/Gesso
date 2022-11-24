import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { SisImportError } from "../types/models.ts";
import { GetSisImportErrorListParams } from "../types/params.ts";

export class SISImportErrors extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSisImportErrorList(
    account_id: string,
    id: string,
    params?: GetSisImportErrorListParams,
    body?: unknown,
  ): Promise<SisImportError[]> {
    const endpoint = `/api/v1/accounts/${account_id}/sis_imports/${id}/errors`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as SisImportError[];
    }

    return Promise.reject(response);
  }
}
