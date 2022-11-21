import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Poll, Scope } from '../types/models';
import { CreateSinglePollParams, UpdateSinglePollParams } from '../types/params';

export class Polls extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPolls(): Promise<Poll> {
    const endpoint = `/polls`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSinglePoll(id: string): Promise<Poll> {
    const endpoint = `/polls/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSinglePoll(params: CreateSinglePollParams): Promise<Scope> {
    const endpoint = `/polls`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateSinglePoll(id: string, params: UpdateSinglePollParams): Promise<Scope> {
    const endpoint = `/polls/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deletePoll(id: string): Promise<Scope> {
    const endpoint = `/polls/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
