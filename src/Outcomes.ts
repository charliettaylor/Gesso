import { Outcome, Scope } from '../types/models';
import { ShowAnOutcomeParams, UpdateAnOutcomeParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Outcomes extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async showAnOutcome(id: string, params: ShowAnOutcomeParams): Promise<Outcome> {
    const endpoint = `/outcomes/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAnOutcome(id: string, params: UpdateAnOutcomeParams): Promise<Outcome> {
    const endpoint = `/outcomes/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAlignedAssignmentsForAnOutcomeInCourseForParticularStudent(course_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/outcome_alignments`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
