import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import { ConfirmImageSelectionParams, FindImagesParams } from '../types/params';

export class ImageSearch extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async findImages(params: FindImagesParams): Promise<Scope> {
    const endpoint = `/image_search`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async confirmImageSelection(id: string, params: ConfirmImageSelectionParams): Promise<Scope> {
    const endpoint = `/image_selection/${id}`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
