import { Scope } from '../types/models';
import { ListScopesParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class TokenScopes extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listScopes(account_id: string, params: ListScopesParams): Promise<Scope[]> {
    const endpoint = `/accounts/${account_id}/scopes`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
