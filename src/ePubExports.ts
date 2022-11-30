import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Course, EpubExport } from "../types/models.ts";

export class ePubExports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCoursesWithTheirLatestEpubExport(
    body?: unknown,
  ): Promise<Course[]> {
    const endpoint = "/api/v1/epub_exports";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Course[];
    }

    return Promise.reject(response.statusText);
  }

  public async createEpubExport(
    course_id: string,
    body?: unknown,
  ): Promise<EpubExport> {
    const endpoint = `/api/v1/courses/${course_id}/epub_exports`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as EpubExport;
    }

    return Promise.reject(response.statusText);
  }

  public async showEpubExport(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<EpubExport> {
    const endpoint = `/api/v1/courses/${course_id}/epub_exports/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as EpubExport;
    }

    return Promise.reject(response.statusText);
  }
}
