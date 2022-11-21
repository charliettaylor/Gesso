import { Assignment } from '../types/models';
import { GetSingleAssignmentltiParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class PlagiarismDetectionPlatformAssignments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSingleAssignmentlti(
    assignment_id: string,
    params: GetSingleAssignmentltiParams,
  ): Promise<Assignment> {
    const endpoint = `/api/lti/assignments/${assignment_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
