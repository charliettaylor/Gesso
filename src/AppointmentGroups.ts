import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { ListStudentGroupParticipantsParams, DeleteAnAppointmentGroupParams, ListAppointmentGroupsParams, UpdateAnAppointmentGroupParams, ListUserParticipantsParams, GetNextAppointmentParams, GetSingleAppointmentGroupParams, CreateAnAppointmentGroupParams } from '../types/params';
  
export class AppointmentGroups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAppointmentGroups(params?: ListAppointmentGroupsParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/appointment_groups';
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

  public async createAnAppointmentGroup(params?: CreateAnAppointmentGroupParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/appointment_groups';
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

  public async getSingleAppointmentGroup(id: string, params?: GetSingleAppointmentGroupParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/appointment_groups/${id}`;
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

  public async updateAnAppointmentGroup(id: string, params?: UpdateAnAppointmentGroupParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/appointment_groups/${id}`;
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

  public async deleteAnAppointmentGroup(id: string, params?: DeleteAnAppointmentGroupParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/appointment_groups/${id}`;
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

  public async listUserParticipants(id: string, params?: ListUserParticipantsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/appointment_groups/${id}/users`;
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

  public async listStudentGroupParticipants(id: string, params?: ListStudentGroupParticipantsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/appointment_groups/${id}/groups`;
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

  public async getNextAppointment(params?: GetNextAppointmentParams, body?: any): Promise<any[]> {
    const endpoint = '/api/v1/appointment_groups/next_appointment';
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
