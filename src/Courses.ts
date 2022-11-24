import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Account } from '../types/models';
import { DeleteCourseParams, UpdateCourseSettingsParams, GetSingleCourseParams, CopyCourseContentParams, PermissionsParams, PreviewProcessedHtmlParams, GetEffectiveDueDatesParams, UpdateCourseParams, ListCoursesForUserParams, CreateNewCourseParams, SearchForContentShareUsersParams, ListUsersInCourseParams, UpdateCoursesParams, ListCoursesParams } from '../types/params';
  
export class Courses extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listCourses(params?: ListCoursesParams, body?: any): Promise<any[]> {
    const endpoint = '/api/v1/courses';
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

  public async listCoursesForUser(user_id: string, params?: ListCoursesForUserParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${user_id}/courses`;
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

  public async getUserProgress(course_id: string, user_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/users/${user_id}/progress`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createNewCourse(account_id: string, params?: CreateNewCourseParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/courses`;
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

  public async uploadFile(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/files`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listStudents(course_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/students`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listUsersInCourse(course_id: string, params?: ListUsersInCourseParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/users`;
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

  public async listRecentlyLoggedInStudents(course_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/recent_students`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleUser(course_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/users/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async searchForContentShareUsers(course_id: string, params?: SearchForContentShareUsersParams, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/courses/${course_id}/content_share_users`;
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

  public async previewProcessedHtml(course_id: string, params?: PreviewProcessedHtmlParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/preview_html`;
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

  public async courseActivityStream(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/activity_stream`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async courseActivityStreamSummary(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/activity_stream/summary`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async courseTodoItems(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/todo`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteCourse(id: string, params?: DeleteCourseParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${id}`;
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

  public async getCourseSettings(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/settings`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateCourseSettings(course_id: string, params?: UpdateCourseSettingsParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/settings`;
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

  public async returnTestStudentForCourse(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/student_view_student`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getSingleCourse(id: string, params?: GetSingleCourseParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${id}`;
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

  public async updateCourse(id: string, params?: UpdateCourseParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${id}`;
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

  public async updateCourses(account_id: string, params?: UpdateCoursesParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/accounts/${account_id}/courses`;
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

  public async resetCourse(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/reset_content`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getEffectiveDueDates(course_id: string, params?: GetEffectiveDueDatesParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/effective_due_dates`;
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

  public async permissions(course_id: string, params?: PermissionsParams, body?: any): Promise<Account> {
    const endpoint = `/api/v1/courses/${course_id}/permissions`;
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

  public async getBulkUserProgress(course_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/bulk_user_progress`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async removeQuizMigrationAlert(id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${id}/dismiss_migration_limitation_message`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getCourseCopyStatus(course_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/course_copy/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async copyCourseContent(course_id: string, params?: CopyCourseContentParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/courses/${course_id}/course_copy`;
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
