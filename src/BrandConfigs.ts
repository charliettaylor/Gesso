import { Scope } from '../types/models';
import {} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class BrandConfigs extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getTheBrandConfigVariablesThatShouldBeUsedForThisDomain(): Promise<Scope> {
    const endpoint = `/brand_variables`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
