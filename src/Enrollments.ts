import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Enrollment, Scope } from '../types/models';
import {
  ConcludeDeactivateOrDeleteAnEnrollmentParams,
  ListEnrollmentsParams,
  EnrollmentByIdParams,
  EnrollUserParams,
} from '../types/params';

export class Enrollments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listEnrollments(course_id: string, params: ListEnrollmentsParams): Promise<Enrollment[]> {
    const endpoint = `/courses/${course_id}/enrollments`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async enrollmentById(account_id: string, id: string, params: EnrollmentByIdParams): Promise<Enrollment> {
    const endpoint = `/accounts/${account_id}/enrollments/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async enrollUser(course_id: string, params: EnrollUserParams): Promise<Enrollment> {
    const endpoint = `/courses/${course_id}/enrollments`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async concludeDeactivateOrDeleteAnEnrollment(
    course_id: string,
    id: string,
    params: ConcludeDeactivateOrDeleteAnEnrollmentParams,
  ): Promise<Enrollment> {
    const endpoint = `/courses/${course_id}/enrollments/${id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async acceptCourseInvitation(course_id: string, id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/enrollments/${id}/accept`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async rejectCourseInvitation(course_id: string, id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/enrollments/${id}/reject`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async reactivateAnEnrollment(course_id: string, id: string): Promise<Enrollment> {
    const endpoint = `/courses/${course_id}/enrollments/${id}/reactivate`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addsLastAttendedDateToStudentEnrollmentInCourse(course_id: string, user_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/users/${user_id}/last_attended`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
