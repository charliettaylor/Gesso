import { Progress, Scope, SisImport } from '../types/models';
import {
  GetSisImportListParams,
  ImportSisDataParams,
  RestoreWorkflowstatesOfSisImportedItemsParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class SISImports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSisImportList(account_id: string, params: GetSisImportListParams): Promise<SisImport[]> {
    const endpoint = `/accounts/${account_id}/sis_imports`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheCurrentImportingSisImport(account_id: string): Promise<SisImport> {
    const endpoint = `/accounts/${account_id}/sis_imports/importing`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async importSisData(account_id: string, params: ImportSisDataParams): Promise<SisImport> {
    const endpoint = `/accounts/${account_id}/sis_imports`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSisImportStatus(account_id: string, id: string): Promise<SisImport> {
    const endpoint = `/accounts/${account_id}/sis_imports/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async restoreWorkflowstatesOfSisImportedItems(
    account_id: string,
    id: string,
    params: RestoreWorkflowstatesOfSisImportedItemsParams,
  ): Promise<Progress> {
    const endpoint = `/accounts/${account_id}/sis_imports/${id}/restore_states`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async abortSisImport(account_id: string, id: string): Promise<SisImport> {
    const endpoint = `/accounts/${account_id}/sis_imports/${id}/abort`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async abortAllPendingSisImports(account_id: string): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/sis_imports/abort_all_pending`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
