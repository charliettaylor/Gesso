import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope, Result, Assessment } from '../types/models';
import { ListLiveAssessmentResultsParams } from '../types/params';

export class LiveAssessments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createLiveAssessmentResults(course_id: string, assessment_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/live_assessments/${assessment_id}/results`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listLiveAssessmentResults(
    course_id: string,
    assessment_id: string,
    params: ListLiveAssessmentResultsParams,
  ): Promise<Result> {
    const endpoint = `/courses/${course_id}/live_assessments/${assessment_id}/results`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createOrFindLiveAssessment(course_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/live_assessments`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listLiveAssessments(course_id: string): Promise<Assessment> {
    const endpoint = `/courses/${course_id}/live_assessments`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
