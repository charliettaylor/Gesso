import { Assignment, Module, Scope } from '../types/models';
import {
  CreateModuleItemParams,
  CreateModuleParams,
  GetModuleItemSequenceParams,
  ListModuleItemsParams,
  ListModulesParams,
  SelectMasteryPathParams,
  ShowModuleItemParams,
  ShowModuleParams,
  UpdateModuleItemParams,
  UpdateModuleParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Modules extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listModules(course_id: string, params: ListModulesParams): Promise<Module[]> {
    const endpoint = `/courses/${course_id}/modules`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showModule(course_id: string, id: string, params: ShowModuleParams): Promise<Module> {
    const endpoint = `/courses/${course_id}/modules/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createModule(course_id: string, params: CreateModuleParams): Promise<Module> {
    const endpoint = `/courses/${course_id}/modules`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateModule(course_id: string, id: string, params: UpdateModuleParams): Promise<Module> {
    const endpoint = `/courses/${course_id}/modules/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteModule(course_id: string, id: string): Promise<Module> {
    const endpoint = `/courses/${course_id}/modules/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async relockModuleProgressions(course_id: string, id: string): Promise<Module> {
    const endpoint = `/courses/${course_id}/modules/${id}/relock`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listModuleItems(course_id: string, module_id: string, params: ListModuleItemsParams): Promise<Module[]> {
    const endpoint = `/courses/${course_id}/modules/${module_id}/items`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showModuleItem(
    course_id: string,
    module_id: string,
    id: string,
    params: ShowModuleItemParams,
  ): Promise<Module> {
    const endpoint = `/courses/${course_id}/modules/${module_id}/items/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createModuleItem(course_id: string, module_id: string, params: CreateModuleItemParams): Promise<Module> {
    const endpoint = `/courses/${course_id}/modules/${module_id}/items`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateModuleItem(
    course_id: string,
    module_id: string,
    id: string,
    params: UpdateModuleItemParams,
  ): Promise<Module> {
    const endpoint = `/courses/${course_id}/modules/${module_id}/items/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async selectMasteryPath(
    course_id: string,
    module_id: string,
    id: string,
    params: SelectMasteryPathParams,
  ): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/modules/${module_id}/items/${id}/select_mastery_path`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteModuleItem(course_id: string, module_id: string, id: string): Promise<Module> {
    const endpoint = `/courses/${course_id}/modules/${module_id}/items/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markModuleItemAsDoneDone(course_id: string, module_id: string, id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/modules/${module_id}/items/${id}/done`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getModuleItemSequence(course_id: string, params: GetModuleItemSequenceParams): Promise<Module> {
    const endpoint = `/courses/${course_id}/module_item_sequence`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async markModuleItemRead(course_id: string, module_id: string, id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/modules/${module_id}/items/${id}/mark_read`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
