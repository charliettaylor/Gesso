import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";
import {
  CreateAnExternalToolParams,
  GetSessionlessLaunchUrlForAnExternalToolParams,
  GetVisibleCourseNavigationToolsParams,
  ListExternalToolsParams,
} from "../types/params.ts";

export class ExternalTools extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listExternalTools(
    course_id: string,
    params?: ListExternalToolsParams,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint = `/api/v1/courses/${course_id}/external_tools`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown[];
    }

    return Promise.reject(response.statusText);
  }

  public async getSessionlessLaunchUrlForAnExternalTool(
    course_id: string,
    params?: GetSessionlessLaunchUrlForAnExternalToolParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/external_tools/sessionless_launch`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleExternalTool(
    course_id: string,
    external_tool_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/external_tools/${external_tool_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async createAnExternalTool(
    course_id: string,
    params?: CreateAnExternalToolParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/external_tools`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async editAnExternalTool(
    course_id: string,
    external_tool_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/external_tools/${external_tool_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteAnExternalTool(
    course_id: string,
    external_tool_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/external_tools/${external_tool_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async addToolToRceFavorites(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/accounts/${account_id}/external_tools/rce_favorites/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async removeToolFromRceFavorites(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/accounts/${account_id}/external_tools/rce_favorites/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async getVisibleCourseNavigationTools(
    params?: GetVisibleCourseNavigationToolsParams,
    body?: unknown,
  ): Promise<Scope[]> {
    const endpoint = "/api/v1/external_tools/visible_course_nav_tools";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope[];
    }

    return Promise.reject(response.statusText);
  }

  public async getVisibleCourseNavigationToolsForSingleCourse(
    course_id: string,
    body?: unknown,
  ): Promise<Scope[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/external_tools/visible_course_nav_tools`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope[];
    }

    return Promise.reject(response.statusText);
  }
}
