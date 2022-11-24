import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { CrosslistSectionParams, EditSectionParams, DecrosslistSectionParams, ListCourseSectionsParams, GetSectionInformationParams, CreateCourseSectionParams } from '../types/params';
  
export class Sections extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCourseSections(course_id: string, params?: ListCourseSectionsParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/sections`;
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

  public async createCourseSection(course_id: string, params?: CreateCourseSectionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/sections`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async crosslistSection(id: string, new_course_id: string, params?: CrosslistSectionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/sections/${id}/crosslist/${new_course_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async decrosslistSection(id: string, params?: DecrosslistSectionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/sections/${id}/crosslist`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editSection(id: string, params?: EditSectionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/sections/${id}`;
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

  public async getSectionInformation(course_id: string, id: string, params?: GetSectionInformationParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/sections/${id}`;
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

  public async deleteSection(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/sections/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
