// To parse this data:
//
//   import { Convert, Account, AccountCalendar, AccountNotification, Admin, AnonymousUserDisplay, Answer, Appointment, AppointmentGroup, Assessment, Assignment, AssignmentDate, AssignmentEvent, AssignmentExtension, AssignmentGroup, AssignmentGroupAttributes, AssignmentOverride, AuthenticationEvent, AuthenticationProvider, Avatar, BlackoutDate, BlueprintMigration, BlueprintRestriction, BlueprintSubscription, BlueprintTemplate, Bookmark, CalendarEvent, CalendarLink, ChangeRecord, Collaboration, Collaborator, ColumnDatum, CommMessage, CommunicationChannel, CompletionRequirement, Conference, ConferenceRecording, ContentDetails, ContentExport, ContentMigration, ContentShare, Conversation, ConversationParticipant, Course, CourseAttributes, CourseEpubExport, CourseEvent, CourseEventLink, CourseNickname, CourseProgress, CourseQuizExtension, CreatedEventData, CustomColumn, Day, DeveloperKey, DiscussionTopic, Enrollment, EnrollmentTerm, EnrollmentTermsList, EpubExport, ErrorReport, ExceptionRecord, ExternalFeed, ExternalToolTagAttributes, Favorite, Feature, FeatureFlag, FederatedAttributeConfig, FederatedAttributesConfig, File, FileAttachment, Folder, Grade, GradeChangeEvent, GradeChangeEventLinks, Grader, GradingPeriod, GradingPeriodSets, GradingRules, GradingSchemeEntry, GradingStandard, Group, GroupCategory, GroupMembership, HelpLink, HelpLinks, HistoryEntry, InstAccessToken, JSONAPIPagination, Jwt, LatePolicy, License, LineItem, LockInfo, LtiAssignment, MediaComment, MediaObject, MediaTrack, MigrationIssue, Migrator, Module, ModuleItem, ModuleItemSequence, ModuleItemSequenceNode, NamesAndRoleContext, NamesAndRoleMembership, NamesAndRoleMemberships, NamesAndRoleMessage, NeedsGradingCount, NotificationPreference, OriginalityReport, Outcome, OutcomeAlignment, OutcomeGroup, OutcomeImport, OutcomeImportData, OutcomeLink, OutcomePath, OutcomePathPart, OutcomeResult, OutcomeRollup, OutcomeRollupLinks, OutcomeRollupScore, OutcomeRollupScoreLinks, Page, PageRevision, PageView, PageViewLinks, PairingCode, PeerReview, PlannerNote, PlannerOverride, Poll, PollChoice, PollSession, PollSubmission, Proficiency, ProficiencyRating, Profile, Progress, ProvisionalGrade, Quiz, QuizAssignmentOverride, QuizAssignmentOverrideSet, QuizAssignmentOverrideSetContainer, QuizExtension, QuizGroup, QuizIPFilter, QuizPermissions, QuizQuestion, QuizReport, QuizStatistics, QuizStatisticsAnswerPointBiserial, QuizStatisticsAnswerStatistics, QuizStatisticsLinks, QuizStatisticsQuestionStatistics, QuizStatisticsSubmissionStatistics, QuizSubmission, QuizSubmissionEvent, QuizSubmissionQuestion, QuizSubmissionUserList, QuizSubmissionUserListMeta, Report, ReportParameters, Result, ResultLinks, Role, RolePermissions, Rubric, RubricAssessment, RubricAssociation, RubricCriteria, RubricCriterion, RubricRating, SSOSettings, Scope, Score, ScoreStatistic, Section, SectionAssignmentOverrideAttributes, SectionAttributes, SharedBrandConfig, SisAssignment, SisImport, SisImportData, SisImportError, SisImportStatistic, StudentAttributes, Submission, SubmissionComment, SubmissionHistory, SubmissionVersion, Tab, Term, TermsOfService, ToolSetting, TurnitinSettings, UpdatedEventData, UsageRights, User, UserAssignmentOverrideAttributes, UserDisplay, EPortfolio, EPortfolioPage } from "./file";
//
//   const account = Convert.toAccount(json);
//   const accountCalendar = Convert.toAccountCalendar(json);
//   const accountNotification = Convert.toAccountNotification(json);
//   const admin = Convert.toAdmin(json);
//   const anonymousUserDisplay = Convert.toAnonymousUserDisplay(json);
//   const answer = Convert.toAnswer(json);
//   const appointment = Convert.toAppointment(json);
//   const appointmentGroup = Convert.toAppointmentGroup(json);
//   const assessment = Convert.toAssessment(json);
//   const assignment = Convert.toAssignment(json);
//   const assignmentDate = Convert.toAssignmentDate(json);
//   const assignmentEvent = Convert.toAssignmentEvent(json);
//   const assignmentExtension = Convert.toAssignmentExtension(json);
//   const assignmentGroup = Convert.toAssignmentGroup(json);
//   const assignmentGroupAttributes = Convert.toAssignmentGroupAttributes(json);
//   const assignmentOverride = Convert.toAssignmentOverride(json);
//   const authenticationEvent = Convert.toAuthenticationEvent(json);
//   const authenticationProvider = Convert.toAuthenticationProvider(json);
//   const avatar = Convert.toAvatar(json);
//   const blackoutDate = Convert.toBlackoutDate(json);
//   const blueprintMigration = Convert.toBlueprintMigration(json);
//   const blueprintRestriction = Convert.toBlueprintRestriction(json);
//   const blueprintSubscription = Convert.toBlueprintSubscription(json);
//   const blueprintTemplate = Convert.toBlueprintTemplate(json);
//   const bookmark = Convert.toBookmark(json);
//   const calendarEvent = Convert.toCalendarEvent(json);
//   const calendarLink = Convert.toCalendarLink(json);
//   const changeRecord = Convert.toChangeRecord(json);
//   const collaboration = Convert.toCollaboration(json);
//   const collaborator = Convert.toCollaborator(json);
//   const columnDatum = Convert.toColumnDatum(json);
//   const commMessage = Convert.toCommMessage(json);
//   const communicationChannel = Convert.toCommunicationChannel(json);
//   const completionRequirement = Convert.toCompletionRequirement(json);
//   const conference = Convert.toConference(json);
//   const conferenceRecording = Convert.toConferenceRecording(json);
//   const contentDetails = Convert.toContentDetails(json);
//   const contentExport = Convert.toContentExport(json);
//   const contentMigration = Convert.toContentMigration(json);
//   const contentShare = Convert.toContentShare(json);
//   const conversation = Convert.toConversation(json);
//   const conversationParticipant = Convert.toConversationParticipant(json);
//   const course = Convert.toCourse(json);
//   const courseAttributes = Convert.toCourseAttributes(json);
//   const courseEpubExport = Convert.toCourseEpubExport(json);
//   const courseEvent = Convert.toCourseEvent(json);
//   const courseEventLink = Convert.toCourseEventLink(json);
//   const courseNickname = Convert.toCourseNickname(json);
//   const courseProgress = Convert.toCourseProgress(json);
//   const courseQuizExtension = Convert.toCourseQuizExtension(json);
//   const createdEventData = Convert.toCreatedEventData(json);
//   const customColumn = Convert.toCustomColumn(json);
//   const day = Convert.toDay(json);
//   const developerKey = Convert.toDeveloperKey(json);
//   const discussionTopic = Convert.toDiscussionTopic(json);
//   const enrollment = Convert.toEnrollment(json);
//   const enrollmentTerm = Convert.toEnrollmentTerm(json);
//   const enrollmentTermsList = Convert.toEnrollmentTermsList(json);
//   const epubExport = Convert.toEpubExport(json);
//   const errorReport = Convert.toErrorReport(json);
//   const exceptionRecord = Convert.toExceptionRecord(json);
//   const externalFeed = Convert.toExternalFeed(json);
//   const externalToolTagAttributes = Convert.toExternalToolTagAttributes(json);
//   const favorite = Convert.toFavorite(json);
//   const feature = Convert.toFeature(json);
//   const featureFlag = Convert.toFeatureFlag(json);
//   const federatedAttributeConfig = Convert.toFederatedAttributeConfig(json);
//   const federatedAttributesConfig = Convert.toFederatedAttributesConfig(json);
//   const file = Convert.toFile(json);
//   const fileAttachment = Convert.toFileAttachment(json);
//   const folder = Convert.toFolder(json);
//   const grade = Convert.toGrade(json);
//   const gradeChangeEvent = Convert.toGradeChangeEvent(json);
//   const gradeChangeEventLinks = Convert.toGradeChangeEventLinks(json);
//   const grader = Convert.toGrader(json);
//   const gradingPeriod = Convert.toGradingPeriod(json);
//   const gradingPeriodSets = Convert.toGradingPeriodSets(json);
//   const gradingRules = Convert.toGradingRules(json);
//   const gradingSchemeEntry = Convert.toGradingSchemeEntry(json);
//   const gradingStandard = Convert.toGradingStandard(json);
//   const group = Convert.toGroup(json);
//   const groupCategory = Convert.toGroupCategory(json);
//   const groupMembership = Convert.toGroupMembership(json);
//   const helpLink = Convert.toHelpLink(json);
//   const helpLinks = Convert.toHelpLinks(json);
//   const historyEntry = Convert.toHistoryEntry(json);
//   const instAccessToken = Convert.toInstAccessToken(json);
//   const jSONAPIPagination = Convert.toJSONAPIPagination(json);
//   const jwt = Convert.toJwt(json);
//   const latePolicy = Convert.toLatePolicy(json);
//   const license = Convert.toLicense(json);
//   const lineItem = Convert.toLineItem(json);
//   const lockInfo = Convert.toLockInfo(json);
//   const ltiAssignment = Convert.toLtiAssignment(json);
//   const mediaComment = Convert.toMediaComment(json);
//   const mediaObject = Convert.toMediaObject(json);
//   const mediaTrack = Convert.toMediaTrack(json);
//   const migrationIssue = Convert.toMigrationIssue(json);
//   const migrator = Convert.toMigrator(json);
//   const module = Convert.toModule(json);
//   const moduleItem = Convert.toModuleItem(json);
//   const moduleItemSequence = Convert.toModuleItemSequence(json);
//   const moduleItemSequenceNode = Convert.toModuleItemSequenceNode(json);
//   const namesAndRoleContext = Convert.toNamesAndRoleContext(json);
//   const namesAndRoleMembership = Convert.toNamesAndRoleMembership(json);
//   const namesAndRoleMemberships = Convert.toNamesAndRoleMemberships(json);
//   const namesAndRoleMessage = Convert.toNamesAndRoleMessage(json);
//   const needsGradingCount = Convert.toNeedsGradingCount(json);
//   const notificationPreference = Convert.toNotificationPreference(json);
//   const originalityReport = Convert.toOriginalityReport(json);
//   const outcome = Convert.toOutcome(json);
//   const outcomeAlignment = Convert.toOutcomeAlignment(json);
//   const outcomeGroup = Convert.toOutcomeGroup(json);
//   const outcomeImport = Convert.toOutcomeImport(json);
//   const outcomeImportData = Convert.toOutcomeImportData(json);
//   const outcomeLink = Convert.toOutcomeLink(json);
//   const outcomePath = Convert.toOutcomePath(json);
//   const outcomePathPart = Convert.toOutcomePathPart(json);
//   const outcomeResult = Convert.toOutcomeResult(json);
//   const outcomeRollup = Convert.toOutcomeRollup(json);
//   const outcomeRollupLinks = Convert.toOutcomeRollupLinks(json);
//   const outcomeRollupScore = Convert.toOutcomeRollupScore(json);
//   const outcomeRollupScoreLinks = Convert.toOutcomeRollupScoreLinks(json);
//   const page = Convert.toPage(json);
//   const pageRevision = Convert.toPageRevision(json);
//   const pageView = Convert.toPageView(json);
//   const pageViewLinks = Convert.toPageViewLinks(json);
//   const pairingCode = Convert.toPairingCode(json);
//   const peerReview = Convert.toPeerReview(json);
//   const plannerNote = Convert.toPlannerNote(json);
//   const plannerOverride = Convert.toPlannerOverride(json);
//   const poll = Convert.toPoll(json);
//   const pollChoice = Convert.toPollChoice(json);
//   const pollSession = Convert.toPollSession(json);
//   const pollSubmission = Convert.toPollSubmission(json);
//   const proficiency = Convert.toProficiency(json);
//   const proficiencyRating = Convert.toProficiencyRating(json);
//   const profile = Convert.toProfile(json);
//   const progress = Convert.toProgress(json);
//   const provisionalGrade = Convert.toProvisionalGrade(json);
//   const quiz = Convert.toQuiz(json);
//   const quizAssignmentOverride = Convert.toQuizAssignmentOverride(json);
//   const quizAssignmentOverrideSet = Convert.toQuizAssignmentOverrideSet(json);
//   const quizAssignmentOverrideSetContainer = Convert.toQuizAssignmentOverrideSetContainer(json);
//   const quizExtension = Convert.toQuizExtension(json);
//   const quizGroup = Convert.toQuizGroup(json);
//   const quizIPFilter = Convert.toQuizIPFilter(json);
//   const quizPermissions = Convert.toQuizPermissions(json);
//   const quizQuestion = Convert.toQuizQuestion(json);
//   const quizReport = Convert.toQuizReport(json);
//   const quizStatistics = Convert.toQuizStatistics(json);
//   const quizStatisticsAnswerPointBiserial = Convert.toQuizStatisticsAnswerPointBiserial(json);
//   const quizStatisticsAnswerStatistics = Convert.toQuizStatisticsAnswerStatistics(json);
//   const quizStatisticsLinks = Convert.toQuizStatisticsLinks(json);
//   const quizStatisticsQuestionStatistics = Convert.toQuizStatisticsQuestionStatistics(json);
//   const quizStatisticsSubmissionStatistics = Convert.toQuizStatisticsSubmissionStatistics(json);
//   const quizSubmission = Convert.toQuizSubmission(json);
//   const quizSubmissionEvent = Convert.toQuizSubmissionEvent(json);
//   const quizSubmissionQuestion = Convert.toQuizSubmissionQuestion(json);
//   const quizSubmissionUserList = Convert.toQuizSubmissionUserList(json);
//   const quizSubmissionUserListMeta = Convert.toQuizSubmissionUserListMeta(json);
//   const report = Convert.toReport(json);
//   const reportParameters = Convert.toReportParameters(json);
//   const result = Convert.toResult(json);
//   const resultLinks = Convert.toResultLinks(json);
//   const role = Convert.toRole(json);
//   const rolePermissions = Convert.toRolePermissions(json);
//   const rubric = Convert.toRubric(json);
//   const rubricAssessment = Convert.toRubricAssessment(json);
//   const rubricAssociation = Convert.toRubricAssociation(json);
//   const rubricCriteria = Convert.toRubricCriteria(json);
//   const rubricCriterion = Convert.toRubricCriterion(json);
//   const rubricRating = Convert.toRubricRating(json);
//   const sSOSettings = Convert.toSSOSettings(json);
//   const scope = Convert.toScope(json);
//   const score = Convert.toScore(json);
//   const scoreStatistic = Convert.toScoreStatistic(json);
//   const section = Convert.toSection(json);
//   const sectionAssignmentOverrideAttributes = Convert.toSectionAssignmentOverrideAttributes(json);
//   const sectionAttributes = Convert.toSectionAttributes(json);
//   const sharedBrandConfig = Convert.toSharedBrandConfig(json);
//   const sisAssignment = Convert.toSisAssignment(json);
//   const sisImport = Convert.toSisImport(json);
//   const sisImportCounts = Convert.toSisImportCounts(json);
//   const sisImportData = Convert.toSisImportData(json);
//   const sisImportError = Convert.toSisImportError(json);
//   const sisImportStatistic = Convert.toSisImportStatistic(json);
//   const sisImportStatistics = Convert.toSisImportStatistics(json);
//   const studentAttributes = Convert.toStudentAttributes(json);
//   const submission = Convert.toSubmission(json);
//   const submissionComment = Convert.toSubmissionComment(json);
//   const submissionHistory = Convert.toSubmissionHistory(json);
//   const submissionVersion = Convert.toSubmissionVersion(json);
//   const tab = Convert.toTab(json);
//   const term = Convert.toTerm(json);
//   const termsOfService = Convert.toTermsOfService(json);
//   const toolSetting = Convert.toToolSetting(json);
//   const turnitinSettings = Convert.toTurnitinSettings(json);
//   const updatedEventData = Convert.toUpdatedEventData(json);
//   const usageRights = Convert.toUsageRights(json);
//   const user = Convert.toUser(json);
//   const userAssignmentOverrideAttributes = Convert.toUserAssignmentOverrideAttributes(json);
//   const userDisplay = Convert.toUserDisplay(json);
//   const ePortfolio = Convert.toEPortfolio(json);
//   const ePortfolioPage = Convert.toEPortfolioPage(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Account {
  id: number;
  name: string;
  uuid: string;
  parent_account_id: number;
  root_account_id: number;
  workflow_state: string;
}

export interface AccountCalendar {
  id: number;
  name: string;
  parent_account_id: number;
  root_account_id: number;
  visible: boolean;
  sub_account_count: number;
  asset_string: string;
  type: string;
  calendar_event_url: string;
  can_create_calendar_events: boolean;
  create_calendar_event_url: string;
  new_calendar_event_url: string;
}

export interface AccountNotification {
  subject: string;
  message: string;
  start_at: Date;
  end_at: Date;
  icon: string;
  roles: string[];
  role_ids: number[];
}

export interface Admin {
  id: number;
  role: string;
  user: any;
  workflow_state: string;
}

export interface AnonymousUserDisplay {
  anonymous_id: string;
  avatar_image_url: string;
  display_name: string;
}

export interface Answer {
  id: number;
  answer_text: string;
  answer_weight: number;
  answer_comments: string;
  text_after_answers: string;
  answer_match_left: string;
  answer_match_right: string;
  matching_answer_incorrect_matches: string;
  numerical_answer_type: string;
  exact: number;
  margin: number;
  approximate: number;
  precision: number;
  start: number;
  end: number;
  blank_id: number;
}

export interface AppointmentGroup {
  id: number;
  title: string;
  start_at: Date;
  end_at: Date;
  description: string;
  location_name: string;
  location_address: string;
  participant_count: number;
  reserved_times: Term[];
  context_codes: string[];
  sub_context_codes: string[];
  workflow_state: string;
  requiring_action: boolean;
  appointments_count: number;
  appointments: any[];
  new_appointments: any[];
  max_appointments_per_participant: number;
  min_appointments_per_participant: number;
  participants_per_appointment: number;
  participant_visibility: string;
  participant_type: string;
  url: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
}

export interface Term {
  id: number;
  start_at: Date;
  end_at: Date | any;
  name?: string;
}

export interface Assessment {
  id: string;
  key: string;
  title: string;
}

export interface Assignment {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  due_at: Date;
  lock_at: Date;
  unlock_at: Date;
  has_overrides: boolean;
  all_dates: any;
  course_id: number;
  html_url: string;
  submissions_download_url: string;
  assignment_group_id: number;
  due_date_required: boolean;
  allowed_extensions: string[];
  max_name_length: number;
  turnitin_enabled: boolean;
  vericite_enabled: boolean;
  turnitin_settings: any;
  grade_group_students_individually: boolean;
  external_tool_tag_attributes: any;
  peer_reviews: boolean;
  automatic_peer_reviews: boolean;
  peer_review_count: number;
  peer_reviews_assign_at: Date;
  intra_group_peer_reviews: boolean;
  group_category_id: number;
  needs_grading_count: number;
  needs_grading_count_by_section: NeedsGradingCount[];
  position: number;
  post_to_sis: boolean;
  integration_id: string;
  integration_data: IntegrationData;
  points_possible: number;
  submission_types: string[];
  has_submitted_submissions: boolean;
  grading_type: string;
  grading_standard_id: any;
  published: boolean;
  unpublishable: boolean;
  only_visible_to_overrides: boolean;
  locked_for_user: boolean;
  lock_info: any;
  lock_explanation: string;
  quiz_id: number;
  anonymous_submissions: boolean;
  discussion_topic: any;
  freeze_on_copy: boolean;
  frozen: boolean;
  frozen_attributes: string[];
  submission: any;
  use_rubric_for_grading: boolean;
  rubric_settings: RubricSettings;
  rubric: any;
  assignment_visibility: number[];
  overrides: any;
  omit_from_final_grade: boolean;
  moderated_grading: boolean;
  grader_count: number;
  final_grader_id: number;
  grader_comments_visible_to_graders: boolean;
  graders_anonymous_to_graders: boolean;
  grader_names_visible_to_final_grader: boolean;
  anonymous_grading: boolean;
  allowed_attempts: number;
  post_manually: boolean;
  score_statistics: any;
  can_submit: boolean;
  annotatable_attachment_id: any;
  anonymize_students: boolean;
  require_lockdown_browser: boolean;
  important_dates: boolean;
  muted: boolean;
}

export interface IntegrationData {
  '5678': string;
}

export interface NeedsGradingCount {
  section_id: string;
  needs_grading_count: number;
}

export interface RubricSettings {
  points_possible: number;
}

export interface UserAssignmentOverrideAttributes {
  id: number;
  base?: boolean;
  title: string;
  due_at: Date;
  unlock_at: Date | any;
  lock_at: Date;
  students?: any;
}

export interface AssignmentEvent {
  id: string;
  title: string;
  start_at: Date;
  end_at: Date;
  description: string;
  context_code: string;
  workflow_state: string;
  url: string;
  html_url: string;
  all_day_date: Date;
  all_day: boolean;
  created_at: Date;
  updated_at: Date;
  assignment: any;
  assignment_overrides: any;
  important_dates: boolean;
}

export interface AssignmentExtension {
  assignment_id: number;
  user_id: number;
  extra_attempts: number;
}

export interface AssignmentGroup {
  id: number;
  name: string;
  position: number;
  group_weight: number;
  sis_source_id: string;
  integration_data: IntegrationData;
  assignments: any[];
  rules: any;
}

export interface AssignmentGroupAttributes {
  id: number;
  name: string;
  group_weight: number;
  sis_source_id: string;
  integration_data: IntegrationData;
}

export interface AssignmentOverride {
  id: number;
  assignment_id: number;
  student_ids: number[];
  group_id: number;
  course_section_id: number;
  title: string;
  due_at: Date;
  all_day: boolean;
  all_day_date: Date;
  unlock_at: Date;
  lock_at: Date;
}

export interface AuthenticationEvent {
  created_at: Date;
  event_type: string;
  pseudonym_id: number;
  account_id: number;
  user_id: number;
}

export interface AuthenticationProvider {
  identifier_format: string;
  auth_type: string;
  id: number;
  log_out_url: string;
  log_in_url: string;
  certificate_fingerprint: string;
  requested_authn_context: any;
  auth_host: string;
  auth_filter: string;
  auth_over_tls: any;
  auth_base: any;
  auth_username: string;
  auth_port: any;
  position: number;
  idp_entity_id: string;
  login_attribute: string;
  sig_alg: string;
  jit_provisioning: any;
  federated_attributes: any;
  mfa_required: any;
}

export interface Avatar {
  type: string;
  url: string;
  token: string;
  display_name: string;
  id: number;
  'content-type': string;
  filename: string;
  size: number;
}

export interface BlackoutDate {
  id: number;
  context_id: number;
  context_type: string;
  start_date: Date;
  end_date: Date;
  event_title: string;
}

export interface BlueprintMigration {
  id: number;
  template_id: number;
  subscription_id: number;
  user_id: number;
  workflow_state: string;
  created_at: Date;
  exports_started_at: Date;
  imports_queued_at: Date;
  imports_completed_at: Date;
  comment: string;
}

export interface BlueprintSubscription {
  id: number;
  template_id: number;
  blueprint_course: BlueprintCourse;
}

export interface BlueprintCourse {
  id: number;
  name: string;
  course_code: string;
  term_name: string;
}

export interface BlueprintTemplate {
  id: number;
  course_id: number;
  last_export_completed_at: Date;
  associated_course_count: number;
  latest_migration: any;
}

export interface Bookmark {
  id: number;
  name: string;
  url: string;
  position: number;
  data: Data;
}

export interface Data {
  active_tab: number;
}

export interface CalendarEvent {
  id: number;
  title: string;
  start_at: Date;
  end_at: Date;
  description: string;
  location_name: string;
  location_address: string;
  context_code: string;
  effective_context_code: any;
  context_name: string;
  all_context_codes: string;
  workflow_state: string;
  hidden: boolean;
  parent_event_id: any;
  child_events_count: number;
  child_events: any;
  url: string;
  html_url: string;
  all_day_date: Date;
  all_day: boolean;
  created_at: Date;
  updated_at: Date;
  appointment_group_id: any;
  appointment_group_url: any;
  own_reservation: boolean;
  reserve_url: any;
  reserved: boolean;
  participant_type: string;
  participants_per_appointment: any;
  available_slots: any;
  user: any;
  group: any;
  important_dates: boolean;
  series_uuid: any;
  rrule: any;
  series_natural_language: any;
  blackout_date: boolean;
}

export interface CalendarLink {
  ics: string;
}

export interface ChangeRecord {
  asset_id: number;
  asset_type: string;
  asset_name: string;
  change_type: string;
  html_url: string;
  locked: boolean;
  exceptions: ExceptionRecord[];
}

export interface ExceptionRecord {
  course_id: number;
  conflicting_changes: string[];
}

export interface Collaboration {
  id: number;
  collaboration_type: string;
  document_id: string;
  user_id: number;
  context_id: number;
  context_type: string;
  url: any;
  created_at: Date;
  updated_at: Date;
  description: any;
  title: any;
  type: string;
  update_url: any;
  user_name: string;
}

export interface Collaborator {
  id: number;
  type: string;
  name: string;
}

export interface ColumnDatum {
  content: string;
  user_id: number;
}

export interface CommMessage {
  id: number;
  created_at: Date;
  sent_at: Date;
  workflow_state: string;
  from: string;
  from_name: string;
  to: string;
  reply_to: string;
  subject: string;
  body: string;
  html_body: string;
}

export interface CommunicationChannel {
  id: number;
  address: string;
  type: string;
  position: number;
  user_id: number;
  workflow_state: string;
}

export interface Conference {
  id: number;
  conference_type: string;
  conference_key: string;
  description: string;
  duration: number;
  ended_at: Date;
  started_at: Date;
  title: string;
  users: number[];
  has_advanced_settings: boolean;
  long_running: boolean;
  user_settings: UserSettings;
  recordings: any;
  url: any;
  join_url: any;
  context_type: any;
  context_id: any;
}

export interface UserSettings {
  record: boolean;
}

export interface ConferenceRecording {
  duration_minutes: number;
  title: string;
  updated_at: Date;
  created_at: Date;
  playback_url: string;
}

export interface ContentDetails {
  points_possible: number;
  due_at: Date;
  unlock_at: Date;
  lock_at: Date;
  locked_for_user: boolean;
  lock_explanation: string;
  lock_info: LockInfoClass;
}

export interface LockInfoClass {
  asset_string: string;
  unlock_at: Date;
  lock_at: Date;
  context_module: any;
}

export interface EpubExport {
  id: number;
  created_at: Date;
  export_type?: string;
  attachment: Attachment;
  progress_url: string;
  user_id: number;
  workflow_state: string;
}

export interface Attachment {
  url: string;
}

export interface ContentMigration {
  id: number;
  migration_type: string;
  migration_type_title: string;
  migration_issues_url: string;
  attachment: Attachment;
  progress_url: string;
  user_id: number;
  workflow_state: string;
  started_at: Date;
  finished_at: Date;
  pre_attachment: PreAttachment;
}

export interface PreAttachment {
  upload_url: string;
  message: string;
  upload_params: any;
}

export interface ContentShare {
  id: number;
  name: string;
  content_type: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  sender: UserDisplay;
  receivers: UserDisplay[];
  source_course: SourceCourse;
  read_state: string;
  content_export: ContentExportClass;
}

export interface ContentExportClass {
  id: number;
}

export interface UserDisplay {
  id: number;
  display_name?: string;
  avatar_image_url: string;
  html_url: string;
  short_name?: string;
}

export interface SourceCourse {
  id: number;
  name: string;
}

export interface Conversation {
  id: number;
  subject: string;
  workflow_state: string;
  last_message: string;
  start_at: Date;
  message_count: number;
  subscribed: boolean;
  private: boolean;
  starred: boolean;
  properties: any;
  audience: any;
  audience_contexts: any;
  avatar_url: string;
  participants: any;
  visible: boolean;
  context_name: string;
}

