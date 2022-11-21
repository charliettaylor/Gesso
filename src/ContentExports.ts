import { ContentExport } from '../types/models';
import { ExportContentParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class ContentExports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listContentExports(course_id: string): Promise<ContentExport[]> {
    const endpoint = `/courses/${course_id}/content_exports`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showContentExport(course_id: string, id: string): Promise<ContentExport> {
    const endpoint = `/courses/${course_id}/content_exports/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async exportContent(course_id: string, params: ExportContentParams): Promise<ContentExport> {
    const endpoint = `/courses/${course_id}/content_exports`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
