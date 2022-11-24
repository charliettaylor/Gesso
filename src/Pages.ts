import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Page } from "../types/models.ts";
import {
  CreatePageParams,
  ListPagesParams,
  RevertToRevisionParams,
  ShowRevisionParams,
  UpdateFrontPageParams,
  UpdatePageParams,
} from "../types/params.ts";

export class Pages extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async showFrontPage(course_id: string, body?: unknown): Promise<Page> {
    const endpoint = `/api/v1/courses/${course_id}/front_page`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async duplicatePage(
    course_id: string,
    url_or_id: string,
    body?: unknown,
  ): Promise<Page> {
    const endpoint =
      `/api/v1/courses/${course_id}/pages/${url_or_id}/duplicate`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateFrontPage(
    course_id: string,
    params?: UpdateFrontPageParams,
    body?: unknown,
  ): Promise<Page> {
    const endpoint = `/api/v1/courses/${course_id}/front_page`;
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

  public async listPages(
    course_id: string,
    params?: ListPagesParams,
    body?: unknown,
  ): Promise<Page[]> {
    const endpoint = `/api/v1/courses/${course_id}/pages`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createPage(
    course_id: string,
    params?: CreatePageParams,
    body?: unknown,
  ): Promise<Page> {
    const endpoint = `/api/v1/courses/${course_id}/pages`;
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

  public async showPage(
    course_id: string,
    url_or_id: string,
    body?: unknown,
  ): Promise<Page> {
    const endpoint = `/api/v1/courses/${course_id}/pages/${url_or_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePage(
    course_id: string,
    url_or_id: string,
    params?: UpdatePageParams,
    body?: unknown,
  ): Promise<Page> {
    const endpoint = `/api/v1/courses/${course_id}/pages/${url_or_id}`;
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

  public async deletePage(
    course_id: string,
    url_or_id: string,
    body?: unknown,
  ): Promise<Page> {
    const endpoint = `/api/v1/courses/${course_id}/pages/${url_or_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listRevisions(
    course_id: string,
    url_or_id: string,
    body?: unknown,
  ): Promise<Page[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/pages/${url_or_id}/revisions`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showRevision(
    course_id: string,
    url_or_id: string,
    params?: ShowRevisionParams,
    body?: unknown,
  ): Promise<Page> {
    const endpoint =
      `/api/v1/courses/${course_id}/pages/${url_or_id}/revisions/latest`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async revertToRevision(
    course_id: string,
    url_or_id: string,
    revision_id: string,
    params?: RevertToRevisionParams,
    body?: unknown,
  ): Promise<Page> {
    const endpoint =
      `/api/v1/courses/${course_id}/pages/${url_or_id}/revisions/${revision_id}`;
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
}
