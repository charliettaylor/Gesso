import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { PlannerNote, PlannerOverride, Scope } from "../types/models.ts";
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
  ): Promise<Scope> {
    const endpoint = "/api/v1/planner/items";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async listPlannerNotes(
    params?: ListPlannerNotesParams,
    body?: unknown,
  ): Promise<PlannerNote[]> {
    const endpoint = "/api/v1/planner_notes";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PlannerNote[];
    }

    return Promise.reject(response.statusText);
  }

  public async showPlannerNote(
    id: string,
    body?: unknown,
  ): Promise<PlannerNote> {
    const endpoint = `/api/v1/planner_notes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PlannerNote;
    }

    return Promise.reject(response.statusText);
  }

  public async updatePlannerNote(
    id: string,
    params?: UpdatePlannerNoteParams,
    body?: unknown,
  ): Promise<PlannerNote> {
    const endpoint = `/api/v1/planner_notes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PlannerNote;
    }

    return Promise.reject(response.statusText);
  }

  public async createPlannerNote(
    params?: CreatePlannerNoteParams,
    body?: unknown,
  ): Promise<PlannerNote> {
    const endpoint = "/api/v1/planner_notes";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PlannerNote;
    }

    return Promise.reject(response.statusText);
  }

  public async deletePlannerNote(
    id: string,
    body?: unknown,
  ): Promise<PlannerNote> {
    const endpoint = `/api/v1/planner_notes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PlannerNote;
    }

    return Promise.reject(response.statusText);
  }

  public async listPlannerOverrides(
    body?: unknown,
  ): Promise<PlannerOverride[]> {
    const endpoint = "/api/v1/planner/overrides";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PlannerOverride[];
    }

    return Promise.reject(response.statusText);
  }

  public async showPlannerOverride(
    id: string,
    body?: unknown,
  ): Promise<PlannerOverride> {
    const endpoint = `/api/v1/planner/overrides/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PlannerOverride;
    }

    return Promise.reject(response.statusText);
  }

  public async updatePlannerOverride(
    id: string,
    params?: UpdatePlannerOverrideParams,
    body?: unknown,
  ): Promise<PlannerOverride> {
    const endpoint = `/api/v1/planner/overrides/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PlannerOverride;
    }

    return Promise.reject(response.statusText);
  }

  public async createPlannerOverride(
    params?: CreatePlannerOverrideParams,
    body?: unknown,
  ): Promise<PlannerOverride> {
    const endpoint = "/api/v1/planner/overrides";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PlannerOverride;
    }

    return Promise.reject(response.statusText);
  }

  public async deletePlannerOverride(
    id: string,
    body?: unknown,
  ): Promise<PlannerOverride> {
    const endpoint = `/api/v1/planner/overrides/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PlannerOverride;
    }

    return Promise.reject(response.statusText);
  }
}
