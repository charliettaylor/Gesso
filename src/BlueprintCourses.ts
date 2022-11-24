import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import {
  BlueprintMigration,
  BlueprintSubscription,
  BlueprintTemplate,
  ChangeRecord,
  Course,
  Scope,
} from "../types/models.ts";
import {
  BeginMigrationToPushToAssociatedCoursesParams,
  SetOrRemoveRestrictionsOnBlueprintCourseObjectParams,
  UpdateAssociatedCoursesParams,
} from "../types/params.ts";

export class BlueprintCourses extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getBlueprintInformation(
    course_id: string,
    template_id: string,
    body?: unknown,
  ): Promise<BlueprintTemplate> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_templates/${template_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlueprintTemplate;
    }

    return Promise.reject(response);
  }

  public async getAssociatedCourseInformation(
    course_id: string,
    template_id: string,
    body?: unknown,
  ): Promise<Course[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_templates/${template_id}/associated_courses`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Course[];
    }

    return Promise.reject(response);
  }

  public async updateAssociatedCourses(
    course_id: string,
    template_id: string,
    params?: UpdateAssociatedCoursesParams,
    body?: unknown,
  ): Promise<Scope[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_templates/${template_id}/update_associations`;
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

    return Promise.reject(response);
  }

  public async beginMigrationToPushToAssociatedCourses(
    course_id: string,
    template_id: string,
    params?: BeginMigrationToPushToAssociatedCoursesParams,
    body?: unknown,
  ): Promise<BlueprintMigration> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_templates/${template_id}/migrations`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlueprintMigration;
    }

    return Promise.reject(response);
  }

  public async setOrRemoveRestrictionsOnBlueprintCourseObject(
    course_id: string,
    template_id: string,
    params?: SetOrRemoveRestrictionsOnBlueprintCourseObjectParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_templates/${template_id}/restrict_item`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async getUnsyncedChanges(
    course_id: string,
    template_id: string,
    body?: unknown,
  ): Promise<ChangeRecord[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_templates/${template_id}/unsynced_changes`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ChangeRecord[];
    }

    return Promise.reject(response);
  }

  public async listBlueprintMigrations(
    course_id: string,
    template_id: string,
    body?: unknown,
  ): Promise<BlueprintMigration[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_templates/${template_id}/migrations`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlueprintMigration[];
    }

    return Promise.reject(response);
  }

  public async showBlueprintMigration(
    course_id: string,
    template_id: string,
    id: string,
    body?: unknown,
  ): Promise<BlueprintMigration> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_templates/${template_id}/migrations/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlueprintMigration;
    }

    return Promise.reject(response);
  }

  public async getMigrationDetails(
    course_id: string,
    template_id: string,
    id: string,
    body?: unknown,
  ): Promise<ChangeRecord[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_templates/${template_id}/migrations/${id}/details`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ChangeRecord[];
    }

    return Promise.reject(response);
  }

  public async listBlueprintSubscriptions(
    course_id: string,
    body?: unknown,
  ): Promise<BlueprintSubscription[]> {
    const endpoint = `/api/v1/courses/${course_id}/blueprint_subscriptions`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlueprintSubscription[];
    }

    return Promise.reject(response);
  }

  public async listBlueprintImports(
    course_id: string,
    subscription_id: string,
    body?: unknown,
  ): Promise<BlueprintMigration[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_subscriptions/${subscription_id}/migrations`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlueprintMigration[];
    }

    return Promise.reject(response);
  }

  public async showBlueprintImport(
    course_id: string,
    subscription_id: string,
    id: string,
    body?: unknown,
  ): Promise<BlueprintMigration> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_subscriptions/${subscription_id}/migrations/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as BlueprintMigration;
    }

    return Promise.reject(response);
  }

  public async getImportDetails(
    course_id: string,
    subscription_id: string,
    id: string,
    body?: unknown,
  ): Promise<ChangeRecord[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/blueprint_subscriptions/${subscription_id}/migrations/${id}/details`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ChangeRecord[];
    }

    return Promise.reject(response);
  }
}
