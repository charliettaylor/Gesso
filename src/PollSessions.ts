import { PollSession, Scope } from '../types/models';
import { CreateSinglePollSessionParams, UpdateSinglePollSessionParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class PollSessions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPollSessionsForPoll(poll_id: string): Promise<PollSession> {
    const endpoint = `/polls/${poll_id}/poll_sessions`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheResultsForSinglePollSession(poll_id: string, id: string): Promise<PollSession> {
    const endpoint = `/polls/${poll_id}/poll_sessions/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSinglePollSession(poll_id: string, params: CreateSinglePollSessionParams): Promise<Scope> {
    const endpoint = `/polls/${poll_id}/poll_sessions`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateSinglePollSession(
    poll_id: string,
    id: string,
    params: UpdateSinglePollSessionParams,
  ): Promise<Scope> {
    const endpoint = `/polls/${poll_id}/poll_sessions/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deletePollSession(poll_id: string, id: string): Promise<Scope> {
    const endpoint = `/polls/${poll_id}/poll_sessions/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async openPollSession(poll_id: string, id: string): Promise<Scope> {
    const endpoint = `/polls/${poll_id}/poll_sessions/${id}/open`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async closeAnOpenedPollSession(poll_id: string, id: string): Promise<Scope> {
    const endpoint = `/polls/${poll_id}/poll_sessions/${id}/close`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listOpenedPollSessions(): Promise<Scope> {
    const endpoint = `/poll_sessions/opened`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listClosedPollSessions(): Promise<Scope> {
    const endpoint = `/poll_sessions/closed`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
