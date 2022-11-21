import { Course, Favorite, Group, Scope } from '../types/models';
import {
  AddCourseToFavoritesParams,
  AddGroupToFavoritesParams,
  ListFavoriteCoursesParams,
  RemoveCourseFromFavoritesParams,
  RemoveGroupFromFavoritesParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Favorites extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listFavoriteCourses(params: ListFavoriteCoursesParams): Promise<Course[]> {
    const endpoint = `/users/self/favorites/courses`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listFavoriteGroups(): Promise<Group[]> {
    const endpoint = `/users/self/favorites/groups`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addCourseToFavorites(id: string, params: AddCourseToFavoritesParams): Promise<Favorite> {
    const endpoint = `/users/self/favorites/courses/${id}`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addGroupToFavorites(id: string, params: AddGroupToFavoritesParams): Promise<Favorite> {
    const endpoint = `/users/self/favorites/groups/${id}`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeCourseFromFavorites(id: string, params: RemoveCourseFromFavoritesParams): Promise<Favorite> {
    const endpoint = `/users/self/favorites/courses/${id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeGroupFromFavorites(id: string, params: RemoveGroupFromFavoritesParams): Promise<Favorite> {
    const endpoint = `/users/self/favorites/groups/${id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async resetCourseFavorites(): Promise<Scope> {
    const endpoint = `/users/self/favorites/courses`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async resetGroupFavorites(): Promise<Scope> {
    const endpoint = `/users/self/favorites/groups`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
