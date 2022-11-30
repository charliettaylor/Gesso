import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { CalendarEvent, Scope } from "../types/models.ts";
import {
  CreateCalendarEventParams,
  CreateOrUpdateEventsDirectlyForCourseTimetableParams,
  DeleteCalendarEventParams,
  ListCalendarEventsForUserParams,
  ListCalendarEventsParams,
  ReserveTimeSlotParams,
  SetCourseTimetableParams,
  UpdateCalendarEventParams,
} from "../types/params.ts";

export class CalendarEvents extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCalendarEvents(
    params?: ListCalendarEventsParams,
    body?: unknown,
  ): Promise<CalendarEvent[]> {
    const endpoint = "/api/v1/calendar_events";
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

    return Promise.reject(response.statusText);
  }

  public async listCalendarEventsForUser(
    user_id: string,
    params?: ListCalendarEventsForUserParams,
    body?: unknown,
  ): Promise<CalendarEvent[]> {
    const endpoint = `/api/v1/users/${user_id}/calendar_events`;
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

    return Promise.reject(response.statusText);
  }

  public async createCalendarEvent(
    params?: CreateCalendarEventParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/calendar_events";
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

    return Promise.reject(response.statusText);
  }

  public async getSingleCalendarEventOrAssignment(
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/calendar_events/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async reserveTimeSlot(
    id: string,
    params?: ReserveTimeSlotParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/calendar_events/${id}/reservations`;
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

    return Promise.reject(response.statusText);
  }

  public async updateCalendarEvent(
    id: string,
    params?: UpdateCalendarEventParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/calendar_events/${id}`;
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

    return Promise.reject(response.statusText);
  }

  public async deleteCalendarEvent(
    id: string,
    params?: DeleteCalendarEventParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/calendar_events/${id}`;
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

    return Promise.reject(response.statusText);
  }

  public async saveEnabledAccountCalendarsCreatesUpdatesTheEnabledaccountcalendarsMarkfeatureasseenUserPreferences(
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/calendar_events/save_enabled_account_calendars";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async setCourseTimetable(
    course_id: string,
    params?: SetCourseTimetableParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/calendar_events/timetable`;
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

    return Promise.reject(response.statusText);
  }

  public async getCourseTimetable(
    course_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/courses/${course_id}/calendar_events/timetable`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async createOrUpdateEventsDirectlyForCourseTimetable(
    course_id: string,
    params?: CreateOrUpdateEventsDirectlyForCourseTimetableParams,
    body?: unknown,
  ): Promise<Scope[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/calendar_events/timetable_events`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope[];
    }

    return Promise.reject(response.statusText);
  }
}
