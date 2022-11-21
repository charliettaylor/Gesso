import { Poll, Scope } from '../types/models';
import { CreateSinglePollSubmissionParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class PollSubmissions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSinglePollSubmission(poll_id: string, poll_session_id: string, id: string): Promise<Poll> {
    const endpoint = `/polls/${poll_id}/poll_sessions/${poll_session_id}/poll_submissions/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSinglePollSubmission(
    poll_id: string,
    poll_session_id: string,
    params: CreateSinglePollSubmissionParams,
  ): Promise<Scope> {
    const endpoint = `/polls/${poll_id}/poll_sessions/${poll_session_id}/poll_submissions`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
