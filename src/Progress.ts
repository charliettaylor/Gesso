import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Progress } from "../types/models.ts";

export class Progress extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async queryProgress(id: string, body?: unknown): Promise<Progress> {
    const endpoint = `/api/v1/progress/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async cancelProgress(id: string, body?: unknown): Promise<Progress> {
    const endpoint = `/api/v1/progress/${id}/cancel`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async queryLtiProgress(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Progress> {
    const endpoint = `/api/v1/api/lti/courses/${course_id}/progress/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
