import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { ListFavoriteCoursesParams, AddGroupToFavoritesParams, AddCourseToFavoritesParams, RemoveGroupFromFavoritesParams, RemoveCourseFromFavoritesParams } from '../types/params';
  
export class Favorites extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listFavoriteCourses(params?: ListFavoriteCoursesParams, body?: any): Promise<any[]> {
    const endpoint = '/api/v1/users/self/favorites/courses';
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

  public async listFavoriteGroups(body?: any): Promise<any[]> {
    const endpoint = '/api/v1/users/self/favorites/groups';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addCourseToFavorites(id: string, params?: AddCourseToFavoritesParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/favorites/courses/${id}`;
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

  public async addGroupToFavorites(id: string, params?: AddGroupToFavoritesParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/favorites/groups/${id}`;
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

  public async removeCourseFromFavorites(id: string, params?: RemoveCourseFromFavoritesParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/favorites/courses/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeGroupFromFavorites(id: string, params?: RemoveGroupFromFavoritesParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/favorites/groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async resetCourseFavorites(body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/favorites/courses';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async resetGroupFavorites(body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/favorites/groups';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
