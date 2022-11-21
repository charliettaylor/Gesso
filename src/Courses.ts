import { Account, Course, CourseProgress, Progress, Scope, User } from '../types/models';
import {
  CopyCourseContentParams,
  CreateNewCourseParams,
  DeleteCourseParams,
  GetEffectiveDueDatesParams,
  GetSingleCourseParams,
  ListCoursesForUserParams,
  ListCoursesParams,
  ListUsersInCourseParams,
  PermissionsParams,
  PreviewProcessedHtmlParams,
  SearchForContentShareUsersParams,
  UpdateCourseParams,
  UpdateCourseSettingsParams,
  UpdateCoursesParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class Courses extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCourses(params: ListCoursesParams): Promise<Course[]> {
    const endpoint = `/courses`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listCoursesForUser(user_id: string, params: ListCoursesForUserParams): Promise<Course[]> {
    const endpoint = `/users/${user_id}/courses`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getUserProgress(course_id: string, user_id: string): Promise<CourseProgress> {
    const endpoint = `/courses/${course_id}/users/${user_id}/progress`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createNewCourse(account_id: string, params: CreateNewCourseParams): Promise<Course> {
    const endpoint = `/accounts/${account_id}/courses`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async uploadFile(course_id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/files`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listStudents(course_id: string): Promise<User[]> {
    const endpoint = `/courses/${course_id}/students`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listUsersInCourse(course_id: string, params: ListUsersInCourseParams): Promise<User[]> {
    const endpoint = `/courses/${course_id}/users`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listRecentlyLoggedInStudents(course_id: string): Promise<User[]> {
    const endpoint = `/courses/${course_id}/recent_students`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleUser(course_id: string, id: string): Promise<User> {
    const endpoint = `/courses/${course_id}/users/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async searchForContentShareUsers(
    course_id: string,
    params: SearchForContentShareUsersParams,
  ): Promise<User[]> {
    const endpoint = `/courses/${course_id}/content_share_users`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async previewProcessedHtml(course_id: string, params: PreviewProcessedHtmlParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/preview_html`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async courseActivityStream(course_id: string): Promise<any> {
    const endpoint = `/courses/${course_id}/activity_stream`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async courseActivityStreamSummary(course_id: string): Promise<any> {
    const endpoint = `/courses/${course_id}/activity_stream/summary`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async courseTodoItems(course_id: string): Promise<any> {
    const endpoint = `/courses/${course_id}/todo`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteCourse(id: string, params: DeleteCourseParams): Promise<Scope> {
    const endpoint = `/courses/${id}`;
    const response = await this.delete(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourseSettings(course_id: string): Promise<any> {
    const endpoint = `/courses/${course_id}/settings`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateCourseSettings(course_id: string, params: UpdateCourseSettingsParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/settings`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async returnTestStudentForCourse(course_id: string): Promise<User> {
    const endpoint = `/courses/${course_id}/student_view_student`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleCourse(id: string, params: GetSingleCourseParams): Promise<Course> {
    const endpoint = `/courses/${id}`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateCourse(id: string, params: UpdateCourseParams): Promise<Scope> {
    const endpoint = `/courses/${id}`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateCourses(account_id: string, params: UpdateCoursesParams): Promise<Progress> {
    const endpoint = `/accounts/${account_id}/courses`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async resetCourse(course_id: string): Promise<Course> {
    const endpoint = `/courses/${course_id}/reset_content`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getEffectiveDueDates(course_id: string, params: GetEffectiveDueDatesParams): Promise<any> {
    const endpoint = `/courses/${course_id}/effective_due_dates`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async permissions(course_id: string, params: PermissionsParams): Promise<Account> {
    const endpoint = `/courses/${course_id}/permissions`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getBulkUserProgress(course_id: string): Promise<any> {
    const endpoint = `/courses/${course_id}/bulk_user_progress`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeQuizMigrationAlert(id: string): Promise<Scope> {
    const endpoint = `/courses/${id}/dismiss_migration_limitation_message`;
    const response = await this.post(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourseCopyStatus(course_id: string, id: string): Promise<Scope> {
    const endpoint = `/courses/${course_id}/course_copy/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async copyCourseContent(course_id: string, params: CopyCourseContentParams): Promise<Scope> {
    const endpoint = `/courses/${course_id}/course_copy`;
    const response = await this.post(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
