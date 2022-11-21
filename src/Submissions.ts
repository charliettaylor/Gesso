import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope, Submission, Account, UserDisplay, Progress } from '../types/models';
import {
  GradeOrCommentOnMultipleSubmissionsParams,
  ListAssignmentSubmissionsParams,
  SubmissionSummaryParams,
  GetSingleSubmissionParams,
  SubmitAnAssignmentParams,
  ListSubmissionsForMultipleAssignmentsParams,
  GetSingleSubmissionByAnonymousIdParams,
  GradeOrCommentOnSubmissionParams,
  GradeOrCommentOnSubmissionByAnonymousIdParams,
  ListMultipleAssignmentsGradeableStudentsParams,
} from '../types/params';

export class Submissions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async submitAnAssignment(
    course_id: string,
    assignment_id: string,
    params: SubmitAnAssignmentParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAssignmentSubmissions(
    course_id: string,
    assignment_id: string,
    params: ListAssignmentSubmissionsParams,
  ): Promise<Submission[]> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listSubmissionsForMultipleAssignments(
    course_id: string,
    params: ListSubmissionsForMultipleAssignmentsParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/students/submissions`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleSubmission(
    course_id: string,
    assignment_id: string,
    user_id: string,
    params: GetSingleSubmissionParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleSubmissionByAnonymousId(
    course_id: string,
    assignment_id: string,
    anonymous_id: string,
    params: GetSingleSubmissionByAnonymousIdParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/anonymous_submissions/${anonymous_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async uploadFile(course_id: string, assignment_id: string, user_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/files`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async gradeOrCommentOnSubmission(
    course_id: string,
    assignment_id: string,
    user_id: string,
    params: GradeOrCommentOnSubmissionParams,
  ): Promise<Account> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async gradeOrCommentOnSubmissionByAnonymousId(
    course_id: string,
    assignment_id: string,
    anonymous_id: string,
    params: GradeOrCommentOnSubmissionByAnonymousIdParams,
  ): Promise<Account> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/anonymous_submissions/${anonymous_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listGradeableStudents(course_id: string, assignment_id: string): Promise<UserDisplay[]> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/gradeable_students`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listMultipleAssignmentsGradeableStudents(
    course_id: string,
    params: ListMultipleAssignmentsGradeableStudentsParams,
  ): Promise<Scope[]> {
    const endpoint = `/courses/${course_id}/assignments/gradeable_students`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async gradeOrCommentOnMultipleSubmissions(
    course_id: string,
    params: GradeOrCommentOnMultipleSubmissionsParams,
  ): Promise<Progress> {
    const endpoint = `/courses/${course_id}/submissions/update_grades`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markSubmissionAsRead(course_id: string, assignment_id: string, user_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/read`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markSubmissionAsUnread(course_id: string, assignment_id: string, user_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/read`;
    const response = await this.delete(endpoint);
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
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/read/${item}`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getRubricAssessmentsReadState(
    course_id: string,
    assignment_id: string,
    user_id: string,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/rubric_comments/read`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markRubricAssessmentsAsRead(course_id: string, assignment_id: string, user_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/rubric_comments/read`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getDocumentAnnotationsReadState(
    course_id: string,
    assignment_id: string,
    user_id: string,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/document_annotations/read`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markDocumentAnnotationsAsRead(
    course_id: string,
    assignment_id: string,
    user_id: string,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}/document_annotations/read`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async submissionSummary(
    course_id: string,
    assignment_id: string,
    params: SubmissionSummaryParams,
  ): Promise<any> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submission_summary`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
