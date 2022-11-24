import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { FindImagesParams, ConfirmImageSelectionParams } from '../types/params';
  
export class ImageSearch extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async findImages(params?: FindImagesParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/image_search';
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

  public async confirmImageSelection(id: string, params?: ConfirmImageSelectionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/image_selection/${id}`;
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

}
