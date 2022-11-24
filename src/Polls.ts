import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Poll, Scope } from "../types/models.ts";
import {
  CreateSinglePollParams,
  UpdateSinglePollParams,
} from "../types/params.ts";

export class Polls extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPolls(body?: unknown): Promise<Poll> {
    const endpoint = "/api/v1/polls";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSinglePoll(id: string, body?: unknown): Promise<Poll> {
    const endpoint = `/api/v1/polls/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSinglePoll(
    params?: CreateSinglePollParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/polls";
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

  public async updateSinglePoll(
    id: string,
    params?: UpdateSinglePollParams,
    body?: unknown,
  ): Promise<Scope> {
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

  public async deletePoll(id: string, body?: unknown): Promise<Scope> {
    const endpoint = `/api/v1/polls/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
