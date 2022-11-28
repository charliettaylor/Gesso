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
  user: UserDisplay;
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
  appointments: unknown[]; // CalendarEvent?
  new_appointments: unknown[];
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
  end_at: Date | unknown;
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
  all_dates: unknown[];
  course_id: number;
  html_url: string;
  submissions_download_url: string;
  assignment_group_id: number;
  due_date_required: boolean;
  allowed_extensions: string[];
  max_name_length: number;
  turnitin_enabled: boolean;
  vericite_enabled: boolean;
  turnitin_settings: TurnitinSettings;
  grade_group_students_individually: boolean;
  external_tool_tag_attributes: ExternalToolTagAttributes;
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
  grading_standard_id: number;
  published: boolean;
  unpublishable: boolean;
  only_visible_to_overrides: boolean;
  locked_for_user: boolean;
  lock_info: LockInfo;
  lock_explanation: string;
  quiz_id: number;
  anonymous_submissions: boolean;
  discussion_topic: DiscussionTopic;
  freeze_on_copy: boolean;
  frozen: boolean;
  frozen_attributes: string[];
  submission: Submission;
  use_rubric_for_grading: boolean;
  rubric_settings: RubricSettings;
  rubric: RubricCriteria;
  assignment_visibility: number[];
  overrides: AssignmentOverride[];
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
  score_statistics: ScoreStatistic[];
  can_submit: boolean;
  annotatable_attachment_id: number;
  anonymize_students: boolean;
  require_lockdown_browser: boolean;
  important_dates: boolean;
  muted: boolean;
}

export interface IntegrationData {
  "5678": string;
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
  unlock_at: Date | unknown;
  lock_at: Date;
  students?: unknown;
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
  assignment: unknown;
  assignment_overrides: unknown;
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
  assignments: Assignment[];
  rules: GradingRules;
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
  requested_authn_context: unknown;
  auth_host: string;
  auth_filter: string;
  auth_over_tls: unknown;
  auth_base: unknown;
  auth_username: string;
  auth_port: unknown;
  position: number;
  idp_entity_id: string;
  login_attribute: string;
  sig_alg: string;
  jit_provisioning: unknown;
  federated_attributes: unknown;
  mfa_required: boolean | unknown;
}

