import { DeveloperKey } from '../types/models';
import { UpdatePublicJwkParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class PublicJWK extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async updatePublicJwk(params: UpdatePublicJwkParams): Promise<DeveloperKey> {
    const endpoint = `/api/lti/developer_key/update_public_jwk`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
