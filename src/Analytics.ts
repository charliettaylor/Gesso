import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import {
  Assignment,
  Conversation,
  Course,
  Grade,
  Page,
} from "../types/models.ts";
import {
  GetCourselevelAssignmentDataParams,
  GetCourselevelStudentSummaryDataParams,
} from "../types/params.ts";

export class Analytics extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getDepartmentlevelParticipationData(
    account_id: string,
    term_id: string,
    body?: unknown,
  ): Promise<Course> {
    const endpoint =
      `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/activity`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Course;
    }

    return Promise.reject(response.statusText);
  }

  public async getDepartmentlevelGradeData(
    account_id: string,
    term_id: string,
    body?: unknown,
  ): Promise<Grade> {
    const endpoint =
      `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/grades`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Grade;
    }

    return Promise.reject(response.statusText);
  }

  public async getDepartmentlevelStatistics(
    account_id: string,
    term_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/statistics`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async getDepartmentlevelStatisticsBrokenDownBySubaccount(
    account_id: string,
    term_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/statistics_by_subaccount`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async getCourselevelParticipationData(
    course_id: string,
    body?: unknown,
  ): Promise<Page> {
    const endpoint = `/api/v1/courses/${course_id}/analytics/activity`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Page;
    }

    return Promise.reject(response.statusText);
  }

  public async getCourselevelAssignmentData(
    course_id: string,
    params?: GetCourselevelAssignmentDataParams,
    body?: unknown,
  ): Promise<Assignment[]> {
    const endpoint = `/api/v1/courses/${course_id}/analytics/assignments`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment[];
    }

    return Promise.reject(response.statusText);
  }

  public async getCourselevelStudentSummaryData(
    course_id: string,
    params?: GetCourselevelStudentSummaryDataParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/courses/${course_id}/analytics/student_summaries`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async getUserinacourselevelParticipationData(
    course_id: string,
    student_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/analytics/users/${student_id}/activity`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async getUserinacourselevelAssignmentData(
    course_id: string,
    student_id: string,
    body?: unknown,
  ): Promise<Assignment[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/analytics/users/${student_id}/assignments`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment[];
    }

    return Promise.reject(response.statusText);
  }

  public async getUserinacourselevelMessagingData(
    course_id: string,
    student_id: string,
    body?: unknown,
  ): Promise<Conversation> {
    const endpoint =
      `/api/v1/courses/${course_id}/analytics/users/${student_id}/communication`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Conversation;
    }

    return Promise.reject(response.statusText);
  }
}
