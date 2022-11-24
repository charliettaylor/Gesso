import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { User } from "../types/models.ts";

export class PlagiarismDetectionPlatformUsers extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSingleUserlti(id: string, body?: unknown): Promise<User> {
    const endpoint = `/api/v1/api/lti/users/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAllUsersInGrouplti(
    group_id: string,
    body?: unknown,
  ): Promise<User[]> {
    const endpoint = `/api/v1/api/lti/groups/${group_id}/users`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
