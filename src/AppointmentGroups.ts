import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope, Group, User, CalendarEvent } from '../types/models';
import {
  GetSingleAppointmentGroupParams,
  ListUserParticipantsParams,
  ListAppointmentGroupsParams,
  DeleteAnAppointmentGroupParams,
  ListStudentGroupParticipantsParams,
  GetNextAppointmentParams,
  UpdateAnAppointmentGroupParams,
  CreateAnAppointmentGroupParams,
} from '../types/params';

export class AppointmentGroups extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAppointmentGroups(params: ListAppointmentGroupsParams): Promise<Scope> {
    const endpoint = `/appointment_groups`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createAnAppointmentGroup(params: CreateAnAppointmentGroupParams): Promise<Scope> {
    const endpoint = `/appointment_groups`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleAppointmentGroup(id: string, params: GetSingleAppointmentGroupParams): Promise<any> {
    const endpoint = `/appointment_groups/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateAnAppointmentGroup(id: string, params: UpdateAnAppointmentGroupParams): Promise<Scope> {
    const endpoint = `/appointment_groups/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteAnAppointmentGroup(id: string, params: DeleteAnAppointmentGroupParams): Promise<Scope> {
    const endpoint = `/appointment_groups/${id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listUserParticipants(id: string, params: ListUserParticipantsParams): Promise<Group> {
    const endpoint = `/appointment_groups/${id}/users`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listStudentGroupParticipants(id: string, params: ListStudentGroupParticipantsParams): Promise<User> {
    const endpoint = `/appointment_groups/${id}/groups`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getNextAppointment(params: GetNextAppointmentParams): Promise<CalendarEvent[]> {
    const endpoint = `/appointment_groups/next_appointment`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
