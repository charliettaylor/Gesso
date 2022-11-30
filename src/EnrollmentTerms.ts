import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Term } from "../types/models.ts";
import {
  CreateEnrollmentTermParams,
  ListEnrollmentTermsParams,
  UpdateEnrollmentTermParams,
} from "../types/params.ts";

export class EnrollmentTerms extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createEnrollmentTerm(
    account_id: string,
    params?: CreateEnrollmentTermParams,
    body?: unknown,
  ): Promise<Term> {
    const endpoint = `/api/v1/accounts/${account_id}/terms`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Term;
    }

    return Promise.reject(response.statusText);
  }

  public async updateEnrollmentTerm(
    account_id: string,
    id: string,
    params?: UpdateEnrollmentTermParams,
    body?: unknown,
  ): Promise<Term> {
    const endpoint = `/api/v1/accounts/${account_id}/terms/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Term;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteEnrollmentTerm(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<Term> {
    const endpoint = `/api/v1/accounts/${account_id}/terms/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Term;
    }

    return Promise.reject(response.statusText);
  }

  public async listEnrollmentTerms(
    account_id: string,
    params?: ListEnrollmentTermsParams,
    body?: unknown,
  ): Promise<Term> {
    const endpoint = `/api/v1/accounts/${account_id}/terms`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Term;
    }

    return Promise.reject(response.statusText);
  }

  public async retrieveEnrollmentTerm(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<Term> {
    const endpoint = `/api/v1/accounts/${account_id}/terms/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Term;
    }

    return Promise.reject(response.statusText);
  }
}
