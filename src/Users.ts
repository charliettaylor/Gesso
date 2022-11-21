import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { User, Assignment, Conversation, Scope, Profile, Avatar, Page, Course } from '../types/models';
import {
  LoadCustomDataParams,
  ListCountsForTodoItemsParams,
  CreateUserParams,
  UpdateCustomColorParams,
  StoreCustomDataParams,
  deprecatedSelfRegisterUserParams,
  GetPandataEventsJwtTokenItsExpirationDateParams,
  SetCourseNicknameParams,
  ShowUserDetailsParams,
  DeleteCustomDataParams,
  UpdateUserSettingsParams,
  ListMissingSubmissionsParams,
  ListTheActivityStreamParams,
  ListTheTodoItemsParams,
  EditUserParams,
  ListUserPageViewsParams,
  ListUsersInAccountParams,
} from '../types/params';

export class Users extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listUsersInAccount(account_id: string, params: ListUsersInAccountParams): Promise<User[]> {
    const endpoint = `/accounts/${account_id}/users`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listTheActivityStream(params: ListTheActivityStreamParams): Promise<Assignment> {
    const endpoint = `/users/self/activity_stream`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async activityStreamSummary(): Promise<Conversation> {
    const endpoint = `/users/self/activity_stream/summary`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listTheTodoItems(params: ListTheTodoItemsParams): Promise<Scope> {
    const endpoint = `/users/self/todo`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listCountsForTodoItems(params: ListCountsForTodoItemsParams): Promise<Scope> {
    const endpoint = `/users/self/todo_item_count`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listUpcomingAssignmentsCalendarEvents(): Promise<Scope> {
    const endpoint = `/users/self/upcoming_events`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listMissingSubmissions(user_id: string, params: ListMissingSubmissionsParams): Promise<Assignment[]> {
    const endpoint = `/users/${user_id}/missing_submissions`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async hideStreamItem(id: string): Promise<Scope> {
    const endpoint = `/users/self/activity_stream/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async hideAllStreamItems(): Promise<Scope> {
    const endpoint = `/users/self/activity_stream`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async uploadFile(user_id: string): Promise<Scope> {
    const endpoint = `/users/${user_id}/files`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async showUserDetails(id: string, params: ShowUserDetailsParams): Promise<User> {
    const endpoint = `/users/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createUser(account_id: string, params: CreateUserParams): Promise<User> {
    const endpoint = `/accounts/${account_id}/users`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deprecatedSelfRegisterUser(account_id: string, params: deprecatedSelfRegisterUserParams): Promise<User> {
    const endpoint = `/accounts/${account_id}/self_registration`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateUserSettings(id: string, params: UpdateUserSettingsParams): Promise<Scope> {
    const endpoint = `/users/${id}/settings`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCustomColors(id: string): Promise<any> {
    const endpoint = `/users/${id}/colors`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCustomColor(id: string, asset_string: string): Promise<any> {
    const endpoint = `/users/${id}/colors/${asset_string}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateCustomColor(id: string, asset_string: string, params: UpdateCustomColorParams): Promise<Scope> {
    const endpoint = `/users/${id}/colors/${asset_string}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getDashboardPositions(id: string): Promise<any> {
    const endpoint = `/users/${id}/dashboard_positions`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateDashboardPositions(id: string): Promise<Scope> {
    const endpoint = `/users/${id}/dashboard_positions`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async editUser(id: string, params: EditUserParams): Promise<User> {
    const endpoint = `/users/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async terminateAllUserSessions(id: string): Promise<Scope> {
    const endpoint = `/users/${id}/sessions`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async mergeUserIntoAnotherUser(id: string, destination_user_id: string): Promise<User> {
    const endpoint = `/users/${id}/merge_into/${destination_user_id}`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async splitMergedUsersIntoSeparateUsers(id: string): Promise<User[]> {
    const endpoint = `/users/${id}/split`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getPandataEventsJwtTokenItsExpirationDate(
    params: GetPandataEventsJwtTokenItsExpirationDateParams,
  ): Promise<any> {
    const endpoint = `/users/self/pandata_events_token`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUsersMostRecentlyGradedSubmissions(id: string): Promise<Scope> {
    const endpoint = `/users/${id}/graded_submissions`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUserProfile(user_id: string): Promise<Profile> {
    const endpoint = `/users/${user_id}/profile`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listAvatarOptions(user_id: string): Promise<Avatar[]> {
    const endpoint = `/users/${user_id}/avatars`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listUserPageViews(user_id: string, params: ListUserPageViewsParams): Promise<Page[]> {
    const endpoint = `/users/${user_id}/page_views`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async storeCustomData(user_id: string, params: StoreCustomDataParams): Promise<Scope> {
    const endpoint = `/users/${user_id}/custom_data(/*scope)`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async loadCustomData(user_id: string, params: LoadCustomDataParams): Promise<Scope> {
    const endpoint = `/users/${user_id}/custom_data(/*scope)`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteCustomData(user_id: string, params: DeleteCustomDataParams): Promise<Scope> {
    const endpoint = `/users/${user_id}/custom_data(/*scope)`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listCourseNicknames(): Promise<Course[]> {
    const endpoint = `/users/self/course_nicknames`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourseNickname(course_id: string): Promise<Course> {
    const endpoint = `/users/self/course_nicknames/${course_id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async setCourseNickname(course_id: string, params: SetCourseNicknameParams): Promise<Course> {
    const endpoint = `/users/self/course_nicknames/${course_id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeCourseNickname(course_id: string): Promise<Course> {
    const endpoint = `/users/self/course_nicknames/${course_id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async clearCourseNicknames(): Promise<Scope> {
    const endpoint = `/users/self/course_nicknames`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
