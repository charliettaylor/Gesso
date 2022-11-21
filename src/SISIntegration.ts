import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';
import { Scope } from '../types/models';
import {
  RetrieveAssignmentsEnabledForGradeExportToSisParams,
  DisableAssignmentsCurrentlyEnabledForGradeExportToSisParams,
} from '../types/params';

export class SISIntegration extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async retrieveAssignmentsEnabledForGradeExportToSis(
    account_id: string,
    params: RetrieveAssignmentsEnabledForGradeExportToSisParams,
  ): Promise<Scope[]> {
    const endpoint = `/api/sis/accounts/${account_id}/assignments`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async disableAssignmentsCurrentlyEnabledForGradeExportToSis(
    course_id: string,
    params: DisableAssignmentsCurrentlyEnabledForGradeExportToSisParams,
  ): Promise<Scope> {
    const endpoint = `/api/sis/courses/${course_id}/disable_post_to_sis`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
