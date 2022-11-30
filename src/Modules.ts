import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Assignment, Module, Scope } from "../types/models.ts";
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
} from "../types/params.ts";

export class Modules extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listModules(
    course_id: string,
    params?: ListModulesParams,
    body?: unknown,
  ): Promise<Module[]> {
    const endpoint = `/api/v1/courses/${course_id}/modules`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module[];
    }

    return Promise.reject(response.statusText);
  }

  public async showModule(
    course_id: string,
    id: string,
    params?: ShowModuleParams,
    body?: unknown,
  ): Promise<Module> {
    const endpoint = `/api/v1/courses/${course_id}/modules/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module;
    }

    return Promise.reject(response.statusText);
  }

  public async createModule(
    course_id: string,
    params?: CreateModuleParams,
    body?: unknown,
  ): Promise<Module> {
    const endpoint = `/api/v1/courses/${course_id}/modules`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module;
    }

    return Promise.reject(response.statusText);
  }

  public async updateModule(
    course_id: string,
    id: string,
    params?: UpdateModuleParams,
    body?: unknown,
  ): Promise<Module> {
    const endpoint = `/api/v1/courses/${course_id}/modules/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteModule(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Module> {
    const endpoint = `/api/v1/courses/${course_id}/modules/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module;
    }

    return Promise.reject(response.statusText);
  }

  public async relockModuleProgressions(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Module> {
    const endpoint = `/api/v1/courses/${course_id}/modules/${id}/relock`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module;
    }

    return Promise.reject(response.statusText);
  }

  public async listModuleItems(
    course_id: string,
    module_id: string,
    params?: ListModuleItemsParams,
    body?: unknown,
  ): Promise<Module[]> {
    const endpoint = `/api/v1/courses/${course_id}/modules/${module_id}/items`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module[];
    }

    return Promise.reject(response.statusText);
  }

  public async showModuleItem(
    course_id: string,
    module_id: string,
    id: string,
    params?: ShowModuleItemParams,
    body?: unknown,
  ): Promise<Module> {
    const endpoint =
      `/api/v1/courses/${course_id}/modules/${module_id}/items/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module;
    }

    return Promise.reject(response.statusText);
  }

  public async createModuleItem(
    course_id: string,
    module_id: string,
    params?: CreateModuleItemParams,
    body?: unknown,
  ): Promise<Module> {
    const endpoint = `/api/v1/courses/${course_id}/modules/${module_id}/items`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module;
    }

    return Promise.reject(response.statusText);
  }

  public async updateModuleItem(
    course_id: string,
    module_id: string,
    id: string,
    params?: UpdateModuleItemParams,
    body?: unknown,
  ): Promise<Module> {
    const endpoint =
      `/api/v1/courses/${course_id}/modules/${module_id}/items/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module;
    }

    return Promise.reject(response.statusText);
  }

  public async selectMasteryPath(
    course_id: string,
    module_id: string,
    id: string,
    params?: SelectMasteryPathParams,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint =
      `/api/v1/courses/${course_id}/modules/${module_id}/items/${id}/select_mastery_path`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteModuleItem(
    course_id: string,
    module_id: string,
    id: string,
    body?: unknown,
  ): Promise<Module> {
    const endpoint =
      `/api/v1/courses/${course_id}/modules/${module_id}/items/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module;
    }

    return Promise.reject(response.statusText);
  }

  public async markModuleItemAsDoneDone(
    course_id: string,
    module_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/modules/${module_id}/items/${id}/done`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async getModuleItemSequence(
    course_id: string,
    params?: GetModuleItemSequenceParams,
    body?: unknown,
  ): Promise<Module> {
    const endpoint = `/api/v1/courses/${course_id}/module_item_sequence`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Module;
    }

    return Promise.reject(response.statusText);
  }

  public async markModuleItemRead(
    course_id: string,
    module_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/modules/${module_id}/items/${id}/mark_read`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
