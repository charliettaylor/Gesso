import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { DeleteCalendarEventParams, ListCalendarEventsForUserParams, SetCourseTimetableParams, CreateCalendarEventParams, UpdateCalendarEventParams, CreateOrUpdateEventsDirectlyForCourseTimetableParams, ReserveTimeSlotParams, ListCalendarEventsParams } from '../types/params';
  
export class CalendarEvents extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCalendarEvents(params?: ListCalendarEventsParams, body?: any): Promise<any[]> {
    const endpoint = '/api/v1/calendar_events';
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

  public async listCalendarEventsForUser(user_id: string, params?: ListCalendarEventsForUserParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${user_id}/calendar_events`;
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

  public async createCalendarEvent(params?: CreateCalendarEventParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/calendar_events';
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

  public async getSingleCalendarEventOrAssignment(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/calendar_events/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async reserveTimeSlot(id: string, params?: ReserveTimeSlotParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/calendar_events/${id}/reservations`;
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

  public async updateCalendarEvent(id: string, params?: UpdateCalendarEventParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/calendar_events/${id}`;
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

  public async deleteCalendarEvent(id: string, params?: DeleteCalendarEventParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/calendar_events/${id}`;
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

  public async saveEnabledAccountCalendarsCreatesUpdatesTheEnabledaccountcalendarsMarkfeatureasseenUserPreferences(body?: any): Promise<any> {
    const endpoint = '/api/v1/calendar_events/save_enabled_account_calendars';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async setCourseTimetable(course_id: string, params?: SetCourseTimetableParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/calendar_events/timetable`;
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

  public async getCourseTimetable(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/calendar_events/timetable`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createOrUpdateEventsDirectlyForCourseTimetable(course_id: string, params?: CreateOrUpdateEventsDirectlyForCourseTimetableParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/calendar_events/timetable_events`;
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

}
