import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { UpdateSinglePollParams, CreateSinglePollParams } from '../types/params';
  
export class Polls extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPolls(body?: any): Promise<any> {
    const endpoint = '/api/v1/polls';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSinglePoll(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/polls/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSinglePoll(params?: CreateSinglePollParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/polls';
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

  public async updateSinglePoll(id: string, params?: UpdateSinglePollParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/polls/${id}`;
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

  public async deletePoll(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/polls/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
