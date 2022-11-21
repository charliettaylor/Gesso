import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import {
  GetVisibleCourseNavigationToolsParams,
  CreateAnExternalToolParams,
  GetSessionlessLaunchUrlForAnExternalToolParams,
  ListExternalToolsParams,
} from '../types/params';

export class ExternalTools extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listExternalTools(course_id: string, params: ListExternalToolsParams): Promise<any[]> {
    const endpoint = `/courses/${course_id}/external_tools`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSessionlessLaunchUrlForAnExternalTool(
    course_id: string,
    params: GetSessionlessLaunchUrlForAnExternalToolParams,
  ): Promise<any> {
    const endpoint = `/courses/${course_id}/external_tools/sessionless_launch`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleExternalTool(course_id: string, external_tool_id: string): Promise<any> {
    const endpoint = `/courses/${course_id}/external_tools/${external_tool_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createAnExternalTool(course_id: string, params: CreateAnExternalToolParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/external_tools`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editAnExternalTool(course_id: string, external_tool_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/external_tools/${external_tool_id}`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteAnExternalTool(course_id: string, external_tool_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/external_tools/${external_tool_id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addToolToRceFavorites(account_id: string, id: string): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/external_tools/rce_favorites/${id}`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeToolFromRceFavorites(account_id: string, id: string): Promise<Scope> {
    const endpoint = `/accounts/${account_id}/external_tools/rce_favorites/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getVisibleCourseNavigationTools(params: GetVisibleCourseNavigationToolsParams): Promise<Scope[]> {
    const endpoint = `/external_tools/visible_course_nav_tools`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getVisibleCourseNavigationToolsForSingleCourse(course_id: string): Promise<Scope[]> {
    const endpoint = `/courses/${course_id}/external_tools/visible_course_nav_tools`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
