import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { AuthenticationProvider, Scope, SSOSettings } from '../types/models';

export class AuthenticationProviders extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAuthenticationProviders(account_id: string): Promise<AuthenticationProvider[]> {
    const endpoint = `/accounts/${account_id}/authentication_providers`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addAuthenticationProvider(account_id: string): Promise<AuthenticationProvider> {
    const endpoint = `/accounts/${account_id}/authentication_providers`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAuthenticationProvider(account_id: string, id: string): Promise<AuthenticationProvider> {
    const endpoint = `/accounts/${account_id}/authentication_providers/${id}`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAuthenticationProvider(account_id: string, id: string): Promise<AuthenticationProvider> {
    const endpoint = `/accounts/${account_id}/authentication_providers/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteAuthenticationProvider(account_id: string, id: string): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/authentication_providers/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showAccountAuthSettings(account_id: string): Promise<SSOSettings> {
    const endpoint = `/accounts/${account_id}/sso_settings`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAccountAuthSettings(account_id: string): Promise<SSOSettings> {
    const endpoint = `/accounts/${account_id}/sso_settings`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
