import { PairingCode, User } from '../types/models';
import {
  AddAnObserveeParams,
  AddAnObserveeWithCredentialsParams,
  ListObserveesParams,
  ListObserversParams,
  RemoveAnObserveeParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class UserObservees extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listObservees(user_id: string, params: ListObserveesParams): Promise<User[]> {
    const endpoint = `/users/${user_id}/observees`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listObservers(user_id: string, params: ListObserversParams): Promise<User[]> {
    const endpoint = `/users/${user_id}/observers`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addAnObserveeWithCredentials(
    user_id: string,
    params: AddAnObserveeWithCredentialsParams,
  ): Promise<User> {
    const endpoint = `/users/${user_id}/observees`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showAnObservee(user_id: string, observee_id: string): Promise<User> {
    const endpoint = `/users/${user_id}/observees/${observee_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showAnObserver(user_id: string, observer_id: string): Promise<User> {
    const endpoint = `/users/${user_id}/observers/${observer_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addAnObservee(user_id: string, observee_id: string, params: AddAnObserveeParams): Promise<User> {
    const endpoint = `/users/${user_id}/observees/${observee_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeAnObservee(user_id: string, observee_id: string, params: RemoveAnObserveeParams): Promise<User> {
    const endpoint = `/users/${user_id}/observees/${observee_id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createObserverPairingCode(user_id: string): Promise<PairingCode> {
    const endpoint = `/users/${user_id}/observer_pairing_codes`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
