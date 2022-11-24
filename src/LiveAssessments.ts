import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import { ListLiveAssessmentResultsParams } from "../types/params.ts";

export class LiveAssessments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createLiveAssessmentResults(
    course_id: string,
    assessment_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/live_assessments/${assessment_id}/results`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listLiveAssessmentResults(
    course_id: string,
    assessment_id: string,
    params?: ListLiveAssessmentResultsParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/courses/${course_id}/live_assessments/${assessment_id}/results`;
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

  public async createOrFindLiveAssessment(
    course_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/courses/${course_id}/live_assessments`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listLiveAssessments(
    course_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/courses/${course_id}/live_assessments`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
