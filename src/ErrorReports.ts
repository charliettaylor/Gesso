import { Report } from '../types/models';
import { CreateErrorReportParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class ErrorReports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createErrorReport(params: CreateErrorReportParams): Promise<Report> {
    const endpoint = `/error_reports`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
