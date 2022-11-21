import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { CustomColumn, Scope, ColumnDatum, Progress } from '../types/models';
import {
  UpdateColumnDataParams,
  CreateCustomGradebookColumnParams,
  ReorderCustomColumnsParams,
  ListCustomGradebookColumnsParams,
  BulkUpdateColumnDataParams,
  ListEntriesForColumnParams,
} from '../types/params';

export class CustomGradebookColumns extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCustomGradebookColumns(
    course_id: string,
    params: ListCustomGradebookColumnsParams,
  ): Promise<CustomColumn[]> {
    const endpoint = `/courses/${course_id}/custom_gradebook_columns`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createCustomGradebookColumn(
    course_id: string,
    params: CreateCustomGradebookColumnParams,
  ): Promise<CustomColumn> {
    const endpoint = `/courses/${course_id}/custom_gradebook_columns`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateCustomGradebookColumn(course_id: string, id: string): Promise<CustomColumn> {
    const endpoint = `/courses/${course_id}/custom_gradebook_columns/${id}`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteCustomGradebookColumn(course_id: string, id: string): Promise<CustomColumn> {
    const endpoint = `/courses/${course_id}/custom_gradebook_columns/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async reorderCustomColumns(course_id: string, params: ReorderCustomColumnsParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/custom_gradebook_columns/reorder`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listEntriesForColumn(
    course_id: string,
    id: string,
    params: ListEntriesForColumnParams,
  ): Promise<ColumnDatum[]> {
    const endpoint = `/courses/${course_id}/custom_gradebook_columns/${id}/data`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateColumnData(
    course_id: string,
    id: string,
    user_id: string,
    params: UpdateColumnDataParams,
  ): Promise<ColumnDatum> {
    const endpoint = `/courses/${course_id}/custom_gradebook_columns/${id}/data/${user_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async bulkUpdateColumnData(course_id: string, params: BulkUpdateColumnDataParams): Promise<Progress> {
    const endpoint = `/courses/${course_id}/custom_gradebook_column_data`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
