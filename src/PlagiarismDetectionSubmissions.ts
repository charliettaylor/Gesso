import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';

export class PlagiarismDetectionSubmissions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSingleSubmission(assignment_id: string, submission_id: string): Promise<Scope> {
    const endpoint = `/api/lti/assignments/${assignment_id}/submissions/${submission_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheHistoryOfSingleSubmission(assignment_id: string, submission_id: string): Promise<Scope[]> {
    const endpoint = `/api/lti/assignments/${assignment_id}/submissions/${submission_id}/history`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