export interface ConversationParticipant {
  id: number;
  name: string;
  full_name: string;
  avatar_url: string;
}

export interface Course {
  id: number;
  sis_course_id: any;
  uuid: string;
  integration_id: any;
  sis_import_id: number;
  name: string;
  course_code: string;
  original_name: string;
  workflow_state: string;
  account_id: number;
  root_account_id: number;
  enrollment_term_id: number;
  grading_periods: any;
  grading_standard_id: number;
  grade_passback_setting: string;
  created_at: Date;
  start_at: Date;
  end_at: Date;
  locale: string;
  enrollments: any;
  total_students: number;
  calendar: any;
  default_view: string;
  syllabus_body: string;
  needs_grading_count: number;
  term: any;
  course_progress: any;
  apply_assignment_group_weights: boolean;
  permissions: CoursePermissions;
  is_public: boolean;
  is_public_to_auth_users: boolean;
  public_syllabus: boolean;
  public_syllabus_to_auth: boolean;
  public_description: string;
  storage_quota_mb: number;
  storage_quota_used_mb: number;
  hide_final_grades: boolean;
  license: string;
  allow_student_assignment_edits: boolean;
  allow_wiki_comments: boolean;
  allow_student_forum_attachments: boolean;
  open_enrollment: boolean;
  self_enrollment: boolean;
  restrict_enrollments_to_course_dates: boolean;
  course_format: string;
  access_restricted_by_date: boolean;
  time_zone: string;
  blueprint: boolean;
  blueprint_restrictions: BlueprintRestriction;
  blueprint_restrictions_by_object_type: BlueprintRestrictionsByObjectType;
  template: boolean;
}

export interface BlueprintRestriction {
  content: boolean;
  points: boolean;
  due_dates: boolean;
  availability_dates: boolean;
}

export interface BlueprintRestrictionsByObjectType {
  assignment: AssignmentClass;
  wiki_page: WikiPage;
}

export interface AssignmentClass {
  content: boolean;
  points: boolean;
}

export interface WikiPage {
  content: boolean;
}

export interface CoursePermissions {
  create_discussion_topic: boolean;
  create_announcement: boolean;
}

export interface CourseAttributes {
  id: number;
  name: string;
  sis_id: string;
  integration_id: string;
}

export interface CourseEpubExport {
  id: number;
  name: string;
  epub_export: any;
}

export interface CourseEvent {
  id: string;
  created_at: Date;
  event_type: string;
  event_data: string;
  event_source: string;
  links: CourseEventLinks;
}

export interface CourseEventLinks {
  course: string;
  user: string;
  page_view: string;
}

export interface CourseEventLink {
  course: number;
  user: number;
  page_view: string;
  copied_from: number;
  copied_to: number;
  sis_batch: number;
}

export interface CourseNickname {
  course_id: number;
  name: string;
  nickname: string;
}

export interface CourseProgress {
  requirement_count: number;
  requirement_completed_count: number;
  next_requirement_url: string;
  completed_at: Date;
}

export interface QuizExtension {
  user_id: number;
  extra_attempts: number;
  extra_time: number;
  manually_unlocked: boolean;
  end_at: Date;
  quiz_id?: number;
}

export interface CreatedEventData {
  name: Array<any | string>;
  start_at: Array<Date | any>;
  conclude_at: Array<Date | any>;
  is_public: Array<boolean | any>;
  created_source: string;
}

export interface CustomColumn {
  id: number;
  teacher_notes: boolean;
  title: string;
  position: number;
  hidden: boolean;
  read_only: boolean;
}

export interface Day {
  date: Date;
  graders: any[];
}

export interface DeveloperKey {
  id: number;
  is_lti_key: boolean;
  visible: boolean;
  account_name: string;
  public_jwk: PublicJwk;
  vendor_code: string;
  last_used_at: Date;
  access_token_count: number;
  redirect_uris: string;
  redirect_uri: string;
  api_key: string;
  notes: string;
  name: string;
  user_id: string;
  created_at: Date;
  user_name: string;
  email: string;
  require_scopes: boolean;
  icon_url: string;
  scopes: string;
  workflow_state: string;
}

export interface PublicJwk {
  kty: string;
  e: string;
  n: string;
  alg: string;
  use: string;
  kid: string;
}

export interface DiscussionTopic {
  id: number;
  title: string;
  message: string;
  html_url: string;
  posted_at: Date;
  last_reply_at: Date;
  require_initial_post: boolean;
  user_can_see_posts: boolean;
  discussion_subentry_count: number;
  read_state: string;
  unread_count: number;
  subscribed: boolean;
  subscription_hold: string;
  assignment_id: any;
  delayed_post_at: any;
  published: boolean;
  lock_at: any;
  locked: boolean;
  pinned: boolean;
  locked_for_user: boolean;
  lock_info: any;
  lock_explanation: string;
  user_name: string;
  topic_children: number[];
  group_topic_children: GroupTopicChild[];
  root_topic_id: any;
  podcast_url: string;
  discussion_type: string;
  group_category_id: any;
  attachments: any;
  permissions: DiscussionTopicPermissions;
  allow_rating: boolean;
  only_graders_can_rate: boolean;
  sort_by_rating: boolean;
}

export interface GroupTopicChild {
  id: number;
  group_id: number;
}

export interface DiscussionTopicPermissions {
  attach: boolean;
}

export interface Enrollment {
  id: number;
  course_id: number;
  sis_course_id: string;
  course_integration_id: string;
  course_section_id: number;
  section_integration_id: string;
  sis_account_id: string;
  sis_section_id: string;
  sis_user_id: string;
  enrollment_state: string;
  limit_privileges_to_course_section: boolean;
  sis_import_id: number;
  root_account_id: number;
  type: string;
  user_id: number;
  associated_user_id: any;
  role: string;
  role_id: number;
  created_at: Date;
  updated_at: Date;
  start_at: Date;
  end_at: Date;
  last_activity_at: Date;
  last_attended_at: Date;
  total_activity_time: number;
  html_url: string;
  grades: Grades;
  user: UserClass;
  override_grade: string;
  override_score: number;
  unposted_current_grade: string;
  unposted_final_grade: string;
  unposted_current_score: string;
  unposted_final_score: string;
  has_grading_periods: boolean;
  totals_for_all_grading_periods_option: boolean;
  current_grading_period_title: string;
  current_grading_period_id: number;
  current_period_override_grade: string;
  current_period_override_score: number;
  current_period_unposted_current_score: number;
  current_period_unposted_final_score: number;
  current_period_unposted_current_grade: string;
  current_period_unposted_final_grade: string;
}

export interface Grades {
  html_url: string;
  current_score: number;
  current_grade: any;
  final_score: number;
  final_grade: any;
}

export interface UserClass {
  id: number;
  name: string;
  sortable_name: string;
  short_name: string;
}

export interface EnrollmentTerm {
  id: number;
  sis_term_id: string;
  sis_import_id: number;
  name: string;
  start_at: Date;
  end_at: Date;
  workflow_state: string;
  overrides: Overrides;
  course_count: number;
}

export interface Overrides {
  StudentEnrollment: StudentEnrollment;
}

export interface StudentEnrollment {
  start_at: Date;
  end_at: string;
}

export interface EnrollmentTermsList {
  enrollment_terms: any[];
}

export interface ErrorReport {
  subject: string;
  comments: string;
  user_perceived_severity: string;
  email: string;
  url: string;
  context_asset_string: string;
  user_roles: string;
}

export interface ExternalFeed {
  id: number;
  display_name: string;
  url: string;
  header_match: string;
  created_at: Date;
  verbosity: string;
}

export interface ExternalToolTagAttributes {
  url: string;
  new_tab: boolean;
  resource_link_id: string;
}

export interface Favorite {
  context_id: number;
  context_type: string;
}

export interface Feature {
  feature: string;
  display_name: string;
  applies_to: string;
  feature_flag: FeatureFlagClass;
  root_opt_in: boolean;
  beta: boolean;
  autoexpand: boolean;
  release_notes_url: string;
}

export interface FeatureFlagClass {
  feature: string;
  state: string;
}

export interface FeatureFlag {
  context_type: string;
  context_id: number;
  feature: string;
  state: string;
  locked: boolean;
}

export interface FederatedAttributeConfig {
  attribute: string;
  provisioning_only: boolean;
}

export interface FederatedAttributesConfig {
  admin_roles: any;
  display_name: any;
  email: any;
  given_name: any;
  integration_id: any;
  locale: any;
  name: any;
  sis_user_id: any;
  sortable_name: any;
  surname: any;
  timezone: any;
}

export interface File {
  size: number;
  'content-type': string;
  url: string;
  id: number;
  display_name: string;
  created_at: Date;
  updated_at: Date;
}

export interface FileAttachment {
  'content-type': string;
  url: string;
  filename: string;
  display_name: string;
}

export interface Folder {
  context_type: string;
  context_id: number;
  files_count: number;
  position: number;
  updated_at: Date;
  folders_url: string;
  files_url: string;
  full_name: string;
  lock_at: Date;
  id: number;
  folders_count: number;
  name: string;
  parent_folder_id: number;
  created_at: Date;
  unlock_at: any;
  hidden: boolean;
  hidden_for_user: boolean;
  locked: boolean;
  locked_for_user: boolean;
  for_submissions: boolean;
}

export interface Grade {
  html_url: string;
  current_grade: string;
  final_grade: string;
  current_score: string;
  final_score: string;
  current_points: number;
  unposted_current_grade: string;
  unposted_final_grade: string;
  unposted_current_score: string;
  unposted_final_score: string;
  unposted_current_points: number;
}

export interface GradeChangeEvent {
  id: string;
  created_at: Date;
  event_type: string;
  excused_after: boolean;
  excused_before: boolean;
  grade_after: string;
  grade_before: string;
  graded_anonymously: boolean;
  version_number: string;
  request_id: string;
  links: any;
}

export interface GradeChangeEventLinks {
  assignment: number;
  course: number;
  student: number;
  grader: number;
  page_view: string;
}

export interface Grader {
  id: number;
  name: string;
  assignments: number[];
}

export interface GradingPeriod {
  id: number;
  title: string;
  start_date: Date;
  end_date: Date;
  close_date: Date;
  weight: number;
  is_closed: boolean;
}

export interface GradingPeriodSets {
  title: string;
  weighted: boolean;
  display_totals_for_all_grading_periods: boolean;
}

export interface GradingRules {
  drop_lowest: number;
  drop_highest: number;
  never_drop: number[];
}

export interface GradingStandard {
  title: string;
  id: number;
  context_type: string;
  context_id: number;
  grading_scheme: GradingSchemeEntry[];
}

export interface GradingSchemeEntry {
  name: string;
  value: number;
}

export interface Group {
  id: number;
  name: string;
  description: any;
  is_public: boolean;
  followed_by_user: boolean;
  join_level: string;
  members_count: number;
  avatar_url: string;
  context_type: string;
  course_id: number;
  role: any;
  group_category_id: number;
  sis_group_id: string;
  sis_import_id: number;
  storage_quota_mb: number;
  permissions: CoursePermissions;
  users: any;
}

export interface GroupCategory {
  id: number;
  name: string;
  role: string;
  self_signup: any;
  auto_leader: any;
  context_type: string;
  account_id: number;
  group_limit: any;
  sis_group_category_id: any;
  sis_import_id: any;
  progress: any;
}

export interface GroupMembership {
  id: number;
  group_id: number;
  user_id: number;
  workflow_state: string;
  moderator: boolean;
  just_created: boolean;
  sis_import_id: number;
}

export interface HelpLink {
  id: string;
  text: string;
  subtext: string;
  url: string;
  type: string;
  available_to: string[];
}

export interface HelpLinks {
  help_link_name: string;
  help_link_icon: string;
  custom_help_links: CustomHelpLinkElement[];
  default_help_links: CustomHelpLinkElement[];
}

export interface CustomHelpLinkElement {
  id: string;
  text: string;
  subtext: string;
  url: string;
  type: string;
  available_to: string[];
  is_featured: boolean;
  is_new: boolean;
  feature_headline: string;
}

export interface HistoryEntry {
  asset_code: string;
  asset_name: string;
  asset_icon: string;
  asset_readable_category: string;
  context_type: string;
  context_id: number;
  context_name: string;
  visited_url: string;
  visited_at: Date;
  interaction_seconds: number;
}

export interface Jwt {
  token: string;
}

export interface JSONAPIPagination {
  per_page: Count;
  page: Count;
  template: Template;
  page_count: Count;
  count: Count;
}

export interface Count {
  type: string;
  description: string;
  example: number;
}

export interface Template {
  type: string;
  description: string;
  example: string;
}

export interface LatePolicy {
  id: number;
  course_id: number;
  missing_submission_deduction_enabled: boolean;
  missing_submission_deduction: number;
  late_submission_deduction_enabled: boolean;
  late_submission_deduction: number;
  late_submission_interval: string;
  late_submission_minimum_percent_enabled: boolean;
  late_submission_minimum_percent: number;
  created_at: Date;
  updated_at: Date;
}

export interface License {
  id: string;
  name: string;
  url: string;
}

export interface LineItem {
  id: string;
  scoreMaximum: number;
  label: string;
  tag: string;
  resourceId: string;
  resourceLinkId: string;
  'https://canvas.instructure.com/lti/submission_type': HTTPSCanvasInstructureCOMLtiSubmissionType;
  'https://canvas.instructure.com/lti/launch_url': string;
}

export interface HTTPSCanvasInstructureCOMLtiSubmissionType {
  type: string;
  external_tool_url: string;
}

export interface LockInfo {
  asset_string: string;
  unlock_at: Date;
  lock_at: Date;
  context_module: string;
  manually_locked: boolean;
}

export interface LtiAssignment {
  id: number;
  name: string;
  description: string;
  points_possible: number;
  due_at: Date;
  lti_id: string;
  course_id: number;
  lti_course_id: string;
}

export interface MediaComment {
  'content-type': string;
  display_name: string;
  media_id: string;
  media_type: string;
  url: string;
}

export interface MediaObject {
  can_add_captions: boolean;
  user_entered_title: string;
  title: string;
  media_id: string;
  media_type: string;
  media_tracks: MediaTrackElement[];
  media_sources: MediaSource[];
}

export interface MediaSource {
  height: string;
  width: string;
  content_type: string;
  containerFormat: string;
  url: string;
  bitrate: string;
  size: string;
  isOriginal: string;
  fileExt: string;
}

export interface MediaTrackElement {
  kind: string;
  created_at: Date;
  updated_at: Date;
  url: string;
  id: number;
  locale: string;
}

export interface MediaTrack {
  id: number;
  user_id: number;
  media_object_id: number;
  kind: string;
  locale: string;
  content: string;
  created_at: string;
  updated_at: string;
  webvtt_content: string;
}

export interface MigrationIssue {
  id: number;
  content_migration_url: string;
  description: string;
  workflow_state: string;
  fix_issue_html_url: string;
  issue_type: string;
  error_report_html_url: string;
  error_message: string;
  created_at: Date;
  updated_at: Date;
}

export interface Migrator {
  type: string;
  requires_file_upload: boolean;
  name: string;
  required_settings: string[];
}

export interface Module {
  id: number;
  workflow_state: string;
  position: number;
  name: string;
  unlock_at: Date;
  require_sequential_progress: boolean;
  prerequisite_module_ids: number[];
  items_count: number;
  items_url: string;
  items: any;
  state: string;
  completed_at: any;
  publish_final_grade: any;
  published: boolean;
}

export interface ModuleItem {
  id: number;
  module_id: number;
  position: number;
  title: string;
  indent: number;
  type: string;
  content_id: number;
  html_url: string;
  url: string;
  page_url: string;
  external_url: string;
  new_tab: boolean;
  completion_requirement: CompletionRequirement;
  content_details: SectionAssignmentOverrideAttributes;
  published: boolean;
}

export interface CompletionRequirement {
  type: string;
  min_score: number;
  completed: boolean;
}

export interface SectionAssignmentOverrideAttributes {
  points_possible?: number;
  due_at: Date;
  unlock_at: Date;
  lock_at: Date;
  override_title?: string;
}

export interface ModuleItemSequence {
  items: ModuleItemSequenceNode[];
  modules: SourceCourse[];
}

export interface ModuleItemSequenceNode {
  prev: any;
  current: Current;
  next: Current;
  mastery_path: MasteryPath;
}

export interface Current {
  id: number;
  module_id: number;
  title: string;
  type: string;
}

export interface MasteryPath {
  locked: boolean;
  assignment_sets: any[];
  selected_set_id: any;
  awaiting_choice: boolean;
  still_processing: boolean;
  modules_url: string;
  choose_url: string;
  modules_tab_disabled: boolean;
}

export interface NamesAndRoleMemberships {
  id: string;
  context: NamesAndRoleContext;
  members: NamesAndRoleMembership[];
}

export interface NamesAndRoleContext {
  id: string;
  label: string;
  title: string;
}

export interface NamesAndRoleMembership {
  status: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  email: string;
  lis_person_sourcedid: string;
  user_id: string;
  roles: string[];
  message: NamesAndRoleMessage[];
}

export interface NamesAndRoleMessage {
  'https://purl.imsglobal.org/spec/lti/claim/message_type': string;
  locale: string;
  'https://www.instructure.com/canvas_user_id': number;
  'https://www.instructure.com/canvas_user_login_id': string;
  'https://purl.imsglobal.org/spec/lti/claim/custom': HTTPSPurlImsglobalOrgSpecLtiClaimCustom;
}

export interface HTTPSPurlImsglobalOrgSpecLtiClaimCustom {
  message_locale: string;
  person_address_timezone: string;
}

export interface NotificationPreference {
  href: string;
  notification: string;
  category: string;
  frequency: string;
}

export interface OriginalityReport {
  id: number;
  file_id: number;
  originality_score: number;
  originality_report_file_id: number;
  originality_report_url: string;
  tool_setting: any;
  error_report: any;
  submission_time: any;
  root_account_id: number;
}

export interface Outcome {
  id: number;
  url: string;
  context_id: number;
  context_type: string;
  title: string;
  display_name: string;
  description: string;
  vendor_guid: string;
  points_possible: number;
  mastery_points: number;
  calculation_method: string;
  calculation_int: number;
  ratings: any;
  can_edit: boolean;
  can_unlink: boolean;
  assessed: boolean;
  has_updateable_rubrics: boolean;
}

export interface OutcomeAlignment {
  id: number;
  assignment_id: number;
  assessment_id: number;
  submission_types: string;
  url: string;
  title: string;
}

export interface OutcomeGroup {
  id: number;
  url: string;
  parent_outcome_group: any;
  context_id: number;
  context_type: string;
  title: string;
  description: string;
  vendor_guid: string;
  subgroups_url: string;
  outcomes_url: string;
  import_url: string;
  can_edit: boolean;
}

export interface OutcomeImport {
  id: number;
  learning_outcome_group_id: number;
  created_at: Date;
  ended_at: Date;
  updated_at: Date;
  workflow_state: string;
  data: any;
  progress: string;
  user: any;
  processing_errors: Array<Array<number | string>>;
}

export interface OutcomeImportData {
  import_type: string;
}

export interface OutcomeLink {
  url: string;
  context_id: number;
  context_type: string;
  outcome_group: any;
  outcome: any;
  assessed: boolean;
  can_unlink: any;
}

export interface OutcomePath {
  id: number;
  parts: any;
}

export interface OutcomePathPart {
  name: string;
}

export interface OutcomeResult {
  id: number;
  score: number;
  submitted_or_assessed_at: Date;
  links: OutcomeResultLinks;
  percent: number;
}

export interface OutcomeResultLinks {
  user: string;
  learning_outcome: string;
  alignment: string;
}

export interface OutcomeRollup {
  scores: any;
  name: string;
  links: OutcomeRollupLinks;
}

export interface OutcomeRollupLinks {
  course: number;
  user: number;
  section: number;
}

export interface OutcomeRollupScore {
  score: number;
  count: number;
  links: OutcomeRollupScoreLinksClass;
}

export interface OutcomeRollupScoreLinksClass {
  outcome: string;
}

export interface OutcomeRollupScoreLinks {
  outcome: number;
}

export interface Page {
  page_id: number;
  url: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  hide_from_students: boolean;
  editing_roles: string;
  last_edited_by: any;
  body: string;
  published: boolean;
  publish_at: Date;
  front_page: boolean;
  locked_for_user: boolean;
  lock_info: any;
  lock_explanation: string;
}

export interface PageRevision {
  revision_id: number;
  updated_at: Date;
  latest: boolean;
  edited_by: any;
  url: string;
  title: string;
  body: string;
}

export interface PageView {
  id: string;
  app_name: string;
  url: string;
  context_type: string;
  asset_type: string;
  controller: string;
  action: string;
  contributed: boolean;
  interaction_seconds: number;
  created_at: Date;
  user_request: boolean;
  render_time: number;
  user_agent: string;
  participated: boolean;
  http_method: string;
  remote_ip: string;
  links: PageViewLinksClass;
}

export interface PageViewLinksClass {
  user: number;
  account: number;
}

export interface PageViewLinks {
  user: number;
  context: number;
  asset: number;
  real_user: number;
  account: number;
}

export interface PairingCode {
  user_id: number;
  code: string;
  expires_at: Date;
  workflow_state: string;
}

export interface PeerReview {
  assessor_id: number;
  asset_id: number;
  asset_type: string;
  id: number;
  user_id: number;
  workflow_state: string;
  user: string;
  assessor: string;
  submission_comments: string;
}

export interface PlannerNote {
  id: number;
  title: string;
  description: string;
  user_id: number;
  workflow_state: string;
  course_id: number;
  todo_date: Date;
  linked_object_type: string;
  linked_object_id: number;
  linked_object_html_url: string;
  linked_object_url: string;
}

