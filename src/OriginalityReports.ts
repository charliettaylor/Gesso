import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Report } from '../types/models';
import { EditAnOriginalityReportParams, CreateAnOriginalityReportParams } from '../types/params';

export class OriginalityReports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createAnOriginalityReport(
    assignment_id: string,
    submission_id: string,
    params: CreateAnOriginalityReportParams,
  ): Promise<Report> {
    const endpoint = `/api/lti/assignments/${assignment_id}/submissions/${submission_id}/originality_report`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editAnOriginalityReport(
    assignment_id: string,
    submission_id: string,
    id: string,
    params: EditAnOriginalityReportParams,
  ): Promise<Report> {
    const endpoint = `/api/lti/assignments/${assignment_id}/submissions/${submission_id}/originality_report/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showAnOriginalityReport(assignment_id: string, submission_id: string, id: string): Promise<Report> {
    const endpoint = `/api/lti/assignments/${assignment_id}/submissions/${submission_id}/originality_report/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
