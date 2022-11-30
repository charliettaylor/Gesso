import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Account, Assessment, Rubric } from "../types/models.ts";
import {
  CreateRubricassociationParams,
  CreateSingleRubricAssessmentParams,
  CreateSingleRubricParams,
  GetSingleRubricParams,
  UpdateRubricassociationParams,
  UpdateSingleRubricAssessmentParams,
  UpdateSingleRubricParams,
} from "../types/params.ts";

export class Rubrics extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createSingleRubric(
    course_id: string,
    params?: CreateSingleRubricParams,
    body?: unknown,
  ): Promise<Account> {
    const endpoint = `/api/v1/courses/${course_id}/rubrics`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Account;
    }

    return Promise.reject(response.statusText);
  }

  public async updateSingleRubric(
    course_id: string,
    id: string,
    params?: UpdateSingleRubricParams,
    body?: unknown,
  ): Promise<Account> {
    const endpoint = `/api/v1/courses/${course_id}/rubrics/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Account;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteSingleRubric(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Rubric> {
    const endpoint = `/api/v1/courses/${course_id}/rubrics/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Rubric;
    }

    return Promise.reject(response.statusText);
  }

  public async listRubrics(
    account_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/accounts/${account_id}/rubrics`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleRubric(
    account_id: string,
    id: string,
    params?: GetSingleRubricParams,
    body?: unknown,
  ): Promise<Rubric> {
    const endpoint = `/api/v1/accounts/${account_id}/rubrics/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Rubric;
    }

    return Promise.reject(response.statusText);
  }

  public async createSingleRubricAssessment(
    course_id: string,
    rubric_association_id: string,
    params?: CreateSingleRubricAssessmentParams,
    body?: unknown,
  ): Promise<Assessment> {
    const endpoint =
      `/api/v1/courses/${course_id}/rubric_associations/${rubric_association_id}/rubric_assessments`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assessment;
    }

    return Promise.reject(response.statusText);
  }

  public async updateSingleRubricAssessment(
    course_id: string,
    rubric_association_id: string,
    id: string,
    params?: UpdateSingleRubricAssessmentParams,
    body?: unknown,
  ): Promise<Assessment> {
    const endpoint =
      `/api/v1/courses/${course_id}/rubric_associations/${rubric_association_id}/rubric_assessments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assessment;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteSingleRubricAssessment(
    course_id: string,
    rubric_association_id: string,
    id: string,
    body?: unknown,
  ): Promise<Assessment> {
    const endpoint =
      `/api/v1/courses/${course_id}/rubric_associations/${rubric_association_id}/rubric_assessments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assessment;
    }

    return Promise.reject(response.statusText);
  }

  public async createRubricassociation(
    course_id: string,
    params?: CreateRubricassociationParams,
    body?: unknown,
  ): Promise<Rubric> {
    const endpoint = `/api/v1/courses/${course_id}/rubric_associations`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Rubric;
    }

    return Promise.reject(response.statusText);
  }

  public async updateRubricassociation(
    course_id: string,
    id: string,
    params?: UpdateRubricassociationParams,
    body?: unknown,
  ): Promise<Rubric> {
    const endpoint = `/api/v1/courses/${course_id}/rubric_associations/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Rubric;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteRubricassociation(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Rubric> {
    const endpoint = `/api/v1/courses/${course_id}/rubric_associations/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Rubric;
    }

    return Promise.reject(response.statusText);
  }
}
