import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { ListPagesParams, ShowRevisionParams, RevertToRevisionParams, CreatePageParams, UpdateFrontPageParams, UpdatePageParams } from '../types/params';
  
export class Pages extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async showFrontPage(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/front_page`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async duplicatePage(course_id: string, url_or_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/pages/${url_or_id}/duplicate`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateFrontPage(course_id: string, params?: UpdateFrontPageParams, body?: any): Promise<any> {
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

  public async listPages(course_id: string, params?: ListPagesParams, body?: any): Promise<any[]> {
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

  public async createPage(course_id: string, params?: CreatePageParams, body?: any): Promise<any> {
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

  public async showPage(course_id: string, url_or_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/pages/${url_or_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePage(course_id: string, url_or_id: string, params?: UpdatePageParams, body?: any): Promise<any> {
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

  public async deletePage(course_id: string, url_or_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/pages/${url_or_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listRevisions(course_id: string, url_or_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/pages/${url_or_id}/revisions`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showRevision(course_id: string, url_or_id: string, params?: ShowRevisionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/pages/${url_or_id}/revisions/latest`;
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

  public async revertToRevision(course_id: string, url_or_id: string, revision_id: string, params?: RevertToRevisionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/pages/${url_or_id}/revisions/${revision_id}`;
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
