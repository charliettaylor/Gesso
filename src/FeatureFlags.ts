import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Feature, Account, Scope } from '../types/models';
import { SetFeatureFlagParams } from '../types/params';

export class FeatureFlags extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listFeatures(course_id: string): Promise<Feature[]> {
    const endpoint = `/courses/${course_id}/features`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listEnabledFeatures(course_id: string): Promise<Account> {
    const endpoint = `/courses/${course_id}/features/enabled`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listEnvironmentFeatures(): Promise<Scope> {
    const endpoint = `/features/environment`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getFeatureFlag(course_id: string, feature: string): Promise<Feature> {
    const endpoint = `/courses/${course_id}/features/flags/${feature}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async setFeatureFlag(course_id: string, feature: string, params: SetFeatureFlagParams): Promise<Feature> {
    const endpoint = `/courses/${course_id}/features/flags/${feature}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeFeatureFlag(course_id: string, feature: string): Promise<Feature> {
    const endpoint = `/courses/${course_id}/features/flags/${feature}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
