import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Account } from '../types/models';
import { SetFeatureFlagParams } from '../types/params';
  
export class FeatureFlags extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listFeatures(course_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/features`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listEnabledFeatures(course_id: string, body?: any): Promise<Account> {
    const endpoint = `/api/v1/courses/${course_id}/features/enabled`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listEnvironmentFeatures(body?: any): Promise<any> {
    const endpoint = '/api/v1/features/environment';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getFeatureFlag(course_id: string, feature: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/features/flags/${feature}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async setFeatureFlag(course_id: string, feature: string, params?: SetFeatureFlagParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/features/flags/${feature}`;
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

  public async removeFeatureFlag(course_id: string, feature: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/features/flags/${feature}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