export interface PlannerOverride {
  id: number;
  plannable_type: string;
  plannable_id: number;
  user_id: number;
  assignment_id: number;
  workflow_state: string;
  marked_complete: boolean;
  dismissed: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface Poll {
  id: number;
  question: string;
  description: string;
  created_at: Date;
  user_id: number;
  total_results: { [key: string]: number };
}

export interface PollChoice {
  id: number;
  poll_id: number;
  is_correct: boolean;
  text: string;
  position: number;
}

export interface PollSession {
  id: number;
  poll_id: number;
  course_id: number;
  course_section_id: number;
  is_published: boolean;
  has_public_results: boolean;
  created_at: Date;
  results: { [key: string]: number };
  poll_submissions: any;
}

export interface PollSubmission {
  id: number;
  poll_choice_id: number;
  user_id: number;
  created_at: Date;
}

export interface Proficiency {
  ratings: any[];
}

export interface ProficiencyRating {
  description: string;
  points: number;
  mastery: boolean;
  color: string;
}

export interface Profile {
  id: number;
  name: string;
  short_name: string;
  sortable_name: string;
  title: any;
  bio: any;
  primary_email: string;
  login_id: string;
  sis_user_id: string;
  lti_user_id: any;
  avatar_url: string;
  calendar: any;
  time_zone: string;
  locale: any;
  k5_user: boolean;
}

export interface Progress {
  id: number;
  context_id: number;
  context_type: string;
  user_id: number;
  tag: string;
  completion: number;
  workflow_state: string;
  created_at: Date;
  updated_at: Date;
  message: string;
  results: Results;
  url: string;
}

export interface Results {
  id: string;
}

export interface ProvisionalGrade {
  provisional_grade_id: number;
  score: number;
  grade: string;
  grade_matches_current_submission: boolean;
  graded_at: Date;
  final: boolean;
  speedgrader_url: string;
}

export interface Quiz {
  id: number;
  title: string;
  html_url: string;
  mobile_url: string;
  preview_url: string;
  description: string;
  quiz_type: string;
  assignment_group_id: number;
  time_limit: number;
  shuffle_answers: boolean;
  hide_results: string;
  show_correct_answers: boolean;
  show_correct_answers_last_attempt: boolean;
  show_correct_answers_at: Date;
  hide_correct_answers_at: Date;
  one_time_results: boolean;
  scoring_policy: string;
  allowed_attempts: number;
  one_question_at_a_time: boolean;
  question_count: number;
  points_possible: number;
  cant_go_back: boolean;
  access_code: string;
  ip_filter: string;
  due_at: Date;
  lock_at: any;
  unlock_at: Date;
  published: boolean;
  unpublishable: boolean;
  locked_for_user: boolean;
  lock_info: any;
  lock_explanation: string;
  speedgrader_url: string;
  quiz_extensions_url: string;
  permissions: any;
  all_dates: any;
  version_number: number;
  question_types: string[];
  anonymous_submissions: boolean;
}

export interface QuizAssignmentOverrideSet {
  quiz_id: string;
  due_dates: any;
  all_dates: any;
}

export interface QuizAssignmentOverrideSetContainer {
  quiz_assignment_overrides: any;
}

export interface QuizGroup {
  id: number;
  quiz_id: number;
  name: string;
  pick_count: number;
  question_points: number;
  assessment_question_bank_id: number;
  position: number;
}

export interface QuizIPFilter {
  name: string;
  account: string;
  filter: string;
}

export interface QuizPermissions {
  read: boolean;
  submit: boolean;
  create: boolean;
  manage: boolean;
  read_statistics: boolean;
  review_grades: boolean;
  update: boolean;
}

export interface QuizQuestion {
  id: number;
  quiz_id: number;
  position: number;
  question_name: string;
  question_type: string;
  question_text: string;
  points_possible: number;
  correct_comments: string;
  incorrect_comments: string;
  neutral_comments: string;
  answers: any;
}

export interface QuizReport {
  id: number;
  quiz_id: number;
  report_type: string;
  readable_type: string;
  includes_all_versions: boolean;
  anonymous: boolean;
  generatable: boolean;
  created_at: Date;
  updated_at: Date;
  url: string;
  file: any;
  progress_url: any;
  progress: any;
}

export interface QuizStatistics {
  id: number;
  quiz_id: number;
  multiple_attempts_exist: boolean;
  includes_all_versions: boolean;
  generated_at: Date;
  url: string;
  html_url: string;
  question_statistics: any;
  submission_statistics: any;
  links: any;
}

export interface QuizStatisticsAnswerPointBiserial {
  answer_id: number;
  point_biserial: number;
  correct: boolean;
  distractor: boolean;
}

export interface QuizStatisticsAnswerStatistics {
  id: number;
  text: string;
  weight: number;
  responses: number;
}

export interface QuizStatisticsLinks {
  quiz: string;
}

export interface QuizStatisticsQuestionStatistics {
  responses: number;
  answers: any;
}

export interface QuizStatisticsSubmissionStatistics {
  unique_count: number;
  score_average: number;
  score_high: number;
  score_low: number;
  score_stdev: number;
  scores: { [key: string]: number };
  correct_count_average: number;
  incorrect_count_average: number;
  duration_average: number;
}

export interface QuizSubmission {
  id: number;
  quiz_id: number;
  user_id: number;
  submission_id: number;
  started_at: Date;
  finished_at: Date;
  end_at: Date;
  attempt: number;
  extra_attempts: number;
  extra_time: number;
  manually_unlocked: boolean;
  time_spent: number;
  score: number;
  score_before_regrade: number;
  kept_score: number;
  fudge_points: number;
  has_seen_results: boolean;
  workflow_state: string;
  overdue_and_needs_submission: boolean;
}

export interface QuizSubmissionEvent {
  created_at: Date;
  event_type: string;
  event_data: EventData;
}

export interface EventData {
  answer: string;
}

export interface QuizSubmissionQuestion {
  id: number;
  flagged: boolean;
  answer: any;
  answers: any;
}

export interface QuizSubmissionUserList {
  meta: Meta;
  users: Meta;
}

export interface Meta {
  $ref: string;
  description: string;
}

export interface QuizSubmissionUserListMeta {
  pagination: Meta;
}

export interface QuizUserConversation {
  body:       Body;
  recipients: Body;
  subject:    Body;
}

export interface Body {
  type:        string;
  description: string;
  example:     string;
}

export interface Report {
  id: number;
  report: string;
  file_url: string;
  attachment: any;
  status: string;
  created_at: Date;
  started_at: Date;
  ended_at: Date;
  parameters: Parameters;
  progress: number;
  current_line: number;
}

export interface Parameters {
  course_id: number;
  start_at: Date;
  end_at: Date;
}

export interface ReportParameters {
  enrollment_term_id: number;
  include_deleted: boolean;
  course_id: number;
  order: string;
  users: boolean;
  accounts: boolean;
  terms: boolean;
  courses: boolean;
  sections: boolean;
  enrollments: boolean;
  groups: boolean;
  xlist: boolean;
  sis_terms_csv: number;
  sis_accounts_csv: number;
  include_enrollment_state: boolean;
  enrollment_state: string[];
  start_at: Date;
  end_at: Date;
}

export interface Result {
  id: string;
  userId: string;
  resultScore: number;
  resultMaximum: number;
  comment: any;
  scoreOf: string;
}

export interface ResultLinks {
  user: string;
  assessor: string;
  assessment: string;
}

export interface Role {
  label: string;
  role: string;
  base_role_type: string;
  account: AccountClass;
  workflow_state: string;
  permissions: RolePermissionsClass;
}

export interface AccountClass {
  id: number;
  name: string;
  parent_account_id: number;
  root_account_id: number;
  sis_account_id: string;
}

export interface RolePermissionsClass {
  read_course_content: Read;
  read_course_list: Read;
  read_question_banks: Read;
  read_reports: Read;
}

export interface Read {
  enabled: boolean;
  locked: boolean;
  readonly: boolean;
  explicit: boolean;
  prior_default?: boolean;
}

export interface RolePermissions {
  enabled: boolean;
  locked: boolean;
  applies_to_self: boolean;
  applies_to_descendants: boolean;
  readonly: boolean;
  explicit: boolean;
  prior_default: boolean;
}

export interface Rubric {
  id: number;
  title: string;
  context_id: number;
  context_type: string;
  points_possible: number;
  reusable: boolean;
  read_only: boolean;
  free_form_criterion_comments: boolean;
  hide_score_total: boolean;
  data: any;
  assessments: any;
  associations: any;
}

export interface RubricAssessment {
  id: number;
  rubric_id: number;
  rubric_association_id: number;
  score: number;
  artifact_type: string;
  artifact_id: number;
  artifact_attempt: number;
  assessment_type: string;
  assessor_id: number;
  data: any;
  comments: any;
}

export interface RubricAssociation {
  id: number;
  rubric_id: number;
  association_id: number;
  association_type: string;
  use_for_grading: boolean;
  summary_data: string;
  purpose: string;
  hide_score_total: boolean;
  hide_points: boolean;
  hide_outcome_results: boolean;
}

export interface RubricCriteria {
  points: number;
  id: string;
  learning_outcome_id: string;
  vendor_guid: string;
  description: string;
  long_description: string;
  criterion_use_range: boolean;
  ratings: any;
  ignore_for_scoring: boolean;
}

export interface RubricCriterion {
  id: string;
  description: any;
  long_description: any;
  points: number;
  criterion_use_range: boolean;
  ratings: any;
}

export interface RubricRating {
  id: string;
  criterion_id: string;
  description: any;
  long_description: any;
  points: number;
}

export interface SSOSettings {
  login_handle_name: string;
  change_password_url: string;
  auth_discovery_url: string;
  unknown_user_url: string;
}

export interface Scope {
  resource: string;
  resource_name: string;
  controller: string;
  action: string;
  verb: string;
  scope: string;
}

export interface Score {
  userId: string;
  scoreGiven: number;
  scoreMaximum: number;
  comment: any;
  timestamp: Date;
  activityProgress: string;
  gradingProgress: string;
}

export interface ScoreStatistic {
  min: number;
  max: number;
  mean: number;
  upper_q: number;
  median: number;
  lower_q: number;
}

export interface Section {
  id: number;
  name: string;
  sis_section_id: string;
  integration_id: string;
  sis_import_id: number;
  course_id: number;
  sis_course_id: string;
  start_at: Date;
  end_at: any;
  restrict_enrollments_to_section_dates: any;
  nonxlist_course_id: any;
  total_students: number;
}

export interface SectionAttributes {
  id: number;
  name: string;
  sis_id: string;
  integration_id: string;
  origin_course: any;
  xlist_course: any;
  override: any;
}

export interface SharedBrandConfig {
  id: number;
  account_id: string;
  brand_config_md5: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface SisAssignment {
  id: number;
  course_id: number;
  name: string;
  created_at: Date;
  due_at: Date;
  unlock_at: Date;
  lock_at: Date;
  points_possible: number;
  submission_types: string[];
  integration_id: string;
  integration_data: string;
  include_in_final_grade: boolean;
  assignment_group: any;
  sections: any;
  user_overrides: any;
}

export interface SisImport {
  id: number;
  created_at: Date;
  ended_at: Date;
  updated_at: Date;
  workflow_state: string;
  data: any;
  statistics: any;
  progress: string;
  errors_attachment: any;
  user: any;
  processing_warnings: Array<string[]>;
  processing_errors: Array<string[]>;
  batch_mode: boolean;
  batch_mode_term_id: string;
  multi_term_batch_mode: boolean;
  skip_deletes: boolean;
  override_sis_stickiness: boolean;
  add_sis_stickiness: boolean;
  clear_sis_stickiness: boolean;
  diffing_threshold_exceeded: boolean;
  diffing_data_set_identifier: string;
  diffing_remaster: boolean;
  diffed_against_import_id: number;
  csv_attachments: any[];
}

export interface SisImportData {
  import_type: string;
  supplied_batches: string[];
  counts: any;
}

export interface SisImportError {
  sis_import_id: number;
  file: string;
  message: string;
  row_info: string;
  row: number;
}

export interface SisImportStatistic {
  created: number;
  concluded: number;
  deactivated: number;
  restored: number;
  deleted: number;
}

export interface StudentAttributes {
  user_id: number;
  sis_user_id: string;
}

export interface Submission {
  lti_course_id: string;
  course_id: number;
  assignment_id: number;
  attempt: number;
  body: string;
  submission_type: string;
  submitted_at: Date;
  url: any;
  user_id: number;
  eula_agreement_timestamp: string;
  workflow_state: string;
  attachments: any;
}

export interface SubmissionComment {
  id: number;
  author_id: number;
  author_name: string;
  author: string;
  comment: string;
  created_at: Date;
  edited_at: Date;
  media_comment: any;
}

export interface SubmissionHistory {
  submission_id: number;
  versions: any;
}

export interface SubmissionVersion {
  assignment_id: number;
  assignment_name: string;
  body: string;
  current_grade: string;
  current_graded_at: Date;
  current_grader: string;
  grade_matches_current_submission: boolean;
  graded_at: Date;
  grader: string;
  grader_id: number;
  id: number;
  new_grade: string;
  new_graded_at: Date;
  new_grader: string;
  previous_grade: string;
  previous_graded_at: Date;
  previous_grader: string;
  score: number;
  user_name: string;
  submission_type: string;
  url: any;
  user_id: number;
  workflow_state: string;
}

export interface Tab {
  html_url: string;
  id: string;
  label: string;
  type: string;
  hidden: boolean;
  visibility: string;
  position: number;
}

export interface TermsOfService {
  id: number;
  terms_type: string;
  passive: boolean;
  account_id: number;
  content: string;
  self_registration_type: string[];
}

export interface ToolSetting {
  resource_type_code: string;
  resource_url: string;
}

export interface TurnitinSettings {
  originality_report_visibility: string;
  s_paper_check: boolean;
  internet_check: boolean;
  journal_check: boolean;
  exclude_biblio: boolean;
  exclude_quoted: boolean;
  exclude_small_matches_type: string;
  exclude_small_matches_value: number;
}

export interface UpdatedEventData {
  name: string[];
  start_at: Date[];
  conclude_at: Date[];
  is_public: boolean[];
}

export interface UsageRights {
  legal_copyright: string;
  use_justification: string;
  license: string;
  license_name: string;
  message: string;
  file_ids: number[];
}

export interface User {
  id: number;
  name: string;
  sortable_name: string;
  last_name: string;
  first_name: string;
  short_name: string;
  sis_user_id: string;
  sis_import_id: number;
  integration_id: string;
  login_id: string;
  avatar_url: string;
  avatar_state: string;
  enrollments: any;
  email: string;
  locale: string;
  last_login: Date;
  time_zone: string;
  bio: string;
}

export interface EPortfolio {
  id: number;
  user_id: number;
  name: string;
  public: boolean;
  created_at: Date;
  updated_at: Date;
  workflow_state: string;
  deleted_at: Date;
  spam_status: any;
}

export interface EPortfolioPage {
  id: number;
  eportfolio_id: number;
  position: number;
  name: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toAccount(json: string): Account {
    return cast(JSON.parse(json), r('Account'));
  }

  public static accountToJson(value: Account): string {
    return JSON.stringify(uncast(value, r('Account')), null, 2);
  }

  public static toAccountCalendar(json: string): AccountCalendar {
    return cast(JSON.parse(json), r('AccountCalendar'));
  }

  public static accountCalendarToJson(value: AccountCalendar): string {
    return JSON.stringify(uncast(value, r('AccountCalendar')), null, 2);
  }

  public static toAccountNotification(json: string): AccountNotification {
    return cast(JSON.parse(json), r('AccountNotification'));
  }

  public static accountNotificationToJson(value: AccountNotification): string {
    return JSON.stringify(uncast(value, r('AccountNotification')), null, 2);
  }

  public static toAdmin(json: string): Admin {
    return cast(JSON.parse(json), r('Admin'));
  }

  public static adminToJson(value: Admin): string {
    return JSON.stringify(uncast(value, r('Admin')), null, 2);
  }

  public static toAnonymousUserDisplay(json: string): AnonymousUserDisplay {
    return cast(JSON.parse(json), r('AnonymousUserDisplay'));
  }

  public static anonymousUserDisplayToJson(value: AnonymousUserDisplay): string {
    return JSON.stringify(uncast(value, r('AnonymousUserDisplay')), null, 2);
  }

  public static toAnswer(json: string): Answer {
    return cast(JSON.parse(json), r('Answer'));
  }

  public static answerToJson(value: Answer): string {
    return JSON.stringify(uncast(value, r('Answer')), null, 2);
  }

  public static toAppointment(json: string): Term {
    return cast(JSON.parse(json), r('Term'));
  }

  public static appointmentToJson(value: Term): string {
    return JSON.stringify(uncast(value, r('Term')), null, 2);
  }

  public static toAppointmentGroup(json: string): AppointmentGroup {
    return cast(JSON.parse(json), r('AppointmentGroup'));
  }

  public static appointmentGroupToJson(value: AppointmentGroup): string {
    return JSON.stringify(uncast(value, r('AppointmentGroup')), null, 2);
  }

  public static toAssessment(json: string): Assessment {
    return cast(JSON.parse(json), r('Assessment'));
  }

  public static assessmentToJson(value: Assessment): string {
    return JSON.stringify(uncast(value, r('Assessment')), null, 2);
  }

  public static toAssignment(json: string): Assignment {
    return cast(JSON.parse(json), r('Assignment'));
  }

  public static assignmentToJson(value: Assignment): string {
    return JSON.stringify(uncast(value, r('Assignment')), null, 2);
  }

  public static toAssignmentDate(json: string): UserAssignmentOverrideAttributes {
    return cast(JSON.parse(json), r('UserAssignmentOverrideAttributes'));
  }

  public static assignmentDateToJson(value: UserAssignmentOverrideAttributes): string {
    return JSON.stringify(uncast(value, r('UserAssignmentOverrideAttributes')), null, 2);
  }

  public static toAssignmentEvent(json: string): AssignmentEvent {
    return cast(JSON.parse(json), r('AssignmentEvent'));
  }

  public static assignmentEventToJson(value: AssignmentEvent): string {
    return JSON.stringify(uncast(value, r('AssignmentEvent')), null, 2);
  }

  public static toAssignmentExtension(json: string): AssignmentExtension {
    return cast(JSON.parse(json), r('AssignmentExtension'));
  }

  public static assignmentExtensionToJson(value: AssignmentExtension): string {
    return JSON.stringify(uncast(value, r('AssignmentExtension')), null, 2);
  }

  public static toAssignmentGroup(json: string): AssignmentGroup {
    return cast(JSON.parse(json), r('AssignmentGroup'));
  }

  public static assignmentGroupToJson(value: AssignmentGroup): string {
    return JSON.stringify(uncast(value, r('AssignmentGroup')), null, 2);
  }

  public static toAssignmentGroupAttributes(json: string): AssignmentGroupAttributes {
    return cast(JSON.parse(json), r('AssignmentGroupAttributes'));
  }

  public static assignmentGroupAttributesToJson(value: AssignmentGroupAttributes): string {
    return JSON.stringify(uncast(value, r('AssignmentGroupAttributes')), null, 2);
  }

  public static toAssignmentOverride(json: string): AssignmentOverride {
    return cast(JSON.parse(json), r('AssignmentOverride'));
  }

  public static assignmentOverrideToJson(value: AssignmentOverride): string {
    return JSON.stringify(uncast(value, r('AssignmentOverride')), null, 2);
  }

  public static toAuthenticationEvent(json: string): AuthenticationEvent {
    return cast(JSON.parse(json), r('AuthenticationEvent'));
  }

  public static authenticationEventToJson(value: AuthenticationEvent): string {
    return JSON.stringify(uncast(value, r('AuthenticationEvent')), null, 2);
  }

  public static toAuthenticationProvider(json: string): AuthenticationProvider {
    return cast(JSON.parse(json), r('AuthenticationProvider'));
  }

  public static authenticationProviderToJson(value: AuthenticationProvider): string {
    return JSON.stringify(uncast(value, r('AuthenticationProvider')), null, 2);
  }

  public static toAvatar(json: string): Avatar {
    return cast(JSON.parse(json), r('Avatar'));
  }

  public static avatarToJson(value: Avatar): string {
    return JSON.stringify(uncast(value, r('Avatar')), null, 2);
  }

  public static toBlackoutDate(json: string): BlackoutDate {
    return cast(JSON.parse(json), r('BlackoutDate'));
  }

  public static blackoutDateToJson(value: BlackoutDate): string {
    return JSON.stringify(uncast(value, r('BlackoutDate')), null, 2);
  }

  public static toBlueprintMigration(json: string): BlueprintMigration {
    return cast(JSON.parse(json), r('BlueprintMigration'));
  }

  public static blueprintMigrationToJson(value: BlueprintMigration): string {
    return JSON.stringify(uncast(value, r('BlueprintMigration')), null, 2);
  }

  public static toBlueprintRestriction(json: string): BlueprintRestriction {
    return cast(JSON.parse(json), r('BlueprintRestriction'));
  }

  public static blueprintRestrictionToJson(value: BlueprintRestriction): string {
    return JSON.stringify(uncast(value, r('BlueprintRestriction')), null, 2);
  }

  public static toBlueprintSubscription(json: string): BlueprintSubscription {
    return cast(JSON.parse(json), r('BlueprintSubscription'));
  }

  public static blueprintSubscriptionToJson(value: BlueprintSubscription): string {
    return JSON.stringify(uncast(value, r('BlueprintSubscription')), null, 2);
  }

  public static toBlueprintTemplate(json: string): BlueprintTemplate {
    return cast(JSON.parse(json), r('BlueprintTemplate'));
  }

  public static blueprintTemplateToJson(value: BlueprintTemplate): string {
    return JSON.stringify(uncast(value, r('BlueprintTemplate')), null, 2);
  }

  public static toBookmark(json: string): Bookmark {
    return cast(JSON.parse(json), r('Bookmark'));
  }

  public static bookmarkToJson(value: Bookmark): string {
    return JSON.stringify(uncast(value, r('Bookmark')), null, 2);
  }

  public static toCalendarEvent(json: string): CalendarEvent {
    return cast(JSON.parse(json), r('CalendarEvent'));
  }

  public static calendarEventToJson(value: CalendarEvent): string {
    return JSON.stringify(uncast(value, r('CalendarEvent')), null, 2);
  }

  public static toCalendarLink(json: string): CalendarLink {
    return cast(JSON.parse(json), r('CalendarLink'));
  }

  public static calendarLinkToJson(value: CalendarLink): string {
    return JSON.stringify(uncast(value, r('CalendarLink')), null, 2);
  }

  public static toChangeRecord(json: string): ChangeRecord {
    return cast(JSON.parse(json), r('ChangeRecord'));
  }

  public static changeRecordToJson(value: ChangeRecord): string {
    return JSON.stringify(uncast(value, r('ChangeRecord')), null, 2);
  }

  public static toCollaboration(json: string): Collaboration {
    return cast(JSON.parse(json), r('Collaboration'));
  }

  public static collaborationToJson(value: Collaboration): string {
    return JSON.stringify(uncast(value, r('Collaboration')), null, 2);
  }

  public static toCollaborator(json: string): Collaborator {
    return cast(JSON.parse(json), r('Collaborator'));
  }

  public static collaboratorToJson(value: Collaborator): string {
    return JSON.stringify(uncast(value, r('Collaborator')), null, 2);
  }

  public static toColumnDatum(json: string): ColumnDatum {
    return cast(JSON.parse(json), r('ColumnDatum'));
  }

  public static columnDatumToJson(value: ColumnDatum): string {
    return JSON.stringify(uncast(value, r('ColumnDatum')), null, 2);
  }

  public static toCommMessage(json: string): CommMessage {
    return cast(JSON.parse(json), r('CommMessage'));
  }

  public static commMessageToJson(value: CommMessage): string {
    return JSON.stringify(uncast(value, r('CommMessage')), null, 2);
  }

  public static toCommunicationChannel(json: string): CommunicationChannel {
    return cast(JSON.parse(json), r('CommunicationChannel'));
  }

  public static communicationChannelToJson(value: CommunicationChannel): string {
    return JSON.stringify(uncast(value, r('CommunicationChannel')), null, 2);
  }

  public static toCompletionRequirement(json: string): CompletionRequirement {
    return cast(JSON.parse(json), r('CompletionRequirement'));
  }

  public static completionRequirementToJson(value: CompletionRequirement): string {
    return JSON.stringify(uncast(value, r('CompletionRequirement')), null, 2);
  }

  public static toConference(json: string): Conference {
    return cast(JSON.parse(json), r('Conference'));
  }

  public static conferenceToJson(value: Conference): string {
    return JSON.stringify(uncast(value, r('Conference')), null, 2);
  }

  public static toConferenceRecording(json: string): ConferenceRecording {
    return cast(JSON.parse(json), r('ConferenceRecording'));
  }

  public static conferenceRecordingToJson(value: ConferenceRecording): string {
    return JSON.stringify(uncast(value, r('ConferenceRecording')), null, 2);
  }

  public static toContentDetails(json: string): ContentDetails {
    return cast(JSON.parse(json), r('ContentDetails'));
  }

  public static contentDetailsToJson(value: ContentDetails): string {
    return JSON.stringify(uncast(value, r('ContentDetails')), null, 2);
  }

  public static toContentExport(json: string): EpubExport {
    return cast(JSON.parse(json), r('EpubExport'));
  }

  public static contentExportToJson(value: EpubExport): string {
    return JSON.stringify(uncast(value, r('EpubExport')), null, 2);
  }

  public static toContentMigration(json: string): ContentMigration {
    return cast(JSON.parse(json), r('ContentMigration'));
  }

  public static contentMigrationToJson(value: ContentMigration): string {
    return JSON.stringify(uncast(value, r('ContentMigration')), null, 2);
  }

  public static toContentShare(json: string): ContentShare {
    return cast(JSON.parse(json), r('ContentShare'));
  }

  public static contentShareToJson(value: ContentShare): string {
    return JSON.stringify(uncast(value, r('ContentShare')), null, 2);
  }

  public static toConversation(json: string): Conversation {
    return cast(JSON.parse(json), r('Conversation'));
  }

  public static conversationToJson(value: Conversation): string {
    return JSON.stringify(uncast(value, r('Conversation')), null, 2);
  }

  public static toConversationParticipant(json: string): ConversationParticipant {
    return cast(JSON.parse(json), r('ConversationParticipant'));
  }

  public static conversationParticipantToJson(value: ConversationParticipant): string {
    return JSON.stringify(uncast(value, r('ConversationParticipant')), null, 2);
  }

  public static toCourse(json: string): Course {
    return cast(JSON.parse(json), r('Course'));
  }

  public static courseToJson(value: Course): string {
    return JSON.stringify(uncast(value, r('Course')), null, 2);
  }

  public static toCourseAttributes(json: string): CourseAttributes {
    return cast(JSON.parse(json), r('CourseAttributes'));
  }

  public static courseAttributesToJson(value: CourseAttributes): string {
    return JSON.stringify(uncast(value, r('CourseAttributes')), null, 2);
  }

  public static toCourseEpubExport(json: string): CourseEpubExport {
    return cast(JSON.parse(json), r('CourseEpubExport'));
  }

  public static courseEpubExportToJson(value: CourseEpubExport): string {
    return JSON.stringify(uncast(value, r('CourseEpubExport')), null, 2);
  }

  public static toCourseEvent(json: string): CourseEvent {
    return cast(JSON.parse(json), r('CourseEvent'));
  }

  public static courseEventToJson(value: CourseEvent): string {
    return JSON.stringify(uncast(value, r('CourseEvent')), null, 2);
  }

  public static toCourseEventLink(json: string): CourseEventLink {
    return cast(JSON.parse(json), r('CourseEventLink'));
  }

  public static courseEventLinkToJson(value: CourseEventLink): string {
    return JSON.stringify(uncast(value, r('CourseEventLink')), null, 2);
  }

  public static toCourseNickname(json: string): CourseNickname {
    return cast(JSON.parse(json), r('CourseNickname'));
  }

  public static courseNicknameToJson(value: CourseNickname): string {
    return JSON.stringify(uncast(value, r('CourseNickname')), null, 2);
  }

  public static toCourseProgress(json: string): CourseProgress {
    return cast(JSON.parse(json), r('CourseProgress'));
  }

  public static courseProgressToJson(value: CourseProgress): string {
    return JSON.stringify(uncast(value, r('CourseProgress')), null, 2);
  }

  public static toCourseQuizExtension(json: string): QuizExtension {
    return cast(JSON.parse(json), r('QuizExtension'));
  }

  public static courseQuizExtensionToJson(value: QuizExtension): string {
    return JSON.stringify(uncast(value, r('QuizExtension')), null, 2);
  }

  public static toCreatedEventData(json: string): CreatedEventData {
    return cast(JSON.parse(json), r('CreatedEventData'));
  }

  public static createdEventDataToJson(value: CreatedEventData): string {
    return JSON.stringify(uncast(value, r('CreatedEventData')), null, 2);
  }

  public static toCustomColumn(json: string): CustomColumn {
    return cast(JSON.parse(json), r('CustomColumn'));
  }

  public static customColumnToJson(value: CustomColumn): string {
    return JSON.stringify(uncast(value, r('CustomColumn')), null, 2);
  }

  public static toDay(json: string): Day {
    return cast(JSON.parse(json), r('Day'));
  }

  public static dayToJson(value: Day): string {
    return JSON.stringify(uncast(value, r('Day')), null, 2);
  }

  public static toDeveloperKey(json: string): DeveloperKey {
    return cast(JSON.parse(json), r('DeveloperKey'));
  }

  public static developerKeyToJson(value: DeveloperKey): string {
    return JSON.stringify(uncast(value, r('DeveloperKey')), null, 2);
  }

  public static toDiscussionTopic(json: string): DiscussionTopic {
    return cast(JSON.parse(json), r('DiscussionTopic'));
  }

  public static discussionTopicToJson(value: DiscussionTopic): string {
    return JSON.stringify(uncast(value, r('DiscussionTopic')), null, 2);
  }

  public static toEnrollment(json: string): Enrollment {
    return cast(JSON.parse(json), r('Enrollment'));
  }

  public static enrollmentToJson(value: Enrollment): string {
    return JSON.stringify(uncast(value, r('Enrollment')), null, 2);
  }

  public static toEnrollmentTerm(json: string): EnrollmentTerm {
    return cast(JSON.parse(json), r('EnrollmentTerm'));
  }

  public static enrollmentTermToJson(value: EnrollmentTerm): string {
    return JSON.stringify(uncast(value, r('EnrollmentTerm')), null, 2);
  }

  public static toEnrollmentTermsList(json: string): EnrollmentTermsList {
    return cast(JSON.parse(json), r('EnrollmentTermsList'));
  }

  public static enrollmentTermsListToJson(value: EnrollmentTermsList): string {
    return JSON.stringify(uncast(value, r('EnrollmentTermsList')), null, 2);
  }

  public static toEpubExport(json: string): EpubExport {
    return cast(JSON.parse(json), r('EpubExport'));
  }

  public static epubExportToJson(value: EpubExport): string {
    return JSON.stringify(uncast(value, r('EpubExport')), null, 2);
  }

  public static toErrorReport(json: string): ErrorReport {
    return cast(JSON.parse(json), r('ErrorReport'));
  }

  public static errorReportToJson(value: ErrorReport): string {
    return JSON.stringify(uncast(value, r('ErrorReport')), null, 2);
  }

  public static toExceptionRecord(json: string): ExceptionRecord {
    return cast(JSON.parse(json), r('ExceptionRecord'));
  }

  public static exceptionRecordToJson(value: ExceptionRecord): string {
    return JSON.stringify(uncast(value, r('ExceptionRecord')), null, 2);
  }

  public static toExternalFeed(json: string): ExternalFeed {
    return cast(JSON.parse(json), r('ExternalFeed'));
  }

  public static externalFeedToJson(value: ExternalFeed): string {
    return JSON.stringify(uncast(value, r('ExternalFeed')), null, 2);
  }

  public static toExternalToolTagAttributes(json: string): ExternalToolTagAttributes {
    return cast(JSON.parse(json), r('ExternalToolTagAttributes'));
  }

  public static externalToolTagAttributesToJson(value: ExternalToolTagAttributes): string {
    return JSON.stringify(uncast(value, r('ExternalToolTagAttributes')), null, 2);
  }

  public static toFavorite(json: string): Favorite {
    return cast(JSON.parse(json), r('Favorite'));
  }

  public static favoriteToJson(value: Favorite): string {
    return JSON.stringify(uncast(value, r('Favorite')), null, 2);
  }

  public static toFeature(json: string): Feature {
    return cast(JSON.parse(json), r('Feature'));
  }

  public static featureToJson(value: Feature): string {
    return JSON.stringify(uncast(value, r('Feature')), null, 2);
  }

  public static toFeatureFlag(json: string): FeatureFlag {
    return cast(JSON.parse(json), r('FeatureFlag'));
  }

  public static featureFlagToJson(value: FeatureFlag): string {
    return JSON.stringify(uncast(value, r('FeatureFlag')), null, 2);
  }

  public static toFederatedAttributeConfig(json: string): FederatedAttributeConfig {
    return cast(JSON.parse(json), r('FederatedAttributeConfig'));
  }

  public static federatedAttributeConfigToJson(value: FederatedAttributeConfig): string {
    return JSON.stringify(uncast(value, r('FederatedAttributeConfig')), null, 2);
  }

  public static toFederatedAttributesConfig(json: string): FederatedAttributesConfig {
    return cast(JSON.parse(json), r('FederatedAttributesConfig'));
  }

  public static federatedAttributesConfigToJson(value: FederatedAttributesConfig): string {
    return JSON.stringify(uncast(value, r('FederatedAttributesConfig')), null, 2);
  }

  public static toFile(json: string): File {
    return cast(JSON.parse(json), r('File'));
  }

  public static fileToJson(value: File): string {
    return JSON.stringify(uncast(value, r('File')), null, 2);
  }

  public static toFileAttachment(json: string): FileAttachment {
    return cast(JSON.parse(json), r('FileAttachment'));
  }

  public static fileAttachmentToJson(value: FileAttachment): string {
    return JSON.stringify(uncast(value, r('FileAttachment')), null, 2);
  }

  public static toFolder(json: string): Folder {
    return cast(JSON.parse(json), r('Folder'));
  }

  public static folderToJson(value: Folder): string {
    return JSON.stringify(uncast(value, r('Folder')), null, 2);
  }

  public static toGrade(json: string): Grade {
    return cast(JSON.parse(json), r('Grade'));
  }

  public static gradeToJson(value: Grade): string {
    return JSON.stringify(uncast(value, r('Grade')), null, 2);
  }

  public static toGradeChangeEvent(json: string): GradeChangeEvent {
    return cast(JSON.parse(json), r('GradeChangeEvent'));
  }

  public static gradeChangeEventToJson(value: GradeChangeEvent): string {
    return JSON.stringify(uncast(value, r('GradeChangeEvent')), null, 2);
  }

  public static toGradeChangeEventLinks(json: string): GradeChangeEventLinks {
    return cast(JSON.parse(json), r('GradeChangeEventLinks'));
  }

