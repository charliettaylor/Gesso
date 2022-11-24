import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Progress, Scope, SisImport } from "../types/models.ts";
import {
  GetSisImportListParams,
  ImportSisDataParams,
  RestoreWorkflowstatesOfSisImportedItemsParams,
} from "../types/params.ts";

export class SISImports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSisImportList(
    account_id: string,
    params?: GetSisImportListParams,
    body?: unknown,
  ): Promise<SisImport[]> {
    const endpoint = `/api/v1/accounts/${account_id}/sis_imports`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheCurrentImportingSisImport(
    account_id: string,
    body?: unknown,
  ): Promise<SisImport> {
    const endpoint = `/api/v1/accounts/${account_id}/sis_imports/importing`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async importSisData(
    account_id: string,
    params?: ImportSisDataParams,
    body?: unknown,
  ): Promise<SisImport> {
    const endpoint = `/api/v1/accounts/${account_id}/sis_imports`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSisImportStatus(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<SisImport> {
    const endpoint = `/api/v1/accounts/${account_id}/sis_imports/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async restoreWorkflowstatesOfSisImportedItems(
    account_id: string,
    id: string,
    params?: RestoreWorkflowstatesOfSisImportedItemsParams,
    body?: unknown,
  ): Promise<Progress> {
    const endpoint =
      `/api/v1/accounts/${account_id}/sis_imports/${id}/restore_states`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async abortSisImport(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<SisImport> {
    const endpoint = `/api/v1/accounts/${account_id}/sis_imports/${id}/abort`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async abortAllPendingSisImports(
    account_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/accounts/${account_id}/sis_imports/abort_all_pending`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
