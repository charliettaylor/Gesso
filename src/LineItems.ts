import { LineItem } from '../types/models';
import { CreateLineItemParams, ListLineItemsParams, ShowLineItemParams, UpdateLineItemParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class LineItems extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createLineItem(course_id: string, params: CreateLineItemParams): Promise<LineItem> {
    const endpoint = `/api/lti/courses/${course_id}/line_items`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateLineItem(course_id: string, id: string, params: UpdateLineItemParams): Promise<LineItem> {
    const endpoint = `/api/lti/courses/${course_id}/line_items/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showLineItem(course_id: string, id: string, params: ShowLineItemParams): Promise<LineItem> {
    const endpoint = `/api/lti/courses/${course_id}/line_items/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listLineItems(course_id: string, params: ListLineItemsParams): Promise<LineItem> {
    const endpoint = `/api/lti/courses/${course_id}/line_items`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteLineItem(course_id: string, id: string): Promise<LineItem> {
    const endpoint = `/api/lti/courses/${course_id}/line_items/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
