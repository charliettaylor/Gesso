import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { PollChoice, Scope } from '../types/models';
import { CreateSinglePollChoiceParams, UpdateSinglePollChoiceParams } from '../types/params';

export class PollChoices extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPollChoicesInPoll(poll_id: string): Promise<PollChoice> {
    const endpoint = `/polls/${poll_id}/poll_choices`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSinglePollChoice(poll_id: string, id: string): Promise<PollChoice> {
    const endpoint = `/polls/${poll_id}/poll_choices/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSinglePollChoice(poll_id: string, params: CreateSinglePollChoiceParams): Promise<Scope> {
    const endpoint = `/polls/${poll_id}/poll_choices`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateSinglePollChoice(
    poll_id: string,
    id: string,
    params: UpdateSinglePollChoiceParams,
  ): Promise<Scope> {
    const endpoint = `/polls/${poll_id}/poll_choices/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deletePollChoice(poll_id: string, id: string): Promise<Scope> {
    const endpoint = `/polls/${poll_id}/poll_choices/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
