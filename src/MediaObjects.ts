import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { MediaObject, MediaTrack, Scope } from "../types/models.ts";
import {
  ListMediaObjectsParams,
  ListMediaTracksForMediaObjectParams,
  UpdateMediaTracksParams,
} from "../types/params.ts";

export class MediaObjects extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listMediaTracksForMediaObject(
    media_object_id: string,
    params?: ListMediaTracksForMediaObjectParams,
    body?: unknown,
  ): Promise<MediaTrack[]> {
    const endpoint = `/api/v1/media_objects/${media_object_id}/media_tracks`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as MediaTrack[];
    }

    return Promise.reject(response);
  }

  public async updateMediaTracks(
    media_object_id: string,
    params?: UpdateMediaTracksParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/media_objects/${media_object_id}/media_tracks`;
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

  public async listMediaObjects(
    params?: ListMediaObjectsParams,
    body?: unknown,
  ): Promise<MediaObject[]> {
    const endpoint = "/api/v1/media_objects";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as MediaObject[];
    }

    return Promise.reject(response);
  }

  public async updateMediaObject(
    media_object_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/media_objects/${media_object_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }
}
