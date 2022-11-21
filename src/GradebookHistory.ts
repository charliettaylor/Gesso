import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Day, Grade, SubmissionHistory, SubmissionVersion } from '../types/models';
import {
  DaysInGradebookHistoryForThisCourseParams,
  ListsSubmissionsParams,
  DetailsForGivenDateInGradebookHistoryForThisCourseParams,
  ListUncollatedSubmissionVersionsParams,
} from '../types/params';

export class GradebookHistory extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async daysInGradebookHistoryForThisCourse(
    course_id: string,
    params: DaysInGradebookHistoryForThisCourseParams,
  ): Promise<Day[]> {
    const endpoint = `/courses/${course_id}/gradebook_history/days`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async detailsForGivenDateInGradebookHistoryForThisCourse(
    course_id: string,
    date: string,
    params: DetailsForGivenDateInGradebookHistoryForThisCourseParams,
  ): Promise<Grade[]> {
    const endpoint = `/courses/${course_id}/gradebook_history/${date}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listsSubmissions(
    course_id: string,
    date: string,
    grader_id: string,
    assignment_id: string,
    params: ListsSubmissionsParams,
  ): Promise<SubmissionHistory[]> {
    const endpoint = `/courses/${course_id}/gradebook_history/${date}/graders/${grader_id}/assignments/${assignment_id}/submissions`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listUncollatedSubmissionVersions(
    course_id: string,
    params: ListUncollatedSubmissionVersionsParams,
  ): Promise<SubmissionVersion[]> {
    const endpoint = `/courses/${course_id}/gradebook_history/feed`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
