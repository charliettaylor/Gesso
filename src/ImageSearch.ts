import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import {
  ConfirmImageSelectionParams,
  FindImagesParams,
} from "../types/params.ts";

export class ImageSearch extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async findImages(params?: FindImagesParams, body?: unknown): Promise<unknown> {
    const endpoint = "/api/v1/image_search";
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

  public async confirmImageSelection(
    id: string,
    params?: ConfirmImageSelectionParams,
    body?: unknown,
  ): Promise<unknown> {
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
