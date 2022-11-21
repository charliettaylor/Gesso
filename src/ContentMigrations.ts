import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { MigrationIssue, ContentMigration, Migrator, Scope } from '../types/models';
import {
  UpdateMigrationIssueParams,
  CreateContentMigrationParams,
  ListItemsForSelectiveImportParams,
} from '../types/params';

export class ContentMigrations extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listMigrationIssues(account_id: string, content_migration_id: string): Promise<MigrationIssue[]> {
    const endpoint = `/accounts/${account_id}/content_migrations/${content_migration_id}/migration_issues`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getMigrationIssue(
    account_id: string,
    content_migration_id: string,
    id: string,
  ): Promise<MigrationIssue> {
    const endpoint = `/accounts/${account_id}/content_migrations/${content_migration_id}/migration_issues/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateMigrationIssue(
    account_id: string,
    content_migration_id: string,
    id: string,
    params: UpdateMigrationIssueParams,
  ): Promise<MigrationIssue> {
    const endpoint = `/accounts/${account_id}/content_migrations/${content_migration_id}/migration_issues/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listContentMigrations(account_id: string): Promise<ContentMigration[]> {
    const endpoint = `/accounts/${account_id}/content_migrations`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getContentMigration(account_id: string, id: string): Promise<ContentMigration> {
    const endpoint = `/accounts/${account_id}/content_migrations/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createContentMigration(
    account_id: string,
    params: CreateContentMigrationParams,
  ): Promise<ContentMigration> {
    const endpoint = `/accounts/${account_id}/content_migrations`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateContentMigration(account_id: string, id: string): Promise<ContentMigration> {
    const endpoint = `/accounts/${account_id}/content_migrations/${id}`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listMigrationSystems(account_id: string): Promise<Migrator[]> {
    const endpoint = `/accounts/${account_id}/content_migrations/migrators`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listItemsForSelectiveImport(
    account_id: string,
    id: string,
    params: ListItemsForSelectiveImportParams,
  ): Promise<Scope[]> {
    const endpoint = `/accounts/${account_id}/content_migrations/${id}/selective_data`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
