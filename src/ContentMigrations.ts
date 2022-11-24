import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import {
  ContentMigration,
  MigrationIssue,
  Migrator,
  Scope,
} from "../types/models.ts";
import {
  CreateContentMigrationParams,
  ListItemsForSelectiveImportParams,
  UpdateMigrationIssueParams,
} from "../types/params.ts";

export class ContentMigrations extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listMigrationIssues(
    account_id: string,
    content_migration_id: string,
    body?: unknown,
  ): Promise<MigrationIssue[]> {
    const endpoint =
      `/api/v1/accounts/${account_id}/content_migrations/${content_migration_id}/migration_issues`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getMigrationIssue(
    account_id: string,
    content_migration_id: string,
    id: string,
    body?: unknown,
  ): Promise<MigrationIssue> {
    const endpoint =
      `/api/v1/accounts/${account_id}/content_migrations/${content_migration_id}/migration_issues/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateMigrationIssue(
    account_id: string,
    content_migration_id: string,
    id: string,
    params?: UpdateMigrationIssueParams,
    body?: unknown,
  ): Promise<MigrationIssue> {
    const endpoint =
      `/api/v1/accounts/${account_id}/content_migrations/${content_migration_id}/migration_issues/${id}`;
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

  public async listContentMigrations(
    account_id: string,
    body?: unknown,
  ): Promise<ContentMigration[]> {
    const endpoint = `/api/v1/accounts/${account_id}/content_migrations`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getContentMigration(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<ContentMigration> {
    const endpoint = `/api/v1/accounts/${account_id}/content_migrations/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createContentMigration(
    account_id: string,
    params?: CreateContentMigrationParams,
    body?: unknown,
  ): Promise<ContentMigration> {
    const endpoint = `/api/v1/accounts/${account_id}/content_migrations`;
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

  public async updateContentMigration(
    account_id: string,
    id: string,
    body?: unknown,
  ): Promise<ContentMigration> {
    const endpoint = `/api/v1/accounts/${account_id}/content_migrations/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listMigrationSystems(
    account_id: string,
    body?: unknown,
  ): Promise<Migrator[]> {
    const endpoint =
      `/api/v1/accounts/${account_id}/content_migrations/migrators`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listItemsForSelectiveImport(
    account_id: string,
    id: string,
    params?: ListItemsForSelectiveImportParams,
    body?: unknown,
  ): Promise<Scope[]> {
    const endpoint =
      `/api/v1/accounts/${account_id}/content_migrations/${id}/selective_data`;
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
}
