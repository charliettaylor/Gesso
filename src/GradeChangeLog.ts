import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Grade } from '../types/models';
import {
  QueryByAssignmentParams,
  QueryByStudentParams,
  QueryByGraderParams,
  AdvancedQueryParams,
  QueryByCourseParams,
} from '../types/params';

export class GradeChangeLog extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async queryByAssignment(assignment_id: string, params: QueryByAssignmentParams): Promise<Grade[]> {
    const endpoint = `/audit/grade_change/assignments/${assignment_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async queryByCourse(course_id: string, params: QueryByCourseParams): Promise<Grade[]> {
    const endpoint = `/audit/grade_change/courses/${course_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async queryByStudent(student_id: string, params: QueryByStudentParams): Promise<Grade[]> {
    const endpoint = `/audit/grade_change/students/${student_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async queryByGrader(grader_id: string, params: QueryByGraderParams): Promise<Grade[]> {
    const endpoint = `/audit/grade_change/graders/${grader_id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async advancedQuery(params: AdvancedQueryParams): Promise<Grade[]> {
    const endpoint = `/audit/grade_change`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
