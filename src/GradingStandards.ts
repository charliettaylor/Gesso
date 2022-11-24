import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { GradingStandard } from "../types/models.ts";
import { CreateNewGradingStandardParams } from "../types/params.ts";

export class GradingStandards extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createNewGradingStandard(
    account_id: string,
    params?: CreateNewGradingStandardParams,
    body?: unknown,
  ): Promise<GradingStandard> {
    const endpoint = `/api/v1/accounts/${account_id}/grading_standards`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as GradingStandard;
    }

    return Promise.reject(response);
  }

  public async listTheGradingStandardsAvailableInContext(
    course_id: string,
    body?: unknown,
  ): Promise<GradingStandard[]> {
    const endpoint = `/api/v1/courses/${course_id}/grading_standards`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as GradingStandard[];
    }

    return Promise.reject(response);
  }

  public async getSingleGradingStandardInContext(
    course_id: string,
    grading_standard_id: string,
    body?: unknown,
  ): Promise<GradingStandard> {
    const endpoint =
      `/api/v1/courses/${course_id}/grading_standards/${grading_standard_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as GradingStandard;
    }

    return Promise.reject(response);
  }
}
