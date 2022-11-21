import { Assignment } from '../types/models';
import {
  RetrieveAssignmentoverriddenDatesForClassicQuizzesParams,
  RetrieveAssignmentoverriddenDatesForNewQuizzesParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class QuizAssignmentOverrides extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async retrieveAssignmentoverriddenDatesForClassicQuizzes(
    course_id: string,
    params: RetrieveAssignmentoverriddenDatesForClassicQuizzesParams,
  ): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/quizzes/assignment_overrides`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async retrieveAssignmentoverriddenDatesForNewQuizzes(
    course_id: string,
    params: RetrieveAssignmentoverriddenDatesForNewQuizzesParams,
  ): Promise<Assignment> {
    const endpoint = `/courses/${course_id}/new_quizzes/assignment_overrides`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
