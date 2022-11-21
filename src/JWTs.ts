import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Jwt } from '../types/models';
import { CreateJwtParams, RefreshJwtParams } from '../types/params';

export class Jwts extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createJwt(params: CreateJwtParams): Promise<Jwt> {
    const endpoint = `/jwts`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async refreshJwt(params: RefreshJwtParams): Promise<Jwt> {
    const endpoint = `/jwts/refresh`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
