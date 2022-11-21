import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import { SetExtensionsForStudentAssignmentSubmissionsParams } from '../types/params';

export class AssignmentExtensions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async setExtensionsForStudentAssignmentSubmissions(
    course_id: string,
    assignment_id: string,
    params: SetExtensionsForStudentAssignmentSubmissionsParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/extensions`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
