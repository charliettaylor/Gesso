import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { CalendarEvent, Group, Scope, User } from "../types/models.ts";
import {
  CreateAnAppointmentGroupParams,
  DeleteAnAppointmentGroupParams,
  GetNextAppointmentParams,
  GetSingleAppointmentGroupParams,
  ListAppointmentGroupsParams,
  ListStudentGroupParticipantsParams,
  ListUserParticipantsParams,
  UpdateAnAppointmentGroupParams,
} from "../types/params.ts";

export class AppointmentGroups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAppointmentGroups(
    params?: ListAppointmentGroupsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/appointment_groups";
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

  public async createAnAppointmentGroup(
    params?: CreateAnAppointmentGroupParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/appointment_groups";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async getSingleAppointmentGroup(
    id: string,
    params?: GetSingleAppointmentGroupParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/appointment_groups/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response);
  }

  public async updateAnAppointmentGroup(
    id: string,
    params?: UpdateAnAppointmentGroupParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/appointment_groups/${id}`;
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

  public async deleteAnAppointmentGroup(
    id: string,
    params?: DeleteAnAppointmentGroupParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/appointment_groups/${id}`;
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

  public async listUserParticipants(
    id: string,
    params?: ListUserParticipantsParams,
    body?: unknown,
  ): Promise<Group> {
    const endpoint = `/api/v1/appointment_groups/${id}/users`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Group;
    }

    return Promise.reject(response);
  }

  public async listStudentGroupParticipants(
    id: string,
    params?: ListStudentGroupParticipantsParams,
    body?: unknown,
  ): Promise<User> {
    const endpoint = `/api/v1/appointment_groups/${id}/groups`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as User;
    }

    return Promise.reject(response);
  }

  public async getNextAppointment(
    params?: GetNextAppointmentParams,
    body?: unknown,
  ): Promise<CalendarEvent[]> {
    const endpoint = "/api/v1/appointment_groups/next_appointment";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as CalendarEvent[];
    }

    return Promise.reject(response);
  }
}
