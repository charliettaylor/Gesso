import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { File, Folder, License, Scope, UsageRights } from "../types/models.ts";
import {
  CopyFileParams,
  CopyFolderParams,
  CreateFolderParams,
  DeleteFileParams,
  DeleteFolderParams,
  GetFileParams,
  GetPublicInlinePreviewUrlParams,
  ListFilesParams,
  RemoveUsageRightsParams,
  SetUsageRightsParams,
  UpdateFileParams,
  UpdateFolderParams,
} from "../types/params.ts";

export class Files extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getQuotaInformation(
    course_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/courses/${course_id}/files/quota`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response);
  }

  public async listFiles(
    course_id: string,
    params?: ListFilesParams,
    body?: unknown,
  ): Promise<File[]> {
    const endpoint = `/api/v1/courses/${course_id}/files`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as File[];
    }

    return Promise.reject(response);
  }

  public async getPublicInlinePreviewUrl(
    id: string,
    params?: GetPublicInlinePreviewUrlParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/files/${id}/public_url`;
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

    return Promise.reject(response);
  }

  public async getFile(
    id: string,
    params?: GetFileParams,
    body?: unknown,
  ): Promise<File> {
    const endpoint = `/api/v1/files/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as File;
    }

    return Promise.reject(response);
  }

  public async translateFileReference(
    course_id: string,
    migration_id: string,
    body?: unknown,
  ): Promise<File> {
    const endpoint =
      `/api/v1/courses/${course_id}/files/file_ref/${migration_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as File;
    }

    return Promise.reject(response);
  }

  public async updateFile(
    id: string,
    params?: UpdateFileParams,
    body?: unknown,
  ): Promise<File> {
    const endpoint = `/api/v1/files/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as File;
    }

    return Promise.reject(response);
  }

  public async deleteFile(
    id: string,
    params?: DeleteFileParams,
    body?: unknown,
  ): Promise<File> {
    const endpoint = `/api/v1/files/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as File;
    }

    return Promise.reject(response);
  }

  public async getIconMetadata(id: string, body?: unknown): Promise<unknown> {
    const endpoint = `/api/v1/files/${id}/icon_metadata`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response);
  }

  public async resetLinkVerifier(id: string, body?: unknown): Promise<File> {
    const endpoint = `/api/v1/files/${id}/reset_verifier`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as File;
    }

    return Promise.reject(response);
  }

  public async listFolders(id: string, body?: unknown): Promise<Folder[]> {
    const endpoint = `/api/v1/folders/${id}/folders`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Folder[];
    }

    return Promise.reject(response);
  }

  public async listAllFolders(
    course_id: string,
    body?: unknown,
  ): Promise<Folder[]> {
    const endpoint = `/api/v1/courses/${course_id}/folders`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Folder[];
    }

    return Promise.reject(response);
  }

  public async resolvePath(
    course_id: string,
    body?: unknown,
  ): Promise<Folder[]> {
    const endpoint = `/api/v1/courses/${course_id}/folders/by_path/*full_path`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Folder[];
    }

    return Promise.reject(response);
  }

  public async getFolder(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Folder> {
    const endpoint = `/api/v1/courses/${course_id}/folders/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Folder;
    }

    return Promise.reject(response);
  }

  public async updateFolder(
    id: string,
    params?: UpdateFolderParams,
    body?: unknown,
  ): Promise<Folder> {
    const endpoint = `/api/v1/folders/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Folder;
    }

    return Promise.reject(response);
  }

  public async createFolder(
    course_id: string,
    params?: CreateFolderParams,
    body?: unknown,
  ): Promise<Folder> {
    const endpoint = `/api/v1/courses/${course_id}/folders`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Folder;
    }

    return Promise.reject(response);
  }

  public async deleteFolder(
    id: string,
    params?: DeleteFolderParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/folders/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async uploadFile(folder_id: string, body?: unknown): Promise<Scope> {
    const endpoint = `/api/v1/folders/${folder_id}/files`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async copyFile(
    dest_folder_id: string,
    params?: CopyFileParams,
    body?: unknown,
  ): Promise<File> {
    const endpoint = `/api/v1/folders/${dest_folder_id}/copy_file`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as File;
    }

    return Promise.reject(response);
  }

  public async copyFolder(
    dest_folder_id: string,
    params?: CopyFolderParams,
    body?: unknown,
  ): Promise<Folder> {
    const endpoint = `/api/v1/folders/${dest_folder_id}/copy_folder`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Folder;
    }

    return Promise.reject(response);
  }

  public async getUploadedMediaFolderForUser(
    course_id: string,
    body?: unknown,
  ): Promise<Folder> {
    const endpoint = `/api/v1/courses/${course_id}/folders/media`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Folder;
    }

    return Promise.reject(response);
  }

  public async setUsageRights(
    course_id: string,
    params?: SetUsageRightsParams,
    body?: unknown,
  ): Promise<UsageRights> {
    const endpoint = `/api/v1/courses/${course_id}/usage_rights`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as UsageRights;
    }

    return Promise.reject(response);
  }

  public async removeUsageRights(
    course_id: string,
    params?: RemoveUsageRightsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/usage_rights`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async listLicenses(
    course_id: string,
    body?: unknown,
  ): Promise<License[]> {
    const endpoint = `/api/v1/courses/${course_id}/content_licenses`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as License[];
    }

    return Promise.reject(response);
  }
}
