import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { AuthenticationProvider, Scope, SSOSettings } from "../types/models.ts";

export class AuthenticationProviders extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAuthenticationProviders(
    account_id: string,
    body?: unknown,
  ): Promise<AuthenticationProvider[]> {
    const endpoint = `/api/v1/accounts/${account_id}/authentication_providers`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as AuthenticationProvider[];
    }

    return Promise.reject(response.statusText);
  }

  public async addAuthenticationProvider(
    account_id: string,
    body?: unknown,
  ): Promise<AuthenticationProvider> {
    const endpoint = `/api/v1/accounts/${account_id}/authentication_providers`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as AuthenticationProvider;
    }

    return Promise.reject(response.statusText);
  }

  public async updateAuthenticationProvider(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<AuthenticationProvider> {
    const endpoint =
      `/api/v1/accounts/${account_id}/authentication_providers/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as AuthenticationProvider;
    }

    return Promise.reject(response.statusText);
  }

  public async getAuthenticationProvider(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<AuthenticationProvider> {
    const endpoint =
      `/api/v1/accounts/${account_id}/authentication_providers/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as AuthenticationProvider;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteAuthenticationProvider(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/accounts/${account_id}/authentication_providers/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async showAccountAuthSettings(
    account_id: string,
    body?: unknown,
  ): Promise<SSOSettings> {
    const endpoint = `/api/v1/accounts/${account_id}/sso_settings`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as SSOSettings;
    }

    return Promise.reject(response.statusText);
  }

  public async updateAccountAuthSettings(
    account_id: string,
    body?: unknown,
  ): Promise<SSOSettings> {
    const endpoint = `/api/v1/accounts/${account_id}/sso_settings`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as SSOSettings;
    }

    return Promise.reject(response.statusText);
  }
}
