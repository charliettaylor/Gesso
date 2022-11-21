import { Course, EpubExport } from '../types/models';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class ePubExports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCoursesWithTheirLatestEpubExport(): Promise<Course[]> {
    const endpoint = `/epub_exports`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createEpubExport(course_id: string): Promise<EpubExport> {
    const endpoint = `/courses/${course_id}/epub_exports`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showEpubExport(course_id: string, id: string): Promise<EpubExport> {
    const endpoint = `/courses/${course_id}/epub_exports/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
