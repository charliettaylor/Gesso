import { CalendarEvent, Scope } from '../types/models';
import {
  CreateCalendarEventParams,
  CreateOrUpdateEventsDirectlyForCourseTimetableParams,
  DeleteCalendarEventParams,
  ListCalendarEventsForUserParams,
  ListCalendarEventsParams,
  ReserveTimeSlotParams,
  SetCourseTimetableParams,
  UpdateCalendarEventParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class CalendarEvents extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCalendarEvents(params: ListCalendarEventsParams): Promise<CalendarEvent[]> {
    const endpoint = `/calendar_events`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listCalendarEventsForUser(
    user_id: string,
    params: ListCalendarEventsForUserParams,
  ): Promise<CalendarEvent[]> {
    const endpoint = `/users/${user_id}/calendar_events`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createCalendarEvent(params: CreateCalendarEventParams): Promise<Scope> {
    const endpoint = `/calendar_events`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleCalendarEventOrAssignment(id: string): Promise<Scope> {
    const endpoint = `/calendar_events/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async reserveTimeSlot(id: string, params: ReserveTimeSlotParams): Promise<Scope> {
    const endpoint = `/calendar_events/${id}/reservations`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateCalendarEvent(id: string, params: UpdateCalendarEventParams): Promise<Scope> {
    const endpoint = `/calendar_events/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteCalendarEvent(id: string, params: DeleteCalendarEventParams): Promise<Scope> {
    const endpoint = `/calendar_events/${id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async saveEnabledAccountCalendarsCreatesUpdatesTheEnabledaccountcalendarsMarkfeatureasseenUserPreferences(): Promise<Scope> {
    const endpoint = `/calendar_events/save_enabled_account_calendars`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async setCourseTimetable(course_id: string, params: SetCourseTimetableParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/calendar_events/timetable`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourseTimetable(course_id: string): Promise<any> {
    const endpoint = `/courses/${course_id}/calendar_events/timetable`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createOrUpdateEventsDirectlyForCourseTimetable(
    course_id: string,
    params: CreateOrUpdateEventsDirectlyForCourseTimetableParams,
  ): Promise<Scope[]> {
    const endpoint = `/courses/${course_id}/calendar_events/timetable_events`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
