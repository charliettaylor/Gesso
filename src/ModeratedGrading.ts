import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { User, Scope } from '../types/models';
import {
  SelectStudentsForModerationParams,
  ShowProvisionalGradeStatusForStudentParams,
} from '../types/params';

export class ModeratedGrading extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listStudentsSelectedForModeration(course_id: string, assignment_id: string): Promise<User[]> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/moderated_students`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async selectStudentsForModeration(
    course_id: string,
    assignment_id: string,
    params: SelectStudentsForModerationParams,
  ): Promise<User[]> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/moderated_students`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async bulkSelectProvisionalGrades(course_id: string, assignment_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/provisional_grades/bulk_select`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showProvisionalGradeStatusForStudent(
    course_id: string,
    assignment_id: string,
    params: ShowProvisionalGradeStatusForStudentParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/provisional_grades/status`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async selectProvisionalGrade(
    course_id: string,
    assignment_id: string,
    provisional_grade_id: string,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/provisional_grades/${provisional_grade_id}/select`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async publishProvisionalGradesForAnAssignment(course_id: string, assignment_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/provisional_grades/publish`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showAnonProvisionalGradeStatusForStudent(
    course_id: string,
    assignment_id: string,
    params: ShowProvisionalGradeStatusForStudentParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/anonymous_provisional_grades/status`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
