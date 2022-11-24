import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { UpdateAnOutcomeParams, ShowAnOutcomeParams } from '../types/params';
  
export class Outcomes extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async showAnOutcome(id: string, params?: ShowAnOutcomeParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/outcomes/${id}`;
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

  public async updateAnOutcome(id: string, params?: UpdateAnOutcomeParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/outcomes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAlignedAssignmentsForAnOutcomeInCourseForParticularStudent(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/outcome_alignments`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
