import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Report } from '../types/models';
import { CreateErrorReportParams } from '../types/params';
  
export class ErrorReports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createErrorReport(params?: CreateErrorReportParams, body?: any): Promise<Report> {
    const endpoint = '/api/v1/error_reports';
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
