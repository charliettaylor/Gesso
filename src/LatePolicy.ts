import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { LatePolicy as LatePolicyModel, Scope } from '../types/models';
import { PatchLatePolicyParams, CreateLatePolicyParams } from '../types/params';

export class LatePolicy extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getLatePolicy(id: string): Promise<LatePolicyModel> {
    const endpoint = `/courses/${id}/late_policy`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createLatePolicy(id: string, params: CreateLatePolicyParams): Promise<Scope> {
    const endpoint = `/courses/${id}/late_policy`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async patchLatePolicy(id: string, params: PatchLatePolicyParams): Promise<Scope> {
    const endpoint = `/courses/${id}/late_policy`;
    const response = await this.patch(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
