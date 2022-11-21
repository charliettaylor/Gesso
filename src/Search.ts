import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import { FindRecipientsParams, ListAllCoursesParams } from '../types/params';

export class Search extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async findRecipients(params: FindRecipientsParams): Promise<Scope> {
    const endpoint = `/conversations/find_recipients`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAllCourses(params: ListAllCoursesParams): Promise<Scope> {
    const endpoint = `/search/all_courses`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
