import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { BlackoutDate, Scope } from "../types/models.ts";
import {
  CreateBlackoutDateParams,
  UpdateBlackoutDateParams,
  UpdateListOfBlackoutDatesParams,
} from "../types/params.ts";

export class BlackoutDates extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listBlackoutDates(
    course_id: string,
    body?: unknown,
  ): Promise<BlackoutDate[]> {
    const endpoint = `/api/v1/courses/${course_id}/blackout_dates`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlackoutDate[];
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleBlackoutDate(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<BlackoutDate> {
    const endpoint = `/api/v1/courses/${course_id}/blackout_dates/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlackoutDate;
    }

    return Promise.reject(response.statusText);
  }

  public async newBlackoutDate(
    course_id: string,
    body?: unknown,
  ): Promise<BlackoutDate> {
    const endpoint = `/api/v1/courses/${course_id}/blackout_dates/new`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlackoutDate;
    }

    return Promise.reject(response.statusText);
  }

  public async createBlackoutDate(
    course_id: string,
    params?: CreateBlackoutDateParams,
    body?: unknown,
  ): Promise<BlackoutDate> {
    const endpoint = `/api/v1/courses/${course_id}/blackout_dates`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlackoutDate;
    }

    return Promise.reject(response.statusText);
  }

  public async updateBlackoutDate(
    course_id: string,
    id: string,
    params?: UpdateBlackoutDateParams,
    body?: unknown,
  ): Promise<BlackoutDate> {
    const endpoint = `/api/v1/courses/${course_id}/blackout_dates/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlackoutDate;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteBlackoutDate(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<BlackoutDate> {
    const endpoint = `/api/v1/courses/${course_id}/blackout_dates/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlackoutDate;
    }

    return Promise.reject(response.statusText);
  }

  public async updateListOfBlackoutDates(
    course_id: string,
    params?: UpdateListOfBlackoutDatesParams,
    body?: unknown,
  ): Promise<Scope[]> {
    const endpoint = `/api/v1/courses/${course_id}/blackout_dates`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope[];
    }

    return Promise.reject(response.statusText);
  }
}
