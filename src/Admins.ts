import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Admin } from '../types/models';
import { MakeAnAccountAdminParams, RemoveAccountAdminParams, ListAccountAdminsParams } from '../types/params';

export class Admins extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async makeAnAccountAdmin(account_id: string, params: MakeAnAccountAdminParams): Promise<Admin> {
    const endpoint = `/accounts/${account_id}/admins`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeAccountAdmin(
    account_id: string,
    user_id: string,
    params: RemoveAccountAdminParams,
  ): Promise<Admin> {
    const endpoint = `/accounts/${account_id}/admins/${user_id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAccountAdmins(account_id: string, params: ListAccountAdminsParams): Promise<Admin[]> {
    const endpoint = `/accounts/${account_id}/admins`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
