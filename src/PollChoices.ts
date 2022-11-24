import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import {
  CreateSinglePollChoiceParams,
  UpdateSinglePollChoiceParams,
} from "../types/params.ts";

export class PollChoices extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPollChoicesInPoll(
    poll_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_choices`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSinglePollChoice(
    poll_id: string,
    id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_choices/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSinglePollChoice(
    poll_id: string,
    params?: CreateSinglePollChoiceParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_choices`;
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

  public async updateSinglePollChoice(
    poll_id: string,
    id: string,
    params?: UpdateSinglePollChoiceParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_choices/${id}`;
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

  public async deletePollChoice(
    poll_id: string,
    id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_choices/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
