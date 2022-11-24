import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Account } from "../types/models.ts";
import {
  GetSingleSubmissionByAnonymousIdParams,
  GetSingleSubmissionParams,
  GradeOrCommentOnMultipleSubmissionsParams,
  GradeOrCommentOnSubmissionByAnonymousIdParams,
  GradeOrCommentOnSubmissionParams,
  ListAssignmentSubmissionsParams,
  ListMultipleAssignmentsGradeableStudentsParams,
  ListSubmissionsForMultipleAssignmentsParams,
  SubmissionSummaryParams,
  SubmitAnAssignmentParams,
} from "../types/params.ts";

export class Submissions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async submitAnAssignment(
    course_id: string,
    assignment_id: string,
    params?: SubmitAnAssignmentParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions`;
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

  public async listAssignmentSubmissions(
    course_id: string,
    assignment_id: string,
    params?: ListAssignmentSubmissionsParams,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listSubmissionsForMultipleAssignments(
    course_id: string,
    params?: ListSubmissionsForMultipleAssignmentsParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/courses/${course_id}/students/submissions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleSubmission(
    course_id: string,
    assignment_id: string,
    user_id: string,
    params?: GetSingleSubmissionParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleSubmissionByAnonymousId(
    course_id: string,
    assignment_id: string,
    anonymous_id: string,
    params?: GetSingleSubmissionByAnonymousIdParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/anonymous_submissions/${anonymous_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async uploadFile(
    course_id: string,
    assignment_id: string,
    user_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/files`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async gradeOrCommentOnSubmission(
    course_id: string,
    assignment_id: string,
    user_id: string,
    params?: GradeOrCommentOnSubmissionParams,
    body?: unknown,
  ): Promise<Account> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async gradeOrCommentOnSubmissionByAnonymousId(
    course_id: string,
    assignment_id: string,
    anonymous_id: string,
    params?: GradeOrCommentOnSubmissionByAnonymousIdParams,
    body?: unknown,
  ): Promise<Account> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/anonymous_submissions/${anonymous_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listGradeableStudents(
    course_id: string,
    assignment_id: string,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/gradeable_students`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listMultipleAssignmentsGradeableStudents(
    course_id: string,
    params?: ListMultipleAssignmentsGradeableStudentsParams,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/gradeable_students`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async gradeOrCommentOnMultipleSubmissions(
    course_id: string,
    params?: GradeOrCommentOnMultipleSubmissionsParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/courses/${course_id}/submissions/update_grades`;
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

  public async markSubmissionAsRead(
    course_id: string,
    assignment_id: string,
    user_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/read`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markSubmissionAsUnread(
    course_id: string,
    assignment_id: string,
    user_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/read`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markSubmissionItemAsRead(
    course_id: string,
    assignment_id: string,
    user_id: string,
    item: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/read/${item}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getRubricAssessmentsReadState(
    course_id: string,
    assignment_id: string,
    user_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/rubric_comments/read`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markRubricAssessmentsAsRead(
    course_id: string,
    assignment_id: string,
    user_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/rubric_comments/read`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getDocumentAnnotationsReadState(
    course_id: string,
    assignment_id: string,
    user_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/document_annotations/read`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markDocumentAnnotationsAsRead(
    course_id: string,
    assignment_id: string,
    user_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/document_annotations/read`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async submissionSummary(
    course_id: string,
    assignment_id: string,
    params?: SubmissionSummaryParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/submission_summary`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
