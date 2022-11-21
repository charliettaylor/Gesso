import { SisImportError } from '../types/models';
import { GetSisImportErrorListParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class SISImportErrors extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSisImportErrorList(
    account_id: string,
    id: string,
    params: GetSisImportErrorListParams,
  ): Promise<SisImportError[]> {
    const endpoint = `/accounts/${account_id}/sis_imports/${id}/errors`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
