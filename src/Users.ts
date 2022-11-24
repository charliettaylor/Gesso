import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { EditUserParams, ListTheTodoItemsParams, UpdateCustomColorParams, StoreCustomDataParams, DeleteCustomDataParams, ListTheActivityStreamParams, ShowUserDetailsParams, UpdateUserSettingsParams, LoadCustomDataParams, ListMissingSubmissionsParams, CreateUserParams, ListCountsForTodoItemsParams, ListUserPageViewsParams, SetCourseNicknameParams, deprecatedSelfRegisterUserParams, GetPandataEventsJwtTokenItsExpirationDateParams, ListUsersInAccountParams } from '../types/params';
  
export class Users extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listUsersInAccount(account_id: string, params?: ListUsersInAccountParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/accounts/${account_id}/users`;
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

  public async listTheActivityStream(params?: ListTheActivityStreamParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/activity_stream';
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

  public async activityStreamSummary(body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/activity_stream/summary';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listTheTodoItems(params?: ListTheTodoItemsParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/todo';
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

  public async listCountsForTodoItems(params?: ListCountsForTodoItemsParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/todo_item_count';
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

  public async listUpcomingAssignmentsCalendarEvents(body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/upcoming_events';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listMissingSubmissions(user_id: string, params?: ListMissingSubmissionsParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${user_id}/missing_submissions`;
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

  public async hideStreamItem(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/activity_stream/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async hideAllStreamItems(body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/activity_stream';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async uploadFile(user_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/files`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showUserDetails(id: string, params?: ShowUserDetailsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}`;
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

  public async createUser(account_id: string, params?: CreateUserParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/users`;
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

  public async deprecatedSelfRegisterUser(account_id: string, params?: deprecatedSelfRegisterUserParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/self_registration`;
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

  public async updateUserSettings(id: string, params?: UpdateUserSettingsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}/settings`;
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

  public async getCustomColors(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}/colors`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCustomColor(id: string, asset_string: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}/colors/${asset_string}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateCustomColor(id: string, asset_string: string, params?: UpdateCustomColorParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}/colors/${asset_string}`;
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

  public async getDashboardPositions(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}/dashboard_positions`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateDashboardPositions(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}/dashboard_positions`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editUser(id: string, params?: EditUserParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}`;
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

  public async terminateAllUserSessions(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}/sessions`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async mergeUserIntoAnotherUser(id: string, destination_user_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}/merge_into/${destination_user_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async splitMergedUsersIntoSeparateUsers(id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${id}/split`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getPandataEventsJwtTokenItsExpirationDate(params?: GetPandataEventsJwtTokenItsExpirationDateParams, body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/pandata_events_token';
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

  public async getUsersMostRecentlyGradedSubmissions(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${id}/graded_submissions`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUserProfile(user_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/profile`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAvatarOptions(user_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${user_id}/avatars`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listUserPageViews(user_id: string, params?: ListUserPageViewsParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${user_id}/page_views`;
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

  public async storeCustomData(user_id: string, params?: StoreCustomDataParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/custom_data(/*scope)`;
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

  public async loadCustomData(user_id: string, params?: LoadCustomDataParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/custom_data(/*scope)`;
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

  public async deleteCustomData(user_id: string, params?: DeleteCustomDataParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/custom_data(/*scope)`;
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

  public async listCourseNicknames(body?: any): Promise<any[]> {
    const endpoint = '/api/v1/users/self/course_nicknames';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourseNickname(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/course_nicknames/${course_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async setCourseNickname(course_id: string, params?: SetCourseNicknameParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/course_nicknames/${course_id}`;
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

  public async removeCourseNickname(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/course_nicknames/${course_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async clearCourseNicknames(body?: any): Promise<any> {
    const endpoint = '/api/v1/users/self/course_nicknames';
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
