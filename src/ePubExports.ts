import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';


export class ePubExports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCoursesWithTheirLatestEpubExport(body?: any): Promise<any[]> {
    const endpoint = '/api/v1/epub_exports';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createEpubExport(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/epub_exports`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showEpubExport(course_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/epub_exports/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
