import { Section } from '../types/models';
import {
  CreateCourseSectionParams,
  CrosslistSectionParams,
  DecrosslistSectionParams,
  EditSectionParams,
  GetSectionInformationParams,
  ListCourseSectionsParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Sections extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCourseSections(course_id: string, params: ListCourseSectionsParams): Promise<Section[]> {
    const endpoint = `/courses/${course_id}/sections`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createCourseSection(course_id: string, params: CreateCourseSectionParams): Promise<Section> {
    const endpoint = `/courses/${course_id}/sections`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async crosslistSection(id: string, new_course_id: string, params: CrosslistSectionParams): Promise<Section> {
    const endpoint = `/sections/${id}/crosslist/${new_course_id}`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async decrosslistSection(id: string, params: DecrosslistSectionParams): Promise<Section> {
    const endpoint = `/sections/${id}/crosslist`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editSection(id: string, params: EditSectionParams): Promise<Section> {
    const endpoint = `/sections/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSectionInformation(
    course_id: string,
    id: string,
    params: GetSectionInformationParams,
  ): Promise<Section> {
    const endpoint = `/courses/${course_id}/sections/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteSection(id: string): Promise<Section> {
    const endpoint = `/sections/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
