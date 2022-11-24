import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";
import { CreateWebhookSubscriptionParams } from "../types/params.ts";

export class WebhooksSubscriptionsforPlagiarismPlatform extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createWebhookSubscription(
    params?: CreateWebhookSubscriptionParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/api/lti/subscriptions";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteWebhookSubscription(
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/api/lti/subscriptions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showSingleWebhookSubscription(
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/api/lti/subscriptions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateWebhookSubscription(
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/api/lti/subscriptions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAllWebhookSubscriptionForToolProxy(
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/api/lti/subscriptions";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
