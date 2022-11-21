import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { File, Scope, Folder, UsageRights, License } from '../types/models';
import {
  GetPublicInlinePreviewUrlParams,
  CopyFileParams,
  CopyFolderParams,
  GetFileParams,
  DeleteFileParams,
  UpdateFileParams,
  RemoveUsageRightsParams,
  DeleteFolderParams,
  SetUsageRightsParams,
  CreateFolderParams,
  ListFilesParams,
  UpdateFolderParams,
} from '../types/params';

export class Files extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getQuotaInformation(course_id: string): Promise<any> {
    const endpoint = `/courses/${course_id}/files/quota`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listFiles(course_id: string, params: ListFilesParams): Promise<File[]> {
    const endpoint = `/courses/${course_id}/files`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getPublicInlinePreviewUrl(id: string, params: GetPublicInlinePreviewUrlParams): Promise<Scope> {
    const endpoint = `/files/${id}/public_url`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getFile(id: string, params: GetFileParams): Promise<File> {
    const endpoint = `/files/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async translateFileReference(course_id: string, migration_id: string): Promise<File> {
    const endpoint = `/courses/${course_id}/files/file_ref/${migration_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateFile(id: string, params: UpdateFileParams): Promise<File> {
    const endpoint = `/files/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteFile(id: string, params: DeleteFileParams): Promise<File> {
    const endpoint = `/files/${id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getIconMetadata(id: string): Promise<any> {
    const endpoint = `/files/${id}/icon_metadata`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async resetLinkVerifier(id: string): Promise<File> {
    const endpoint = `/files/${id}/reset_verifier`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listFolders(id: string): Promise<Folder[]> {
    const endpoint = `/folders/${id}/folders`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAllFolders(course_id: string): Promise<Folder[]> {
    const endpoint = `/courses/${course_id}/folders`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async resolvePath(course_id: string): Promise<Folder[]> {
    const endpoint = `/courses/${course_id}/folders/by_path/*full_path`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getFolder(course_id: string, id: string): Promise<Folder> {
    const endpoint = `/courses/${course_id}/folders/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateFolder(id: string, params: UpdateFolderParams): Promise<Folder> {
    const endpoint = `/folders/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createFolder(course_id: string, params: CreateFolderParams): Promise<Folder> {
    const endpoint = `/courses/${course_id}/folders`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteFolder(id: string, params: DeleteFolderParams): Promise<Scope> {
    const endpoint = `/folders/${id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async uploadFile(folder_id: string): Promise<Scope> {
    const endpoint = `/folders/${folder_id}/files`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async copyFile(dest_folder_id: string, params: CopyFileParams): Promise<File> {
    const endpoint = `/folders/${dest_folder_id}/copy_file`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async copyFolder(dest_folder_id: string, params: CopyFolderParams): Promise<Folder> {
    const endpoint = `/folders/${dest_folder_id}/copy_folder`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUploadedMediaFolderForUser(course_id: string): Promise<Folder> {
    const endpoint = `/courses/${course_id}/folders/media`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async setUsageRights(course_id: string, params: SetUsageRightsParams): Promise<UsageRights> {
    const endpoint = `/courses/${course_id}/usage_rights`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeUsageRights(course_id: string, params: RemoveUsageRightsParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/usage_rights`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listLicenses(course_id: string): Promise<License[]> {
    const endpoint = `/courses/${course_id}/content_licenses`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
