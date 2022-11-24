import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { GetCourselevelStudentSummaryDataParams, GetCourselevelAssignmentDataParams } from '../types/params';
  
export class Analytics extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getDepartmentlevelParticipationData(account_id: string, term_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/activity`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getDepartmentlevelGradeData(account_id: string, term_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/grades`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getDepartmentlevelStatistics(account_id: string, term_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/statistics`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getDepartmentlevelStatisticsBrokenDownBySubaccount(account_id: string, term_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/statistics_by_subaccount`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourselevelParticipationData(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/analytics/activity`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourselevelAssignmentData(course_id: string, params?: GetCourselevelAssignmentDataParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/analytics/assignments`;
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

  public async getCourselevelStudentSummaryData(course_id: string, params?: GetCourselevelStudentSummaryDataParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/analytics/student_summaries`;
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

  public async getUserinacourselevelParticipationData(course_id: string, student_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/analytics/users/${student_id}/activity`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUserinacourselevelAssignmentData(course_id: string, student_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/analytics/users/${student_id}/assignments`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUserinacourselevelMessagingData(course_id: string, student_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/analytics/users/${student_id}/communication`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
