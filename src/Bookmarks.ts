import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Bookmark, Folder, Scope } from '../types/models';
import { CreateBookmarkParams, UpdateBookmarkParams } from '../types/params';

export class Bookmarks extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listBookmarks(): Promise<Bookmark[]> {
    const endpoint = `/users/self/bookmarks`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createBookmark(params: CreateBookmarkParams): Promise<Bookmark> {
    const endpoint = `/users/self/bookmarks`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getBookmark(id: string): Promise<Bookmark> {
    const endpoint = `/users/self/bookmarks/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateBookmark(id: string, params: UpdateBookmarkParams): Promise<Folder> {
    const endpoint = `/users/self/bookmarks/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteBookmark(id: string): Promise<Scope> {
    const endpoint = `/users/self/bookmarks/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
