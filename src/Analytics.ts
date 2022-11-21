import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Course, Grade, Page, Assignment, Conversation } from '../types/models';
import {
  GetCourselevelStudentSummaryDataParams,
  GetCourselevelAssignmentDataParams,
} from '../types/params';

export class Analytics extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getDepartmentlevelParticipationData(account_id: string, term_id: string): Promise<Course> {
    const endpoint = `/accounts/${account_id}/analytics/terms/${term_id}/activity`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getDepartmentlevelGradeData(account_id: string, term_id: string): Promise<Grade> {
    const endpoint = `/accounts/${account_id}/analytics/terms/${term_id}/grades`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getDepartmentlevelStatistics(account_id: string, term_id: string): Promise<any> {
    const endpoint = `/accounts/${account_id}/analytics/terms/${term_id}/statistics`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getDepartmentlevelStatisticsBrokenDownBySubaccount(account_id: string, term_id: string): Promise<any> {
    const endpoint = `/accounts/${account_id}/analytics/terms/${term_id}/statistics_by_subaccount`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourselevelParticipationData(course_id: string): Promise<Page> {
    const endpoint = `/courses/${course_id}/analytics/activity`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourselevelAssignmentData(
    course_id: string,
    params: GetCourselevelAssignmentDataParams,
  ): Promise<Assignment[]> {
    const endpoint = `/courses/${course_id}/analytics/assignments`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourselevelStudentSummaryData(
    course_id: string,
    params: GetCourselevelStudentSummaryDataParams,
  ): Promise<any> {
    const endpoint = `/courses/${course_id}/analytics/student_summaries`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUserinacourselevelParticipationData(course_id: string, student_id: string): Promise<any> {
    const endpoint = `/courses/${course_id}/analytics/users/${student_id}/activity`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUserinacourselevelAssignmentData(course_id: string, student_id: string): Promise<Assignment[]> {
    const endpoint = `/courses/${course_id}/analytics/users/${student_id}/assignments`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUserinacourselevelMessagingData(course_id: string, student_id: string): Promise<Conversation> {
    const endpoint = `/courses/${course_id}/analytics/users/${student_id}/communication`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
