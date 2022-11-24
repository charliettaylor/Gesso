import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { RemoveAnObserveeParams, AddAnObserveeParams, ListObserversParams, ListObserveesParams, AddAnObserveeWithCredentialsParams } from '../types/params';
  
export class UserObservees extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listObservees(user_id: string, params?: ListObserveesParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${user_id}/observees`;
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

  public async listObservers(user_id: string, params?: ListObserversParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${user_id}/observers`;
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

  public async addAnObserveeWithCredentials(user_id: string, params?: AddAnObserveeWithCredentialsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/observees`;
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

  public async showAnObservee(user_id: string, observee_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/observees/${observee_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showAnObserver(user_id: string, observer_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/observers/${observer_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async addAnObservee(user_id: string, observee_id: string, params?: AddAnObserveeParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/observees/${observee_id}`;
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

  public async removeAnObservee(user_id: string, observee_id: string, params?: RemoveAnObserveeParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/observees/${observee_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createObserverPairingCode(user_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/observer_pairing_codes`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
