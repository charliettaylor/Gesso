import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';


export class AuthenticationProviders extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAuthenticationProviders(account_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/accounts/${account_id}/authentication_providers`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addAuthenticationProvider(account_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/authentication_providers`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAuthenticationProvider(account_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/authentication_providers/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAuthenticationProvider(account_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/authentication_providers/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteAuthenticationProvider(account_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/authentication_providers/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showAccountAuthSettings(account_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/sso_settings`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAccountAuthSettings(account_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/sso_settings`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
