import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Report } from "../types/models.ts";
import {
  CreateAnOriginalityReportParams,
  EditAnOriginalityReportParams,
} from "../types/params.ts";

export class OriginalityReports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createAnOriginalityReport(
    assignment_id: string,
    submission_id: string,
    params?: CreateAnOriginalityReportParams,
    body?: unknown,
  ): Promise<Report> {
    const endpoint =
      `/api/v1/api/lti/assignments/${assignment_id}/submissions/${submission_id}/originality_report`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Report;
    }

    return Promise.reject(response);
  }

  public async editAnOriginalityReport(
    assignment_id: string,
    submission_id: string,
    id: string,
    params?: EditAnOriginalityReportParams,
    body?: unknown,
  ): Promise<Report> {
    const endpoint =
      `/api/v1/api/lti/assignments/${assignment_id}/submissions/${submission_id}/originality_report/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Report;
    }

    return Promise.reject(response);
  }

  public async showAnOriginalityReport(
    assignment_id: string,
    submission_id: string,
    id: string,
    body?: unknown,
  ): Promise<Report> {
    const endpoint =
      `/api/v1/api/lti/assignments/${assignment_id}/submissions/${submission_id}/originality_report/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Report;
    }

    return Promise.reject(response);
  }
}
