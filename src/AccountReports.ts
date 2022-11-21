import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Grade, Report } from '../types/models';
import { StartReportParams } from '../types/params';

export class AccountReports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAvailableReports(account_id: string): Promise<Grade> {
    const endpoint = `/accounts/${account_id}/reports`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async startReport(account_id: string, report: string, params: StartReportParams): Promise<Report> {
    const endpoint = `/accounts/${account_id}/reports/${report}`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async indexOfReports(account_id: string, report: string): Promise<Report[]> {
    const endpoint = `/accounts/${account_id}/reports/${report}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async statusOfReport(account_id: string, report: string, id: string): Promise<Report> {
    const endpoint = `/accounts/${account_id}/reports/${report}/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteReport(account_id: string, report: string, id: string): Promise<Report> {
    const endpoint = `/accounts/${account_id}/reports/${report}/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