  public static gradeChangeEventLinksToJson(value: GradeChangeEventLinks): string {
    return JSON.stringify(uncast(value, r('GradeChangeEventLinks')), null, 2);
  }

  public static toGrader(json: string): Grader {
    return cast(JSON.parse(json), r('Grader'));
  }

  public static graderToJson(value: Grader): string {
    return JSON.stringify(uncast(value, r('Grader')), null, 2);
  }

  public static toGradingPeriod(json: string): GradingPeriod {
    return cast(JSON.parse(json), r('GradingPeriod'));
  }

  public static gradingPeriodToJson(value: GradingPeriod): string {
    return JSON.stringify(uncast(value, r('GradingPeriod')), null, 2);
  }

  public static toGradingPeriodSets(json: string): GradingPeriodSets {
    return cast(JSON.parse(json), r('GradingPeriodSets'));
  }

  public static gradingPeriodSetsToJson(value: GradingPeriodSets): string {
    return JSON.stringify(uncast(value, r('GradingPeriodSets')), null, 2);
  }

  public static toGradingRules(json: string): GradingRules {
    return cast(JSON.parse(json), r('GradingRules'));
  }

  public static gradingRulesToJson(value: GradingRules): string {
    return JSON.stringify(uncast(value, r('GradingRules')), null, 2);
  }

  public static toGradingSchemeEntry(json: string): GradingSchemeEntry {
    return cast(JSON.parse(json), r('GradingSchemeEntry'));
  }

  public static gradingSchemeEntryToJson(value: GradingSchemeEntry): string {
    return JSON.stringify(uncast(value, r('GradingSchemeEntry')), null, 2);
  }

  public static toGradingStandard(json: string): GradingStandard {
    return cast(JSON.parse(json), r('GradingStandard'));
  }

  public static gradingStandardToJson(value: GradingStandard): string {
    return JSON.stringify(uncast(value, r('GradingStandard')), null, 2);
  }

  public static toGroup(json: string): Group {
    return cast(JSON.parse(json), r('Group'));
  }

  public static groupToJson(value: Group): string {
    return JSON.stringify(uncast(value, r('Group')), null, 2);
  }

  public static toGroupCategory(json: string): GroupCategory {
    return cast(JSON.parse(json), r('GroupCategory'));
  }

  public static groupCategoryToJson(value: GroupCategory): string {
    return JSON.stringify(uncast(value, r('GroupCategory')), null, 2);
  }

  public static toGroupMembership(json: string): GroupMembership {
    return cast(JSON.parse(json), r('GroupMembership'));
  }

  public static groupMembershipToJson(value: GroupMembership): string {
    return JSON.stringify(uncast(value, r('GroupMembership')), null, 2);
  }

  public static toHelpLink(json: string): HelpLink {
    return cast(JSON.parse(json), r('HelpLink'));
  }

  public static helpLinkToJson(value: HelpLink): string {
    return JSON.stringify(uncast(value, r('HelpLink')), null, 2);
  }

  public static toHelpLinks(json: string): HelpLinks {
    return cast(JSON.parse(json), r('HelpLinks'));
  }

  public static helpLinksToJson(value: HelpLinks): string {
    return JSON.stringify(uncast(value, r('HelpLinks')), null, 2);
  }

  public static toHistoryEntry(json: string): HistoryEntry {
    return cast(JSON.parse(json), r('HistoryEntry'));
  }

  public static historyEntryToJson(value: HistoryEntry): string {
    return JSON.stringify(uncast(value, r('HistoryEntry')), null, 2);
  }

  public static toInstAccessToken(json: string): Jwt {
    return cast(JSON.parse(json), r('Jwt'));
  }

  public static instAccessTokenToJson(value: Jwt): string {
    return JSON.stringify(uncast(value, r('Jwt')), null, 2);
  }

  public static toJSONAPIPagination(json: string): JSONAPIPagination {
    return cast(JSON.parse(json), r('JSONAPIPagination'));
  }

  public static jSONAPIPaginationToJson(value: JSONAPIPagination): string {
    return JSON.stringify(uncast(value, r('JSONAPIPagination')), null, 2);
  }

  public static toJwt(json: string): Jwt {
    return cast(JSON.parse(json), r('Jwt'));
  }

  public static jwtToJson(value: Jwt): string {
    return JSON.stringify(uncast(value, r('Jwt')), null, 2);
  }

  public static toLatePolicy(json: string): LatePolicy {
    return cast(JSON.parse(json), r('LatePolicy'));
  }

  public static latePolicyToJson(value: LatePolicy): string {
    return JSON.stringify(uncast(value, r('LatePolicy')), null, 2);
  }

  public static toLicense(json: string): License {
    return cast(JSON.parse(json), r('License'));
  }

  public static licenseToJson(value: License): string {
    return JSON.stringify(uncast(value, r('License')), null, 2);
  }

  public static toLineItem(json: string): LineItem {
    return cast(JSON.parse(json), r('LineItem'));
  }

  public static lineItemToJson(value: LineItem): string {
    return JSON.stringify(uncast(value, r('LineItem')), null, 2);
  }

  public static toLockInfo(json: string): LockInfo {
    return cast(JSON.parse(json), r('LockInfo'));
  }

  public static lockInfoToJson(value: LockInfo): string {
    return JSON.stringify(uncast(value, r('LockInfo')), null, 2);
  }

  public static toLtiAssignment(json: string): LtiAssignment {
    return cast(JSON.parse(json), r('LtiAssignment'));
  }

  public static ltiAssignmentToJson(value: LtiAssignment): string {
    return JSON.stringify(uncast(value, r('LtiAssignment')), null, 2);
  }

  public static toMediaComment(json: string): MediaComment {
    return cast(JSON.parse(json), r('MediaComment'));
  }

  public static mediaCommentToJson(value: MediaComment): string {
    return JSON.stringify(uncast(value, r('MediaComment')), null, 2);
  }

  public static toMediaObject(json: string): MediaObject {
    return cast(JSON.parse(json), r('MediaObject'));
  }

  public static mediaObjectToJson(value: MediaObject): string {
    return JSON.stringify(uncast(value, r('MediaObject')), null, 2);
  }

  public static toMediaTrack(json: string): MediaTrack {
    return cast(JSON.parse(json), r('MediaTrack'));
  }

  public static mediaTrackToJson(value: MediaTrack): string {
    return JSON.stringify(uncast(value, r('MediaTrack')), null, 2);
  }

  public static toMigrationIssue(json: string): MigrationIssue {
    return cast(JSON.parse(json), r('MigrationIssue'));
  }

  public static migrationIssueToJson(value: MigrationIssue): string {
    return JSON.stringify(uncast(value, r('MigrationIssue')), null, 2);
  }

  public static toMigrator(json: string): Migrator {
    return cast(JSON.parse(json), r('Migrator'));
  }

  public static migratorToJson(value: Migrator): string {
    return JSON.stringify(uncast(value, r('Migrator')), null, 2);
  }

  public static toModule(json: string): Module {
    return cast(JSON.parse(json), r('Module'));
  }

  public static moduleToJson(value: Module): string {
    return JSON.stringify(uncast(value, r('Module')), null, 2);
  }

  public static toModuleItem(json: string): ModuleItem {
    return cast(JSON.parse(json), r('ModuleItem'));
  }

  public static moduleItemToJson(value: ModuleItem): string {
    return JSON.stringify(uncast(value, r('ModuleItem')), null, 2);
  }

  public static toModuleItemSequence(json: string): ModuleItemSequence {
    return cast(JSON.parse(json), r('ModuleItemSequence'));
  }

  public static moduleItemSequenceToJson(value: ModuleItemSequence): string {
    return JSON.stringify(uncast(value, r('ModuleItemSequence')), null, 2);
  }

  public static toModuleItemSequenceNode(json: string): ModuleItemSequenceNode {
    return cast(JSON.parse(json), r('ModuleItemSequenceNode'));
  }

  public static moduleItemSequenceNodeToJson(value: ModuleItemSequenceNode): string {
    return JSON.stringify(uncast(value, r('ModuleItemSequenceNode')), null, 2);
  }

  public static toNamesAndRoleContext(json: string): NamesAndRoleContext {
    return cast(JSON.parse(json), r('NamesAndRoleContext'));
  }

  public static namesAndRoleContextToJson(value: NamesAndRoleContext): string {
    return JSON.stringify(uncast(value, r('NamesAndRoleContext')), null, 2);
  }

  public static toNamesAndRoleMembership(json: string): NamesAndRoleMembership {
    return cast(JSON.parse(json), r('NamesAndRoleMembership'));
  }

  public static namesAndRoleMembershipToJson(value: NamesAndRoleMembership): string {
    return JSON.stringify(uncast(value, r('NamesAndRoleMembership')), null, 2);
  }

  public static toNamesAndRoleMemberships(json: string): NamesAndRoleMemberships {
    return cast(JSON.parse(json), r('NamesAndRoleMemberships'));
  }

  public static namesAndRoleMembershipsToJson(value: NamesAndRoleMemberships): string {
    return JSON.stringify(uncast(value, r('NamesAndRoleMemberships')), null, 2);
  }

  public static toNamesAndRoleMessage(json: string): NamesAndRoleMessage {
    return cast(JSON.parse(json), r('NamesAndRoleMessage'));
  }

  public static namesAndRoleMessageToJson(value: NamesAndRoleMessage): string {
    return JSON.stringify(uncast(value, r('NamesAndRoleMessage')), null, 2);
  }

  public static toNeedsGradingCount(json: string): NeedsGradingCount {
    return cast(JSON.parse(json), r('NeedsGradingCount'));
  }

  public static needsGradingCountToJson(value: NeedsGradingCount): string {
    return JSON.stringify(uncast(value, r('NeedsGradingCount')), null, 2);
  }

  public static toNotificationPreference(json: string): NotificationPreference {
    return cast(JSON.parse(json), r('NotificationPreference'));
  }

  public static notificationPreferenceToJson(value: NotificationPreference): string {
    return JSON.stringify(uncast(value, r('NotificationPreference')), null, 2);
  }

  public static toOriginalityReport(json: string): OriginalityReport {
    return cast(JSON.parse(json), r('OriginalityReport'));
  }

  public static originalityReportToJson(value: OriginalityReport): string {
    return JSON.stringify(uncast(value, r('OriginalityReport')), null, 2);
  }

  public static toOutcome(json: string): Outcome {
    return cast(JSON.parse(json), r('Outcome'));
  }

  public static outcomeToJson(value: Outcome): string {
    return JSON.stringify(uncast(value, r('Outcome')), null, 2);
  }

  public static toOutcomeAlignment(json: string): OutcomeAlignment {
    return cast(JSON.parse(json), r('OutcomeAlignment'));
  }

  public static outcomeAlignmentToJson(value: OutcomeAlignment): string {
    return JSON.stringify(uncast(value, r('OutcomeAlignment')), null, 2);
  }

  public static toOutcomeGroup(json: string): OutcomeGroup {
    return cast(JSON.parse(json), r('OutcomeGroup'));
  }

  public static outcomeGroupToJson(value: OutcomeGroup): string {
    return JSON.stringify(uncast(value, r('OutcomeGroup')), null, 2);
  }

  public static toOutcomeImport(json: string): OutcomeImport {
    return cast(JSON.parse(json), r('OutcomeImport'));
  }

  public static outcomeImportToJson(value: OutcomeImport): string {
    return JSON.stringify(uncast(value, r('OutcomeImport')), null, 2);
  }

  public static toOutcomeImportData(json: string): OutcomeImportData {
    return cast(JSON.parse(json), r('OutcomeImportData'));
  }

  public static outcomeImportDataToJson(value: OutcomeImportData): string {
    return JSON.stringify(uncast(value, r('OutcomeImportData')), null, 2);
  }

  public static toOutcomeLink(json: string): OutcomeLink {
    return cast(JSON.parse(json), r('OutcomeLink'));
  }

  public static outcomeLinkToJson(value: OutcomeLink): string {
    return JSON.stringify(uncast(value, r('OutcomeLink')), null, 2);
  }

  public static toOutcomePath(json: string): OutcomePath {
    return cast(JSON.parse(json), r('OutcomePath'));
  }

  public static outcomePathToJson(value: OutcomePath): string {
    return JSON.stringify(uncast(value, r('OutcomePath')), null, 2);
  }

  public static toOutcomePathPart(json: string): OutcomePathPart {
    return cast(JSON.parse(json), r('OutcomePathPart'));
  }

  public static outcomePathPartToJson(value: OutcomePathPart): string {
    return JSON.stringify(uncast(value, r('OutcomePathPart')), null, 2);
  }

  public static toOutcomeResult(json: string): OutcomeResult {
    return cast(JSON.parse(json), r('OutcomeResult'));
  }

  public static outcomeResultToJson(value: OutcomeResult): string {
    return JSON.stringify(uncast(value, r('OutcomeResult')), null, 2);
  }

  public static toOutcomeRollup(json: string): OutcomeRollup {
    return cast(JSON.parse(json), r('OutcomeRollup'));
  }

  public static outcomeRollupToJson(value: OutcomeRollup): string {
    return JSON.stringify(uncast(value, r('OutcomeRollup')), null, 2);
  }

  public static toOutcomeRollupLinks(json: string): OutcomeRollupLinks {
    return cast(JSON.parse(json), r('OutcomeRollupLinks'));
  }

  public static outcomeRollupLinksToJson(value: OutcomeRollupLinks): string {
    return JSON.stringify(uncast(value, r('OutcomeRollupLinks')), null, 2);
  }

  public static toOutcomeRollupScore(json: string): OutcomeRollupScore {
    return cast(JSON.parse(json), r('OutcomeRollupScore'));
  }

  public static outcomeRollupScoreToJson(value: OutcomeRollupScore): string {
    return JSON.stringify(uncast(value, r('OutcomeRollupScore')), null, 2);
  }

  public static toOutcomeRollupScoreLinks(json: string): OutcomeRollupScoreLinks {
    return cast(JSON.parse(json), r('OutcomeRollupScoreLinks'));
  }

  public static outcomeRollupScoreLinksToJson(value: OutcomeRollupScoreLinks): string {
    return JSON.stringify(uncast(value, r('OutcomeRollupScoreLinks')), null, 2);
  }

  public static toPage(json: string): Page {
    return cast(JSON.parse(json), r('Page'));
  }

  public static pageToJson(value: Page): string {
    return JSON.stringify(uncast(value, r('Page')), null, 2);
  }

  public static toPageRevision(json: string): PageRevision {
    return cast(JSON.parse(json), r('PageRevision'));
  }

  public static pageRevisionToJson(value: PageRevision): string {
    return JSON.stringify(uncast(value, r('PageRevision')), null, 2);
  }

  public static toPageView(json: string): PageView {
    return cast(JSON.parse(json), r('PageView'));
  }

  public static pageViewToJson(value: PageView): string {
    return JSON.stringify(uncast(value, r('PageView')), null, 2);
  }

  public static toPageViewLinks(json: string): PageViewLinks {
    return cast(JSON.parse(json), r('PageViewLinks'));
  }

  public static pageViewLinksToJson(value: PageViewLinks): string {
    return JSON.stringify(uncast(value, r('PageViewLinks')), null, 2);
  }

  public static toPairingCode(json: string): PairingCode {
    return cast(JSON.parse(json), r('PairingCode'));
  }

  public static pairingCodeToJson(value: PairingCode): string {
    return JSON.stringify(uncast(value, r('PairingCode')), null, 2);
  }

  public static toPeerReview(json: string): PeerReview {
    return cast(JSON.parse(json), r('PeerReview'));
  }

  public static peerReviewToJson(value: PeerReview): string {
    return JSON.stringify(uncast(value, r('PeerReview')), null, 2);
  }

  public static toPlannerNote(json: string): PlannerNote {
    return cast(JSON.parse(json), r('PlannerNote'));
  }

  public static plannerNoteToJson(value: PlannerNote): string {
    return JSON.stringify(uncast(value, r('PlannerNote')), null, 2);
  }

  public static toPlannerOverride(json: string): PlannerOverride {
    return cast(JSON.parse(json), r('PlannerOverride'));
  }

  public static plannerOverrideToJson(value: PlannerOverride): string {
    return JSON.stringify(uncast(value, r('PlannerOverride')), null, 2);
  }

  public static toPoll(json: string): Poll {
    return cast(JSON.parse(json), r('Poll'));
  }

  public static pollToJson(value: Poll): string {
    return JSON.stringify(uncast(value, r('Poll')), null, 2);
  }

  public static toPollChoice(json: string): PollChoice {
    return cast(JSON.parse(json), r('PollChoice'));
  }

  public static pollChoiceToJson(value: PollChoice): string {
    return JSON.stringify(uncast(value, r('PollChoice')), null, 2);
  }

  public static toPollSession(json: string): PollSession {
    return cast(JSON.parse(json), r('PollSession'));
  }

  public static pollSessionToJson(value: PollSession): string {
    return JSON.stringify(uncast(value, r('PollSession')), null, 2);
  }

  public static toPollSubmission(json: string): PollSubmission {
    return cast(JSON.parse(json), r('PollSubmission'));
  }

  public static pollSubmissionToJson(value: PollSubmission): string {
    return JSON.stringify(uncast(value, r('PollSubmission')), null, 2);
  }

  public static toProficiency(json: string): Proficiency {
    return cast(JSON.parse(json), r('Proficiency'));
  }

  public static proficiencyToJson(value: Proficiency): string {
    return JSON.stringify(uncast(value, r('Proficiency')), null, 2);
  }

  public static toProficiencyRating(json: string): ProficiencyRating {
    return cast(JSON.parse(json), r('ProficiencyRating'));
  }

  public static proficiencyRatingToJson(value: ProficiencyRating): string {
    return JSON.stringify(uncast(value, r('ProficiencyRating')), null, 2);
  }

  public static toProfile(json: string): Profile {
    return cast(JSON.parse(json), r('Profile'));
  }

  public static profileToJson(value: Profile): string {
    return JSON.stringify(uncast(value, r('Profile')), null, 2);
  }

  public static toProgress(json: string): Progress {
    return cast(JSON.parse(json), r('Progress'));
  }

  public static progressToJson(value: Progress): string {
    return JSON.stringify(uncast(value, r('Progress')), null, 2);
  }

  public static toProvisionalGrade(json: string): ProvisionalGrade {
    return cast(JSON.parse(json), r('ProvisionalGrade'));
  }

  public static provisionalGradeToJson(value: ProvisionalGrade): string {
    return JSON.stringify(uncast(value, r('ProvisionalGrade')), null, 2);
  }

  public static toQuiz(json: string): Quiz {
    return cast(JSON.parse(json), r('Quiz'));
  }

  public static quizToJson(value: Quiz): string {
    return JSON.stringify(uncast(value, r('Quiz')), null, 2);
  }

  public static toQuizAssignmentOverride(json: string): UserAssignmentOverrideAttributes {
    return cast(JSON.parse(json), r('UserAssignmentOverrideAttributes'));
  }

  public static quizAssignmentOverrideToJson(value: UserAssignmentOverrideAttributes): string {
    return JSON.stringify(uncast(value, r('UserAssignmentOverrideAttributes')), null, 2);
  }

  public static toQuizAssignmentOverrideSet(json: string): QuizAssignmentOverrideSet {
    return cast(JSON.parse(json), r('QuizAssignmentOverrideSet'));
  }

  public static quizAssignmentOverrideSetToJson(value: QuizAssignmentOverrideSet): string {
    return JSON.stringify(uncast(value, r('QuizAssignmentOverrideSet')), null, 2);
  }

  public static toQuizAssignmentOverrideSetContainer(json: string): QuizAssignmentOverrideSetContainer {
    return cast(JSON.parse(json), r('QuizAssignmentOverrideSetContainer'));
  }

  public static quizAssignmentOverrideSetContainerToJson(value: QuizAssignmentOverrideSetContainer): string {
    return JSON.stringify(uncast(value, r('QuizAssignmentOverrideSetContainer')), null, 2);
  }

  public static toQuizExtension(json: string): QuizExtension {
    return cast(JSON.parse(json), r('QuizExtension'));
  }

  public static quizExtensionToJson(value: QuizExtension): string {
    return JSON.stringify(uncast(value, r('QuizExtension')), null, 2);
  }

  public static toQuizGroup(json: string): QuizGroup {
    return cast(JSON.parse(json), r('QuizGroup'));
  }

  public static quizGroupToJson(value: QuizGroup): string {
    return JSON.stringify(uncast(value, r('QuizGroup')), null, 2);
  }

  public static toQuizIPFilter(json: string): QuizIPFilter {
    return cast(JSON.parse(json), r('QuizIPFilter'));
  }

  public static quizIPFilterToJson(value: QuizIPFilter): string {
    return JSON.stringify(uncast(value, r('QuizIPFilter')), null, 2);
  }

  public static toQuizPermissions(json: string): QuizPermissions {
    return cast(JSON.parse(json), r('QuizPermissions'));
  }

  public static quizPermissionsToJson(value: QuizPermissions): string {
    return JSON.stringify(uncast(value, r('QuizPermissions')), null, 2);
  }

  public static toQuizQuestion(json: string): QuizQuestion {
    return cast(JSON.parse(json), r('QuizQuestion'));
  }

  public static quizQuestionToJson(value: QuizQuestion): string {
    return JSON.stringify(uncast(value, r('QuizQuestion')), null, 2);
  }

  public static toQuizReport(json: string): QuizReport {
    return cast(JSON.parse(json), r('QuizReport'));
  }

  public static quizReportToJson(value: QuizReport): string {
    return JSON.stringify(uncast(value, r('QuizReport')), null, 2);
  }

  public static toQuizStatistics(json: string): QuizStatistics {
    return cast(JSON.parse(json), r('QuizStatistics'));
  }

  public static quizStatisticsToJson(value: QuizStatistics): string {
    return JSON.stringify(uncast(value, r('QuizStatistics')), null, 2);
  }

  public static toQuizStatisticsAnswerPointBiserial(json: string): QuizStatisticsAnswerPointBiserial {
    return cast(JSON.parse(json), r('QuizStatisticsAnswerPointBiserial'));
  }

  public static quizStatisticsAnswerPointBiserialToJson(value: QuizStatisticsAnswerPointBiserial): string {
    return JSON.stringify(uncast(value, r('QuizStatisticsAnswerPointBiserial')), null, 2);
  }

  public static toQuizStatisticsAnswerStatistics(json: string): QuizStatisticsAnswerStatistics {
    return cast(JSON.parse(json), r('QuizStatisticsAnswerStatistics'));
  }

  public static quizStatisticsAnswerStatisticsToJson(value: QuizStatisticsAnswerStatistics): string {
    return JSON.stringify(uncast(value, r('QuizStatisticsAnswerStatistics')), null, 2);
  }

  public static toQuizStatisticsLinks(json: string): QuizStatisticsLinks {
    return cast(JSON.parse(json), r('QuizStatisticsLinks'));
  }

  public static quizStatisticsLinksToJson(value: QuizStatisticsLinks): string {
    return JSON.stringify(uncast(value, r('QuizStatisticsLinks')), null, 2);
  }

  public static toQuizStatisticsQuestionStatistics(json: string): QuizStatisticsQuestionStatistics {
    return cast(JSON.parse(json), r('QuizStatisticsQuestionStatistics'));
  }

  public static quizStatisticsQuestionStatisticsToJson(value: QuizStatisticsQuestionStatistics): string {
    return JSON.stringify(uncast(value, r('QuizStatisticsQuestionStatistics')), null, 2);
  }

  public static toQuizStatisticsSubmissionStatistics(json: string): QuizStatisticsSubmissionStatistics {
    return cast(JSON.parse(json), r('QuizStatisticsSubmissionStatistics'));
  }

  public static quizStatisticsSubmissionStatisticsToJson(value: QuizStatisticsSubmissionStatistics): string {
    return JSON.stringify(uncast(value, r('QuizStatisticsSubmissionStatistics')), null, 2);
  }

  public static toQuizSubmission(json: string): QuizSubmission {
    return cast(JSON.parse(json), r('QuizSubmission'));
  }

  public static quizSubmissionToJson(value: QuizSubmission): string {
    return JSON.stringify(uncast(value, r('QuizSubmission')), null, 2);
  }

  public static toQuizSubmissionEvent(json: string): QuizSubmissionEvent {
    return cast(JSON.parse(json), r('QuizSubmissionEvent'));
  }

  public static quizSubmissionEventToJson(value: QuizSubmissionEvent): string {
    return JSON.stringify(uncast(value, r('QuizSubmissionEvent')), null, 2);
  }

  public static toQuizSubmissionQuestion(json: string): QuizSubmissionQuestion {
    return cast(JSON.parse(json), r('QuizSubmissionQuestion'));
  }

  public static quizSubmissionQuestionToJson(value: QuizSubmissionQuestion): string {
    return JSON.stringify(uncast(value, r('QuizSubmissionQuestion')), null, 2);
  }

  public static toQuizSubmissionUserList(json: string): QuizSubmissionUserList {
    return cast(JSON.parse(json), r('QuizSubmissionUserList'));
  }

  public static quizSubmissionUserListToJson(value: QuizSubmissionUserList): string {
    return JSON.stringify(uncast(value, r('QuizSubmissionUserList')), null, 2);
  }

  public static toQuizSubmissionUserListMeta(json: string): QuizSubmissionUserListMeta {
    return cast(JSON.parse(json), r('QuizSubmissionUserListMeta'));
  }

  public static quizSubmissionUserListMetaToJson(value: QuizSubmissionUserListMeta): string {
    return JSON.stringify(uncast(value, r('QuizSubmissionUserListMeta')), null, 2);
  }

  public static toReport(json: string): Report {
    return cast(JSON.parse(json), r('Report'));
  }

  public static reportToJson(value: Report): string {
    return JSON.stringify(uncast(value, r('Report')), null, 2);
  }

  public static toReportParameters(json: string): ReportParameters {
    return cast(JSON.parse(json), r('ReportParameters'));
  }

  public static reportParametersToJson(value: ReportParameters): string {
    return JSON.stringify(uncast(value, r('ReportParameters')), null, 2);
  }

  public static toResult(json: string): Result {
    return cast(JSON.parse(json), r('Result'));
  }

  public static resultToJson(value: Result): string {
    return JSON.stringify(uncast(value, r('Result')), null, 2);
  }

  public static toResultLinks(json: string): ResultLinks {
    return cast(JSON.parse(json), r('ResultLinks'));
  }

  public static resultLinksToJson(value: ResultLinks): string {
    return JSON.stringify(uncast(value, r('ResultLinks')), null, 2);
  }

  public static toRole(json: string): Role {
    return cast(JSON.parse(json), r('Role'));
  }

  public static roleToJson(value: Role): string {
    return JSON.stringify(uncast(value, r('Role')), null, 2);
  }

  public static toRolePermissions(json: string): RolePermissions {
    return cast(JSON.parse(json), r('RolePermissions'));
  }

  public static rolePermissionsToJson(value: RolePermissions): string {
    return JSON.stringify(uncast(value, r('RolePermissions')), null, 2);
  }

  public static toRubric(json: string): Rubric {
    return cast(JSON.parse(json), r('Rubric'));
  }

  public static rubricToJson(value: Rubric): string {
    return JSON.stringify(uncast(value, r('Rubric')), null, 2);
  }

  public static toRubricAssessment(json: string): RubricAssessment {
    return cast(JSON.parse(json), r('RubricAssessment'));
  }

  public static rubricAssessmentToJson(value: RubricAssessment): string {
    return JSON.stringify(uncast(value, r('RubricAssessment')), null, 2);
  }

  public static toRubricAssociation(json: string): RubricAssociation {
    return cast(JSON.parse(json), r('RubricAssociation'));
  }

  public static rubricAssociationToJson(value: RubricAssociation): string {
    return JSON.stringify(uncast(value, r('RubricAssociation')), null, 2);
  }

  public static toRubricCriteria(json: string): RubricCriteria {
    return cast(JSON.parse(json), r('RubricCriteria'));
  }

  public static rubricCriteriaToJson(value: RubricCriteria): string {
    return JSON.stringify(uncast(value, r('RubricCriteria')), null, 2);
  }

  public static toRubricCriterion(json: string): RubricCriterion {
    return cast(JSON.parse(json), r('RubricCriterion'));
  }

  public static rubricCriterionToJson(value: RubricCriterion): string {
    return JSON.stringify(uncast(value, r('RubricCriterion')), null, 2);
  }

  public static toRubricRating(json: string): RubricRating {
    return cast(JSON.parse(json), r('RubricRating'));
  }

