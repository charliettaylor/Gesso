import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { UpdateBookmarkParams, CreateBookmarkParams } from '../types/params';
  
export class Bookmarks extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listBookmarks(body?: any): Promise<any[]> {
    const endpoint = '/api/v1/users/self/bookmarks';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createBookmark(params?: CreateBookmarkParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/bookmarks';
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

  public async getBookmark(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/bookmarks/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateBookmark(id: string, params?: UpdateBookmarkParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/bookmarks/${id}`;
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

  public async deleteBookmark(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/bookmarks/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
