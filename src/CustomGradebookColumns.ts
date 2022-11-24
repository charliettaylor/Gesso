import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { ColumnDatum, CustomColumn, Progress, Scope } from "../types/models.ts";
import {
  BulkUpdateColumnDataParams,
  CreateCustomGradebookColumnParams,
  ListCustomGradebookColumnsParams,
  ListEntriesForColumnParams,
  ReorderCustomColumnsParams,
  UpdateColumnDataParams,
} from "../types/params.ts";

export class CustomGradebookColumns extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCustomGradebookColumns(
    course_id: string,
    params?: ListCustomGradebookColumnsParams,
    body?: unknown,
  ): Promise<CustomColumn[]> {
    const endpoint = `/api/v1/courses/${course_id}/custom_gradebook_columns`;
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

  public async createCustomGradebookColumn(
    course_id: string,
    params?: CreateCustomGradebookColumnParams,
    body?: unknown,
  ): Promise<CustomColumn> {
    const endpoint = `/api/v1/courses/${course_id}/custom_gradebook_columns`;
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

  public async updateCustomGradebookColumn(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<CustomColumn> {
    const endpoint =
      `/api/v1/courses/${course_id}/custom_gradebook_columns/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteCustomGradebookColumn(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<CustomColumn> {
    const endpoint =
      `/api/v1/courses/${course_id}/custom_gradebook_columns/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async reorderCustomColumns(
    course_id: string,
    params?: ReorderCustomColumnsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/custom_gradebook_columns/reorder`;
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

  public async listEntriesForColumn(
    course_id: string,
    id: string,
    params?: ListEntriesForColumnParams,
    body?: unknown,
  ): Promise<ColumnDatum[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/custom_gradebook_columns/${id}/data`;
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

  public async updateColumnData(
    course_id: string,
    id: string,
    user_id: string,
    params?: UpdateColumnDataParams,
    body?: unknown,
  ): Promise<ColumnDatum> {
    const endpoint =
      `/api/v1/courses/${course_id}/custom_gradebook_columns/${id}/data/${user_id}`;
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

  public async bulkUpdateColumnData(
    course_id: string,
    params?: BulkUpdateColumnDataParams,
    body?: unknown,
  ): Promise<Progress> {
    const endpoint =
      `/api/v1/courses/${course_id}/custom_gradebook_column_data`;
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
}
