import { PeerReview } from '../types/models';
import { CreatePeerReviewParams, DeletePeerReviewParams, GetAllPeerReviewsParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class PeerReviews extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAllPeerReviews(
    course_id: string,
    assignment_id: string,
    params: GetAllPeerReviewsParams,
  ): Promise<PeerReview[]> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/peer_reviews`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createPeerReview(
    course_id: string,
    assignment_id: string,
    submission_id: string,
    params: CreatePeerReviewParams,
  ): Promise<PeerReview> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${submission_id}/peer_reviews`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deletePeerReview(
    course_id: string,
    assignment_id: string,
    submission_id: string,
    params: DeletePeerReviewParams,
  ): Promise<PeerReview> {
    const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions/${submission_id}/peer_reviews`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
