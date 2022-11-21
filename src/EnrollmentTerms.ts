import { Term } from '../types/models';
import { CreateEnrollmentTermParams, ListEnrollmentTermsParams, UpdateEnrollmentTermParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class EnrollmentTerms extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createEnrollmentTerm(account_id: string, params: CreateEnrollmentTermParams): Promise<Term> {
    const endpoint = `/accounts/${account_id}/terms`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateEnrollmentTerm(account_id: string, id: string, params: UpdateEnrollmentTermParams): Promise<Term> {
    const endpoint = `/accounts/${account_id}/terms/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteEnrollmentTerm(account_id: string, id: string): Promise<Term> {
    const endpoint = `/accounts/${account_id}/terms/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listEnrollmentTerms(account_id: string, params: ListEnrollmentTermsParams): Promise<Term> {
    const endpoint = `/accounts/${account_id}/terms`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async retrieveEnrollmentTerm(account_id: string, id: string): Promise<Term> {
    const endpoint = `/accounts/${account_id}/terms/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
