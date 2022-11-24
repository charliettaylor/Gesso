import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Report } from "../types/models.ts";
import { CreateErrorReportParams } from "../types/params.ts";

export class ErrorReports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createErrorReport(
    params?: CreateErrorReportParams,
    body?: unknown,
  ): Promise<Report> {
    const endpoint = "/api/v1/error_reports";
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