  public static rubricRatingToJson(value: RubricRating): string {
    return JSON.stringify(uncast(value, r('RubricRating')), null, 2);
  }

  public static toSSOSettings(json: string): SSOSettings {
    return cast(JSON.parse(json), r('SSOSettings'));
  }

  public static sSOSettingsToJson(value: SSOSettings): string {
    return JSON.stringify(uncast(value, r('SSOSettings')), null, 2);
  }

  public static toScope(json: string): Scope {
    return cast(JSON.parse(json), r('Scope'));
  }

  public static scopeToJson(value: Scope): string {
    return JSON.stringify(uncast(value, r('Scope')), null, 2);
  }

  public static toScore(json: string): Score {
    return cast(JSON.parse(json), r('Score'));
  }

  public static scoreToJson(value: Score): string {
    return JSON.stringify(uncast(value, r('Score')), null, 2);
  }

  public static toScoreStatistic(json: string): ScoreStatistic {
    return cast(JSON.parse(json), r('ScoreStatistic'));
  }

  public static scoreStatisticToJson(value: ScoreStatistic): string {
    return JSON.stringify(uncast(value, r('ScoreStatistic')), null, 2);
  }

  public static toSection(json: string): Section {
    return cast(JSON.parse(json), r('Section'));
  }

  public static sectionToJson(value: Section): string {
    return JSON.stringify(uncast(value, r('Section')), null, 2);
  }

  public static toSectionAssignmentOverrideAttributes(json: string): SectionAssignmentOverrideAttributes {
    return cast(JSON.parse(json), r('SectionAssignmentOverrideAttributes'));
  }

  public static sectionAssignmentOverrideAttributesToJson(value: SectionAssignmentOverrideAttributes): string {
    return JSON.stringify(uncast(value, r('SectionAssignmentOverrideAttributes')), null, 2);
  }

  public static toSectionAttributes(json: string): SectionAttributes {
    return cast(JSON.parse(json), r('SectionAttributes'));
  }

  public static sectionAttributesToJson(value: SectionAttributes): string {
    return JSON.stringify(uncast(value, r('SectionAttributes')), null, 2);
  }

  public static toSharedBrandConfig(json: string): SharedBrandConfig {
    return cast(JSON.parse(json), r('SharedBrandConfig'));
  }

  public static sharedBrandConfigToJson(value: SharedBrandConfig): string {
    return JSON.stringify(uncast(value, r('SharedBrandConfig')), null, 2);
  }

  public static toSisAssignment(json: string): SisAssignment {
    return cast(JSON.parse(json), r('SisAssignment'));
  }

  public static sisAssignmentToJson(value: SisAssignment): string {
    return JSON.stringify(uncast(value, r('SisAssignment')), null, 2);
  }

  public static toSisImport(json: string): SisImport {
    return cast(JSON.parse(json), r('SisImport'));
  }

  public static sisImportToJson(value: SisImport): string {
    return JSON.stringify(uncast(value, r('SisImport')), null, 2);
  }

  public static toSisImportCounts(json: string): { [key: string]: number } {
    return cast(JSON.parse(json), m(0));
  }

  public static sisImportCountsToJson(value: { [key: string]: number }): string {
    return JSON.stringify(uncast(value, m(0)), null, 2);
  }

  public static toSisImportData(json: string): SisImportData {
    return cast(JSON.parse(json), r('SisImportData'));
  }

  public static sisImportDataToJson(value: SisImportData): string {
    return JSON.stringify(uncast(value, r('SisImportData')), null, 2);
  }

  public static toSisImportError(json: string): SisImportError {
    return cast(JSON.parse(json), r('SisImportError'));
  }

  public static sisImportErrorToJson(value: SisImportError): string {
    return JSON.stringify(uncast(value, r('SisImportError')), null, 2);
  }

  public static toSisImportStatistic(json: string): SisImportStatistic {
    return cast(JSON.parse(json), r('SisImportStatistic'));
  }

  public static sisImportStatisticToJson(value: SisImportStatistic): string {
    return JSON.stringify(uncast(value, r('SisImportStatistic')), null, 2);
  }

  public static toSisImportStatistics(json: string): { [key: string]: number | null } {
    return cast(JSON.parse(json), m(u(0, null)));
  }

  public static sisImportStatisticsToJson(value: { [key: string]: number | null }): string {
    return JSON.stringify(uncast(value, m(u(0, null))), null, 2);
  }

  public static toStudentAttributes(json: string): StudentAttributes {
    return cast(JSON.parse(json), r('StudentAttributes'));
  }

  public static studentAttributesToJson(value: StudentAttributes): string {
    return JSON.stringify(uncast(value, r('StudentAttributes')), null, 2);
  }

  public static toSubmission(json: string): Submission {
    return cast(JSON.parse(json), r('Submission'));
  }

  public static submissionToJson(value: Submission): string {
    return JSON.stringify(uncast(value, r('Submission')), null, 2);
  }

  public static toSubmissionComment(json: string): SubmissionComment {
    return cast(JSON.parse(json), r('SubmissionComment'));
  }

  public static submissionCommentToJson(value: SubmissionComment): string {
    return JSON.stringify(uncast(value, r('SubmissionComment')), null, 2);
  }

  public static toSubmissionHistory(json: string): SubmissionHistory {
    return cast(JSON.parse(json), r('SubmissionHistory'));
  }

  public static submissionHistoryToJson(value: SubmissionHistory): string {
    return JSON.stringify(uncast(value, r('SubmissionHistory')), null, 2);
  }

  public static toSubmissionVersion(json: string): SubmissionVersion {
    return cast(JSON.parse(json), r('SubmissionVersion'));
  }

  public static submissionVersionToJson(value: SubmissionVersion): string {
    return JSON.stringify(uncast(value, r('SubmissionVersion')), null, 2);
  }

  public static toTab(json: string): Tab {
    return cast(JSON.parse(json), r('Tab'));
  }

  public static tabToJson(value: Tab): string {
    return JSON.stringify(uncast(value, r('Tab')), null, 2);
  }

  public static toTerm(json: string): Term {
    return cast(JSON.parse(json), r('Term'));
  }

  public static termToJson(value: Term): string {
    return JSON.stringify(uncast(value, r('Term')), null, 2);
  }

  public static toTermsOfService(json: string): TermsOfService {
    return cast(JSON.parse(json), r('TermsOfService'));
  }

  public static termsOfServiceToJson(value: TermsOfService): string {
    return JSON.stringify(uncast(value, r('TermsOfService')), null, 2);
  }

  public static toToolSetting(json: string): ToolSetting {
    return cast(JSON.parse(json), r('ToolSetting'));
  }

  public static toolSettingToJson(value: ToolSetting): string {
    return JSON.stringify(uncast(value, r('ToolSetting')), null, 2);
  }

  public static toTurnitinSettings(json: string): TurnitinSettings {
    return cast(JSON.parse(json), r('TurnitinSettings'));
  }

  public static turnitinSettingsToJson(value: TurnitinSettings): string {
    return JSON.stringify(uncast(value, r('TurnitinSettings')), null, 2);
  }

  public static toUpdatedEventData(json: string): UpdatedEventData {
    return cast(JSON.parse(json), r('UpdatedEventData'));
  }

  public static updatedEventDataToJson(value: UpdatedEventData): string {
    return JSON.stringify(uncast(value, r('UpdatedEventData')), null, 2);
  }

  public static toUsageRights(json: string): UsageRights {
    return cast(JSON.parse(json), r('UsageRights'));
  }

  public static usageRightsToJson(value: UsageRights): string {
    return JSON.stringify(uncast(value, r('UsageRights')), null, 2);
  }

  public static toUser(json: string): User {
    return cast(JSON.parse(json), r('User'));
  }

  public static userToJson(value: User): string {
    return JSON.stringify(uncast(value, r('User')), null, 2);
  }

  public static toUserAssignmentOverrideAttributes(json: string): UserAssignmentOverrideAttributes {
    return cast(JSON.parse(json), r('UserAssignmentOverrideAttributes'));
  }

  public static userAssignmentOverrideAttributesToJson(value: UserAssignmentOverrideAttributes): string {
    return JSON.stringify(uncast(value, r('UserAssignmentOverrideAttributes')), null, 2);
  }

  public static toUserDisplay(json: string): UserDisplay {
    return cast(JSON.parse(json), r('UserDisplay'));
  }

  public static userDisplayToJson(value: UserDisplay): string {
    return JSON.stringify(uncast(value, r('UserDisplay')), null, 2);
  }

  public static toEPortfolio(json: string): EPortfolio {
    return cast(JSON.parse(json), r('EPortfolio'));
  }

  public static ePortfolioToJson(value: EPortfolio): string {
    return JSON.stringify(uncast(value, r('EPortfolio')), null, 2);
  }

  public static toEPortfolioPage(json: string): EPortfolioPage {
    return cast(JSON.parse(json), r('EPortfolioPage'));
  }

