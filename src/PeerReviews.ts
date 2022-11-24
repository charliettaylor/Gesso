import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { DeletePeerReviewParams, GetAllPeerReviewsParams, CreatePeerReviewParams } from '../types/params';
  
export class PeerReviews extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAllPeerReviews(course_id: string, assignment_id: string, params?: GetAllPeerReviewsParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${assignment_id}/peer_reviews`;
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

  public async createPeerReview(course_id: string, assignment_id: string, submission_id: string, params?: CreatePeerReviewParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${submission_id}/peer_reviews`;
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

  public async deletePeerReview(course_id: string, assignment_id: string, submission_id: string, params?: DeletePeerReviewParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${assignment_id}/submissions/${submission_id}/peer_reviews`;
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

}
