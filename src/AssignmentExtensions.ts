import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { SetExtensionsForStudentAssignmentSubmissionsParams } from '../types/params';
  
export class AssignmentExtensions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async setExtensionsForStudentAssignmentSubmissions(course_id: string, assignment_id: string, params?: SetExtensionsForStudentAssignmentSubmissionsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${assignment_id}/extensions`;
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

}