  public static ePortfolioPageToJson(value: EPortfolioPage): string {
    return JSON.stringify(uncast(value, r('EPortfolioPage')), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
    throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue('array', val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
        ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty('props')
          ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  Account: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'uuid', js: 'uuid', typ: '' },
      { json: 'parent_account_id', js: 'parent_account_id', typ: 0 },
      { json: 'root_account_id', js: 'root_account_id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
    ],
    false,
  ),
  AccountCalendar: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'parent_account_id', js: 'parent_account_id', typ: 0 },
      { json: 'root_account_id', js: 'root_account_id', typ: 0 },
      { json: 'visible', js: 'visible', typ: true },
      { json: 'sub_account_count', js: 'sub_account_count', typ: 0 },
      { json: 'asset_string', js: 'asset_string', typ: '' },
      { json: 'type', js: 'type', typ: '' },
      { json: 'calendar_event_url', js: 'calendar_event_url', typ: '' },
      { json: 'can_create_calendar_events', js: 'can_create_calendar_events', typ: true },
      { json: 'create_calendar_event_url', js: 'create_calendar_event_url', typ: '' },
      { json: 'new_calendar_event_url', js: 'new_calendar_event_url', typ: '' },
    ],
    false,
  ),
  AccountNotification: o(
    [
      { json: 'subject', js: 'subject', typ: '' },
      { json: 'message', js: 'message', typ: '' },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: Date },
      { json: 'icon', js: 'icon', typ: '' },
      { json: 'roles', js: 'roles', typ: a('') },
      { json: 'role_ids', js: 'role_ids', typ: a(0) },
    ],
    false,
  ),
  Admin: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'role', js: 'role', typ: '' },
      { json: 'user', js: 'user', typ: null },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
    ],
    false,
  ),
  AnonymousUserDisplay: o(
    [
      { json: 'anonymous_id', js: 'anonymous_id', typ: '' },
      { json: 'avatar_image_url', js: 'avatar_image_url', typ: '' },
      { json: 'display_name', js: 'display_name', typ: '' },
    ],
    false,
  ),
  Answer: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'answer_text', js: 'answer_text', typ: '' },
      { json: 'answer_weight', js: 'answer_weight', typ: 0 },
      { json: 'answer_comments', js: 'answer_comments', typ: '' },
      { json: 'text_after_answers', js: 'text_after_answers', typ: '' },
      { json: 'answer_match_left', js: 'answer_match_left', typ: '' },
      { json: 'answer_match_right', js: 'answer_match_right', typ: '' },
      { json: 'matching_answer_incorrect_matches', js: 'matching_answer_incorrect_matches', typ: '' },
      { json: 'numerical_answer_type', js: 'numerical_answer_type', typ: '' },
      { json: 'exact', js: 'exact', typ: 0 },
      { json: 'margin', js: 'margin', typ: 0 },
      { json: 'approximate', js: 'approximate', typ: 3.14 },
      { json: 'precision', js: 'precision', typ: 0 },
      { json: 'start', js: 'start', typ: 0 },
      { json: 'end', js: 'end', typ: 0 },
      { json: 'blank_id', js: 'blank_id', typ: 0 },
    ],
    false,
  ),
  AppointmentGroup: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: Date },
      { json: 'description', js: 'description', typ: '' },
      { json: 'location_name', js: 'location_name', typ: '' },
      { json: 'location_address', js: 'location_address', typ: '' },
      { json: 'participant_count', js: 'participant_count', typ: 0 },
      { json: 'reserved_times', js: 'reserved_times', typ: a(r('Term')) },
      { json: 'context_codes', js: 'context_codes', typ: a('') },
      { json: 'sub_context_codes', js: 'sub_context_codes', typ: a('') },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'requiring_action', js: 'requiring_action', typ: true },
      { json: 'appointments_count', js: 'appointments_count', typ: 0 },
      { json: 'appointments', js: 'appointments', typ: a('any') },
      { json: 'new_appointments', js: 'new_appointments', typ: a('any') },
      { json: 'max_appointments_per_participant', js: 'max_appointments_per_participant', typ: 0 },
      { json: 'min_appointments_per_participant', js: 'min_appointments_per_participant', typ: 0 },
      { json: 'participants_per_appointment', js: 'participants_per_appointment', typ: 0 },
      { json: 'participant_visibility', js: 'participant_visibility', typ: '' },
      { json: 'participant_type', js: 'participant_type', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
    ],
    false,
  ),
  Term: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: u(Date, null) },
      { json: 'name', js: 'name', typ: u(undefined, '') },
    ],
    false,
  ),
  Assessment: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'key', js: 'key', typ: '' },
      { json: 'title', js: 'title', typ: '' },
    ],
    false,
  ),
  Assignment: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'due_at', js: 'due_at', typ: Date },
      { json: 'lock_at', js: 'lock_at', typ: Date },
      { json: 'unlock_at', js: 'unlock_at', typ: Date },
      { json: 'has_overrides', js: 'has_overrides', typ: true },
      { json: 'all_dates', js: 'all_dates', typ: null },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'submissions_download_url', js: 'submissions_download_url', typ: '' },
      { json: 'assignment_group_id', js: 'assignment_group_id', typ: 0 },
      { json: 'due_date_required', js: 'due_date_required', typ: true },
      { json: 'allowed_extensions', js: 'allowed_extensions', typ: a('') },
      { json: 'max_name_length', js: 'max_name_length', typ: 0 },
      { json: 'turnitin_enabled', js: 'turnitin_enabled', typ: true },
      { json: 'vericite_enabled', js: 'vericite_enabled', typ: true },
      { json: 'turnitin_settings', js: 'turnitin_settings', typ: null },
      { json: 'grade_group_students_individually', js: 'grade_group_students_individually', typ: true },
      { json: 'external_tool_tag_attributes', js: 'external_tool_tag_attributes', typ: null },
      { json: 'peer_reviews', js: 'peer_reviews', typ: true },
      { json: 'automatic_peer_reviews', js: 'automatic_peer_reviews', typ: true },
      { json: 'peer_review_count', js: 'peer_review_count', typ: 0 },
      { json: 'peer_reviews_assign_at', js: 'peer_reviews_assign_at', typ: Date },
      { json: 'intra_group_peer_reviews', js: 'intra_group_peer_reviews', typ: true },
      { json: 'group_category_id', js: 'group_category_id', typ: 0 },
      { json: 'needs_grading_count', js: 'needs_grading_count', typ: 0 },
      { json: 'needs_grading_count_by_section', js: 'needs_grading_count_by_section', typ: a(r('NeedsGradingCount')) },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'post_to_sis', js: 'post_to_sis', typ: true },
      { json: 'integration_id', js: 'integration_id', typ: '' },
      { json: 'integration_data', js: 'integration_data', typ: r('IntegrationData') },
      { json: 'points_possible', js: 'points_possible', typ: 3.14 },
      { json: 'submission_types', js: 'submission_types', typ: a('') },
      { json: 'has_submitted_submissions', js: 'has_submitted_submissions', typ: true },
      { json: 'grading_type', js: 'grading_type', typ: '' },
      { json: 'grading_standard_id', js: 'grading_standard_id', typ: null },
      { json: 'published', js: 'published', typ: true },
      { json: 'unpublishable', js: 'unpublishable', typ: true },
      { json: 'only_visible_to_overrides', js: 'only_visible_to_overrides', typ: true },
      { json: 'locked_for_user', js: 'locked_for_user', typ: true },
      { json: 'lock_info', js: 'lock_info', typ: null },
      { json: 'lock_explanation', js: 'lock_explanation', typ: '' },
      { json: 'quiz_id', js: 'quiz_id', typ: 0 },
      { json: 'anonymous_submissions', js: 'anonymous_submissions', typ: true },
      { json: 'discussion_topic', js: 'discussion_topic', typ: null },
      { json: 'freeze_on_copy', js: 'freeze_on_copy', typ: true },
      { json: 'frozen', js: 'frozen', typ: true },
      { json: 'frozen_attributes', js: 'frozen_attributes', typ: a('') },
      { json: 'submission', js: 'submission', typ: null },
      { json: 'use_rubric_for_grading', js: 'use_rubric_for_grading', typ: true },
      { json: 'rubric_settings', js: 'rubric_settings', typ: r('RubricSettings') },
      { json: 'rubric', js: 'rubric', typ: null },
      { json: 'assignment_visibility', js: 'assignment_visibility', typ: a(0) },
      { json: 'overrides', js: 'overrides', typ: null },
      { json: 'omit_from_final_grade', js: 'omit_from_final_grade', typ: true },
      { json: 'moderated_grading', js: 'moderated_grading', typ: true },
      { json: 'grader_count', js: 'grader_count', typ: 0 },
      { json: 'final_grader_id', js: 'final_grader_id', typ: 0 },
      { json: 'grader_comments_visible_to_graders', js: 'grader_comments_visible_to_graders', typ: true },
      { json: 'graders_anonymous_to_graders', js: 'graders_anonymous_to_graders', typ: true },
      { json: 'grader_names_visible_to_final_grader', js: 'grader_names_visible_to_final_grader', typ: true },
      { json: 'anonymous_grading', js: 'anonymous_grading', typ: true },
      { json: 'allowed_attempts', js: 'allowed_attempts', typ: 0 },
      { json: 'post_manually', js: 'post_manually', typ: true },
      { json: 'score_statistics', js: 'score_statistics', typ: null },
      { json: 'can_submit', js: 'can_submit', typ: true },
      { json: 'annotatable_attachment_id', js: 'annotatable_attachment_id', typ: null },
      { json: 'anonymize_students', js: 'anonymize_students', typ: true },
      { json: 'require_lockdown_browser', js: 'require_lockdown_browser', typ: true },
      { json: 'important_dates', js: 'important_dates', typ: true },
      { json: 'muted', js: 'muted', typ: true },
    ],
    false,
  ),
  IntegrationData: o([{ json: '5678', js: '5678', typ: '' }], false),
  NeedsGradingCount: o(
    [
      { json: 'section_id', js: 'section_id', typ: '' },
      { json: 'needs_grading_count', js: 'needs_grading_count', typ: 0 },
    ],
    false,
  ),
  RubricSettings: o([{ json: 'points_possible', js: 'points_possible', typ: 0 }], false),
  UserAssignmentOverrideAttributes: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'base', js: 'base', typ: u(undefined, true) },
      { json: 'title', js: 'title', typ: '' },
      { json: 'due_at', js: 'due_at', typ: Date },
      { json: 'unlock_at', js: 'unlock_at', typ: u(Date, null) },
      { json: 'lock_at', js: 'lock_at', typ: Date },
      { json: 'students', js: 'students', typ: u(undefined, null) },
    ],
    false,
  ),
  AssignmentEvent: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: Date },
      { json: 'description', js: 'description', typ: '' },
      { json: 'context_code', js: 'context_code', typ: '' },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'all_day_date', js: 'all_day_date', typ: Date },
      { json: 'all_day', js: 'all_day', typ: true },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'assignment', js: 'assignment', typ: null },
      { json: 'assignment_overrides', js: 'assignment_overrides', typ: null },
      { json: 'important_dates', js: 'important_dates', typ: true },
    ],
    false,
  ),
  AssignmentExtension: o(
    [
      { json: 'assignment_id', js: 'assignment_id', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'extra_attempts', js: 'extra_attempts', typ: 0 },
    ],
    false,
  ),
  AssignmentGroup: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'group_weight', js: 'group_weight', typ: 0 },
      { json: 'sis_source_id', js: 'sis_source_id', typ: '' },
      { json: 'integration_data', js: 'integration_data', typ: r('IntegrationData') },
      { json: 'assignments', js: 'assignments', typ: a('any') },
      { json: 'rules', js: 'rules', typ: null },
    ],
    false,
  ),
  AssignmentGroupAttributes: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'group_weight', js: 'group_weight', typ: 0 },
      { json: 'sis_source_id', js: 'sis_source_id', typ: '' },
      { json: 'integration_data', js: 'integration_data', typ: r('IntegrationData') },
    ],
    false,
  ),
  AssignmentOverride: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'assignment_id', js: 'assignment_id', typ: 0 },
      { json: 'student_ids', js: 'student_ids', typ: a(0) },
      { json: 'group_id', js: 'group_id', typ: 0 },
      { json: 'course_section_id', js: 'course_section_id', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'due_at', js: 'due_at', typ: Date },
      { json: 'all_day', js: 'all_day', typ: true },
      { json: 'all_day_date', js: 'all_day_date', typ: Date },
      { json: 'unlock_at', js: 'unlock_at', typ: Date },
      { json: 'lock_at', js: 'lock_at', typ: Date },
    ],
    false,
  ),
  AuthenticationEvent: o(
    [
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'event_type', js: 'event_type', typ: '' },
      { json: 'pseudonym_id', js: 'pseudonym_id', typ: 0 },
      { json: 'account_id', js: 'account_id', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
    ],
    false,
  ),
  AuthenticationProvider: o(
    [
      { json: 'identifier_format', js: 'identifier_format', typ: '' },
      { json: 'auth_type', js: 'auth_type', typ: '' },
      { json: 'id', js: 'id', typ: 0 },
      { json: 'log_out_url', js: 'log_out_url', typ: '' },
      { json: 'log_in_url', js: 'log_in_url', typ: '' },
      { json: 'certificate_fingerprint', js: 'certificate_fingerprint', typ: '' },
      { json: 'requested_authn_context', js: 'requested_authn_context', typ: null },
      { json: 'auth_host', js: 'auth_host', typ: '' },
      { json: 'auth_filter', js: 'auth_filter', typ: '' },
      { json: 'auth_over_tls', js: 'auth_over_tls', typ: null },
      { json: 'auth_base', js: 'auth_base', typ: null },
      { json: 'auth_username', js: 'auth_username', typ: '' },
      { json: 'auth_port', js: 'auth_port', typ: null },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'idp_entity_id', js: 'idp_entity_id', typ: '' },
      { json: 'login_attribute', js: 'login_attribute', typ: '' },
      { json: 'sig_alg', js: 'sig_alg', typ: '' },
      { json: 'jit_provisioning', js: 'jit_provisioning', typ: null },
      { json: 'federated_attributes', js: 'federated_attributes', typ: null },
      { json: 'mfa_required', js: 'mfa_required', typ: null },
    ],
    false,
  ),
  Avatar: o(
    [
      { json: 'type', js: 'type', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'token', js: 'token', typ: '' },
      { json: 'display_name', js: 'display_name', typ: '' },
      { json: 'id', js: 'id', typ: 0 },
      { json: 'content-type', js: 'content-type', typ: '' },
      { json: 'filename', js: 'filename', typ: '' },
      { json: 'size', js: 'size', typ: 0 },
    ],
    false,
  ),
  BlackoutDate: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'start_date', js: 'start_date', typ: Date },
      { json: 'end_date', js: 'end_date', typ: Date },
      { json: 'event_title', js: 'event_title', typ: '' },
    ],
    false,
  ),
  BlueprintMigration: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'template_id', js: 'template_id', typ: 0 },
      { json: 'subscription_id', js: 'subscription_id', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'exports_started_at', js: 'exports_started_at', typ: Date },
      { json: 'imports_queued_at', js: 'imports_queued_at', typ: Date },
      { json: 'imports_completed_at', js: 'imports_completed_at', typ: Date },
      { json: 'comment', js: 'comment', typ: '' },
    ],
    false,
  ),
  BlueprintSubscription: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'template_id', js: 'template_id', typ: 0 },
      { json: 'blueprint_course', js: 'blueprint_course', typ: r('BlueprintCourse') },
    ],
    false,
  ),
  BlueprintCourse: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'course_code', js: 'course_code', typ: '' },
      { json: 'term_name', js: 'term_name', typ: '' },
    ],
    false,
  ),
  BlueprintTemplate: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'last_export_completed_at', js: 'last_export_completed_at', typ: Date },
      { json: 'associated_course_count', js: 'associated_course_count', typ: 0 },
      { json: 'latest_migration', js: 'latest_migration', typ: null },
    ],
    false,
  ),
  Bookmark: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'data', js: 'data', typ: r('Data') },
    ],
    false,
  ),
  Data: o([{ json: 'active_tab', js: 'active_tab', typ: 0 }], false),
  CalendarEvent: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: Date },
      { json: 'description', js: 'description', typ: '' },
      { json: 'location_name', js: 'location_name', typ: '' },
      { json: 'location_address', js: 'location_address', typ: '' },
      { json: 'context_code', js: 'context_code', typ: '' },
      { json: 'effective_context_code', js: 'effective_context_code', typ: null },
      { json: 'context_name', js: 'context_name', typ: '' },
      { json: 'all_context_codes', js: 'all_context_codes', typ: '' },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'hidden', js: 'hidden', typ: true },
      { json: 'parent_event_id', js: 'parent_event_id', typ: null },
      { json: 'child_events_count', js: 'child_events_count', typ: 0 },
      { json: 'child_events', js: 'child_events', typ: null },
      { json: 'url', js: 'url', typ: '' },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'all_day_date', js: 'all_day_date', typ: Date },
      { json: 'all_day', js: 'all_day', typ: true },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'appointment_group_id', js: 'appointment_group_id', typ: null },
      { json: 'appointment_group_url', js: 'appointment_group_url', typ: null },
      { json: 'own_reservation', js: 'own_reservation', typ: true },
      { json: 'reserve_url', js: 'reserve_url', typ: null },
      { json: 'reserved', js: 'reserved', typ: true },
      { json: 'participant_type', js: 'participant_type', typ: '' },
      { json: 'participants_per_appointment', js: 'participants_per_appointment', typ: null },
      { json: 'available_slots', js: 'available_slots', typ: null },
      { json: 'user', js: 'user', typ: null },
      { json: 'group', js: 'group', typ: null },
      { json: 'important_dates', js: 'important_dates', typ: true },
      { json: 'series_uuid', js: 'series_uuid', typ: null },
      { json: 'rrule', js: 'rrule', typ: null },
      { json: 'series_natural_language', js: 'series_natural_language', typ: null },
      { json: 'blackout_date', js: 'blackout_date', typ: true },
    ],
    false,
  ),
  CalendarLink: o([{ json: 'ics', js: 'ics', typ: '' }], false),
  ChangeRecord: o(
    [
      { json: 'asset_id', js: 'asset_id', typ: 0 },
      { json: 'asset_type', js: 'asset_type', typ: '' },
      { json: 'asset_name', js: 'asset_name', typ: '' },
      { json: 'change_type', js: 'change_type', typ: '' },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'locked', js: 'locked', typ: true },
      { json: 'exceptions', js: 'exceptions', typ: a(r('ExceptionRecord')) },
    ],
    false,
  ),
  ExceptionRecord: o(
    [
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'conflicting_changes', js: 'conflicting_changes', typ: a('') },
    ],
    false,
  ),
  Collaboration: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'collaboration_type', js: 'collaboration_type', typ: '' },
      { json: 'document_id', js: 'document_id', typ: '' },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'url', js: 'url', typ: null },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'description', js: 'description', typ: null },
      { json: 'title', js: 'title', typ: null },
      { json: 'type', js: 'type', typ: '' },
      { json: 'update_url', js: 'update_url', typ: null },
      { json: 'user_name', js: 'user_name', typ: '' },
    ],
    false,
  ),
  Collaborator: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'type', js: 'type', typ: '' },
      { json: 'name', js: 'name', typ: '' },
    ],
    false,
  ),
  ColumnDatum: o(
    [
      { json: 'content', js: 'content', typ: '' },
      { json: 'user_id', js: 'user_id', typ: 0 },
    ],
    false,
  ),
  CommMessage: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'sent_at', js: 'sent_at', typ: Date },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'from', js: 'from', typ: '' },
      { json: 'from_name', js: 'from_name', typ: '' },
      { json: 'to', js: 'to', typ: '' },
      { json: 'reply_to', js: 'reply_to', typ: '' },
      { json: 'subject', js: 'subject', typ: '' },
      { json: 'body', js: 'body', typ: '' },
      { json: 'html_body', js: 'html_body', typ: '' },
    ],
    false,
  ),
  CommunicationChannel: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'address', js: 'address', typ: '' },
      { json: 'type', js: 'type', typ: '' },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
    ],
    false,
  ),
  Conference: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'conference_type', js: 'conference_type', typ: '' },
      { json: 'conference_key', js: 'conference_key', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'duration', js: 'duration', typ: 0 },
      { json: 'ended_at', js: 'ended_at', typ: Date },
      { json: 'started_at', js: 'started_at', typ: Date },
      { json: 'title', js: 'title', typ: '' },
      { json: 'users', js: 'users', typ: a(0) },
      { json: 'has_advanced_settings', js: 'has_advanced_settings', typ: true },
      { json: 'long_running', js: 'long_running', typ: true },
      { json: 'user_settings', js: 'user_settings', typ: r('UserSettings') },
      { json: 'recordings', js: 'recordings', typ: null },
      { json: 'url', js: 'url', typ: null },
      { json: 'join_url', js: 'join_url', typ: null },
      { json: 'context_type', js: 'context_type', typ: null },
      { json: 'context_id', js: 'context_id', typ: null },
    ],
    false,
  ),
  UserSettings: o([{ json: 'record', js: 'record', typ: true }], false),
  ConferenceRecording: o(
    [
      { json: 'duration_minutes', js: 'duration_minutes', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'playback_url', js: 'playback_url', typ: '' },
    ],
    false,
  ),
  ContentDetails: o(
    [
      { json: 'points_possible', js: 'points_possible', typ: 0 },
      { json: 'due_at', js: 'due_at', typ: Date },
      { json: 'unlock_at', js: 'unlock_at', typ: Date },
      { json: 'lock_at', js: 'lock_at', typ: Date },
      { json: 'locked_for_user', js: 'locked_for_user', typ: true },
      { json: 'lock_explanation', js: 'lock_explanation', typ: '' },
      { json: 'lock_info', js: 'lock_info', typ: r('LockInfoClass') },
    ],
    false,
  ),
  LockInfoClass: o(
    [
      { json: 'asset_string', js: 'asset_string', typ: '' },
      { json: 'unlock_at', js: 'unlock_at', typ: Date },
      { json: 'lock_at', js: 'lock_at', typ: Date },
      { json: 'context_module', js: 'context_module', typ: r('ContextModule') },
    ],
    false,
  ),
  ContextModule: o([], false),
  EpubExport: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'export_type', js: 'export_type', typ: u(undefined, '') },
      { json: 'attachment', js: 'attachment', typ: r('Attachment') },
      { json: 'progress_url', js: 'progress_url', typ: '' },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
    ],
    false,
  ),
  Attachment: o([{ json: 'url', js: 'url', typ: '' }], false),
  ContentMigration: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'migration_type', js: 'migration_type', typ: '' },
      { json: 'migration_type_title', js: 'migration_type_title', typ: '' },
      { json: 'migration_issues_url', js: 'migration_issues_url', typ: '' },
      { json: 'attachment', js: 'attachment', typ: r('Attachment') },
      { json: 'progress_url', js: 'progress_url', typ: '' },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'started_at', js: 'started_at', typ: Date },
      { json: 'finished_at', js: 'finished_at', typ: Date },
      { json: 'pre_attachment', js: 'pre_attachment', typ: r('PreAttachment') },
    ],
    false,
  ),
  PreAttachment: o(
    [
      { json: 'upload_url', js: 'upload_url', typ: '' },
      { json: 'message', js: 'message', typ: '' },
      { json: 'upload_params', js: 'upload_params', typ: r('ContextModule') },
    ],
    false,
  ),
  ContentShare: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'content_type', js: 'content_type', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'sender', js: 'sender', typ: r('UserDisplay') },
      { json: 'receivers', js: 'receivers', typ: a(r('UserDisplay')) },
      { json: 'source_course', js: 'source_course', typ: r('SourceCourse') },
      { json: 'read_state', js: 'read_state', typ: '' },
      { json: 'content_export', js: 'content_export', typ: r('ContentExportClass') },
    ],
    false,
  ),
  ContentExportClass: o([{ json: 'id', js: 'id', typ: 0 }], false),
  UserDisplay: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'display_name', js: 'display_name', typ: u(undefined, '') },
      { json: 'avatar_image_url', js: 'avatar_image_url', typ: '' },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'short_name', js: 'short_name', typ: u(undefined, '') },
    ],
    false,
  ),
  SourceCourse: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
    ],
    false,
  ),
  Conversation: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'subject', js: 'subject', typ: '' },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'last_message', js: 'last_message', typ: '' },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'message_count', js: 'message_count', typ: 0 },
      { json: 'subscribed', js: 'subscribed', typ: true },
      { json: 'private', js: 'private', typ: true },
      { json: 'starred', js: 'starred', typ: true },
      { json: 'properties', js: 'properties', typ: null },
      { json: 'audience', js: 'audience', typ: null },
      { json: 'audience_contexts', js: 'audience_contexts', typ: null },
      { json: 'avatar_url', js: 'avatar_url', typ: '' },
      { json: 'participants', js: 'participants', typ: null },
      { json: 'visible', js: 'visible', typ: true },
      { json: 'context_name', js: 'context_name', typ: '' },
    ],
    false,
  ),
  ConversationParticipant: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'full_name', js: 'full_name', typ: '' },
      { json: 'avatar_url', js: 'avatar_url', typ: '' },
    ],
    false,
  ),
  Course: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'sis_course_id', js: 'sis_course_id', typ: null },
      { json: 'uuid', js: 'uuid', typ: '' },
      { json: 'integration_id', js: 'integration_id', typ: null },
      { json: 'sis_import_id', js: 'sis_import_id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'course_code', js: 'course_code', typ: '' },
      { json: 'original_name', js: 'original_name', typ: '' },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'account_id', js: 'account_id', typ: 0 },
      { json: 'root_account_id', js: 'root_account_id', typ: 0 },
      { json: 'enrollment_term_id', js: 'enrollment_term_id', typ: 0 },
      { json: 'grading_periods', js: 'grading_periods', typ: null },
      { json: 'grading_standard_id', js: 'grading_standard_id', typ: 0 },
      { json: 'grade_passback_setting', js: 'grade_passback_setting', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: Date },
      { json: 'locale', js: 'locale', typ: '' },
      { json: 'enrollments', js: 'enrollments', typ: null },
      { json: 'total_students', js: 'total_students', typ: 0 },
      { json: 'calendar', js: 'calendar', typ: null },
      { json: 'default_view', js: 'default_view', typ: '' },
      { json: 'syllabus_body', js: 'syllabus_body', typ: '' },
      { json: 'needs_grading_count', js: 'needs_grading_count', typ: 0 },
      { json: 'term', js: 'term', typ: null },
      { json: 'course_progress', js: 'course_progress', typ: null },
      { json: 'apply_assignment_group_weights', js: 'apply_assignment_group_weights', typ: true },
      { json: 'permissions', js: 'permissions', typ: r('CoursePermissions') },
      { json: 'is_public', js: 'is_public', typ: true },
      { json: 'is_public_to_auth_users', js: 'is_public_to_auth_users', typ: true },
      { json: 'public_syllabus', js: 'public_syllabus', typ: true },
      { json: 'public_syllabus_to_auth', js: 'public_syllabus_to_auth', typ: true },
      { json: 'public_description', js: 'public_description', typ: '' },
      { json: 'storage_quota_mb', js: 'storage_quota_mb', typ: 0 },
      { json: 'storage_quota_used_mb', js: 'storage_quota_used_mb', typ: 0 },
      { json: 'hide_final_grades', js: 'hide_final_grades', typ: true },
      { json: 'license', js: 'license', typ: '' },
      { json: 'allow_student_assignment_edits', js: 'allow_student_assignment_edits', typ: true },
      { json: 'allow_wiki_comments', js: 'allow_wiki_comments', typ: true },
      { json: 'allow_student_forum_attachments', js: 'allow_student_forum_attachments', typ: true },
      { json: 'open_enrollment', js: 'open_enrollment', typ: true },
      { json: 'self_enrollment', js: 'self_enrollment', typ: true },
      { json: 'restrict_enrollments_to_course_dates', js: 'restrict_enrollments_to_course_dates', typ: true },
      { json: 'course_format', js: 'course_format', typ: '' },
      { json: 'access_restricted_by_date', js: 'access_restricted_by_date', typ: true },
      { json: 'time_zone', js: 'time_zone', typ: '' },
      { json: 'blueprint', js: 'blueprint', typ: true },
      { json: 'blueprint_restrictions', js: 'blueprint_restrictions', typ: r('BlueprintRestriction') },
      {
        json: 'blueprint_restrictions_by_object_type',
        js: 'blueprint_restrictions_by_object_type',
        typ: r('BlueprintRestrictionsByObjectType'),
      },
      { json: 'template', js: 'template', typ: true },
    ],
    false,
  ),
  BlueprintRestriction: o(
    [
      { json: 'content', js: 'content', typ: true },
      { json: 'points', js: 'points', typ: true },
      { json: 'due_dates', js: 'due_dates', typ: true },
      { json: 'availability_dates', js: 'availability_dates', typ: true },
    ],
    false,
  ),
  BlueprintRestrictionsByObjectType: o(
    [
      { json: 'assignment', js: 'assignment', typ: r('AssignmentClass') },
      { json: 'wiki_page', js: 'wiki_page', typ: r('WikiPage') },
    ],
    false,
  ),
  AssignmentClass: o(
    [
      { json: 'content', js: 'content', typ: true },
      { json: 'points', js: 'points', typ: true },
    ],
    false,
  ),
  WikiPage: o([{ json: 'content', js: 'content', typ: true }], false),
  CoursePermissions: o(
    [
      { json: 'create_discussion_topic', js: 'create_discussion_topic', typ: true },
      { json: 'create_announcement', js: 'create_announcement', typ: true },
    ],
    false,
  ),
  CourseAttributes: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'sis_id', js: 'sis_id', typ: '' },
      { json: 'integration_id', js: 'integration_id', typ: '' },
    ],
    false,
  ),
  CourseEpubExport: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'epub_export', js: 'epub_export', typ: null },
    ],
    false,
  ),
  CourseEvent: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'event_type', js: 'event_type', typ: '' },
      { json: 'event_data', js: 'event_data', typ: '' },
      { json: 'event_source', js: 'event_source', typ: '' },
      { json: 'links', js: 'links', typ: r('CourseEventLinks') },
    ],
    false,
  ),
  CourseEventLinks: o(
    [
      { json: 'course', js: 'course', typ: '' },
      { json: 'user', js: 'user', typ: '' },
      { json: 'page_view', js: 'page_view', typ: '' },
    ],
    false,
  ),
  CourseEventLink: o(
    [
      { json: 'course', js: 'course', typ: 0 },
      { json: 'user', js: 'user', typ: 0 },
      { json: 'page_view', js: 'page_view', typ: '' },
      { json: 'copied_from', js: 'copied_from', typ: 0 },
      { json: 'copied_to', js: 'copied_to', typ: 0 },
      { json: 'sis_batch', js: 'sis_batch', typ: 0 },
    ],
    false,
  ),
  CourseNickname: o(
    [
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'nickname', js: 'nickname', typ: '' },
    ],
    false,
  ),
  CourseProgress: o(
    [
      { json: 'requirement_count', js: 'requirement_count', typ: 0 },
      { json: 'requirement_completed_count', js: 'requirement_completed_count', typ: 0 },
      { json: 'next_requirement_url', js: 'next_requirement_url', typ: '' },
      { json: 'completed_at', js: 'completed_at', typ: Date },
    ],
    false,
  ),
  QuizExtension: o(
    [
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'extra_attempts', js: 'extra_attempts', typ: 0 },
      { json: 'extra_time', js: 'extra_time', typ: 0 },
      { json: 'manually_unlocked', js: 'manually_unlocked', typ: true },
      { json: 'end_at', js: 'end_at', typ: Date },
      { json: 'quiz_id', js: 'quiz_id', typ: u(undefined, 0) },
    ],
    false,
  ),
  CreatedEventData: o(
    [
      { json: 'name', js: 'name', typ: a(u(null, '')) },
      { json: 'start_at', js: 'start_at', typ: a(u(Date, null)) },
      { json: 'conclude_at', js: 'conclude_at', typ: a(u(Date, null)) },
      { json: 'is_public', js: 'is_public', typ: a(u(true, null)) },
      { json: 'created_source', js: 'created_source', typ: '' },
    ],
    false,
  ),
  CustomColumn: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'teacher_notes', js: 'teacher_notes', typ: true },
      { json: 'title', js: 'title', typ: '' },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'hidden', js: 'hidden', typ: true },
      { json: 'read_only', js: 'read_only', typ: true },
    ],
    false,
  ),
  Day: o(
    [
      { json: 'date', js: 'date', typ: Date },
      { json: 'graders', js: 'graders', typ: a('any') },
    ],
    false,
  ),
  DeveloperKey: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'is_lti_key', js: 'is_lti_key', typ: true },
      { json: 'visible', js: 'visible', typ: true },
      { json: 'account_name', js: 'account_name', typ: '' },
      { json: 'public_jwk', js: 'public_jwk', typ: r('PublicJwk') },
      { json: 'vendor_code', js: 'vendor_code', typ: '' },
      { json: 'last_used_at', js: 'last_used_at', typ: Date },
      { json: 'access_token_count', js: 'access_token_count', typ: 0 },
      { json: 'redirect_uris', js: 'redirect_uris', typ: '' },
      { json: 'redirect_uri', js: 'redirect_uri', typ: '' },
      { json: 'api_key', js: 'api_key', typ: '' },
      { json: 'notes', js: 'notes', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'user_id', js: 'user_id', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'user_name', js: 'user_name', typ: '' },
      { json: 'email', js: 'email', typ: '' },
      { json: 'require_scopes', js: 'require_scopes', typ: true },
      { json: 'icon_url', js: 'icon_url', typ: '' },
      { json: 'scopes', js: 'scopes', typ: '' },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
    ],
    false,
  ),
  PublicJwk: o(
    [
      { json: 'kty', js: 'kty', typ: '' },
      { json: 'e', js: 'e', typ: '' },
      { json: 'n', js: 'n', typ: '' },
      { json: 'alg', js: 'alg', typ: '' },
      { json: 'use', js: 'use', typ: '' },
      { json: 'kid', js: 'kid', typ: '' },
    ],
    false,
  ),
  DiscussionTopic: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'message', js: 'message', typ: '' },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'posted_at', js: 'posted_at', typ: Date },
      { json: 'last_reply_at', js: 'last_reply_at', typ: Date },
      { json: 'require_initial_post', js: 'require_initial_post', typ: true },
      { json: 'user_can_see_posts', js: 'user_can_see_posts', typ: true },
      { json: 'discussion_subentry_count', js: 'discussion_subentry_count', typ: 0 },
      { json: 'read_state', js: 'read_state', typ: '' },
      { json: 'unread_count', js: 'unread_count', typ: 0 },
      { json: 'subscribed', js: 'subscribed', typ: true },
      { json: 'subscription_hold', js: 'subscription_hold', typ: '' },
      { json: 'assignment_id', js: 'assignment_id', typ: null },
      { json: 'delayed_post_at', js: 'delayed_post_at', typ: null },
      { json: 'published', js: 'published', typ: true },
      { json: 'lock_at', js: 'lock_at', typ: null },
      { json: 'locked', js: 'locked', typ: true },
      { json: 'pinned', js: 'pinned', typ: true },
      { json: 'locked_for_user', js: 'locked_for_user', typ: true },
      { json: 'lock_info', js: 'lock_info', typ: null },
      { json: 'lock_explanation', js: 'lock_explanation', typ: '' },
      { json: 'user_name', js: 'user_name', typ: '' },
      { json: 'topic_children', js: 'topic_children', typ: a(0) },
      { json: 'group_topic_children', js: 'group_topic_children', typ: a(r('GroupTopicChild')) },
      { json: 'root_topic_id', js: 'root_topic_id', typ: null },
      { json: 'podcast_url', js: 'podcast_url', typ: '' },
      { json: 'discussion_type', js: 'discussion_type', typ: '' },
      { json: 'group_category_id', js: 'group_category_id', typ: null },
      { json: 'attachments', js: 'attachments', typ: null },
      { json: 'permissions', js: 'permissions', typ: r('DiscussionTopicPermissions') },
      { json: 'allow_rating', js: 'allow_rating', typ: true },
      { json: 'only_graders_can_rate', js: 'only_graders_can_rate', typ: true },
      { json: 'sort_by_rating', js: 'sort_by_rating', typ: true },
    ],
    false,
  ),
  GroupTopicChild: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'group_id', js: 'group_id', typ: 0 },
    ],
    false,
  ),
  DiscussionTopicPermissions: o([{ json: 'attach', js: 'attach', typ: true }], false),
  Enrollment: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'sis_course_id', js: 'sis_course_id', typ: '' },
      { json: 'course_integration_id', js: 'course_integration_id', typ: '' },
      { json: 'course_section_id', js: 'course_section_id', typ: 0 },
      { json: 'section_integration_id', js: 'section_integration_id', typ: '' },
      { json: 'sis_account_id', js: 'sis_account_id', typ: '' },
      { json: 'sis_section_id', js: 'sis_section_id', typ: '' },
      { json: 'sis_user_id', js: 'sis_user_id', typ: '' },
      { json: 'enrollment_state', js: 'enrollment_state', typ: '' },
      { json: 'limit_privileges_to_course_section', js: 'limit_privileges_to_course_section', typ: true },
      { json: 'sis_import_id', js: 'sis_import_id', typ: 0 },
      { json: 'root_account_id', js: 'root_account_id', typ: 0 },
      { json: 'type', js: 'type', typ: '' },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'associated_user_id', js: 'associated_user_id', typ: null },
      { json: 'role', js: 'role', typ: '' },
      { json: 'role_id', js: 'role_id', typ: 0 },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: Date },
      { json: 'last_activity_at', js: 'last_activity_at', typ: Date },
      { json: 'last_attended_at', js: 'last_attended_at', typ: Date },
      { json: 'total_activity_time', js: 'total_activity_time', typ: 0 },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'grades', js: 'grades', typ: r('Grades') },
      { json: 'user', js: 'user', typ: r('UserClass') },
      { json: 'override_grade', js: 'override_grade', typ: '' },
      { json: 'override_score', js: 'override_score', typ: 3.14 },
      { json: 'unposted_current_grade', js: 'unposted_current_grade', typ: '' },
      { json: 'unposted_final_grade', js: 'unposted_final_grade', typ: '' },
      { json: 'unposted_current_score', js: 'unposted_current_score', typ: '' },
      { json: 'unposted_final_score', js: 'unposted_final_score', typ: '' },
      { json: 'has_grading_periods', js: 'has_grading_periods', typ: true },
      { json: 'totals_for_all_grading_periods_option', js: 'totals_for_all_grading_periods_option', typ: true },
      { json: 'current_grading_period_title', js: 'current_grading_period_title', typ: '' },
      { json: 'current_grading_period_id', js: 'current_grading_period_id', typ: 0 },
      { json: 'current_period_override_grade', js: 'current_period_override_grade', typ: '' },
      { json: 'current_period_override_score', js: 'current_period_override_score', typ: 3.14 },
      { json: 'current_period_unposted_current_score', js: 'current_period_unposted_current_score', typ: 3.14 },
      { json: 'current_period_unposted_final_score', js: 'current_period_unposted_final_score', typ: 3.14 },
      { json: 'current_period_unposted_current_grade', js: 'current_period_unposted_current_grade', typ: '' },
      { json: 'current_period_unposted_final_grade', js: 'current_period_unposted_final_grade', typ: '' },
    ],
    false,
  ),
  Grades: o(
    [
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'current_score', js: 'current_score', typ: 0 },
      { json: 'current_grade', js: 'current_grade', typ: null },
      { json: 'final_score', js: 'final_score', typ: 3.14 },
      { json: 'final_grade', js: 'final_grade', typ: null },
    ],
    false,
  ),
  UserClass: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'sortable_name', js: 'sortable_name', typ: '' },
      { json: 'short_name', js: 'short_name', typ: '' },
    ],
    false,
  ),
  EnrollmentTerm: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'sis_term_id', js: 'sis_term_id', typ: '' },
      { json: 'sis_import_id', js: 'sis_import_id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: Date },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'overrides', js: 'overrides', typ: r('Overrides') },
      { json: 'course_count', js: 'course_count', typ: 0 },
    ],
    false,
  ),
  Overrides: o([{ json: 'StudentEnrollment', js: 'StudentEnrollment', typ: r('StudentEnrollment') }], false),
  StudentEnrollment: o(
    [
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: '' },
    ],
    false,
  ),
  EnrollmentTermsList: o([{ json: 'enrollment_terms', js: 'enrollment_terms', typ: a('any') }], false),
  ErrorReport: o(
    [
      { json: 'subject', js: 'subject', typ: '' },
      { json: 'comments', js: 'comments', typ: '' },
      { json: 'user_perceived_severity', js: 'user_perceived_severity', typ: '' },
      { json: 'email', js: 'email', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'context_asset_string', js: 'context_asset_string', typ: '' },
      { json: 'user_roles', js: 'user_roles', typ: '' },
    ],
    false,
  ),
  ExternalFeed: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'display_name', js: 'display_name', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'header_match', js: 'header_match', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'verbosity', js: 'verbosity', typ: '' },
    ],
    false,
  ),
  ExternalToolTagAttributes: o(
    [
      { json: 'url', js: 'url', typ: '' },
      { json: 'new_tab', js: 'new_tab', typ: true },
      { json: 'resource_link_id', js: 'resource_link_id', typ: '' },
    ],
    false,
  ),
  Favorite: o(
    [
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'context_type', js: 'context_type', typ: '' },
    ],
    false,
  ),
  Feature: o(
    [
      { json: 'feature', js: 'feature', typ: '' },
      { json: 'display_name', js: 'display_name', typ: '' },
      { json: 'applies_to', js: 'applies_to', typ: '' },
      { json: 'feature_flag', js: 'feature_flag', typ: r('FeatureFlagClass') },
      { json: 'root_opt_in', js: 'root_opt_in', typ: true },
      { json: 'beta', js: 'beta', typ: true },
      { json: 'autoexpand', js: 'autoexpand', typ: true },
      { json: 'release_notes_url', js: 'release_notes_url', typ: '' },
    ],
    false,
  ),
  FeatureFlagClass: o(
    [
      { json: 'feature', js: 'feature', typ: '' },
      { json: 'state', js: 'state', typ: '' },
    ],
    false,
  ),
  FeatureFlag: o(
    [
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'feature', js: 'feature', typ: '' },
      { json: 'state', js: 'state', typ: '' },
      { json: 'locked', js: 'locked', typ: true },
    ],
    false,
  ),
  FederatedAttributeConfig: o(
    [
      { json: 'attribute', js: 'attribute', typ: '' },
      { json: 'provisioning_only', js: 'provisioning_only', typ: true },
    ],
    false,
  ),
  FederatedAttributesConfig: o(
    [
      { json: 'admin_roles', js: 'admin_roles', typ: null },
      { json: 'display_name', js: 'display_name', typ: null },
      { json: 'email', js: 'email', typ: null },
      { json: 'given_name', js: 'given_name', typ: null },
      { json: 'integration_id', js: 'integration_id', typ: null },
      { json: 'locale', js: 'locale', typ: null },
      { json: 'name', js: 'name', typ: null },
      { json: 'sis_user_id', js: 'sis_user_id', typ: null },
      { json: 'sortable_name', js: 'sortable_name', typ: null },
      { json: 'surname', js: 'surname', typ: null },
      { json: 'timezone', js: 'timezone', typ: null },
    ],
    false,
  ),
  File: o(
    [
      { json: 'size', js: 'size', typ: 0 },
      { json: 'content-type', js: 'content-type', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'id', js: 'id', typ: 0 },
      { json: 'display_name', js: 'display_name', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
    ],
    false,
  ),
  FileAttachment: o(
    [
      { json: 'content-type', js: 'content-type', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'filename', js: 'filename', typ: '' },
      { json: 'display_name', js: 'display_name', typ: '' },
    ],
    false,
  ),
  Folder: o(
    [
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'files_count', js: 'files_count', typ: 0 },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'folders_url', js: 'folders_url', typ: '' },
      { json: 'files_url', js: 'files_url', typ: '' },
      { json: 'full_name', js: 'full_name', typ: '' },
      { json: 'lock_at', js: 'lock_at', typ: Date },
      { json: 'id', js: 'id', typ: 0 },
      { json: 'folders_count', js: 'folders_count', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'parent_folder_id', js: 'parent_folder_id', typ: 0 },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'unlock_at', js: 'unlock_at', typ: null },
      { json: 'hidden', js: 'hidden', typ: true },
      { json: 'hidden_for_user', js: 'hidden_for_user', typ: true },
      { json: 'locked', js: 'locked', typ: true },
      { json: 'locked_for_user', js: 'locked_for_user', typ: true },
      { json: 'for_submissions', js: 'for_submissions', typ: true },
    ],
    false,
  ),
  Grade: o(
    [
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'current_grade', js: 'current_grade', typ: '' },
      { json: 'final_grade', js: 'final_grade', typ: '' },
      { json: 'current_score', js: 'current_score', typ: '' },
      { json: 'final_score', js: 'final_score', typ: '' },
      { json: 'current_points', js: 'current_points', typ: 0 },
      { json: 'unposted_current_grade', js: 'unposted_current_grade', typ: '' },
      { json: 'unposted_final_grade', js: 'unposted_final_grade', typ: '' },
      { json: 'unposted_current_score', js: 'unposted_current_score', typ: '' },
      { json: 'unposted_final_score', js: 'unposted_final_score', typ: '' },
      { json: 'unposted_current_points', js: 'unposted_current_points', typ: 0 },
    ],
    false,
  ),
  GradeChangeEvent: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'event_type', js: 'event_type', typ: '' },
      { json: 'excused_after', js: 'excused_after', typ: true },
      { json: 'excused_before', js: 'excused_before', typ: true },
      { json: 'grade_after', js: 'grade_after', typ: '' },
      { json: 'grade_before', js: 'grade_before', typ: '' },
      { json: 'graded_anonymously', js: 'graded_anonymously', typ: true },
      { json: 'version_number', js: 'version_number', typ: '' },
      { json: 'request_id', js: 'request_id', typ: '' },
      { json: 'links', js: 'links', typ: null },
    ],
    false,
  ),
  GradeChangeEventLinks: o(
    [
      { json: 'assignment', js: 'assignment', typ: 0 },
      { json: 'course', js: 'course', typ: 0 },
      { json: 'student', js: 'student', typ: 0 },
      { json: 'grader', js: 'grader', typ: 0 },
      { json: 'page_view', js: 'page_view', typ: '' },
    ],
    false,
  ),
  Grader: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'assignments', js: 'assignments', typ: a(0) },
    ],
    false,
  ),
  GradingPeriod: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'start_date', js: 'start_date', typ: Date },
      { json: 'end_date', js: 'end_date', typ: Date },
      { json: 'close_date', js: 'close_date', typ: Date },
      { json: 'weight', js: 'weight', typ: 3.14 },
      { json: 'is_closed', js: 'is_closed', typ: true },
    ],
    false,
  ),
  GradingPeriodSets: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'weighted', js: 'weighted', typ: true },
      { json: 'display_totals_for_all_grading_periods', js: 'display_totals_for_all_grading_periods', typ: true },
    ],
    false,
  ),
  GradingRules: o(
    [
      { json: 'drop_lowest', js: 'drop_lowest', typ: 0 },
      { json: 'drop_highest', js: 'drop_highest', typ: 0 },
      { json: 'never_drop', js: 'never_drop', typ: a(0) },
    ],
    false,
  ),
  GradingStandard: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'id', js: 'id', typ: 0 },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'grading_scheme', js: 'grading_scheme', typ: a(r('GradingSchemeEntry')) },
    ],
    false,
  ),
  GradingSchemeEntry: o(
    [
      { json: 'name', js: 'name', typ: '' },
      { json: 'value', js: 'value', typ: 3.14 },
    ],
    false,
  ),
  Group: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'description', js: 'description', typ: null },
      { json: 'is_public', js: 'is_public', typ: true },
      { json: 'followed_by_user', js: 'followed_by_user', typ: true },
      { json: 'join_level', js: 'join_level', typ: '' },
      { json: 'members_count', js: 'members_count', typ: 0 },
      { json: 'avatar_url', js: 'avatar_url', typ: '' },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'role', js: 'role', typ: null },
      { json: 'group_category_id', js: 'group_category_id', typ: 0 },
      { json: 'sis_group_id', js: 'sis_group_id', typ: '' },
      { json: 'sis_import_id', js: 'sis_import_id', typ: 0 },
      { json: 'storage_quota_mb', js: 'storage_quota_mb', typ: 0 },
      { json: 'permissions', js: 'permissions', typ: r('CoursePermissions') },
      { json: 'users', js: 'users', typ: null },
    ],
    false,
  ),
  GroupCategory: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'role', js: 'role', typ: '' },
      { json: 'self_signup', js: 'self_signup', typ: null },
      { json: 'auto_leader', js: 'auto_leader', typ: null },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'account_id', js: 'account_id', typ: 0 },
      { json: 'group_limit', js: 'group_limit', typ: null },
      { json: 'sis_group_category_id', js: 'sis_group_category_id', typ: null },
      { json: 'sis_import_id', js: 'sis_import_id', typ: null },
      { json: 'progress', js: 'progress', typ: null },
    ],
    false,
  ),
  GroupMembership: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'group_id', js: 'group_id', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'moderator', js: 'moderator', typ: true },
      { json: 'just_created', js: 'just_created', typ: true },
      { json: 'sis_import_id', js: 'sis_import_id', typ: 0 },
    ],
    false,
  ),
  HelpLink: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'text', js: 'text', typ: '' },
      { json: 'subtext', js: 'subtext', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'type', js: 'type', typ: '' },
      { json: 'available_to', js: 'available_to', typ: a('') },
    ],
    false,
  ),
  HelpLinks: o(
    [
      { json: 'help_link_name', js: 'help_link_name', typ: '' },
      { json: 'help_link_icon', js: 'help_link_icon', typ: '' },
      { json: 'custom_help_links', js: 'custom_help_links', typ: a(r('CustomHelpLinkElement')) },
      { json: 'default_help_links', js: 'default_help_links', typ: a(r('CustomHelpLinkElement')) },
    ],
    false,
  ),
  CustomHelpLinkElement: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'text', js: 'text', typ: '' },
      { json: 'subtext', js: 'subtext', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'type', js: 'type', typ: '' },
      { json: 'available_to', js: 'available_to', typ: a('') },
      { json: 'is_featured', js: 'is_featured', typ: true },
      { json: 'is_new', js: 'is_new', typ: true },
      { json: 'feature_headline', js: 'feature_headline', typ: '' },
    ],
    false,
  ),
  HistoryEntry: o(
    [
      { json: 'asset_code', js: 'asset_code', typ: '' },
      { json: 'asset_name', js: 'asset_name', typ: '' },
      { json: 'asset_icon', js: 'asset_icon', typ: '' },
      { json: 'asset_readable_category', js: 'asset_readable_category', typ: '' },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'context_name', js: 'context_name', typ: '' },
      { json: 'visited_url', js: 'visited_url', typ: '' },
      { json: 'visited_at', js: 'visited_at', typ: Date },
      { json: 'interaction_seconds', js: 'interaction_seconds', typ: 0 },
    ],
    false,
  ),
  Jwt: o([{ json: 'token', js: 'token', typ: '' }], false),
  JSONAPIPagination: o(
    [
      { json: 'per_page', js: 'per_page', typ: r('Count') },
      { json: 'page', js: 'page', typ: r('Count') },
      { json: 'template', js: 'template', typ: r('Template') },
      { json: 'page_count', js: 'page_count', typ: r('Count') },
      { json: 'count', js: 'count', typ: r('Count') },
    ],
    false,
  ),
  Count: o(
    [
      { json: 'type', js: 'type', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'example', js: 'example', typ: 0 },
    ],
    false,
  ),
  Template: o(
    [
      { json: 'type', js: 'type', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'example', js: 'example', typ: '' },
    ],
    false,
  ),
  LatePolicy: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'missing_submission_deduction_enabled', js: 'missing_submission_deduction_enabled', typ: true },
      { json: 'missing_submission_deduction', js: 'missing_submission_deduction', typ: 3.14 },
      { json: 'late_submission_deduction_enabled', js: 'late_submission_deduction_enabled', typ: true },
      { json: 'late_submission_deduction', js: 'late_submission_deduction', typ: 3.14 },
      { json: 'late_submission_interval', js: 'late_submission_interval', typ: '' },
      { json: 'late_submission_minimum_percent_enabled', js: 'late_submission_minimum_percent_enabled', typ: true },
      { json: 'late_submission_minimum_percent', js: 'late_submission_minimum_percent', typ: 3.14 },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
    ],
    false,
  ),
  License: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'url', js: 'url', typ: '' },
    ],
    false,
  ),
  LineItem: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'scoreMaximum', js: 'scoreMaximum', typ: 0 },
      { json: 'label', js: 'label', typ: '' },
      { json: 'tag', js: 'tag', typ: '' },
      { json: 'resourceId', js: 'resourceId', typ: '' },
      { json: 'resourceLinkId', js: 'resourceLinkId', typ: '' },
      {
        json: 'https://canvas.instructure.com/lti/submission_type',
        js: 'https://canvas.instructure.com/lti/submission_type',
        typ: r('HTTPSCanvasInstructureCOMLtiSubmissionType'),
      },
      {
        json: 'https://canvas.instructure.com/lti/launch_url',
        js: 'https://canvas.instructure.com/lti/launch_url',
        typ: '',
      },
    ],
    false,
  ),
  HTTPSCanvasInstructureCOMLtiSubmissionType: o(
    [
      { json: 'type', js: 'type', typ: '' },
      { json: 'external_tool_url', js: 'external_tool_url', typ: '' },
    ],
    false,
  ),
  LockInfo: o(
    [
      { json: 'asset_string', js: 'asset_string', typ: '' },
      { json: 'unlock_at', js: 'unlock_at', typ: Date },
      { json: 'lock_at', js: 'lock_at', typ: Date },
      { json: 'context_module', js: 'context_module', typ: '' },
      { json: 'manually_locked', js: 'manually_locked', typ: true },
    ],
    false,
  ),
  LtiAssignment: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'points_possible', js: 'points_possible', typ: 0 },
      { json: 'due_at', js: 'due_at', typ: Date },
      { json: 'lti_id', js: 'lti_id', typ: '' },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'lti_course_id', js: 'lti_course_id', typ: '' },
    ],
    false,
  ),
  MediaComment: o(
    [
      { json: 'content-type', js: 'content-type', typ: '' },
      { json: 'display_name', js: 'display_name', typ: '' },
      { json: 'media_id', js: 'media_id', typ: '' },
      { json: 'media_type', js: 'media_type', typ: '' },
      { json: 'url', js: 'url', typ: '' },
    ],
    false,
  ),
  MediaObject: o(
    [
      { json: 'can_add_captions', js: 'can_add_captions', typ: true },
      { json: 'user_entered_title', js: 'user_entered_title', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'media_id', js: 'media_id', typ: '' },
      { json: 'media_type', js: 'media_type', typ: '' },
      { json: 'media_tracks', js: 'media_tracks', typ: a(r('MediaTrackElement')) },
      { json: 'media_sources', js: 'media_sources', typ: a(r('MediaSource')) },
    ],
    false,
  ),
  MediaSource: o(
    [
      { json: 'height', js: 'height', typ: '' },
      { json: 'width', js: 'width', typ: '' },
      { json: 'content_type', js: 'content_type', typ: '' },
      { json: 'containerFormat', js: 'containerFormat', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'bitrate', js: 'bitrate', typ: '' },
      { json: 'size', js: 'size', typ: '' },
      { json: 'isOriginal', js: 'isOriginal', typ: '' },
      { json: 'fileExt', js: 'fileExt', typ: '' },
    ],
    false,
  ),
  MediaTrackElement: o(
    [
      { json: 'kind', js: 'kind', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'url', js: 'url', typ: '' },
      { json: 'id', js: 'id', typ: 0 },
      { json: 'locale', js: 'locale', typ: '' },
    ],
    false,
  ),
  MediaTrack: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'media_object_id', js: 'media_object_id', typ: 0 },
      { json: 'kind', js: 'kind', typ: '' },
      { json: 'locale', js: 'locale', typ: '' },
      { json: 'content', js: 'content', typ: '' },
      { json: 'created_at', js: 'created_at', typ: '' },
      { json: 'updated_at', js: 'updated_at', typ: '' },
      { json: 'webvtt_content', js: 'webvtt_content', typ: '' },
    ],
    false,
  ),
  MigrationIssue: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'content_migration_url', js: 'content_migration_url', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'fix_issue_html_url', js: 'fix_issue_html_url', typ: '' },
      { json: 'issue_type', js: 'issue_type', typ: '' },
      { json: 'error_report_html_url', js: 'error_report_html_url', typ: '' },
      { json: 'error_message', js: 'error_message', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
    ],
    false,
  ),
  Migrator: o(
    [
      { json: 'type', js: 'type', typ: '' },
      { json: 'requires_file_upload', js: 'requires_file_upload', typ: true },
      { json: 'name', js: 'name', typ: '' },
      { json: 'required_settings', js: 'required_settings', typ: a('') },
    ],
    false,
  ),
  Module: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'unlock_at', js: 'unlock_at', typ: Date },
      { json: 'require_sequential_progress', js: 'require_sequential_progress', typ: true },
      { json: 'prerequisite_module_ids', js: 'prerequisite_module_ids', typ: a(0) },
      { json: 'items_count', js: 'items_count', typ: 0 },
      { json: 'items_url', js: 'items_url', typ: '' },
      { json: 'items', js: 'items', typ: null },
      { json: 'state', js: 'state', typ: '' },
      { json: 'completed_at', js: 'completed_at', typ: null },
      { json: 'publish_final_grade', js: 'publish_final_grade', typ: null },
      { json: 'published', js: 'published', typ: true },
    ],
    false,
  ),
  ModuleItem: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'module_id', js: 'module_id', typ: 0 },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'indent', js: 'indent', typ: 0 },
      { json: 'type', js: 'type', typ: '' },
      { json: 'content_id', js: 'content_id', typ: 0 },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'page_url', js: 'page_url', typ: '' },
      { json: 'external_url', js: 'external_url', typ: '' },
      { json: 'new_tab', js: 'new_tab', typ: true },
      { json: 'completion_requirement', js: 'completion_requirement', typ: r('CompletionRequirement') },
      { json: 'content_details', js: 'content_details', typ: r('SectionAssignmentOverrideAttributes') },
      { json: 'published', js: 'published', typ: true },
    ],
    false,
  ),
  CompletionRequirement: o(
    [
      { json: 'type', js: 'type', typ: '' },
      { json: 'min_score', js: 'min_score', typ: 0 },
      { json: 'completed', js: 'completed', typ: true },
    ],
    false,
  ),
  SectionAssignmentOverrideAttributes: o(
    [
      { json: 'points_possible', js: 'points_possible', typ: u(undefined, 0) },
      { json: 'due_at', js: 'due_at', typ: Date },
      { json: 'unlock_at', js: 'unlock_at', typ: Date },
      { json: 'lock_at', js: 'lock_at', typ: Date },
      { json: 'override_title', js: 'override_title', typ: u(undefined, '') },
    ],
    false,
  ),
  ModuleItemSequence: o(
    [
      { json: 'items', js: 'items', typ: a(r('ModuleItemSequenceNode')) },
      { json: 'modules', js: 'modules', typ: a(r('SourceCourse')) },
    ],
    false,
  ),
  ModuleItemSequenceNode: o(
    [
      { json: 'prev', js: 'prev', typ: null },
      { json: 'current', js: 'current', typ: r('Current') },
      { json: 'next', js: 'next', typ: r('Current') },
      { json: 'mastery_path', js: 'mastery_path', typ: r('MasteryPath') },
    ],
    false,
  ),
  Current: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'module_id', js: 'module_id', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'type', js: 'type', typ: '' },
    ],
    false,
  ),
  MasteryPath: o(
    [
      { json: 'locked', js: 'locked', typ: true },
      { json: 'assignment_sets', js: 'assignment_sets', typ: a('any') },
      { json: 'selected_set_id', js: 'selected_set_id', typ: null },
      { json: 'awaiting_choice', js: 'awaiting_choice', typ: true },
      { json: 'still_processing', js: 'still_processing', typ: true },
      { json: 'modules_url', js: 'modules_url', typ: '' },
      { json: 'choose_url', js: 'choose_url', typ: '' },
      { json: 'modules_tab_disabled', js: 'modules_tab_disabled', typ: true },
    ],
    false,
  ),
  NamesAndRoleMemberships: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'context', js: 'context', typ: r('NamesAndRoleContext') },
      { json: 'members', js: 'members', typ: a(r('NamesAndRoleMembership')) },
    ],
    false,
  ),
  NamesAndRoleContext: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'label', js: 'label', typ: '' },
      { json: 'title', js: 'title', typ: '' },
    ],
    false,
  ),
  NamesAndRoleMembership: o(
    [
      { json: 'status', js: 'status', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'picture', js: 'picture', typ: '' },
      { json: 'given_name', js: 'given_name', typ: '' },
      { json: 'family_name', js: 'family_name', typ: '' },
      { json: 'email', js: 'email', typ: '' },
      { json: 'lis_person_sourcedid', js: 'lis_person_sourcedid', typ: '' },
      { json: 'user_id', js: 'user_id', typ: '' },
      { json: 'roles', js: 'roles', typ: a('') },
      { json: 'message', js: 'message', typ: a(r('NamesAndRoleMessage')) },
    ],
    false,
  ),
  NamesAndRoleMessage: o(
    [
      {
        json: 'https://purl.imsglobal.org/spec/lti/claim/message_type',
        js: 'https://purl.imsglobal.org/spec/lti/claim/message_type',
        typ: '',
      },
      { json: 'locale', js: 'locale', typ: '' },
      { json: 'https://www.instructure.com/canvas_user_id', js: 'https://www.instructure.com/canvas_user_id', typ: 0 },
      {
        json: 'https://www.instructure.com/canvas_user_login_id',
        js: 'https://www.instructure.com/canvas_user_login_id',
        typ: '',
      },
      {
        json: 'https://purl.imsglobal.org/spec/lti/claim/custom',
        js: 'https://purl.imsglobal.org/spec/lti/claim/custom',
        typ: r('HTTPSPurlImsglobalOrgSpecLtiClaimCustom'),
      },
    ],
    false,
  ),
  HTTPSPurlImsglobalOrgSpecLtiClaimCustom: o(
    [
      { json: 'message_locale', js: 'message_locale', typ: '' },
      { json: 'person_address_timezone', js: 'person_address_timezone', typ: '' },
    ],
    false,
  ),
  NotificationPreference: o(
    [
      { json: 'href', js: 'href', typ: '' },
      { json: 'notification', js: 'notification', typ: '' },
      { json: 'category', js: 'category', typ: '' },
      { json: 'frequency', js: 'frequency', typ: '' },
    ],
    false,
  ),
  OriginalityReport: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'file_id', js: 'file_id', typ: 0 },
      { json: 'originality_score', js: 'originality_score', typ: 3.14 },
      { json: 'originality_report_file_id', js: 'originality_report_file_id', typ: 0 },
      { json: 'originality_report_url', js: 'originality_report_url', typ: '' },
      { json: 'tool_setting', js: 'tool_setting', typ: null },
      { json: 'error_report', js: 'error_report', typ: null },
      { json: 'submission_time', js: 'submission_time', typ: null },
      { json: 'root_account_id', js: 'root_account_id', typ: 0 },
    ],
    false,
  ),
  Outcome: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'url', js: 'url', typ: '' },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'display_name', js: 'display_name', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'vendor_guid', js: 'vendor_guid', typ: '' },
      { json: 'points_possible', js: 'points_possible', typ: 0 },
      { json: 'mastery_points', js: 'mastery_points', typ: 0 },
      { json: 'calculation_method', js: 'calculation_method', typ: '' },
      { json: 'calculation_int', js: 'calculation_int', typ: 0 },
      { json: 'ratings', js: 'ratings', typ: null },
      { json: 'can_edit', js: 'can_edit', typ: true },
      { json: 'can_unlink', js: 'can_unlink', typ: true },
      { json: 'assessed', js: 'assessed', typ: true },
      { json: 'has_updateable_rubrics', js: 'has_updateable_rubrics', typ: true },
    ],
    false,
  ),
  OutcomeAlignment: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'assignment_id', js: 'assignment_id', typ: 0 },
      { json: 'assessment_id', js: 'assessment_id', typ: 0 },
      { json: 'submission_types', js: 'submission_types', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'title', js: 'title', typ: '' },
    ],
    false,
  ),
  OutcomeGroup: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'url', js: 'url', typ: '' },
      { json: 'parent_outcome_group', js: 'parent_outcome_group', typ: null },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'vendor_guid', js: 'vendor_guid', typ: '' },
      { json: 'subgroups_url', js: 'subgroups_url', typ: '' },
      { json: 'outcomes_url', js: 'outcomes_url', typ: '' },
      { json: 'import_url', js: 'import_url', typ: '' },
      { json: 'can_edit', js: 'can_edit', typ: true },
    ],
    false,
  ),
  OutcomeImport: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'learning_outcome_group_id', js: 'learning_outcome_group_id', typ: 0 },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'ended_at', js: 'ended_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'data', js: 'data', typ: null },
      { json: 'progress', js: 'progress', typ: '' },
      { json: 'user', js: 'user', typ: null },
      { json: 'processing_errors', js: 'processing_errors', typ: a(a(u(0, ''))) },
    ],
    false,
  ),
  OutcomeImportData: o([{ json: 'import_type', js: 'import_type', typ: '' }], false),
  OutcomeLink: o(
    [
      { json: 'url', js: 'url', typ: '' },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'outcome_group', js: 'outcome_group', typ: null },
      { json: 'outcome', js: 'outcome', typ: null },
      { json: 'assessed', js: 'assessed', typ: true },
      { json: 'can_unlink', js: 'can_unlink', typ: null },
    ],
    false,
  ),
  OutcomePath: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'parts', js: 'parts', typ: null },
    ],
    false,
  ),
  OutcomePathPart: o([{ json: 'name', js: 'name', typ: '' }], false),
  OutcomeResult: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'score', js: 'score', typ: 0 },
      { json: 'submitted_or_assessed_at', js: 'submitted_or_assessed_at', typ: Date },
      { json: 'links', js: 'links', typ: r('OutcomeResultLinks') },
      { json: 'percent', js: 'percent', typ: 3.14 },
    ],
    false,
  ),
  OutcomeResultLinks: o(
    [
      { json: 'user', js: 'user', typ: '' },
      { json: 'learning_outcome', js: 'learning_outcome', typ: '' },
      { json: 'alignment', js: 'alignment', typ: '' },
    ],
    false,
  ),
  OutcomeRollup: o(
    [
      { json: 'scores', js: 'scores', typ: null },
      { json: 'name', js: 'name', typ: '' },
      { json: 'links', js: 'links', typ: r('OutcomeRollupLinks') },
    ],
    false,
  ),
  OutcomeRollupLinks: o(
    [
      { json: 'course', js: 'course', typ: 0 },
      { json: 'user', js: 'user', typ: 0 },
      { json: 'section', js: 'section', typ: 0 },
    ],
    false,
  ),
  OutcomeRollupScore: o(
    [
      { json: 'score', js: 'score', typ: 0 },
      { json: 'count', js: 'count', typ: 0 },
      { json: 'links', js: 'links', typ: r('OutcomeRollupScoreLinksClass') },
    ],
    false,
  ),
  OutcomeRollupScoreLinksClass: o([{ json: 'outcome', js: 'outcome', typ: '' }], false),
  OutcomeRollupScoreLinks: o([{ json: 'outcome', js: 'outcome', typ: 0 }], false),
  Page: o(
    [
      { json: 'page_id', js: 'page_id', typ: 0 },
      { json: 'url', js: 'url', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'hide_from_students', js: 'hide_from_students', typ: true },
      { json: 'editing_roles', js: 'editing_roles', typ: '' },
      { json: 'last_edited_by', js: 'last_edited_by', typ: null },
      { json: 'body', js: 'body', typ: '' },
      { json: 'published', js: 'published', typ: true },
      { json: 'publish_at', js: 'publish_at', typ: Date },
      { json: 'front_page', js: 'front_page', typ: true },
      { json: 'locked_for_user', js: 'locked_for_user', typ: true },
      { json: 'lock_info', js: 'lock_info', typ: null },
      { json: 'lock_explanation', js: 'lock_explanation', typ: '' },
    ],
    false,
  ),
  PageRevision: o(
    [
      { json: 'revision_id', js: 'revision_id', typ: 0 },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'latest', js: 'latest', typ: true },
      { json: 'edited_by', js: 'edited_by', typ: null },
      { json: 'url', js: 'url', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'body', js: 'body', typ: '' },
    ],
    false,
  ),
  PageView: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'app_name', js: 'app_name', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'asset_type', js: 'asset_type', typ: '' },
      { json: 'controller', js: 'controller', typ: '' },
      { json: 'action', js: 'action', typ: '' },
      { json: 'contributed', js: 'contributed', typ: true },
      { json: 'interaction_seconds', js: 'interaction_seconds', typ: 3.14 },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'user_request', js: 'user_request', typ: true },
      { json: 'render_time', js: 'render_time', typ: 3.14 },
      { json: 'user_agent', js: 'user_agent', typ: '' },
      { json: 'participated', js: 'participated', typ: true },
      { json: 'http_method', js: 'http_method', typ: '' },
      { json: 'remote_ip', js: 'remote_ip', typ: '' },
      { json: 'links', js: 'links', typ: r('PageViewLinksClass') },
    ],
    false,
  ),
  PageViewLinksClass: o(
    [
      { json: 'user', js: 'user', typ: 0 },
      { json: 'account', js: 'account', typ: 0 },
    ],
    false,
  ),
  PageViewLinks: o(
    [
      { json: 'user', js: 'user', typ: 0 },
      { json: 'context', js: 'context', typ: 0 },
      { json: 'asset', js: 'asset', typ: 0 },
      { json: 'real_user', js: 'real_user', typ: 0 },
      { json: 'account', js: 'account', typ: 0 },
    ],
    false,
  ),
  PairingCode: o(
    [
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'code', js: 'code', typ: '' },
      { json: 'expires_at', js: 'expires_at', typ: Date },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
    ],
    false,
  ),
  PeerReview: o(
    [
      { json: 'assessor_id', js: 'assessor_id', typ: 0 },
      { json: 'asset_id', js: 'asset_id', typ: 0 },
      { json: 'asset_type', js: 'asset_type', typ: '' },
      { json: 'id', js: 'id', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'user', js: 'user', typ: '' },
      { json: 'assessor', js: 'assessor', typ: '' },
      { json: 'submission_comments', js: 'submission_comments', typ: '' },
    ],
    false,
  ),
  PlannerNote: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'todo_date', js: 'todo_date', typ: Date },
      { json: 'linked_object_type', js: 'linked_object_type', typ: '' },
      { json: 'linked_object_id', js: 'linked_object_id', typ: 0 },
      { json: 'linked_object_html_url', js: 'linked_object_html_url', typ: '' },
      { json: 'linked_object_url', js: 'linked_object_url', typ: '' },
    ],
    false,
  ),
  PlannerOverride: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'plannable_type', js: 'plannable_type', typ: '' },
      { json: 'plannable_id', js: 'plannable_id', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'assignment_id', js: 'assignment_id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'marked_complete', js: 'marked_complete', typ: true },
      { json: 'dismissed', js: 'dismissed', typ: true },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'deleted_at', js: 'deleted_at', typ: Date },
    ],
    false,
  ),
  Poll: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'question', js: 'question', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'total_results', js: 'total_results', typ: m(0) },
    ],
    false,
  ),
  PollChoice: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'poll_id', js: 'poll_id', typ: 0 },
      { json: 'is_correct', js: 'is_correct', typ: true },
      { json: 'text', js: 'text', typ: '' },
      { json: 'position', js: 'position', typ: 0 },
    ],
    false,
  ),
  PollSession: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'poll_id', js: 'poll_id', typ: 0 },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'course_section_id', js: 'course_section_id', typ: 0 },
      { json: 'is_published', js: 'is_published', typ: true },
      { json: 'has_public_results', js: 'has_public_results', typ: true },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'results', js: 'results', typ: m(0) },
      { json: 'poll_submissions', js: 'poll_submissions', typ: null },
    ],
    false,
  ),
  PollSubmission: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'poll_choice_id', js: 'poll_choice_id', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'created_at', js: 'created_at', typ: Date },
    ],
    false,
  ),
  Proficiency: o([{ json: 'ratings', js: 'ratings', typ: a('any') }], false),
  ProficiencyRating: o(
    [
      { json: 'description', js: 'description', typ: '' },
      { json: 'points', js: 'points', typ: 0 },
      { json: 'mastery', js: 'mastery', typ: true },
      { json: 'color', js: 'color', typ: '' },
    ],
    false,
  ),
  Profile: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'short_name', js: 'short_name', typ: '' },
      { json: 'sortable_name', js: 'sortable_name', typ: '' },
      { json: 'title', js: 'title', typ: null },
      { json: 'bio', js: 'bio', typ: null },
      { json: 'primary_email', js: 'primary_email', typ: '' },
      { json: 'login_id', js: 'login_id', typ: '' },
      { json: 'sis_user_id', js: 'sis_user_id', typ: '' },
      { json: 'lti_user_id', js: 'lti_user_id', typ: null },
      { json: 'avatar_url', js: 'avatar_url', typ: '' },
      { json: 'calendar', js: 'calendar', typ: null },
      { json: 'time_zone', js: 'time_zone', typ: '' },
      { json: 'locale', js: 'locale', typ: null },
      { json: 'k5_user', js: 'k5_user', typ: true },
    ],
    false,
  ),
  Progress: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'tag', js: 'tag', typ: '' },
      { json: 'completion', js: 'completion', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'message', js: 'message', typ: '' },
      { json: 'results', js: 'results', typ: r('Results') },
      { json: 'url', js: 'url', typ: '' },
    ],
    false,
  ),
  Results: o([{ json: 'id', js: 'id', typ: '' }], false),
  ProvisionalGrade: o(
    [
      { json: 'provisional_grade_id', js: 'provisional_grade_id', typ: 0 },
      { json: 'score', js: 'score', typ: 0 },
      { json: 'grade', js: 'grade', typ: '' },
      { json: 'grade_matches_current_submission', js: 'grade_matches_current_submission', typ: true },
      { json: 'graded_at', js: 'graded_at', typ: Date },
      { json: 'final', js: 'final', typ: true },
      { json: 'speedgrader_url', js: 'speedgrader_url', typ: '' },
    ],
    false,
  ),
  Quiz: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'mobile_url', js: 'mobile_url', typ: '' },
      { json: 'preview_url', js: 'preview_url', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'quiz_type', js: 'quiz_type', typ: '' },
      { json: 'assignment_group_id', js: 'assignment_group_id', typ: 0 },
      { json: 'time_limit', js: 'time_limit', typ: 0 },
      { json: 'shuffle_answers', js: 'shuffle_answers', typ: true },
      { json: 'hide_results', js: 'hide_results', typ: '' },
      { json: 'show_correct_answers', js: 'show_correct_answers', typ: true },
      { json: 'show_correct_answers_last_attempt', js: 'show_correct_answers_last_attempt', typ: true },
      { json: 'show_correct_answers_at', js: 'show_correct_answers_at', typ: Date },
      { json: 'hide_correct_answers_at', js: 'hide_correct_answers_at', typ: Date },
      { json: 'one_time_results', js: 'one_time_results', typ: true },
      { json: 'scoring_policy', js: 'scoring_policy', typ: '' },
      { json: 'allowed_attempts', js: 'allowed_attempts', typ: 0 },
      { json: 'one_question_at_a_time', js: 'one_question_at_a_time', typ: true },
      { json: 'question_count', js: 'question_count', typ: 0 },
      { json: 'points_possible', js: 'points_possible', typ: 0 },
      { json: 'cant_go_back', js: 'cant_go_back', typ: true },
      { json: 'access_code', js: 'access_code', typ: '' },
      { json: 'ip_filter', js: 'ip_filter', typ: '' },
      { json: 'due_at', js: 'due_at', typ: Date },
      { json: 'lock_at', js: 'lock_at', typ: null },
      { json: 'unlock_at', js: 'unlock_at', typ: Date },
      { json: 'published', js: 'published', typ: true },
      { json: 'unpublishable', js: 'unpublishable', typ: true },
      { json: 'locked_for_user', js: 'locked_for_user', typ: true },
      { json: 'lock_info', js: 'lock_info', typ: null },
      { json: 'lock_explanation', js: 'lock_explanation', typ: '' },
      { json: 'speedgrader_url', js: 'speedgrader_url', typ: '' },
      { json: 'quiz_extensions_url', js: 'quiz_extensions_url', typ: '' },
      { json: 'permissions', js: 'permissions', typ: null },
      { json: 'all_dates', js: 'all_dates', typ: null },
      { json: 'version_number', js: 'version_number', typ: 0 },
      { json: 'question_types', js: 'question_types', typ: a('') },
      { json: 'anonymous_submissions', js: 'anonymous_submissions', typ: true },
    ],
    false,
  ),
  QuizAssignmentOverrideSet: o(
    [
      { json: 'quiz_id', js: 'quiz_id', typ: '' },
      { json: 'due_dates', js: 'due_dates', typ: null },
      { json: 'all_dates', js: 'all_dates', typ: null },
    ],
    false,
  ),
  QuizAssignmentOverrideSetContainer: o(
    [{ json: 'quiz_assignment_overrides', js: 'quiz_assignment_overrides', typ: null }],
    false,
  ),
  QuizGroup: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'quiz_id', js: 'quiz_id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'pick_count', js: 'pick_count', typ: 0 },
      { json: 'question_points', js: 'question_points', typ: 0 },
      { json: 'assessment_question_bank_id', js: 'assessment_question_bank_id', typ: 0 },
      { json: 'position', js: 'position', typ: 0 },
    ],
    false,
  ),
  QuizIPFilter: o(
    [
      { json: 'name', js: 'name', typ: '' },
      { json: 'account', js: 'account', typ: '' },
      { json: 'filter', js: 'filter', typ: '' },
    ],
    false,
  ),
  QuizPermissions: o(
    [
      { json: 'read', js: 'read', typ: true },
      { json: 'submit', js: 'submit', typ: true },
      { json: 'create', js: 'create', typ: true },
      { json: 'manage', js: 'manage', typ: true },
      { json: 'read_statistics', js: 'read_statistics', typ: true },
      { json: 'review_grades', js: 'review_grades', typ: true },
      { json: 'update', js: 'update', typ: true },
    ],
    false,
  ),
  QuizQuestion: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'quiz_id', js: 'quiz_id', typ: 0 },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'question_name', js: 'question_name', typ: '' },
      { json: 'question_type', js: 'question_type', typ: '' },
      { json: 'question_text', js: 'question_text', typ: '' },
      { json: 'points_possible', js: 'points_possible', typ: 0 },
      { json: 'correct_comments', js: 'correct_comments', typ: '' },
      { json: 'incorrect_comments', js: 'incorrect_comments', typ: '' },
      { json: 'neutral_comments', js: 'neutral_comments', typ: '' },
      { json: 'answers', js: 'answers', typ: null },
    ],
    false,
  ),
  QuizReport: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'quiz_id', js: 'quiz_id', typ: 0 },
      { json: 'report_type', js: 'report_type', typ: '' },
      { json: 'readable_type', js: 'readable_type', typ: '' },
      { json: 'includes_all_versions', js: 'includes_all_versions', typ: true },
      { json: 'anonymous', js: 'anonymous', typ: true },
      { json: 'generatable', js: 'generatable', typ: true },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'url', js: 'url', typ: '' },
      { json: 'file', js: 'file', typ: null },
      { json: 'progress_url', js: 'progress_url', typ: null },
      { json: 'progress', js: 'progress', typ: null },
    ],
    false,
  ),
  QuizStatistics: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'quiz_id', js: 'quiz_id', typ: 0 },
      { json: 'multiple_attempts_exist', js: 'multiple_attempts_exist', typ: true },
      { json: 'includes_all_versions', js: 'includes_all_versions', typ: true },
      { json: 'generated_at', js: 'generated_at', typ: Date },
      { json: 'url', js: 'url', typ: '' },
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'question_statistics', js: 'question_statistics', typ: null },
      { json: 'submission_statistics', js: 'submission_statistics', typ: null },
      { json: 'links', js: 'links', typ: null },
    ],
    false,
  ),
  QuizStatisticsAnswerPointBiserial: o(
    [
      { json: 'answer_id', js: 'answer_id', typ: 0 },
      { json: 'point_biserial', js: 'point_biserial', typ: 3.14 },
      { json: 'correct', js: 'correct', typ: true },
      { json: 'distractor', js: 'distractor', typ: true },
    ],
    false,
  ),
  QuizStatisticsAnswerStatistics: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'text', js: 'text', typ: '' },
      { json: 'weight', js: 'weight', typ: 0 },
      { json: 'responses', js: 'responses', typ: 0 },
    ],
    false,
  ),
  QuizStatisticsLinks: o([{ json: 'quiz', js: 'quiz', typ: '' }], false),
  QuizStatisticsQuestionStatistics: o(
    [
      { json: 'responses', js: 'responses', typ: 0 },
      { json: 'answers', js: 'answers', typ: null },
    ],
    false,
  ),
  QuizStatisticsSubmissionStatistics: o(
    [
      { json: 'unique_count', js: 'unique_count', typ: 0 },
      { json: 'score_average', js: 'score_average', typ: 3.14 },
      { json: 'score_high', js: 'score_high', typ: 0 },
      { json: 'score_low', js: 'score_low', typ: 0 },
      { json: 'score_stdev', js: 'score_stdev', typ: 3.14 },
      { json: 'scores', js: 'scores', typ: m(0) },
      { json: 'correct_count_average', js: 'correct_count_average', typ: 3.14 },
      { json: 'incorrect_count_average', js: 'incorrect_count_average', typ: 0 },
      { json: 'duration_average', js: 'duration_average', typ: 3.14 },
    ],
    false,
  ),
  QuizSubmission: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'quiz_id', js: 'quiz_id', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'submission_id', js: 'submission_id', typ: 0 },
      { json: 'started_at', js: 'started_at', typ: Date },
      { json: 'finished_at', js: 'finished_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: Date },
      { json: 'attempt', js: 'attempt', typ: 0 },
      { json: 'extra_attempts', js: 'extra_attempts', typ: 0 },
      { json: 'extra_time', js: 'extra_time', typ: 0 },
      { json: 'manually_unlocked', js: 'manually_unlocked', typ: true },
      { json: 'time_spent', js: 'time_spent', typ: 0 },
      { json: 'score', js: 'score', typ: 0 },
      { json: 'score_before_regrade', js: 'score_before_regrade', typ: 0 },
      { json: 'kept_score', js: 'kept_score', typ: 0 },
      { json: 'fudge_points', js: 'fudge_points', typ: 0 },
      { json: 'has_seen_results', js: 'has_seen_results', typ: true },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'overdue_and_needs_submission', js: 'overdue_and_needs_submission', typ: true },
    ],
    false,
  ),
  QuizSubmissionEvent: o(
    [
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'event_type', js: 'event_type', typ: '' },
      { json: 'event_data', js: 'event_data', typ: r('EventData') },
    ],
    false,
  ),
  EventData: o([{ json: 'answer', js: 'answer', typ: '' }], false),
  QuizSubmissionQuestion: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'flagged', js: 'flagged', typ: true },
      { json: 'answer', js: 'answer', typ: null },
      { json: 'answers', js: 'answers', typ: null },
    ],
    false,
  ),
  QuizSubmissionUserList: o(
    [
      { json: 'meta', js: 'meta', typ: r('Meta') },
      { json: 'users', js: 'users', typ: r('Meta') },
    ],
    false,
  ),
  Meta: o(
    [
      { json: '$ref', js: '$ref', typ: '' },
      { json: 'description', js: 'description', typ: '' },
    ],
    false,
  ),
  QuizSubmissionUserListMeta: o([{ json: 'pagination', js: 'pagination', typ: r('Meta') }], false),
  Report: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'report', js: 'report', typ: '' },
      { json: 'file_url', js: 'file_url', typ: '' },
      { json: 'attachment', js: 'attachment', typ: null },
      { json: 'status', js: 'status', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'started_at', js: 'started_at', typ: Date },
      { json: 'ended_at', js: 'ended_at', typ: Date },
      { json: 'parameters', js: 'parameters', typ: r('Parameters') },
      { json: 'progress', js: 'progress', typ: 0 },
      { json: 'current_line', js: 'current_line', typ: 0 },
    ],
    false,
  ),
  Parameters: o(
    [
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: Date },
    ],
    false,
  ),
  ReportParameters: o(
    [
      { json: 'enrollment_term_id', js: 'enrollment_term_id', typ: 0 },
      { json: 'include_deleted', js: 'include_deleted', typ: true },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'order', js: 'order', typ: '' },
      { json: 'users', js: 'users', typ: true },
      { json: 'accounts', js: 'accounts', typ: true },
      { json: 'terms', js: 'terms', typ: true },
      { json: 'courses', js: 'courses', typ: true },
      { json: 'sections', js: 'sections', typ: true },
      { json: 'enrollments', js: 'enrollments', typ: true },
      { json: 'groups', js: 'groups', typ: true },
      { json: 'xlist', js: 'xlist', typ: true },
      { json: 'sis_terms_csv', js: 'sis_terms_csv', typ: 0 },
      { json: 'sis_accounts_csv', js: 'sis_accounts_csv', typ: 0 },
      { json: 'include_enrollment_state', js: 'include_enrollment_state', typ: true },
      { json: 'enrollment_state', js: 'enrollment_state', typ: a('') },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: Date },
    ],
    false,
  ),
  Result: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'userId', js: 'userId', typ: '' },
      { json: 'resultScore', js: 'resultScore', typ: 0 },
      { json: 'resultMaximum', js: 'resultMaximum', typ: 0 },
      { json: 'comment', js: 'comment', typ: null },
      { json: 'scoreOf', js: 'scoreOf', typ: '' },
    ],
    false,
  ),
  ResultLinks: o(
    [
      { json: 'user', js: 'user', typ: '' },
      { json: 'assessor', js: 'assessor', typ: '' },
      { json: 'assessment', js: 'assessment', typ: '' },
    ],
    false,
  ),
  Role: o(
    [
      { json: 'label', js: 'label', typ: '' },
      { json: 'role', js: 'role', typ: '' },
      { json: 'base_role_type', js: 'base_role_type', typ: '' },
      { json: 'account', js: 'account', typ: r('AccountClass') },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'permissions', js: 'permissions', typ: r('RolePermissionsClass') },
    ],
    false,
  ),
  AccountClass: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'parent_account_id', js: 'parent_account_id', typ: 0 },
      { json: 'root_account_id', js: 'root_account_id', typ: 0 },
      { json: 'sis_account_id', js: 'sis_account_id', typ: '' },
    ],
    false,
  ),
  RolePermissionsClass: o(
    [
      { json: 'read_course_content', js: 'read_course_content', typ: r('Read') },
      { json: 'read_course_list', js: 'read_course_list', typ: r('Read') },
      { json: 'read_question_banks', js: 'read_question_banks', typ: r('Read') },
      { json: 'read_reports', js: 'read_reports', typ: r('Read') },
    ],
    false,
  ),
  Read: o(
    [
      { json: 'enabled', js: 'enabled', typ: true },
      { json: 'locked', js: 'locked', typ: true },
      { json: 'readonly', js: 'readonly', typ: true },
      { json: 'explicit', js: 'explicit', typ: true },
      { json: 'prior_default', js: 'prior_default', typ: u(undefined, true) },
    ],
    false,
  ),
  RolePermissions: o(
    [
      { json: 'enabled', js: 'enabled', typ: true },
      { json: 'locked', js: 'locked', typ: true },
      { json: 'applies_to_self', js: 'applies_to_self', typ: true },
      { json: 'applies_to_descendants', js: 'applies_to_descendants', typ: true },
      { json: 'readonly', js: 'readonly', typ: true },
      { json: 'explicit', js: 'explicit', typ: true },
      { json: 'prior_default', js: 'prior_default', typ: true },
    ],
    false,
  ),
  Rubric: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'title', js: 'title', typ: '' },
      { json: 'context_id', js: 'context_id', typ: 0 },
      { json: 'context_type', js: 'context_type', typ: '' },
      { json: 'points_possible', js: 'points_possible', typ: 3.14 },
      { json: 'reusable', js: 'reusable', typ: true },
      { json: 'read_only', js: 'read_only', typ: true },
      { json: 'free_form_criterion_comments', js: 'free_form_criterion_comments', typ: true },
      { json: 'hide_score_total', js: 'hide_score_total', typ: true },
      { json: 'data', js: 'data', typ: null },
      { json: 'assessments', js: 'assessments', typ: null },
      { json: 'associations', js: 'associations', typ: null },
    ],
    false,
  ),
  RubricAssessment: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'rubric_id', js: 'rubric_id', typ: 0 },
      { json: 'rubric_association_id', js: 'rubric_association_id', typ: 0 },
      { json: 'score', js: 'score', typ: 3.14 },
      { json: 'artifact_type', js: 'artifact_type', typ: '' },
      { json: 'artifact_id', js: 'artifact_id', typ: 0 },
      { json: 'artifact_attempt', js: 'artifact_attempt', typ: 0 },
      { json: 'assessment_type', js: 'assessment_type', typ: '' },
      { json: 'assessor_id', js: 'assessor_id', typ: 0 },
      { json: 'data', js: 'data', typ: null },
      { json: 'comments', js: 'comments', typ: null },
    ],
    false,
  ),
  RubricAssociation: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'rubric_id', js: 'rubric_id', typ: 0 },
      { json: 'association_id', js: 'association_id', typ: 0 },
      { json: 'association_type', js: 'association_type', typ: '' },
      { json: 'use_for_grading', js: 'use_for_grading', typ: true },
      { json: 'summary_data', js: 'summary_data', typ: '' },
      { json: 'purpose', js: 'purpose', typ: '' },
      { json: 'hide_score_total', js: 'hide_score_total', typ: true },
      { json: 'hide_points', js: 'hide_points', typ: true },
      { json: 'hide_outcome_results', js: 'hide_outcome_results', typ: true },
    ],
    false,
  ),
  RubricCriteria: o(
    [
      { json: 'points', js: 'points', typ: 0 },
      { json: 'id', js: 'id', typ: '' },
      { json: 'learning_outcome_id', js: 'learning_outcome_id', typ: '' },
      { json: 'vendor_guid', js: 'vendor_guid', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'long_description', js: 'long_description', typ: '' },
      { json: 'criterion_use_range', js: 'criterion_use_range', typ: true },
      { json: 'ratings', js: 'ratings', typ: null },
      { json: 'ignore_for_scoring', js: 'ignore_for_scoring', typ: true },
    ],
    false,
  ),
  RubricCriterion: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'description', js: 'description', typ: null },
      { json: 'long_description', js: 'long_description', typ: null },
      { json: 'points', js: 'points', typ: 0 },
      { json: 'criterion_use_range', js: 'criterion_use_range', typ: true },
      { json: 'ratings', js: 'ratings', typ: null },
    ],
    false,
  ),
  RubricRating: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'criterion_id', js: 'criterion_id', typ: '' },
      { json: 'description', js: 'description', typ: null },
      { json: 'long_description', js: 'long_description', typ: null },
      { json: 'points', js: 'points', typ: 0 },
    ],
    false,
  ),
  SSOSettings: o(
    [
      { json: 'login_handle_name', js: 'login_handle_name', typ: '' },
      { json: 'change_password_url', js: 'change_password_url', typ: '' },
      { json: 'auth_discovery_url', js: 'auth_discovery_url', typ: '' },
      { json: 'unknown_user_url', js: 'unknown_user_url', typ: '' },
    ],
    false,
  ),
  Scope: o(
    [
      { json: 'resource', js: 'resource', typ: '' },
      { json: 'resource_name', js: 'resource_name', typ: '' },
      { json: 'controller', js: 'controller', typ: '' },
      { json: 'action', js: 'action', typ: '' },
      { json: 'verb', js: 'verb', typ: '' },
      { json: 'scope', js: 'scope', typ: '' },
    ],
    false,
  ),
  Score: o(
    [
      { json: 'userId', js: 'userId', typ: '' },
      { json: 'scoreGiven', js: 'scoreGiven', typ: 0 },
      { json: 'scoreMaximum', js: 'scoreMaximum', typ: 0 },
      { json: 'comment', js: 'comment', typ: null },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'activityProgress', js: 'activityProgress', typ: '' },
      { json: 'gradingProgress', js: 'gradingProgress', typ: '' },
    ],
    false,
  ),
  ScoreStatistic: o(
    [
      { json: 'min', js: 'min', typ: 0 },
      { json: 'max', js: 'max', typ: 0 },
      { json: 'mean', js: 'mean', typ: 0 },
      { json: 'upper_q', js: 'upper_q', typ: 0 },
      { json: 'median', js: 'median', typ: 0 },
      { json: 'lower_q', js: 'lower_q', typ: 0 },
    ],
    false,
  ),
  Section: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'sis_section_id', js: 'sis_section_id', typ: '' },
      { json: 'integration_id', js: 'integration_id', typ: '' },
      { json: 'sis_import_id', js: 'sis_import_id', typ: 0 },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'sis_course_id', js: 'sis_course_id', typ: '' },
      { json: 'start_at', js: 'start_at', typ: Date },
      { json: 'end_at', js: 'end_at', typ: null },
      { json: 'restrict_enrollments_to_section_dates', js: 'restrict_enrollments_to_section_dates', typ: null },
      { json: 'nonxlist_course_id', js: 'nonxlist_course_id', typ: null },
      { json: 'total_students', js: 'total_students', typ: 0 },
    ],
    false,
  ),
  SectionAttributes: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'sis_id', js: 'sis_id', typ: '' },
      { json: 'integration_id', js: 'integration_id', typ: '' },
      { json: 'origin_course', js: 'origin_course', typ: null },
      { json: 'xlist_course', js: 'xlist_course', typ: null },
      { json: 'override', js: 'override', typ: null },
    ],
    false,
  ),
  SharedBrandConfig: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'account_id', js: 'account_id', typ: '' },
      { json: 'brand_config_md5', js: 'brand_config_md5', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
    ],
    false,
  ),
  SisAssignment: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'due_at', js: 'due_at', typ: Date },
      { json: 'unlock_at', js: 'unlock_at', typ: Date },
      { json: 'lock_at', js: 'lock_at', typ: Date },
      { json: 'points_possible', js: 'points_possible', typ: 0 },
      { json: 'submission_types', js: 'submission_types', typ: a('') },
      { json: 'integration_id', js: 'integration_id', typ: '' },
      { json: 'integration_data', js: 'integration_data', typ: '' },
      { json: 'include_in_final_grade', js: 'include_in_final_grade', typ: true },
      { json: 'assignment_group', js: 'assignment_group', typ: null },
      { json: 'sections', js: 'sections', typ: null },
      { json: 'user_overrides', js: 'user_overrides', typ: null },
    ],
    false,
  ),
  SisImport: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'ended_at', js: 'ended_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'data', js: 'data', typ: null },
      { json: 'statistics', js: 'statistics', typ: null },
      { json: 'progress', js: 'progress', typ: '' },
      { json: 'errors_attachment', js: 'errors_attachment', typ: null },
      { json: 'user', js: 'user', typ: null },
      { json: 'processing_warnings', js: 'processing_warnings', typ: a(a('')) },
      { json: 'processing_errors', js: 'processing_errors', typ: a(a('')) },
      { json: 'batch_mode', js: 'batch_mode', typ: true },
      { json: 'batch_mode_term_id', js: 'batch_mode_term_id', typ: '' },
      { json: 'multi_term_batch_mode', js: 'multi_term_batch_mode', typ: true },
      { json: 'skip_deletes', js: 'skip_deletes', typ: true },
      { json: 'override_sis_stickiness', js: 'override_sis_stickiness', typ: true },
      { json: 'add_sis_stickiness', js: 'add_sis_stickiness', typ: true },
      { json: 'clear_sis_stickiness', js: 'clear_sis_stickiness', typ: true },
      { json: 'diffing_threshold_exceeded', js: 'diffing_threshold_exceeded', typ: true },
      { json: 'diffing_data_set_identifier', js: 'diffing_data_set_identifier', typ: '' },
      { json: 'diffing_remaster', js: 'diffing_remaster', typ: true },
      { json: 'diffed_against_import_id', js: 'diffed_against_import_id', typ: 0 },
      { json: 'csv_attachments', js: 'csv_attachments', typ: a('any') },
    ],
    false,
  ),
  SisImportData: o(
    [
      { json: 'import_type', js: 'import_type', typ: '' },
      { json: 'supplied_batches', js: 'supplied_batches', typ: a('') },
      { json: 'counts', js: 'counts', typ: null },
    ],
    false,
  ),
  SisImportError: o(
    [
      { json: 'sis_import_id', js: 'sis_import_id', typ: 0 },
      { json: 'file', js: 'file', typ: '' },
      { json: 'message', js: 'message', typ: '' },
      { json: 'row_info', js: 'row_info', typ: '' },
      { json: 'row', js: 'row', typ: 0 },
    ],
    false,
  ),
  SisImportStatistic: o(
    [
      { json: 'created', js: 'created', typ: 0 },
      { json: 'concluded', js: 'concluded', typ: 0 },
      { json: 'deactivated', js: 'deactivated', typ: 0 },
      { json: 'restored', js: 'restored', typ: 0 },
      { json: 'deleted', js: 'deleted', typ: 0 },
    ],
    false,
  ),
  StudentAttributes: o(
    [
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'sis_user_id', js: 'sis_user_id', typ: '' },
    ],
    false,
  ),
  Submission: o(
    [
      { json: 'lti_course_id', js: 'lti_course_id', typ: '' },
      { json: 'course_id', js: 'course_id', typ: 0 },
      { json: 'assignment_id', js: 'assignment_id', typ: 0 },
      { json: 'attempt', js: 'attempt', typ: 0 },
      { json: 'body', js: 'body', typ: '' },
      { json: 'submission_type', js: 'submission_type', typ: '' },
      { json: 'submitted_at', js: 'submitted_at', typ: Date },
      { json: 'url', js: 'url', typ: null },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'eula_agreement_timestamp', js: 'eula_agreement_timestamp', typ: '' },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'attachments', js: 'attachments', typ: null },
    ],
    false,
  ),
  SubmissionComment: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'author_id', js: 'author_id', typ: 0 },
      { json: 'author_name', js: 'author_name', typ: '' },
      { json: 'author', js: 'author', typ: '' },
      { json: 'comment', js: 'comment', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'edited_at', js: 'edited_at', typ: Date },
      { json: 'media_comment', js: 'media_comment', typ: null },
    ],
    false,
  ),
  SubmissionHistory: o(
    [
      { json: 'submission_id', js: 'submission_id', typ: 0 },
      { json: 'versions', js: 'versions', typ: null },
    ],
    false,
  ),
  SubmissionVersion: o(
    [
      { json: 'assignment_id', js: 'assignment_id', typ: 0 },
      { json: 'assignment_name', js: 'assignment_name', typ: '' },
      { json: 'body', js: 'body', typ: '' },
      { json: 'current_grade', js: 'current_grade', typ: '' },
      { json: 'current_graded_at', js: 'current_graded_at', typ: Date },
      { json: 'current_grader', js: 'current_grader', typ: '' },
      { json: 'grade_matches_current_submission', js: 'grade_matches_current_submission', typ: true },
      { json: 'graded_at', js: 'graded_at', typ: Date },
      { json: 'grader', js: 'grader', typ: '' },
      { json: 'grader_id', js: 'grader_id', typ: 0 },
      { json: 'id', js: 'id', typ: 0 },
      { json: 'new_grade', js: 'new_grade', typ: '' },
      { json: 'new_graded_at', js: 'new_graded_at', typ: Date },
      { json: 'new_grader', js: 'new_grader', typ: '' },
      { json: 'previous_grade', js: 'previous_grade', typ: '' },
      { json: 'previous_graded_at', js: 'previous_graded_at', typ: Date },
      { json: 'previous_grader', js: 'previous_grader', typ: '' },
      { json: 'score', js: 'score', typ: 0 },
      { json: 'user_name', js: 'user_name', typ: '' },
      { json: 'submission_type', js: 'submission_type', typ: '' },
      { json: 'url', js: 'url', typ: null },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
    ],
    false,
  ),
  Tab: o(
    [
      { json: 'html_url', js: 'html_url', typ: '' },
      { json: 'id', js: 'id', typ: '' },
      { json: 'label', js: 'label', typ: '' },
      { json: 'type', js: 'type', typ: '' },
      { json: 'hidden', js: 'hidden', typ: true },
      { json: 'visibility', js: 'visibility', typ: '' },
      { json: 'position', js: 'position', typ: 0 },
    ],
    false,
  ),
  TermsOfService: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'terms_type', js: 'terms_type', typ: '' },
      { json: 'passive', js: 'passive', typ: true },
      { json: 'account_id', js: 'account_id', typ: 0 },
      { json: 'content', js: 'content', typ: '' },
      { json: 'self_registration_type', js: 'self_registration_type', typ: a('') },
    ],
    false,
  ),
  ToolSetting: o(
    [
      { json: 'resource_type_code', js: 'resource_type_code', typ: '' },
      { json: 'resource_url', js: 'resource_url', typ: '' },
    ],
    false,
  ),
  TurnitinSettings: o(
    [
      { json: 'originality_report_visibility', js: 'originality_report_visibility', typ: '' },
      { json: 's_paper_check', js: 's_paper_check', typ: true },
      { json: 'internet_check', js: 'internet_check', typ: true },
      { json: 'journal_check', js: 'journal_check', typ: true },
      { json: 'exclude_biblio', js: 'exclude_biblio', typ: true },
      { json: 'exclude_quoted', js: 'exclude_quoted', typ: true },
      { json: 'exclude_small_matches_type', js: 'exclude_small_matches_type', typ: '' },
      { json: 'exclude_small_matches_value', js: 'exclude_small_matches_value', typ: 0 },
    ],
    false,
  ),
  UpdatedEventData: o(
    [
      { json: 'name', js: 'name', typ: a('') },
      { json: 'start_at', js: 'start_at', typ: a(Date) },
      { json: 'conclude_at', js: 'conclude_at', typ: a(Date) },
      { json: 'is_public', js: 'is_public', typ: a(true) },
    ],
    false,
  ),
  UsageRights: o(
    [
      { json: 'legal_copyright', js: 'legal_copyright', typ: '' },
      { json: 'use_justification', js: 'use_justification', typ: '' },
      { json: 'license', js: 'license', typ: '' },
      { json: 'license_name', js: 'license_name', typ: '' },
      { json: 'message', js: 'message', typ: '' },
      { json: 'file_ids', js: 'file_ids', typ: a(0) },
    ],
    false,
  ),
  User: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'sortable_name', js: 'sortable_name', typ: '' },
      { json: 'last_name', js: 'last_name', typ: '' },
      { json: 'first_name', js: 'first_name', typ: '' },
      { json: 'short_name', js: 'short_name', typ: '' },
      { json: 'sis_user_id', js: 'sis_user_id', typ: '' },
      { json: 'sis_import_id', js: 'sis_import_id', typ: 0 },
      { json: 'integration_id', js: 'integration_id', typ: '' },
      { json: 'login_id', js: 'login_id', typ: '' },
      { json: 'avatar_url', js: 'avatar_url', typ: '' },
      { json: 'avatar_state', js: 'avatar_state', typ: '' },
      { json: 'enrollments', js: 'enrollments', typ: null },
      { json: 'email', js: 'email', typ: '' },
      { json: 'locale', js: 'locale', typ: '' },
      { json: 'last_login', js: 'last_login', typ: Date },
      { json: 'time_zone', js: 'time_zone', typ: '' },
      { json: 'bio', js: 'bio', typ: '' },
    ],
    false,
  ),
  EPortfolio: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'public', js: 'public', typ: true },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
      { json: 'workflow_state', js: 'workflow_state', typ: '' },
      { json: 'deleted_at', js: 'deleted_at', typ: Date },
      { json: 'spam_status', js: 'spam_status', typ: null },
    ],
    false,
  ),
  EPortfolioPage: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'eportfolio_id', js: 'eportfolio_id', typ: 0 },
      { json: 'position', js: 'position', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'content', js: 'content', typ: '' },
      { json: 'created_at', js: 'created_at', typ: Date },
      { json: 'updated_at', js: 'updated_at', typ: Date },
    ],
    false,
  ),
};
