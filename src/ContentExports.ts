import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { ContentExport } from "../types/models.ts";
import { ExportContentParams } from "../types/params.ts";

export class ContentExports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listContentExports(
    course_id: string,
    body?: unknown,
  ): Promise<ContentExport[]> {
    const endpoint = `/api/v1/courses/${course_id}/content_exports`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ContentExport[];
    }

    return Promise.reject(response);
  }

  public async showContentExport(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<ContentExport> {
    const endpoint = `/api/v1/courses/${course_id}/content_exports/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ContentExport;
    }

    return Promise.reject(response);
  }

  public async exportContent(
    course_id: string,
    params?: ExportContentParams,
    body?: unknown,
  ): Promise<ContentExport> {
    const endpoint = `/api/v1/courses/${course_id}/content_exports`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ContentExport;
    }

    return Promise.reject(response);
  }
}
