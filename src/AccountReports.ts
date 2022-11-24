import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Report } from '../types/models';
import { StartReportParams } from '../types/params';
  
export class AccountReports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAvailableReports(account_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/reports`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async startReport(account_id: string, report: string, params?: StartReportParams, body?: any): Promise<Report> {
    const endpoint = `/api/v1/accounts/${account_id}/reports/${report}`;
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

  public async indexOfReports(account_id: string, report: string, body?: any): Promise<Report[]> {
    const endpoint = `/api/v1/accounts/${account_id}/reports/${report}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async statusOfReport(account_id: string, report: string, id: string, body?: any): Promise<Report> {
    const endpoint = `/api/v1/accounts/${account_id}/reports/${report}/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteReport(account_id: string, report: string, id: string, body?: any): Promise<Report> {
    const endpoint = `/api/v1/accounts/${account_id}/reports/${report}/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
