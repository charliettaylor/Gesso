import { Page } from '../types/models';
import {
  CreatePageParams,
  ListPagesParams,
  RevertToRevisionParams,
  ShowRevisionParams,
  UpdateFrontPageParams,
  UpdatePageParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Pages extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async showFrontPage(course_id: string): Promise<Page> {
    const endpoint = `/courses/${course_id}/front_page`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async duplicatePage(course_id: string, url_or_id: string): Promise<Page> {
    const endpoint = `/courses/${course_id}/pages/${url_or_id}/duplicate`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateFrontPage(course_id: string, params: UpdateFrontPageParams): Promise<Page> {
    const endpoint = `/courses/${course_id}/front_page`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listPages(course_id: string, params: ListPagesParams): Promise<Page[]> {
    const endpoint = `/courses/${course_id}/pages`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createPage(course_id: string, params: CreatePageParams): Promise<Page> {
    const endpoint = `/courses/${course_id}/pages`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showPage(course_id: string, url_or_id: string): Promise<Page> {
    const endpoint = `/courses/${course_id}/pages/${url_or_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePage(course_id: string, url_or_id: string, params: UpdatePageParams): Promise<Page> {
    const endpoint = `/courses/${course_id}/pages/${url_or_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deletePage(course_id: string, url_or_id: string): Promise<Page> {
    const endpoint = `/courses/${course_id}/pages/${url_or_id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listRevisions(course_id: string, url_or_id: string): Promise<Page[]> {
    const endpoint = `/courses/${course_id}/pages/${url_or_id}/revisions`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showRevision(course_id: string, url_or_id: string, params: ShowRevisionParams): Promise<Page> {
    const endpoint = `/courses/${course_id}/pages/${url_or_id}/revisions/latest`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async revertToRevision(
    course_id: string,
    url_or_id: string,
    revision_id: string,
    params: RevertToRevisionParams,
  ): Promise<Page> {
    const endpoint = `/courses/${course_id}/pages/${url_or_id}/revisions/${revision_id}`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
