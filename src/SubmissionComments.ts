import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope, SubmissionComment } from "../types/models.ts";
import { EditSubmissionCommentParams } from "../types/params.ts";

export class SubmissionComments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async editSubmissionComment(
    course_id: string,
    assignment_id: string,
    user_id: string,
    id: string,
    params?: EditSubmissionCommentParams,
    body?: unknown,
  ): Promise<SubmissionComment> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/comments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as SubmissionComment;
    }

    return Promise.reject(response);
  }

  public async deleteSubmissionComment(
    course_id: string,
    assignment_id: string,
    user_id: string,
    id: string,
    body?: unknown,
  ): Promise<SubmissionComment> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/comments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as SubmissionComment;
    }

    return Promise.reject(response);
  }

  public async uploadFile(
    course_id: string,
    assignment_id: string,
    user_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/comments/files`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }
}