export interface Avatar {
  type: string;
  url: string;
  token: string;
  display_name: string;
  id: number;
  "content-type": string;
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
  latest_migration: BlueprintMigration | null;
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
  effective_context_code: string | null;
  context_name: string;
  all_context_codes: string;
  workflow_state: string;
  hidden: boolean;
  parent_event_id: number | null;
  child_events_count: number;
  child_events: unknown;
  url: string;
  html_url: string;
  all_day_date: Date;
  all_day: boolean;
  created_at: Date;
  updated_at: Date;
  appointment_group_id: number | null;
  appointment_group_url: string | null;
  own_reservation: boolean;
  reserve_url: string | null;
  reserved: boolean;
  participant_type: string;
  participants_per_appointment: number | null;
  available_slots: number | null;
  user: User | unknown;
  group: Group | null;
  important_dates: boolean;
  series_uuid: string | null;
  rrule: string | null;
  series_natural_language: string | null;
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
  url: string | null;
  created_at: Date;
  updated_at: Date;
  description: string | null;
  title: string | null;
  type: string;
  update_url: string | null;
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
  recordings: ConferenceRecording[] | null;
  url: string | null;
  join_url: string | null;
  context_type: string | null;
  context_id: string | null;
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

export interface ContentExport {
  id: number;
  created_at: Date;
  export_type: string;
  attachment: Attachment;
  progress_url: string;
  user_id: number;
  workflow_state: string;
}

export interface Attachment {
  url: string;
}

export interface LockInfoClass {
  asset_string: string;
  unlock_at: Date;
  lock_at: Date;
  context_module: unknown;
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
  upload_params: unknown;
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
  properties: unknown;
  audience: unknown[];
  audience_contexts: unknown;
  avatar_url: string;
  participants: ConversationParticipant[];
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
  sis_course_id: string | null;
  uuid: string;
  integration_id: string | null;
  sis_import_id: number;
  name: string;
  course_code: string;
  original_name: string;
  workflow_state: string;
  account_id: number;
  root_account_id: number;
  enrollment_term_id: number;
  grading_periods: GradingPeriod[] | null;
  grading_standard_id: number;
  grade_passback_setting: string;
  created_at: Date;
  start_at: Date;
  end_at: Date;
  locale: string;
  enrollments: Enrollment[] | null;
  total_students: number;
  calendar: unknown;
  default_view: string;
  syllabus_body: string;
  needs_grading_count: number;
  term: EnrollmentTerm | null;
  course_progress: CourseProgress | null;
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
  epub_export: EpubExport;
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
  name: Array<unknown | string>;
  start_at: Array<Date | unknown>;
  conclude_at: Array<Date | unknown>;
  is_public: Array<boolean | unknown>;
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
  graders: Grader[];
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
  assignment_id: number | null;
  delayed_post_at: Date;
  published: boolean;
  lock_at: Date | null;
  locked: boolean;
  pinned: boolean;
  locked_for_user: boolean;
  lock_info: unknown | null;
  lock_explanation: string;
  user_name: string;
  topic_children: number[];
  group_topic_children: GroupTopicChild[];
  root_topic_id: unknown;
  podcast_url: string;
  discussion_type: string;
  group_category_id: number | null;
  attachments: FileAttachment[] | null;
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
  associated_user_id: number | null;
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
  current_grade: string;
  final_score: number;
  final_grade: string;
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
  enrollment_terms: EnrollmentTerm[];
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
  admin_roles: unknown;
  display_name: unknown;
  email: unknown;
  given_name: unknown;
  integration_id: unknown;
  locale: unknown;
  name: unknown;
  sis_user_id: unknown;
  sortable_name: unknown;
  surname: unknown;
  timezone: unknown;
}

export interface File {
  size: number;
  "content-type": string;
  url: string;
  id: number;
  display_name: string;
  created_at: Date;
  updated_at: Date;
}

export interface FileAttachment {
  "content-type": string;
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
  unlock_at: Date;
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
  links: GradeChangeEventLinks[] | unknown;
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
  description: string | null;
  is_public: boolean;
  followed_by_user: boolean;
  join_level: string;
  members_count: number;
  avatar_url: string;
  context_type: string;
  course_id: number;
  role: string | null;
  group_category_id: number;
  sis_group_id: string;
  sis_import_id: number;
  storage_quota_mb: number;
  permissions: CoursePermissions;
  users: User[];
}

export interface GroupCategory {
  id: number;
  name: string;
  role: string;
  self_signup: unknown;
  auto_leader: string | null;
  context_type: string;
  account_id: number;
  group_limit: number | null;
  sis_group_category_id: string | null;
  sis_import_id: string | null;
  progress: unknown; //Progress?
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

export interface InstAccessToken {
  token: string;
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
  "https://canvas.instructure.com/lti/submission_type":
    HTTPSCanvasInstructureCOMLtiSubmissionType;
  "https://canvas.instructure.com/lti/launch_url": string;
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
  "content-type": string;
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
  items: ModuleItem[] | null;
  state: string;
  completed_at: Date | null;
  publish_final_grade: boolean | null;
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
  prev: ModuleItem;
  current: ModuleItem;
  next: ModuleItem;
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
  // https://canvas.instructure.com/doc/api/modules.html
  assignment_sets: unknown[];
  selected_set_id: unknown;
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
  "https://purl.imsglobal.org/spec/lti/claim/message_type": string;
  locale: string;
  "https://www.instructure.com/canvas_user_id": number;
  "https://www.instructure.com/canvas_user_login_id": string;
  "https://purl.imsglobal.org/spec/lti/claim/custom":
    HTTPSPurlImsglobalOrgSpecLtiClaimCustom;
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
  tool_setting: ToolSetting | null;
  error_report: string | null;
  submission_time: Date | null;
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
  ratings: unknown;
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
  parent_outcome_group: unknown;
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
  data: OutcomeImportData | null;
  progress: string;
  user: User | null;
  processing_errors: Array<Array<number | string>>;
}

export interface OutcomeImportData {
  import_type: string;
}

export interface OutcomeLink {
  url: string;
  context_id: number;
  context_type: string;
  outcome_group: OutcomeGroup | unknown;
  outcome: Outcome | unknown;
  assessed: boolean;
  can_unlink: unknown;
}

export interface OutcomePath {
  id: number;
  parts: OutcomePathPart[] | null;
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
  scores: OutcomeRollupScore[] | null;
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
  last_edited_by: User | null;
  body: string;
  published: boolean;
  publish_at: Date;
  front_page: boolean;
  locked_for_user: boolean;
  lock_info: LockInfo | unknown | null;
  lock_explanation: string;
}

export interface PageRevision {
  revision_id: number;
  updated_at: Date;
  latest: boolean;
  edited_by: User | null;
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
  poll_submissions: PollSubmission[] | null;
}

export interface PollSubmission {
  id: number;
  poll_choice_id: number;
  user_id: number;
  created_at: Date;
}

export interface Proficiency {
  ratings: ProficiencyRating[] | null;
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
  title: string | null;
  bio: string | null;
  primary_email: string;
  login_id: string;
  sis_user_id: string;
  lti_user_id: string | null;
  avatar_url: string;
  calendar: AccountCalendar | unknown;
  time_zone: string;
  locale: string | unknown;
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
  lock_at: Date | null;
  unlock_at: Date;
  published: boolean;
  unpublishable: boolean;
  locked_for_user: boolean;
  lock_info: LockInfo | null;
  lock_explanation: string;
  speedgrader_url: string;
  quiz_extensions_url: string;
  permissions: QuizPermissions[] | QuizPermissions | null;
  all_dates: unknown[];
  version_number: number;
  question_types: string[];
  anonymous_submissions: boolean;
}

export interface QuizAssignmentOverride {
  id: number;
  due_at: Date;
  unlock_at: Date | null;
  lock_at: Date;
  title: string;
  base: boolean;
}

export interface QuizAssignmentOverrideSet {
  quiz_id: string;
  due_dates: QuizAssignmentOverride[];
  all_dates: QuizAssignmentOverride[];
}

export interface QuizAssignmentOverrideSetContainer {
  quiz_assignment_overrides: QuizAssignmentOverrideSet;
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
  answers: Answer[];
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
  file: File | null;
  progress_url: string | null;
  progress: unknown; // Progress?
}

export interface QuizStatistics {
  id: number;
  quiz_id: number;
  multiple_attempts_exist: boolean;
  includes_all_versions: boolean;
  generated_at: Date;
  url: string;
  html_url: string;
  question_statistics: QuizStatisticsQuestionStatistics;
  submission_statistics: QuizStatisticsSubmissionStatistics;
  links: QuizStatisticsLinks;
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
  answers: QuizStatisticsAnswerStatistics;
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
  answer: Answer | null;
  answers: Answer[] | null;
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
  body: Body;
  recipients: Body;
  subject: Body;
}

export interface Body {
  type: string;
  description: string;
  example: string;
}

export interface Report {
  id: number;
  report: string;
  file_url: string;
  attachment: unknown;
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
  comment: string | null;
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
  data: RubricCriteria[] | RubricCriterion[] | unknown;
  assessments: RubricAssessment[] | null;
  associations: RubricAssociation[] | null;
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
  data: unknown;
  comments: unknown;
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
  ratings: RubricRating[] | null;
  ignore_for_scoring: boolean;
}

export interface RubricCriterion {
  id: string;
  description: string | null;
  long_description: string | null;
  points: number;
  criterion_use_range: boolean;
  ratings: RubricRating[] | null;
}

export interface RubricRating {
  id: string;
  criterion_id: string;
  description: string | null;
  long_description: string | null;
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
  comment: unknown;
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
  end_at: Date | null;
  restrict_enrollments_to_section_dates: unknown;
  nonxlist_course_id: unknown;
  total_students: number;
}

export interface SectionAttributes {
  id: number;
  name: string;
  sis_id: string;
  integration_id: string;
  origin_course: unknown;
  xlist_course: unknown;
  override: unknown;
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
  assignment_group: AssignmentGroupAttributes;
  sections: SectionAttributes;
  user_overrides: UserAssignmentOverrideAttributes;
}

export interface SisImport {
  id: number;
  created_at: Date;
  ended_at: Date;
  updated_at: Date;
  workflow_state: string;
  data: SisImportData | null;
  statistics: SisImportStatistic | null;
  progress: string;
  errors_attachment: SisImportError | unknown;
  user: User | null;
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
  csv_attachments: unknown[];
}

export interface SisImportData {
  import_type: string;
  supplied_batches: string[];
  counts: number | null;
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
  url: string | null;
  user_id: number;
  eula_agreement_timestamp: string;
  workflow_state: string;
  attachments: unknown;
}

export interface SubmissionComment {
  id: number;
  author_id: number;
  author_name: string;
  author: string;
  comment: string;
  created_at: Date;
  edited_at: Date;
  media_comment: MediaComment | null;
}

export interface SubmissionHistory {
  submission_id: number;
  versions: unknown;
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
  url: string | null;
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
  enrollments: Enrollment[] | null;
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
  spam_status: string | null;
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
