import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import {
  CreateWebhookSubscriptionParams,
} from '../types/params';

export class WebhooksSubscriptionsforPlagiarismPlatform extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createWebhookSubscription(params: CreateWebhookSubscriptionParams): Promise<Scope> {
    const endpoint = `/api/lti/subscriptions`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteWebhookSubscription(id: string): Promise<Scope> {
    const endpoint = `/api/lti/subscriptions/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showSingleWebhookSubscription(id: string): Promise<Scope> {
    const endpoint = `/api/lti/subscriptions/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateWebhookSubscription(id: string): Promise<Scope> {
    const endpoint = `/api/lti/subscriptions/${id}`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAllWebhookSubscriptionForToolProxy(): Promise<Scope> {
    const endpoint = `/api/lti/subscriptions`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
