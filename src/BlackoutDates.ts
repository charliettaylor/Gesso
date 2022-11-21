import { BlackoutDate, Scope } from '../types/models';
import { CreateBlackoutDateParams, UpdateBlackoutDateParams, UpdateListOfBlackoutDatesParams } from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class BlackoutDates extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listBlackoutDates(course_id: string): Promise<BlackoutDate[]> {
    const endpoint = `/courses/${course_id}/blackout_dates`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleBlackoutDate(course_id: string, id: string): Promise<BlackoutDate> {
    const endpoint = `/courses/${course_id}/blackout_dates/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async newBlackoutDate(course_id: string): Promise<BlackoutDate> {
    const endpoint = `/courses/${course_id}/blackout_dates/new`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createBlackoutDate(course_id: string, params: CreateBlackoutDateParams): Promise<BlackoutDate> {
    const endpoint = `/courses/${course_id}/blackout_dates`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateBlackoutDate(
    course_id: string,
    id: string,
    params: UpdateBlackoutDateParams,
  ): Promise<BlackoutDate> {
    const endpoint = `/courses/${course_id}/blackout_dates/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteBlackoutDate(course_id: string, id: string): Promise<BlackoutDate> {
    const endpoint = `/courses/${course_id}/blackout_dates/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateListOfBlackoutDates(course_id: string, params: UpdateListOfBlackoutDatesParams): Promise<Scope[]> {
    const endpoint = `/courses/${course_id}/blackout_dates`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
