import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { MediaTrack, Scope, MediaObject } from '../types/models';
import { ListMediaObjectsParams, ListMediaTracksForMediaObjectParams, UpdateMediaTracksParams } from '../types/params';

export class MediaObjects extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listMediaTracksForMediaObject(
    media_object_id: string,
    params: ListMediaTracksForMediaObjectParams,
  ): Promise<MediaTrack[]> {
    const endpoint = `/media_objects/${media_object_id}/media_tracks`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateMediaTracks(media_object_id: string, params: UpdateMediaTracksParams): Promise<Scope> {
    const endpoint = `/media_objects/${media_object_id}/media_tracks`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listMediaObjects(params: ListMediaObjectsParams): Promise<MediaObject[]> {
    const endpoint = `/media_objects`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateMediaObject(media_object_id: string): Promise<Scope> {
    const endpoint = `/media_objects/${media_object_id}`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
