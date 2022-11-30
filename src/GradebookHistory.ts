import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import {
  Day,
  Grade,
  SubmissionHistory,
  SubmissionVersion,
} from "../types/models.ts";
import {
  DaysInGradebookHistoryForThisCourseParams,
  DetailsForGivenDateInGradebookHistoryForThisCourseParams,
  ListsSubmissionsParams,
  ListUncollatedSubmissionVersionsParams,
} from "../types/params.ts";

export class GradebookHistory extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async daysInGradebookHistoryForThisCourse(
    course_id: string,
    params?: DaysInGradebookHistoryForThisCourseParams,
    body?: unknown,
  ): Promise<Day[]> {
    const endpoint = `/api/v1/courses/${course_id}/gradebook_history/days`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Day[];
    }

    return Promise.reject(response.statusText);
  }

  public async detailsForGivenDateInGradebookHistoryForThisCourse(
    course_id: string,
    date: string,
    params?: DetailsForGivenDateInGradebookHistoryForThisCourseParams,
    body?: unknown,
  ): Promise<Grade[]> {
    const endpoint = `/api/v1/courses/${course_id}/gradebook_history/${date}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Grade[];
    }

    return Promise.reject(response.statusText);
  }

  public async listsSubmissions(
    course_id: string,
    date: string,
    grader_id: string,
    assignment_id: string,
    params?: ListsSubmissionsParams,
    body?: unknown,
  ): Promise<SubmissionHistory[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/gradebook_history/${date}/graders/${grader_id}/assignments/${assignment_id}/submissions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as SubmissionHistory[];
    }

    return Promise.reject(response.statusText);
  }

  public async listUncollatedSubmissionVersions(
    course_id: string,
    params?: ListUncollatedSubmissionVersionsParams,
    body?: unknown,
  ): Promise<SubmissionVersion[]> {
    const endpoint = `/api/v1/courses/${course_id}/gradebook_history/feed`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as SubmissionVersion[];
    }

    return Promise.reject(response.statusText);
  }
}
