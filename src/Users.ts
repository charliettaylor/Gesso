import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import {
  Assignment,
  Avatar,
  Conversation,
  Course,
  Page,
  Profile,
  Scope,
  User,
} from "../types/models.ts";
import {
  CreateUserParams,
  DeleteCustomDataParams,
  deprecatedSelfRegisterUserParams,
  EditUserParams,
  GetPandataEventsJwtTokenItsExpirationDateParams,
  ListCountsForTodoItemsParams,
  ListMissingSubmissionsParams,
  ListTheActivityStreamParams,
  ListTheTodoItemsParams,
  ListUserPageViewsParams,
  ListUsersInAccountParams,
  LoadCustomDataParams,
  SetCourseNicknameParams,
  ShowUserDetailsParams,
  StoreCustomDataParams,
  UpdateCustomColorParams,
  UpdateUserSettingsParams,
} from "../types/params.ts";

export class Users extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listUsersInAccount(
    account_id: string,
    params?: ListUsersInAccountParams,
    body?: unknown,
  ): Promise<User[]> {
    const endpoint = `/api/v1/accounts/${account_id}/users`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as User[];
    }

    return Promise.reject(response.statusText);
  }

  public async listTheActivityStream(
    params?: ListTheActivityStreamParams,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint = "/api/v1/users/self/activity_stream";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async activityStreamSummary(body?: unknown): Promise<Conversation> {
    const endpoint = "/api/v1/users/self/activity_stream/summary";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Conversation;
    }

    return Promise.reject(response.statusText);
  }

  public async listTheTodoItems(
    params?: ListTheTodoItemsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/users/self/todo";
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

    return Promise.reject(response.statusText);
  }

  public async listCountsForTodoItems(
    params?: ListCountsForTodoItemsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/users/self/todo_item_count";
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

    return Promise.reject(response.statusText);
  }

  public async listUpcomingAssignmentsCalendarEvents(
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = "/api/v1/users/self/upcoming_events";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async listMissingSubmissions(
    user_id: string,
    params?: ListMissingSubmissionsParams,
    body?: unknown,
  ): Promise<Assignment[]> {
    const endpoint = `/api/v1/users/${user_id}/missing_submissions`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment[];
    }

    return Promise.reject(response.statusText);
  }

  public async hideStreamItem(id: string, body?: unknown): Promise<Scope> {
    const endpoint = `/api/v1/users/self/activity_stream/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async hideAllStreamItems(body?: unknown): Promise<Scope> {
    const endpoint = "/api/v1/users/self/activity_stream";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async uploadFile(user_id: string, body?: unknown): Promise<Scope> {
    const endpoint = `/api/v1/users/${user_id}/files`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async showUserDetails(
    id: string,
    params?: ShowUserDetailsParams,
    body?: unknown,
  ): Promise<User> {
    const endpoint = `/api/v1/users/${id}`;
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

    return Promise.reject(response.statusText);
  }

  public async createUser(
    account_id: string,
    params?: CreateUserParams,
    body?: unknown,
  ): Promise<User> {
    const endpoint = `/api/v1/accounts/${account_id}/users`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as User;
    }

    return Promise.reject(response.statusText);
  }

  public async deprecatedSelfRegisterUser(
    account_id: string,
    params?: deprecatedSelfRegisterUserParams,
    body?: unknown,
  ): Promise<User> {
    const endpoint = `/api/v1/accounts/${account_id}/self_registration`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as User;
    }

    return Promise.reject(response.statusText);
  }

  public async updateUserSettings(
    id: string,
    params?: UpdateUserSettingsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/users/${id}/settings`;
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

    return Promise.reject(response.statusText);
  }

  public async getCustomColors(id: string, body?: unknown): Promise<unknown> {
    const endpoint = `/api/v1/users/${id}/colors`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async getCustomColor(
    id: string,
    asset_string: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/users/${id}/colors/${asset_string}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async updateCustomColor(
    id: string,
    asset_string: string,
    params?: UpdateCustomColorParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/users/${id}/colors/${asset_string}`;
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

  public async getDashboardPositions(
    id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = `/api/v1/users/${id}/dashboard_positions`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async updateDashboardPositions(
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/users/${id}/dashboard_positions`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async editUser(
    id: string,
    params?: EditUserParams,
    body?: unknown,
  ): Promise<User> {
    const endpoint = `/api/v1/users/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as User;
    }

    return Promise.reject(response.statusText);
  }

  public async terminateAllUserSessions(
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/users/${id}/sessions`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async mergeUserIntoAnotherUser(
    id: string,
    destination_user_id: string,
    body?: unknown,
  ): Promise<User> {
    const endpoint = `/api/v1/users/${id}/merge_into/${destination_user_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as User;
    }

    return Promise.reject(response.statusText);
  }

  public async splitMergedUsersIntoSeparateUsers(
    id: string,
    body?: unknown,
  ): Promise<User[]> {
    const endpoint = `/api/v1/users/${id}/split`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as User[];
    }

    return Promise.reject(response.statusText);
  }

  public async getPandataEventsJwtTokenItsExpirationDate(
    params?: GetPandataEventsJwtTokenItsExpirationDateParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint = "/api/v1/users/self/pandata_events_token";
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async getUsersMostRecentlyGradedSubmissions(
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/users/${id}/graded_submissions`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async getUserProfile(
    user_id: string,
    body?: unknown,
  ): Promise<Profile> {
    const endpoint = `/api/v1/users/${user_id}/profile`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Profile;
    }

    return Promise.reject(response.statusText);
  }

  public async listAvatarOptions(
    user_id: string,
    body?: unknown,
  ): Promise<Avatar[]> {
    const endpoint = `/api/v1/users/${user_id}/avatars`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Avatar[];
    }

    return Promise.reject(response.statusText);
  }

  public async listUserPageViews(
    user_id: string,
    params?: ListUserPageViewsParams,
    body?: unknown,
  ): Promise<Page[]> {
    const endpoint = `/api/v1/users/${user_id}/page_views`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Page[];
    }

    return Promise.reject(response.statusText);
  }

  public async storeCustomData(
    user_id: string,
    params?: StoreCustomDataParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/users/${user_id}/custom_data(/*scope)`;
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

  public async loadCustomData(
    user_id: string,
    params?: LoadCustomDataParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/users/${user_id}/custom_data(/*scope)`;
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

    return Promise.reject(response.statusText);
  }

  public async deleteCustomData(
    user_id: string,
    params?: DeleteCustomDataParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/users/${user_id}/custom_data(/*scope)`;
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

  public async listCourseNicknames(body?: unknown): Promise<Course[]> {
    const endpoint = "/api/v1/users/self/course_nicknames";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Course[];
    }

    return Promise.reject(response.statusText);
  }

  public async getCourseNickname(
    course_id: string,
    body?: unknown,
  ): Promise<Course> {
    const endpoint = `/api/v1/users/self/course_nicknames/${course_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Course;
    }

    return Promise.reject(response.statusText);
  }

  public async setCourseNickname(
    course_id: string,
    params?: SetCourseNicknameParams,
    body?: unknown,
  ): Promise<Course> {
    const endpoint = `/api/v1/users/self/course_nicknames/${course_id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Course;
    }

    return Promise.reject(response.statusText);
  }

  public async removeCourseNickname(
    course_id: string,
    body?: unknown,
  ): Promise<Course> {
    const endpoint = `/api/v1/users/self/course_nicknames/${course_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Course;
    }

    return Promise.reject(response.statusText);
  }

  public async clearCourseNicknames(body?: unknown): Promise<Scope> {
    const endpoint = "/api/v1/users/self/course_nicknames";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
