import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import {
  BlueprintTemplate,
  Course,
  Scope,
  BlueprintMigration,
  ChangeRecord,
  BlueprintSubscription,
} from '../types/models';
import {
  SetOrRemoveRestrictionsOnBlueprintCourseObjectParams,
  BeginMigrationToPushToAssociatedCoursesParams,
  UpdateAssociatedCoursesParams,
} from '../types/params';

export class BlueprintCourses extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getBlueprintInformation(course_id: string, template_id: string): Promise<BlueprintTemplate> {
    const endpoint = `/courses/${course_id}/blueprint_templates/${template_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAssociatedCourseInformation(course_id: string, template_id: string): Promise<Course[]> {
    const endpoint = `/courses/${course_id}/blueprint_templates/${template_id}/associated_courses`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAssociatedCourses(
    course_id: string,
    template_id: string,
    params: UpdateAssociatedCoursesParams,
  ): Promise<Scope[]> {
    const endpoint = `/courses/${course_id}/blueprint_templates/${template_id}/update_associations`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async beginMigrationToPushToAssociatedCourses(
    course_id: string,
    template_id: string,
    params: BeginMigrationToPushToAssociatedCoursesParams,
  ): Promise<BlueprintMigration> {
    const endpoint = `/courses/${course_id}/blueprint_templates/${template_id}/migrations`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async setOrRemoveRestrictionsOnBlueprintCourseObject(
    course_id: string,
    template_id: string,
    params: SetOrRemoveRestrictionsOnBlueprintCourseObjectParams,
  ): Promise<Scope> {
    const endpoint = `/courses/${course_id}/blueprint_templates/${template_id}/restrict_item`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUnsyncedChanges(course_id: string, template_id: string): Promise<ChangeRecord[]> {
    const endpoint = `/courses/${course_id}/blueprint_templates/${template_id}/unsynced_changes`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listBlueprintMigrations(course_id: string, template_id: string): Promise<BlueprintMigration[]> {
    const endpoint = `/courses/${course_id}/blueprint_templates/${template_id}/migrations`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showBlueprintMigration(course_id: string, template_id: string, id: string): Promise<BlueprintMigration> {
    const endpoint = `/courses/${course_id}/blueprint_templates/${template_id}/migrations/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getMigrationDetails(course_id: string, template_id: string, id: string): Promise<ChangeRecord[]> {
    const endpoint = `/courses/${course_id}/blueprint_templates/${template_id}/migrations/${id}/details`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listBlueprintSubscriptions(course_id: string): Promise<BlueprintSubscription[]> {
    const endpoint = `/courses/${course_id}/blueprint_subscriptions`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listBlueprintImports(course_id: string, subscription_id: string): Promise<BlueprintMigration[]> {
    const endpoint = `/courses/${course_id}/blueprint_subscriptions/${subscription_id}/migrations`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showBlueprintImport(
    course_id: string,
    subscription_id: string,
    id: string,
  ): Promise<BlueprintMigration> {
    const endpoint = `/courses/${course_id}/blueprint_subscriptions/${subscription_id}/migrations/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getImportDetails(course_id: string, subscription_id: string, id: string): Promise<ChangeRecord[]> {
    const endpoint = `/courses/${course_id}/blueprint_subscriptions/${subscription_id}/migrations/${id}/details`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
