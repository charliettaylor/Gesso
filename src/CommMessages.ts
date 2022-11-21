import { CommMessage } from '../types/models';
import { ListOfCommmessagesForUserParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class CommMessages extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listOfCommmessagesForUser(params: ListOfCommmessagesForUserParams): Promise<CommMessage[]> {
    const endpoint = `/comm_messages`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
