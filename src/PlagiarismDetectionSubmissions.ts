import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';


export class PlagiarismDetectionSubmissions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSingleSubmission(assignment_id: string, submission_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/api/lti/assignments/${assignment_id}/submissions/${submission_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getTheHistoryOfSingleSubmission(assignment_id: string, submission_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/api/lti/assignments/${assignment_id}/submissions/${submission_id}/history`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
