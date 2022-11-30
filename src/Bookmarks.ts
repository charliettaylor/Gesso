import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Bookmark, Folder, Scope } from "../types/models.ts";
import { CreateBookmarkParams, UpdateBookmarkParams } from "../types/params.ts";

export class Bookmarks extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listBookmarks(body?: unknown): Promise<Bookmark[]> {
    const endpoint = "/api/v1/users/self/bookmarks";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Bookmark[];
    }

    return Promise.reject(new Error(response.statusText));
  }

  public async createBookmark(
    params?: CreateBookmarkParams,
    body?: unknown,
  ): Promise<Bookmark> {
    const endpoint = "/api/v1/users/self/bookmarks";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Bookmark;
    }

    return Promise.reject(response.statusText);
  }

  public async getBookmark(id: string, body?: unknown): Promise<Bookmark> {
    const endpoint = `/api/v1/users/self/bookmarks/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Bookmark;
    }

    return Promise.reject(response.statusText);
  }

  public async updateBookmark(
    id: string,
    params?: UpdateBookmarkParams,
    body?: unknown,
  ): Promise<Folder> {
    const endpoint = `/api/v1/users/self/bookmarks/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Folder;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteBookmark(id: string, body?: unknown): Promise<Scope> {
    const endpoint = `/api/v1/users/self/bookmarks/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
