import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { UpdateMediaTracksParams, ListMediaObjectsParams, ListMediaTracksForMediaObjectParams } from '../types/params';
  
export class MediaObjects extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listMediaTracksForMediaObject(media_object_id: string, params?: ListMediaTracksForMediaObjectParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/media_objects/${media_object_id}/media_tracks`;
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

  public async updateMediaTracks(media_object_id: string, params?: UpdateMediaTracksParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/media_objects/${media_object_id}/media_tracks`;
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

  public async listMediaObjects(params?: ListMediaObjectsParams, body?: any): Promise<any[]> {
    const endpoint = '/api/v1/media_objects';
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

  public async updateMediaObject(media_object_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/media_objects/${media_object_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
