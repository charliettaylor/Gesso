import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Account } from '../types/models';
import { CreateRubricassociationParams, GetSingleRubricParams, CreateSingleRubricAssessmentParams, UpdateSingleRubricAssessmentParams, CreateSingleRubricParams, UpdateSingleRubricParams, UpdateRubricassociationParams } from '../types/params';
  
export class Rubrics extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createSingleRubric(course_id: string, params?: CreateSingleRubricParams, body?: any): Promise<Account> {
    const endpoint = `/api/v1/courses/${course_id}/rubrics`;
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

  public async updateSingleRubric(course_id: string, id: string, params?: UpdateSingleRubricParams, body?: any): Promise<Account> {
    const endpoint = `/api/v1/courses/${course_id}/rubrics/${id}`;
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

  public async deleteSingleRubric(course_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/rubrics/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listRubrics(account_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/rubrics`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleRubric(account_id: string, id: string, params?: GetSingleRubricParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/rubrics/${id}`;
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

  public async createSingleRubricAssessment(course_id: string, rubric_association_id: string, params?: CreateSingleRubricAssessmentParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/rubric_associations/${rubric_association_id}/rubric_assessments`;
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

  public async updateSingleRubricAssessment(course_id: string, rubric_association_id: string, id: string, params?: UpdateSingleRubricAssessmentParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/rubric_associations/${rubric_association_id}/rubric_assessments/${id}`;
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

  public async deleteSingleRubricAssessment(course_id: string, rubric_association_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/rubric_associations/${rubric_association_id}/rubric_assessments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createRubricassociation(course_id: string, params?: CreateRubricassociationParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/rubric_associations`;
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

  public async updateRubricassociation(course_id: string, id: string, params?: UpdateRubricassociationParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/rubric_associations/${id}`;
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

  public async deleteRubricassociation(course_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/rubric_associations/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
