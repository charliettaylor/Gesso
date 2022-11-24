import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope, User } from "../types/models.ts";
import {
  SelectStudentsForModerationParams,
  ShowProvisionalGradeStatusForStudentParams,
} from "../types/params.ts";

export class ModeratedGrading extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listStudentsSelectedForModeration(
    course_id: string,
    assignment_id: string,
    body?: unknown,
  ): Promise<User[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/moderated_students`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as User[];
    }

    return Promise.reject(response);
  }

  public async selectStudentsForModeration(
    course_id: string,
    assignment_id: string,
    params?: SelectStudentsForModerationParams,
    body?: unknown,
  ): Promise<User[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/moderated_students`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as User[];
    }

    return Promise.reject(response);
  }

  public async bulkSelectProvisionalGrades(
    course_id: string,
    assignment_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/provisional_grades/bulk_select`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async showProvisionalGradeStatusForStudent(
    course_id: string,
    assignment_id: string,
    params?: ShowProvisionalGradeStatusForStudentParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/provisional_grades/status`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async selectProvisionalGrade(
    course_id: string,
    assignment_id: string,
    provisional_grade_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/provisional_grades/${provisional_grade_id}/select`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async publishProvisionalGradesForAnAssignment(
    course_id: string,
    assignment_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/provisional_grades/publish`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async showAnonProvisionalGradeStatusForStudent(
    course_id: string,
    assignment_id: string,
    params?: ShowProvisionalGradeStatusForStudentParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/anonymous_provisional_grades/status`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }
}
