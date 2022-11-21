import { SharedBrandConfig } from '../types/models';
import { ShareBrandconfigthemeParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class SharedBrandConfigs extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async shareBrandconfigtheme(
    account_id: string,
    params: ShareBrandconfigthemeParams,
  ): Promise<SharedBrandConfig> {
    const endpoint = `/accounts/${account_id}/shared_brand_configs`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateSharedTheme(account_id: string, id: string): Promise<SharedBrandConfig> {
    const endpoint = `/accounts/${account_id}/shared_brand_configs/${id}`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async unshareBrandconfigtheme(id: string): Promise<SharedBrandConfig> {
    const endpoint = `/shared_brand_configs/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
