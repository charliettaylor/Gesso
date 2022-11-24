import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import { GetSingleAssignmentltiParams } from "../types/params.ts";

export class PlagiarismDetectionPlatformAssignments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSingleAssignmentlti(
    assignment_id: string,
    params?: GetSingleAssignmentltiParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/api/lti/assignments/${assignment_id}`;
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
}
