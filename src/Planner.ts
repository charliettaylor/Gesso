import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope, PlannerNote, PlannerOverride } from '../types/models';
import {
  CreatePlannerNoteParams,
  ListPlannerItemsParams,
  ListPlannerNotesParams,
  UpdatePlannerNoteParams,
  UpdatePlannerOverrideParams,
  CreatePlannerOverrideParams,
} from '../types/params';

export class Planner extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPlannerItems(params: ListPlannerItemsParams): Promise<Scope> {
    const endpoint = `/planner/items`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listPlannerNotes(params: ListPlannerNotesParams): Promise<PlannerNote[]> {
    const endpoint = `/planner_notes`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showPlannerNote(id: string): Promise<PlannerNote> {
    const endpoint = `/planner_notes/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePlannerNote(id: string, params: UpdatePlannerNoteParams): Promise<PlannerNote> {
    const endpoint = `/planner_notes/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createPlannerNote(params: CreatePlannerNoteParams): Promise<PlannerNote> {
    const endpoint = `/planner_notes`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deletePlannerNote(id: string): Promise<PlannerNote> {
    const endpoint = `/planner_notes/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listPlannerOverrides(): Promise<PlannerOverride[]> {
    const endpoint = `/planner/overrides`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showPlannerOverride(id: string): Promise<PlannerOverride> {
    const endpoint = `/planner/overrides/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePlannerOverride(id: string, params: UpdatePlannerOverrideParams): Promise<PlannerOverride> {
    const endpoint = `/planner/overrides/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createPlannerOverride(params: CreatePlannerOverrideParams): Promise<PlannerOverride> {
    const endpoint = `/planner/overrides`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deletePlannerOverride(id: string): Promise<PlannerOverride> {
    const endpoint = `/planner/overrides/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
