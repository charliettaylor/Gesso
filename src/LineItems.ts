import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { LineItem } from "../types/models.ts";
import {
  CreateLineItemParams,
  ListLineItemsParams,
  ShowLineItemParams,
  UpdateLineItemParams,
} from "../types/params.ts";

export class LineItems extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createLineItem(
    course_id: string,
    params?: CreateLineItemParams,
    body?: unknown,
  ): Promise<LineItem> {
    const endpoint = `/api/v1/api/lti/courses/${course_id}/line_items`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as LineItem;
    }

    return Promise.reject(response.statusText);
  }

  public async updateLineItem(
    course_id: string,
    id: string,
    params?: UpdateLineItemParams,
    body?: unknown,
  ): Promise<LineItem> {
    const endpoint = `/api/v1/api/lti/courses/${course_id}/line_items/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as LineItem;
    }

    return Promise.reject(response.statusText);
  }

  public async showLineItem(
    course_id: string,
    id: string,
    params?: ShowLineItemParams,
    body?: unknown,
  ): Promise<LineItem> {
    const endpoint = `/api/v1/api/lti/courses/${course_id}/line_items/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as LineItem;
    }

    return Promise.reject(response.statusText);
  }

  public async listLineItems(
    course_id: string,
    params?: ListLineItemsParams,
    body?: unknown,
  ): Promise<LineItem> {
    const endpoint = `/api/v1/api/lti/courses/${course_id}/line_items`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as LineItem;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteLineItem(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<LineItem> {
    const endpoint = `/api/v1/api/lti/courses/${course_id}/line_items/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as LineItem;
    }

    return Promise.reject(response.statusText);
  }
}
