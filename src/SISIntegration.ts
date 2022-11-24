import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Scope } from "../types/models.ts";
import {
  DisableAssignmentsCurrentlyEnabledForGradeExportToSisParams,
  RetrieveAssignmentsEnabledForGradeExportToSisParams,
} from "../types/params.ts";

export class SISIntegration extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async retrieveAssignmentsEnabledForGradeExportToSis(
    account_id: string,
    params?: RetrieveAssignmentsEnabledForGradeExportToSisParams,
    body?: unknown,
  ): Promise<Scope[]> {
    const endpoint = `/api/v1/api/sis/accounts/${account_id}/assignments`;
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

  public async disableAssignmentsCurrentlyEnabledForGradeExportToSis(
    course_id: string,
    params?: DisableAssignmentsCurrentlyEnabledForGradeExportToSisParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/api/sis/courses/${course_id}/disable_post_to_sis`;
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
}
