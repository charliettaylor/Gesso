import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Enrollment, Scope } from "../types/models.ts";
import {
  ConcludeDeactivateOrDeleteAnEnrollmentParams,
  EnrollmentByIdParams,
  EnrollUserParams,
  ListEnrollmentsParams,
} from "../types/params.ts";

export class Enrollments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listEnrollments(
    course_id: string,
    params?: ListEnrollmentsParams,
    body?: unknown,
  ): Promise<Enrollment[]> {
    const endpoint = `/api/v1/courses/${course_id}/enrollments`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Enrollment[];
    }

    return Promise.reject(response);
  }

  public async enrollmentById(
    account_id: string,
    id: string,
    params?: EnrollmentByIdParams,
    body?: unknown,
  ): Promise<Enrollment> {
    const endpoint = `/api/v1/accounts/${account_id}/enrollments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Enrollment;
    }

    return Promise.reject(response);
  }

  public async enrollUser(
    course_id: string,
    params?: EnrollUserParams,
    body?: unknown,
  ): Promise<Enrollment> {
    const endpoint = `/api/v1/courses/${course_id}/enrollments`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Enrollment;
    }

    return Promise.reject(response);
  }

  public async concludeDeactivateOrDeleteAnEnrollment(
    course_id: string,
    id: string,
    params?: ConcludeDeactivateOrDeleteAnEnrollmentParams,
    body?: unknown,
  ): Promise<Enrollment> {
    const endpoint = `/api/v1/courses/${course_id}/enrollments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Enrollment;
    }

    return Promise.reject(response);
  }

  public async acceptCourseInvitation(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/enrollments/${id}/accept`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async rejectCourseInvitation(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/enrollments/${id}/reject`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async reactivateAnEnrollment(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Enrollment> {
    const endpoint =
      `/api/v1/courses/${course_id}/enrollments/${id}/reactivate`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Enrollment;
    }

    return Promise.reject(response);
  }

  public async addsLastAttendedDateToStudentEnrollmentInCourse(
    course_id: string,
    user_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/users/${user_id}/last_attended`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }
}
