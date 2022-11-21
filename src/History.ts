import { HistoryEntry } from '../types/models';
import {} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class History extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listRecentHistoryForUser(user_id: string): Promise<HistoryEntry[]> {
    const endpoint = `/users/${user_id}/history`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
