import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Account, Rubric, Assessment } from '../types/models';
import {
  CreateSingleRubricParams,
  UpdateSingleRubricParams,
  UpdateRubricassociationParams,
  CreateRubricassociationParams,
  GetSingleRubricParams,
  UpdateSingleRubricAssessmentParams,
  CreateSingleRubricAssessmentParams,
} from '../types/params';

export class Rubrics extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createSingleRubric(course_id: string, params: CreateSingleRubricParams): Promise<Account> {
    const endpoint = `/courses/${course_id}/rubrics`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateSingleRubric(course_id: string, id: string, params: UpdateSingleRubricParams): Promise<Account> {
    const endpoint = `/courses/${course_id}/rubrics/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteSingleRubric(course_id: string, id: string): Promise<Rubric> {
    const endpoint = `/courses/${course_id}/rubrics/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listRubrics(account_id: string): Promise<any> {
    const endpoint = `/accounts/${account_id}/rubrics`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleRubric(account_id: string, id: string, params: GetSingleRubricParams): Promise<Rubric> {
    const endpoint = `/accounts/${account_id}/rubrics/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSingleRubricAssessment(
    course_id: string,
    rubric_association_id: string,
    params: CreateSingleRubricAssessmentParams,
  ): Promise<Assessment> {
    const endpoint = `/courses/${course_id}/rubric_associations/${rubric_association_id}/rubric_assessments`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateSingleRubricAssessment(
    course_id: string,
    rubric_association_id: string,
    id: string,
    params: UpdateSingleRubricAssessmentParams,
  ): Promise<Assessment> {
    const endpoint = `/courses/${course_id}/rubric_associations/${rubric_association_id}/rubric_assessments/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteSingleRubricAssessment(
    course_id: string,
    rubric_association_id: string,
    id: string,
  ): Promise<Assessment> {
    const endpoint = `/courses/${course_id}/rubric_associations/${rubric_association_id}/rubric_assessments/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createRubricassociation(course_id: string, params: CreateRubricassociationParams): Promise<Rubric> {
    const endpoint = `/courses/${course_id}/rubric_associations`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateRubricassociation(
    course_id: string,
    id: string,
    params: UpdateRubricassociationParams,
  ): Promise<Rubric> {
    const endpoint = `/courses/${course_id}/rubric_associations/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteRubricassociation(course_id: string, id: string): Promise<Rubric> {
    const endpoint = `/courses/${course_id}/rubric_associations/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
