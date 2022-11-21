import { Scope, SubmissionComment } from '../types/models';
import { EditSubmissionCommentParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class SubmissionComments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async editSubmissionComment(
    course_id: string,
    assignment_id: string,
    user_id: string,
    id: string,
    params: EditSubmissionCommentParams,
  ): Promise<SubmissionComment> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/comments/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteSubmissionComment(
    course_id: string,
    assignment_id: string,
    user_id: string,
    id: string,
  ): Promise<SubmissionComment> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/comments/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async uploadFile(course_id: string, assignment_id: string, user_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/comments/files`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
