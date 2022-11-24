import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import {
  CreatePlannerNoteParams,
  CreatePlannerOverrideParams,
  ListPlannerItemsParams,
  ListPlannerNotesParams,
  UpdatePlannerNoteParams,
  UpdatePlannerOverrideParams,
} from "../types/params.ts";

export class Planner extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPlannerItems(
    params?: ListPlannerItemsParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = "/api/v1/planner/items";
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

  public async listPlannerNotes(
    params?: ListPlannerNotesParams,
    body?: unknown,
  ): Promise<unknown[]> {
    const endpoint = "/api/v1/planner_notes";
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

  public async showPlannerNote(id: string, body?: unknown): Promise<unknown> {
    const endpoint = `/api/v1/planner_notes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePlannerNote(
    id: string,
    params?: UpdatePlannerNoteParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/planner_notes/${id}`;
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

  public async createPlannerNote(
    params?: CreatePlannerNoteParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = "/api/v1/planner_notes";
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

  public async deletePlannerNote(id: string, body?: unknown): Promise<unknown> {
    const endpoint = `/api/v1/planner_notes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listPlannerOverrides(body?: unknown): Promise<unknown[]> {
    const endpoint = "/api/v1/planner/overrides";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showPlannerOverride(id: string, body?: unknown): Promise<unknown> {
    const endpoint = `/api/v1/planner/overrides/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePlannerOverride(
    id: string,
    params?: UpdatePlannerOverrideParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/planner/overrides/${id}`;
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

  public async createPlannerOverride(
    params?: CreatePlannerOverrideParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = "/api/v1/planner/overrides";
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

  public async deletePlannerOverride(id: string, body?: unknown): Promise<unknown> {
    const endpoint = `/api/v1/planner/overrides/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
