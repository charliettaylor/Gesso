import {
  Answer,
  Assignment,
  AssignmentOverride,
  BlueprintRestriction,
  QuizSubmissionQuestion,
  RubricAssessment,
} from "./models.ts";

export interface ListAvailableAccountCalendarsParams {
  /**
  When included, searches available account calendars for the term. Returns
  matching results. Term must be at least 2 characters. */
  searchterm?: string;
}

export interface UpdateCalendarsVisibilityParams {
  /**
  Allow administrators with `manage_account_calendar_events` permission to create
  events on this calendar, and allow users to view this calendar and its events. */
  visible?: boolean;
}

export interface ListAllAccountCalendarsParams {
  /**
  When included, searches all descendent accounts of provided account for the
  term. Returns matching results. Term must be at least 2 characters. Can be
  combined with a filter value. */
  searchterm?: string;
  /**
  Allowed values: visible, hidden */
  filter?: string;
}

export interface SearchAccountDomainsParams {
  /**
  campus name */
  name?: string;
  /**
  no description */
  domain?: string;
  /**
  no description */
  latitude?: number;
  /**
  no description */
  longitude?: number;
}

export interface IndexOfActiveGlobalNotificationForTheUserParams {
  /**
  Include past and dismissed global announcements. */
  includepast?: boolean;
}

export interface CreateGlobalNotificationParams {
  /**
  The subject of the notification. */
  accountnotificationsubject?: string;
  /**
  The message body of the notification. */
  accountnotificationmessage?: string;
  /**
  The start date and time of the notification in ISO8601 format. e.g.
  2014-01-01T01:00Z */
  accountnotificationstartat?: Date;
  /**
  The end date and time of the notification in ISO8601 format. e.g.
  2014-01-01T01:00Z */
  accountnotificationendat?: Date;
  /**
  Allowed values: warning, information, question, error, calendar */
  accountnotificationicon?: string;
  /**
  The role(s) to send global notification to.  Note:  ommitting this field will
  send to everyone Example: account_notification_roles: ["StudentEnrollment",
  "TeacherEnrollment"] */
  account_notification_roles?: string[];
}

export interface UpdateGlobalNotificationParams {
  /**
  The subject of the notification. */
  accountnotificationsubject?: string;
  /**
  The message body of the notification. */
  accountnotificationmessage?: string;
  /**
  The start date and time of the notification in ISO8601 format. e.g.
  2014-01-01T01:00Z */
  accountnotificationstartat?: Date;
  /**
  The end date and time of the notification in ISO8601 format. e.g.
  2014-01-01T01:00Z */
  accountnotificationendat?: Date;
  /**
  Allowed values: warning, information, question, error, calendar */
  accountnotificationicon?: string;
  /**
  The role(s) to send global notification to.  Note:  ommitting this field will
  send to everyone Example: account_notification_roles: ["StudentEnrollment",
  "TeacherEnrollment"] */
  account_notification_roles?: string[];
}

export interface StartReportParams {
  /**
  The parameters will vary for each report. To fetch a list of available
  parameters for each report, see List Available Reports. A few example parameters
  have been provided below. Note that the example parameters provided below may
  not be valid for every report. */
  parameters?: string;
  /**
  If true, no message will be sent to the user upon completion of the report. */
  parametersskipmessage?: boolean;
  /**
  The id of the course to report on. Note: this parameter has been listed to serve
  as an example and may not be valid for every report. */
  parameterscourseid?: number;
  /**
  If true, user data will be included. If false, user data will be omitted. Note:
  this parameter has been listed to serve as an example and may not be valid for
  every report. */
  parametersusers?: boolean;
}

export interface ListAccountsParams {
  /**
  Allowed values: lti_guid, registration_settings, services */
  include?: string[];
}

export interface PermissionsParams {
  /**
  List of permissions to check against the authenticated user. Permission names
  are documented in the Create a role endpoint. */
  permissions?: string[];
}

export interface GetTheSubaccountsOfAnAccountParams {
  /**
  If true, the entire account tree underneath this account will be returned
  (though still paginated). If false, only direct sub-accounts of this account
  will be returned. Defaults to false. */
  recursive?: boolean;
}

export interface ListActiveCoursesInAnAccountParams {
  /**
  If true, include only courses with at least one enrollment.  If false, include
  only courses with no enrollments.  If not present, do not filter on course
  enrollment status. */
  withenrollments?: boolean;
  /**
  Allowed values: teacher, student, ta, observer, designer */
  enrollment_type?: string[];
  /**
  If true, include only published courses.  If false, exclude published courses.
  If not present, do not filter on published status. */
  published?: boolean;
  /**
  If true, include only completed courses (these may be in state 'completed', or
  their enrollment term may have ended).  If false, exclude completed courses.  If
  not present, do not filter on completed status. */
  completed?: boolean;
  /**
  If true, include only blueprint courses. If false, exclude them. If not present,
  do not filter on this basis. */
  blueprint?: boolean;
  /**
  If true, include only courses that inherit content from a blueprint course. If
  false, exclude them. If not present, do not filter on this basis. */
  blueprintassociated?: boolean;
  /**
  List of User IDs of teachers; if supplied, include only courses taught by one of
  the referenced users. */
  by_teachers?: number[];
  /**
  List of Account IDs; if supplied, include only courses associated with one of
  the referenced subaccounts. */
  by_subaccounts?: number[];
  /**
  If present, only return courses that have at least one enrollment. Equivalent to
  'with_enrollments=true'; retained for compatibility. */
  hideenrollmentlesscourses?: boolean;
  /**
  Allowed values: created, claimed, available, completed, deleted, all */
  state?: string[];
  /**
  If set, only includes courses from the specified term. */
  enrollmenttermid?: number;
  /**
  The partial course name, code, or full ID to match and return in the results
  list. Must be at least 3 characters. */
  searchterm?: string;
  /**
  Allowed values: syllabus_body, term, course_progress, storage_quota_used_mb,
  total_students, teachers, account_name, concluded */
  include?: string[];
  /**
  Allowed values: course_name, sis_course_id, teacher, account_name */
  sort?: string;
  /**
  Allowed values: asc, desc */
  order?: string;
  /**
  Allowed values: course, teacher */
  searchby?: string;
  /**
  If set, only return courses that start before the value (inclusive) or their
  enrollment term starts before the value (inclusive) or both the course's
  start_at and the enrollment term's start_at are set to null. The value should be
  formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ. */
  startsbefore?: Date;
  /**
  If set, only return courses that end after the value (inclusive) or their
  enrollment term ends after the value (inclusive) or both the course's end_at and
  the enrollment term's end_at are set to null. The value should be formatted as:
  yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ. */
  endsafter?: Date;
  /**
  If set, only return homeroom courses. */
  homeroom?: boolean;
}

export interface UpdateAnAccountParams {
  /**
  Updates the account name */
  accountname?: string;
  /**
  Updates the account sis_account_id Must have manage_sis permission and must not
  be a root_account. */
  accountsisaccountid?: string;
  /**
  The default time zone of the account. Allowed time zones are IANA time zones or
  friendlier Ruby on Rails time zones. */
  accountdefaulttimezone?: string;
  /**
  The default course storage quota to be used, if not otherwise specified. */
  accountdefaultstoragequotamb?: number;
  /**
  The default user storage quota to be used, if not otherwise specified. */
  accountdefaultuserstoragequotamb?: number;
  /**
  The default group storage quota to be used, if not otherwise specified. */
  accountdefaultgroupstoragequotamb?: number;
  /**
  The ID of a course to be used as a template for all newly created courses. Empty
  means to inherit the setting from parent account, 0 means to not use a template
  even if a parent account has one set. The course must be marked as a template. */
  accountcoursetemplateid?: number;
  /**
  Restrict students from viewing courses after end date */
  accountsettingsrestrictstudentpastviewvalue?: boolean;
  /**
  Lock this setting for sub-accounts and courses */
  accountsettingsrestrictstudentpastviewlocked?: boolean;
  /**
  Restrict students from viewing courses before start date */
  accountsettingsrestrictstudentfutureviewvalue?: boolean;
  /**
  Determines whether this account has Microsoft Teams Sync enabled or not. Note
  that if you are altering Microsoft Teams sync settings you must enable the
  Microsoft Group enrollment syncing feature flag. In addition, if you are
  enabling Microsoft Teams sync, you must also specify a tenant, login attribute,
  and a remote attribute. Specifying a suffix to use is optional. */
  accountsettingsmicrosoftsyncenabled?: boolean;
  /**
  The tenant this account should use when using Microsoft Teams Sync. This should
  be an Azure Active Directory domain name. */
  accountsettingsmicrosoftsynctenant?: string;
  /**
  The attribute this account should use to lookup users when using Microsoft Teams
  Sync. Must be one of “sub”, “email”, “oid”, “preferred_username”, or
  “integration_id”. */
  accountsettingsmicrosoftsyncloginattribute?: string;
  /**
  A suffix that will be appended to the result of the login attribute when
  associating Canvas users with Microsoft users. Must be under 255 characters and
  contain no whitespace. This field is optional. */
  accountsettingsmicrosoftsyncloginattributesuffix?: string;
  /**
  The Active Directory attribute to use when associating Canvas users with
  Microsoft users. Must be one of “mail”, “mailNickname”, or “userPrincipalName”. */
  accountsettingsmicrosoftsyncremoteattribute?: string;
  /**
  Lock this setting for sub-accounts and courses */
  accountsettingsrestrictstudentfutureviewlocked?: boolean;
  /**
  Disable comments on announcements */
  accountsettingslockallannouncementsvalue?: boolean;
  /**
  Lock this setting for sub-accounts and courses */
  accountsettingslockallannouncementslocked?: boolean;
  /**
  Copyright and license information must be provided for files before they are
  published. */
  accountsettingsusagerightsrequiredvalue?: boolean;
  /**
  Lock this setting for sub-accounts and courses */
  accountsettingsusagerightsrequiredlocked?: boolean;
  /**
  Restrict students from viewing future enrollments in course list */
  accountsettingsrestrictstudentfuturelistingvalue?: boolean;
  /**
  Lock this setting for sub-accounts and courses */
  accountsettingsrestrictstudentfuturelistinglocked?: boolean;
  /**
  Enable or disable individual learning paths for students based on assessment */
  accountsettingsconditionalreleasevalue?: boolean;
  /**
  Lock this setting for sub-accounts and courses */
  accountsettingsconditionalreleaselocked?: boolean;
  /**
  Default is true. If false, any fields containing “sticky” changes will not be
  updated. See SIS CSV Format documentation for information on which fields can
  have SIS stickiness */
  overridesisstickiness?: boolean;
  /**
  DEPRECATED  Restrict instructors from changing mastery scale */
  accountsettingslockoutcomeproficiencyvalue?: boolean;
  /**
  DEPRECATED  Lock this setting for sub-accounts and courses */
  accountlockoutcomeproficiencylocked?: boolean;
  /**
  DEPRECATED  Restrict instructors from changing proficiency calculation method */
  accountsettingslockproficiencycalculationvalue?: boolean;
  /**
  DEPRECATED  Lock this setting for sub-accounts and courses */
  accountlockproficiencycalculationlocked?: boolean;
  /**
  Give this a set of keys and boolean values to enable or disable services
  matching the keys */
  accountservices?: unknown;
}

export interface CreateNewSubaccountParams {
  /**
  The name of the new sub-account. */
  accountname?: string;
  /**
  The account's identifier in the Student Information System. */
  accountsisaccountid?: string;
  /**
  The default course storage quota to be used, if not otherwise specified. */
  accountdefaultstoragequotamb?: number;
  /**
  The default user storage quota to be used, if not otherwise specified. */
  accountdefaultuserstoragequotamb?: number;
  /**
  The default group storage quota to be used, if not otherwise specified. */
  accountdefaultgroupstoragequotamb?: number;
}

export interface MakeAnAccountAdminParams {
  /**
  The id of the user to promote. */
  userid?: number;
  /**
  DEPRECATED  The user's admin relationship with the account will be  created with
  the given role. Defaults to 'AccountAdmin'. */
  role?: string;
  /**
  The user's admin relationship with the account will be created with the given
  role. Defaults to the built-in role for 'AccountAdmin'. */
  roleid?: number;
  /**
  Send a notification email to the new admin if true. Default is true. */
  sendconfirmation?: boolean;
}

export interface RemoveAccountAdminParams {
  /**
  DEPRECATED  Account role to remove from the user. */
  role?: string;
  /**
  The id of the role representing the user's admin relationship with the account. */
  roleid?: number;
}

export interface ListAccountAdminsParams {
  /**
  Scope the results to those with user IDs equal to any of the IDs specified here. */
  user_id?: number[][];
}

export interface GetCourselevelAssignmentDataParams {
  /**
  If async is true, then the course_assignments call can happen asynch- ronously
  and MAY return a response containing a progress_url key instead of an
  assignments array. If it does, then it is the caller's responsibility to poll
  the API again to see if the progress is complete. If the data is ready (possibly
  even on the first async call) then it will be passed back normally, as
  documented in the example response. */
  async?: boolean;
}

export interface GetCourselevelStudentSummaryDataParams {
  /**
  Allowed values: name, name_descending, score, score_descending, participations,
  participations_descending, page_views, page_views_descending */
  sortcolumn?: string;
  /**
  If set, returns only the specified student. */
  studentid?: string;
}

export interface CreateAnExternalFeedParams {
  /**
  The url to the external rss or atom feed */
  url?: string;
  /**
  If given, only feed entries that contain this string in their title will be
  imported */
  headermatch?: boolean;
  /**
  Allowed values: full, truncate, link_only */
  verbosity?: string;
}

export interface ListAnnouncementsParams {
  /**
  List of context_codes to retrieve announcements for (for example, course_123).
  Only courses are presently supported. The call will fail unless the caller has
  View Announcements permission in all listed courses. */
  context_codes?: string[];
  /**
  Only return announcements posted since the start_date (inclusive). Defaults to
  14 days ago. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-
  DDTHH:MM:SSZ. */
  startdate?: Date;
  /**
  Only return announcements posted before the end_date (inclusive). Defaults to 28
  days from start_date. The value should be formatted as: yyyy-mm-dd or ISO 8601
  YYYY-MM-DDTHH:MM:SSZ. Announcements scheduled for future posting will only be
  returned to course administrators. */
  enddate?: Date;
  /**
  Only return active announcements that have been published. Applies only to
  requesting users that have permission to view unpublished items. Defaults to
  false for users with access to view unpublished items, otherwise true and
  unmodifiable. */
  activeonly?: boolean;
  /**
  Only return the latest announcement for each associated context. The response
  will include at most one announcement for each specified context in the
  context_codes[] parameter. Defaults to false. */
  latestonly?: boolean;
  /**
  Optional list of resources to include with the response. May include a string of
  the name of the resource. Possible values are: “sections”, “sections_user_count”
  if “sections” is passed, includes the course sections that are associated with
  the topic, if the topic is specific to certain sections of the course. If
  “sections_user_count” is passed, then: (a) If sections were asked for *and* the
  topic is specific to certain     course sections sections, includes the number
  of users in each     section. (as part of the section json asked for above) (b)
  Else, includes at the root level the total number of users in the     topic's
  context (group or course) that the topic applies to. */
  include?: unknown[];
}

export interface ListScopesParams {
  /**
  Allowed values: resource_name */
  groupby?: string;
}

export interface ListAppointmentGroupsParams {
  /**
  Allowed values: reservable, manageable */
  scope?: string;
  /**
  Array of context codes used to limit returned results. */
  context_codes?: string[];
  /**
  Defaults to false. If true, includes past appointment groups */
  includepastappointments?: boolean;
  /**
  Allowed values: appointments, child_events, participant_count, reserved_times,
  all_context_codes */
  include?: string[];
}

export interface CreateAnAppointmentGroupParams {
  /**
  Array of context codes (courses, e.g. course_1) this group should be linked to
  (1 or more). Users in the course(s) with appropriate permissions will be able to
  sign up for this appointment group. */
  "appointment_group[context_codes]"?: string[];
  /**
  Array of sub context codes (course sections or a single group category) this
  group should be linked to. Used to limit the appointment group to particular
  sections. If a group category is specified, students will sign up in groups and
  the participant_type will be “Group” instead of “User”. */
  "appointment_group[sub_context_codes]"?: string[];
  /**
  Short title for the appointment group. */
  appointmentgrouptitle?: string;
  /**
  Longer text description of the appointment group. */
  appointmentgroupdescription?: string;
  /**
  Location name of the appointment group. */
  appointmentgrouplocationname?: string;
  /**
  Location address. */
  appointmentgrouplocationaddress?: string;
  /**
  Indicates whether this appointment group should be published (i.e. made
  available for signup). Once published, an appointment group cannot be
  unpublished. Defaults to false. */
  appointmentgrouppublish?: boolean;
  /**
  Maximum number of participants that may register for each time slot. Defaults to
  null (no limit). */
  appointmentgroupparticipantsperappointment?: number;
  /**
  Minimum number of time slots a user must register for. If not set, users do not
  need to sign up for any time slots. */
  appointmentgroupminappointmentsperparticipant?: number;
  /**
  Maximum number of time slots a user may register for. */
  appointmentgroupmaxappointmentsperparticipant?: number;
  /**
  Nested array of start time/end time pairs indicating time slots for this
  appointment group. Refer to the example request. */
  "appointment_group[new_appointments][X]"?: string[];
  /**
  Allowed values: private, protected */
  appointmentgroupparticipantvisibility?: string;
}

export interface GetSingleAppointmentGroupParams {
  /**
  Allowed values: child_events, appointments, all_context_codes */
  include?: string[];
}

export interface UpdateAnAppointmentGroupParams {
  /**
  Array of context codes (courses, e.g. course_1) this group should be linked to
  (1 or more). Users in the course(s) with appropriate permissions will be able to
  sign up for this appointment group. */
  "appointment_group[context_codes]"?: string[];
  /**
  Array of sub context codes (course sections or a single group category) this
  group should be linked to. Used to limit the appointment group to particular
  sections. If a group category is specified, students will sign up in groups and
  the participant_type will be “Group” instead of “User”. */
  "appointment_group[sub_context_codes]"?: string[];
  /**
  Short title for the appointment group. */
  appointmentgrouptitle?: string;
  /**
  Longer text description of the appointment group. */
  appointmentgroupdescription?: string;
  /**
  Location name of the appointment group. */
  appointmentgrouplocationname?: string;
  /**
  Location address. */
  appointmentgrouplocationaddress?: string;
  /**
  Indicates whether this appointment group should be published (i.e. made
  available for signup). Once published, an appointment group cannot be
  unpublished. Defaults to false. */
  appointmentgrouppublish?: boolean;
  /**
  Maximum number of participants that may register for each time slot. Defaults to
  null (no limit). */
  appointmentgroupparticipantsperappointment?: number;
  /**
  Minimum number of time slots a user must register for. If not set, users do not
  need to sign up for any time slots. */
  appointmentgroupminappointmentsperparticipant?: number;
  /**
  Maximum number of time slots a user may register for. */
  appointmentgroupmaxappointmentsperparticipant?: number;
  /**
  Nested array of start time/end time pairs indicating time slots for this
  appointment group. Refer to the example request. */
  "appointment_group[new_appointments][X]"?: string[];
  /**
  Allowed values: private, protected */
  appointmentgroupparticipantvisibility?: string;
}

export interface DeleteAnAppointmentGroupParams {
  /**
  Reason for deleting/canceling the appointment group. */
  cancelreason?: string;
}

export interface ListUserParticipantsParams {
  /**
  Allowed values: all, registered, registered */
  registrationstatus?: string;
}

export interface ListStudentGroupParticipantsParams {
  /**
  Allowed values: all, registered, registered */
  registrationstatus?: string;
}

export interface GetNextAppointmentParams {
  /**
  List of ids of appointment groups to search. */
  appointment_group_ids?: string[];
}

export interface SetExtensionsForStudentAssignmentSubmissionsParams {
  /**
  The ID of the user we want to add assignment extensions for. */
  assignmentextensionsuserid?: number;
  /**
  Number of times the student is allowed to re-take the assignment over the limit. */
  assignmentextensionsextraattempts?: number;
}

export interface ListAssignmentGroupsParams {
  /**
  Allowed values: assignments, discussion_topic, all_dates, assignment_visibility,
  overrides, submission, observed_users, can_edit, score_statistics */
  include?: string[];
  /**
  If “assignments” are included, optionally return only assignments having their
  ID in this array. This argument may also be passed as a comma separated string. */
  assignment_ids?: string[];
  /**
  Allowed values: online_quiz, discussion_topic, wiki_page, external_tool */
  exclude_assignment_submission_types?: string[];
  /**
  Apply assignment overrides for each assignment, defaults to true. */
  overrideassignmentdates?: boolean;
  /**
  The id of the grading period in which assignment groups are being requested
  (Requires grading periods to exist.) */
  gradingperiodid?: number;
  /**
  If true, all assignments returned will apply to the current user in the
  specified grading period. If assignments apply to other students in the
  specified grading period, but not the current user, they will not be returned.
  (Requires the grading_period_id argument and grading periods to exist. In
  addition, the current user must be a student.) */
  scopeassignmentstostudent?: boolean;
}

export interface GetAnAssignmentGroupParams {
  /**
  Allowed values: assignments, discussion_topic, assignment_visibility,
  submission, score_statistics */
  include?: string[];
  /**
  Apply assignment overrides for each assignment, defaults to true. */
  overrideassignmentdates?: boolean;
  /**
  The id of the grading period in which assignment groups are being requested
  (Requires grading periods to exist on the account) */
  gradingperiodid?: number;
}

export interface CreateAnAssignmentGroupParams {
  /**
  The assignment group's name */
  name?: string;
  /**
  The position of this assignment group in relation to the other assignment groups */
  position?: number;
  /**
  The percent of the total grade that this assignment group represents */
  groupweight?: number;
  /**
  The sis source id of the Assignment Group */
  sissourceid?: string;
  /**
  The integration data of the Assignment Group */
  integrationdata?: Record<string, unknown>;
  /**
  The grading rules that are applied within this assignment group See the
  Assignment Group object definition for format */
  rules?: string;
}

export interface DestroyAnAssignmentGroupParams {
  /**
  The ID of an active Assignment Group to which the assignments that are currently
  assigned to the destroyed Assignment Group will be assigned. NOTE: If this
  argument is not provided, any assignments in this Assignment Group will be
  deleted. */
  moveassignmentsto?: number;
}

export interface ListAssignmentsParams {
  /**
  Allowed values: submission, assignment_visibility, all_dates, overrides,
  observed_users, can_edit, score_statistics */
  include?: string[];
  /**
  The partial title of the assignments to match and return. */
  searchterm?: string;
  /**
  Apply assignment overrides for each assignment, defaults to true. */
  overrideassignmentdates?: boolean;
  /**
  Split up “needs_grading_count” by sections into the
  “needs_grading_count_by_section” key, defaults to false */
  needsgradingcountbysection?: boolean;
  /**
  Allowed values: past, overdue, undated, ungraded, unsubmitted, upcoming, future */
  bucket?: string;
  /**
  if set, return only assignments specified */
  assignment_ids?: string[];
  /**
  Allowed values: position, name, due_at */
  orderby?: string;
  /**
  Return only assignments that have post_to_sis set or not set. */
  posttosis?: boolean;
}

export interface DuplicateAssignnmentParams {
  /**
  Allowed values: Quiz */
  resulttype?: string;
}

export interface GetSingleAssignmentParams {
  /**
  Allowed values: submission, assignment_visibility, overrides, observed_users,
  can_edit, score_statistics */
  include?: string[];
  /**
  Apply assignment overrides to the assignment, defaults to true. */
  overrideassignmentdates?: boolean;
  /**
  Split up “needs_grading_count” by sections into the
  “needs_grading_count_by_section” key, defaults to false */
  needsgradingcountbysection?: boolean;
  /**
  All dates associated with the assignment, if applicable */
  alldates?: boolean;
}

export interface CreateAnAssignmentParams {
  /**
  The assignment name. */
  assignmentname?: string;
  /**
  The position of this assignment in the group when displaying assignment lists. */
  assignmentposition?: number;
  /**
  Allowed values: online_quiz, none, on_paper, discussion_topic, external_tool,
  online_upload, online_text_entry, online_url, media_recording,
  student_annotation */
  "assignment[submission_types]"?: string[];
  /**
  Allowed extensions if submission_types includes “online_upload” Example:
  allowed_extensions: ["docx","ppt"] */
  "assignment[allowed_extensions]"?: string[];
  /**
  Only applies when the Turnitin plugin is enabled for a course and the
  submission_types array includes “online_upload”. Toggles Turnitin submissions
  for the assignment. Will be ignored if Turnitin is not available for the course. */
  assignmentturnitinenabled?: boolean;
  /**
  Only applies when the VeriCite plugin is enabled for a course and the
  submission_types array includes “online_upload”. Toggles VeriCite submissions
  for the assignment. Will be ignored if VeriCite is not available for the course. */
  assignmentvericiteenabled?: boolean;
  /**
  Settings to send along to turnitin. See Assignment object definition for format. */
  assignmentturnitinsettings?: string;
  /**
  Data used for SIS integrations. Requires admin-level token with the “Manage SIS”
  permission. JSON string required. */
  assignmentintegrationdata?: string;
  /**
  Unique ID from third party integrations */
  assignmentintegrationid?: string;
  /**
  If submission_types does not include external_tool,discussion_topic,
  online_quiz, or on_paper, determines whether or not peer reviews will be turned
  on for the assignment. */
  assignmentpeerreviews?: boolean;
  /**
  Whether peer reviews will be assigned automatically by Canvas or if teachers
  must manually assign peer reviews. Does not apply if peer reviews are not
  enabled. */
  assignmentautomaticpeerreviews?: boolean;
  /**
  If true, Canvas will send a notification to students in the class notifying them
  that the content has changed. */
  assignmentnotifyofupdate?: boolean;
  /**
  If present, the assignment will become a group assignment assigned to the group. */
  assignmentgroupcategoryid?: number;
  /**
  If this is a group assignment, teachers have the options to grade students
  individually. If false, Canvas will apply the assignment's score to each member
  of the group. If true, the teacher can manually assign scores to each member of
  the group. */
  assignmentgradegroupstudentsindividually?: number;
  /**
  Hash of external tool parameters if submission_types is [“external_tool”]. See
  Assignment object definition for format. */
  assignmentexternaltooltagattributes?: string;
  /**
  The maximum points possible on the assignment. */
  assignmentpointspossible?: number;
  /**
  Allowed values: pass_fail, percent, letter_grade, gpa_scale, points, not_graded */
  assignmentgradingtype?: string;
  /**
  The day/time the assignment is due. Must be between the lock dates if there are
  lock dates. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. */
  assignmentdueat?: Date;
  /**
  The day/time the assignment is locked after. Must be after the due date if there
  is a due date. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. */
  assignmentlockat?: Date;
  /**
  The day/time the assignment is unlocked. Must be before the due date if there is
  a due date. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. */
  assignmentunlockat?: Date;
  /**
  The assignment's description, supports HTML. */
  assignmentdescription?: string;
  /**
  The assignment group id to put the assignment in. Defaults to the top assignment
  group in the course. */
  assignmentassignmentgroupid?: number;
  /**
  List of overrides for the assignment. */
  "assignment[assignment_overrides]"?: AssignmentOverride[];
  /**
  Whether this assignment is only visible to overrides (Only useful if
  'differentiated assignments' account setting is on) */
  assignmentonlyvisibletooverrides?: boolean;
  /**
  Whether this assignment is published. (Only useful if 'draft state' account
  setting is on) Unpublished assignments are not visible to students. */
  assignmentpublished?: boolean;
  /**
  The grading standard id to set for the course.  If no value is provided for this
  argument the current grading_standard will be un-set from this course. This will
  update the grading_type for the course to 'letter_grade' unless it is already
  'gpa_scale'. */
  assignmentgradingstandardid?: number;
  /**
  Whether this assignment is counted towards a student's final grade. */
  assignmentomitfromfinalgrade?: boolean;
  /**
  Whether this assignment should use the Quizzes 2 LTI tool. Sets the submission
  type to 'external_tool' and configures the external tool attributes to use the
  Quizzes 2 LTI tool configured for this course. Has no effect if no Quizzes 2 LTI
  tool is configured. */
  assignmentquizlti?: boolean;
  /**
  Whether this assignment is moderated. */
  assignmentmoderatedgrading?: boolean;
  /**
  The maximum number of provisional graders who may issue grades for this
  assignment. Only relevant for moderated assignments. Must be a positive value,
  and must be set to 1 if the course has fewer than two active instructors.
  Otherwise, the maximum value is the number of active instructors in the course
  minus one, or 10 if the course has more than 11 active instructors. */
  assignmentgradercount?: number;
  /**
  The user ID of the grader responsible for choosing final grades for this
  assignment. Only relevant for moderated assignments. */
  assignmentfinalgraderid?: number;
  /**
  Boolean indicating if provisional graders' comments are visible to other
  provisional graders. Only relevant for moderated assignments. */
  assignmentgradercommentsvisibletograders?: boolean;
  /**
  Boolean indicating if provisional graders' identities are hidden from other
  provisional graders. Only relevant for moderated assignments. */
  assignmentgradersanonymoustograders?: boolean;
  /**
  Boolean indicating if provisional grader identities are visible to the the final
  grader. Only relevant for moderated assignments. */
  assignmentgradersnamesvisibletofinalgrader?: boolean;
  /**
  Boolean indicating if the assignment is graded anonymously. If true, graders
  cannot see student identities. */
  assignmentanonymousgrading?: boolean;
  /**
  The number of submission attempts allowed for this assignment. Set to -1 for
  unlimited attempts. */
  assignmentallowedattempts?: number;
  /**
  The Attachment ID of the document being annotated. Only applies when
  submission_types includes “student_annotation”. */
  assignmentannotatableattachmentid?: number;
}

export interface EditAnAssignmentParams {
  /** */
  assignmentname?: string;
  /** */
  assignmentposition?: number;
  /** */
  "assignment[submission_types]"?: string[];
  /** */
  "assignment[allowed_extensions]"?: string[];
  /** */
  assignmentturnitinenabled?: boolean;
  /** */
  assignmentvericiteenabled?: boolean;
  /** */
  assignmentturnitinsettings?: string;
  /** */
  assignmentsisassignmentid?: string;
  /** */
  assignmentintegrationdata?: string;
  /** */
  assignmentintegrationid?: string;
  /** */
  assignmentpeerreviews?: boolean;
  /** */
  assignmentautomaticpeerreviews?: boolean;
  /** */
  assignmentnotifyofupdate?: boolean;
  /** */
  assignmentgroupcategoryid?: number;
  /** */
  assignmentgradegroupstudentsindividually?: number;
  /** */
  assignmentexternaltooltagattributes?: string;
  /** */
  assignmentpointspossible?: number;
  /** */
  assignmentgradingtype?: string;
  /** */
  assignmentdueat?: Date;
  /** */
  assignmentlockat?: Date;
  /** */
  assignmentunlockat?: Date;
  /** */
  assignmentdescription?: string;
  /** */
  assignmentassignmentgroupid?: number;
  /** */
  "assignment[assignment_overrides]"?: AssignmentOverride[];
  /** */
  assignmentonlyvisibletooverrides?: boolean;
  /** */
  assignmentpublished?: boolean;
  /** */
  assignmentgradingstandardid?: number;
  /** */
  assignmentomitfromfinalgrade?: boolean;
  /** */
  assignmentmoderatedgrading?: boolean;
  /** */
  assignmentgradercount?: number;
  /** */
  assignmentfinalgraderid?: number;
  /** */
  assignmentgradercommentsvisibletograders?: boolean;
  /** */
  assignmentgradersanonymoustograders?: boolean;
  /** */
  assignmentgradersnamesvisibletofinalgrader?: boolean;
  /** */
  assignmentanonymousgrading?: boolean;
  /** */
  assignmentallowedattempts?: number;
  /** */
  assignmentannotatableattachmentid?: number;
  /** */
  assignmentforceupdatedat?: boolean;
}

export interface CreateAnAssignmentOverrideParams {
  /**
  The IDs of the override's target students. If present, the IDs must each
  identify a user with an active student enrollment in the course that is not
  already targetted by a different adhoc override. */
  "assignment_override[student_ids]"?: number[];
  /**
  The title of the adhoc assignment override. Required if student_ids is present,
  ignored otherwise (the title is set to the name of the targetted group or
  section instead). */
  assignmentoverridetitle?: string;
  /**
  The ID of the override's target group. If present, the following conditions must
  be met for the override to be successful:  the assignment MUST be a group
  assignment (a group_category_id is assigned to it)  the ID must identify an
  active group in the group set the assignment is in  the ID must not be targetted
  by a different override  See Appendix: Group assignments for more info. */
  assignmentoverridegroupid?: number;
  /**
  The ID of the override's target section. If present, must identify an active
  section of the assignment's course not already targetted by a different
  override. */
  assignmentoverridecoursesectionid?: number;
  /**
  The day/time the overridden assignment is due. Accepts times in ISO 8601 format,
  e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect due date.
  May be present but null to indicate the override removes any previous due date. */
  assignmentoverridedueat?: Date;
  /**
  The day/time the overridden assignment becomes unlocked. Accepts times in ISO
  8601 format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect
  the unlock date. May be present but null to indicate the override removes any
  previous unlock date. */
  assignmentoverrideunlockat?: Date;
  /**
  The day/time the overridden assignment becomes locked. Accepts times in ISO 8601
  format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect the
  lock date. May be present but null to indicate the override removes any previous
  lock date. */
  assignmentoverridelockat?: Date;
}

export interface UpdateAnAssignmentOverrideParams {
  /**
  The IDs of the override's target students. If present, the IDs must each
  identify a user with an active student enrollment in the course that is not
  already targetted by a different adhoc override. Ignored unless the override
  being updated is adhoc. */
  "assignment_override[student_ids]"?: number[];
  /**
  The title of an adhoc assignment override. Ignored unless the override being
  updated is adhoc. */
  assignmentoverridetitle?: string;
  /**
  The day/time the overridden assignment is due. Accepts times in ISO 8601 format,
  e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect due date.
  May be present but null to indicate the override removes any previous due date. */
  assignmentoverridedueat?: Date;
  /**
  The day/time the overridden assignment becomes unlocked. Accepts times in ISO
  8601 format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect
  the unlock date. May be present but null to indicate the override removes any
  previous unlock date. */
  assignmentoverrideunlockat?: Date;
  /**
  The day/time the overridden assignment becomes locked. Accepts times in ISO 8601
  format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect the
  lock date. May be present but null to indicate the override removes any previous
  lock date. */
  assignmentoverridelockat?: Date;
}

export interface BatchRetrieveOverridesInCourseParams {
  /**
  Ids of overrides to retrieve */
  assignmentoverridesid?: string;
  /**
  Ids of assignments for each override */
  assignmentoverridesassignmentid?: string;
}

export interface BatchCreateOverridesInCourseParams {
  /**
  Attributes for the new assignment overrides. See Create an assignment override
  for available attributes */
  assignment_overrides?: AssignmentOverride[];
}

export interface BatchUpdateOverridesInCourseParams {
  /**
  Attributes for the updated overrides. */
  assignment_overrides?: AssignmentOverride[];
}

export interface QueryByLoginParams {
  /**
  The beginning of the time range from which you want events. Events are stored
  for one year. */
  starttime?: Date;
  /**
  The end of the time range from which you want events. */
  endtime?: Date;
}

export interface QueryByAccountParams {
  /**
  The beginning of the time range from which you want events. Events are stored
  for one year. */
  starttime?: Date;
  /**
  The end of the time range from which you want events. */
  endtime?: Date;
}

export interface QueryByUserParams {
  /**
  The beginning of the time range from which you want events. Events are stored
  for one year. */
  starttime?: Date;
  /**
  The end of the time range from which you want events. */
  endtime?: Date;
}

export interface CreateBlackoutDateParams {
  /**
  The start date of the blackout date. */
  startdate?: Date;
  /**
  The end date of the blackout date. */
  enddate?: Date;
  /**
  The title of the blackout date. */
  eventtitle?: string;
}

export interface UpdateBlackoutDateParams {
  /**
  The start date of the blackout date. */
  startdate?: Date;
  /**
  The end date of the blackout date. */
  enddate?: Date;
  /**
  The title of the blackout date. */
  eventtitle?: string;
}

export interface UpdateListOfBlackoutDatesParams {
  /**
  blackout_date, …  An object containing the array of BlackoutDates we want to
  exist after this operation. For array entries, if it has an id it will be
  updated, if not created, and if an existing BlackoutDate id is missing from the
  array, it will be deleted. */
  blackoutdates?: string;
}

export interface UpdateAssociatedCoursesParams {
  /**
  Courses to add as associated courses */
  courseidstoadd?: unknown[];
  /**
  Courses to remove as associated courses */
  courseidstoremove?: unknown[];
}

export interface BeginMigrationToPushToAssociatedCoursesParams {
  /**
  An optional comment to be included in the sync history. */
  comment?: string;
  /**
  Send a notification to the calling user when the sync completes. */
  sendnotification?: boolean;
  /**
  Whether course settings should be copied over to associated courses. Defaults to
  true for newly associated courses. */
  copysettings?: boolean;
  /**
  If set, newly associated courses will be automatically published after the sync
  completes */
  publishafterinitialsync?: boolean;
}

export interface SetOrRemoveRestrictionsOnBlueprintCourseObjectParams {
  /**
  String, “assignment”|“attachment”|“discussion_topic”|“external_tool”|“lti-
  quiz”|“quiz”|“wiki_page”  The type of the object. */
  contenttype?: string;
  /**
  The ID of the object. */
  contentid?: number;
  /**
  Whether to apply restrictions. */
  restricted?: boolean;
  /**
  (Optional) If the object is restricted, this specifies a set of restrictions. If
  not specified, the course-level restrictions will be used. See Course API update
  documentation */
  restrictions?: BlueprintRestriction;
}

export interface CreateBookmarkParams {
  /**
  The name of the bookmark */
  name?: string;
  /**
  The url of the bookmark */
  url?: string;
  /**
  The position of the bookmark. Defaults to the bottom. */
  position?: number;
  /**
  The data associated with the bookmark */
  data?: string;
}

export interface UpdateBookmarkParams {
  /**
  The name of the bookmark */
  name?: string;
  /**
  The url of the bookmark */
  url?: string;
  /**
  The position of the bookmark. Defaults to the bottom. */
  position?: number;
  /**
  The data associated with the bookmark */
  data?: string;
}

export interface ListCalendarEventsParams {
  /**
  Allowed values: event, assignment */
  type?: string;
  /**
  Only return events since the start_date (inclusive). Defaults to today. The
  value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ. */
  startdate?: Date;
  /**
  Only return events before the end_date (inclusive). Defaults to start_date. The
  value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ. If
  end_date is the same as start_date, then only events on that day are returned. */
  enddate?: Date;
  /**
  Defaults to false (dated events only). If true, only return undated events and
  ignore start_date and end_date. */
  undated?: boolean;
  /**
  Defaults to false (uses start_date, end_date, and undated criteria). If true,
  all events are returned, ignoring start_date, end_date, and undated criteria. */
  allevents?: boolean;
  /**
  List of context codes of courses/groups/users whose events you want to see. If
  not specified, defaults to the current user (i.e personal calendar, no
  course/group events). Limited to 10 context codes, additional ones are ignored.
  The format of this field is the context type, followed by an underscore,
  followed by the context id. For example: course_42 */
  context_codes?: string[];
  /**
  Array of attributes to exclude. Possible values are “description”,
  “child_events” and “assignment” */
  excludes?: unknown[][];
  /**
  Array of optional attributes to include. Possible values are “web_conferenes”
  and “series_natural_language” */
  includes?: unknown[][];
  /**
  Defaults to false. If true, only events with important dates set to true will be
  returned. */
  importantdates?: boolean;
  /**
  Defaults to false. If true, only events with blackout date set to true will be
  returned. */
  blackoutdate?: boolean;
}

export interface ListCalendarEventsForUserParams {
  /**
  Allowed values: event, assignment */
  type?: string;
  /**
  Only return events since the start_date (inclusive). Defaults to today. The
  value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ. */
  startdate?: Date;
  /**
  Only return events before the end_date (inclusive). Defaults to start_date. The
  value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ. If
  end_date is the same as start_date, then only events on that day are returned. */
  enddate?: Date;
  /**
  Defaults to false (dated events only). If true, only return undated events and
  ignore start_date and end_date. */
  undated?: boolean;
  /**
  Defaults to false (uses start_date, end_date, and undated criteria). If true,
  all events are returned, ignoring start_date, end_date, and undated criteria. */
  allevents?: boolean;
  /**
  List of context codes of courses/groups/users whose events you want to see. If
  not specified, defaults to the current user (i.e personal calendar, no
  course/group events). Limited to 10 context codes, additional ones are ignored.
  The format of this field is the context type, followed by an underscore,
  followed by the context id. For example: course_42 */
  context_codes?: string[];
  /**
  Array of attributes to exclude. Possible values are “description”,
  “child_events” and “assignment” */
  excludes?: unknown[][];
  /**
  When type is “assignment”, specifies the allowable submission types for returned
  assignments. Ignored if type is not “assignment” or if exclude_submission_types
  is provided. */
  submission_types?: unknown[][];
  /**
  When type is “assignment”, specifies the submission types to be excluded from
  the returned assignments. Ignored if type is not “assignment”. */
  exclude_submission_types?: unknown[][];
  /**
  Array of optional attributes to include. Possible values are “web_conferenes”
  and “series_natural_language” */
  includes?: unknown[][];
  /**
  Defaults to false If true, only events with important dates set to true will be
  returned. */
  importantdates?: boolean;
  /**
  Defaults to false If true, only events with blackout date set to true will be
  returned. */
  blackoutdate?: boolean;
}

export interface CreateCalendarEventParams {
  /**
  Context code of the course/group/user whose calendar this event should be added
  to. */
  calendareventcontextcode?: string;
  /**
  Short title for the calendar event. */
  calendareventtitle?: string;
  /**
  Longer HTML description of the event. */
  calendareventdescription?: string;
  /**
  Start date/time of the event. */
  calendareventstartat?: Date;
  /**
  End date/time of the event. */
  calendareventendat?: Date;
  /**
  Location name of the event. */
  calendareventlocationname?: string;
  /**
  Location address */
  calendareventlocationaddress?: string;
  /**
  Time zone of the user editing the event. Allowed time zones are IANA time zones
  or friendlier Ruby on Rails time zones. */
  calendareventtimezoneedited?: string;
  /**
  When true event is considered to span the whole day and times are ignored. */
  calendareventallday?: boolean;
  /**
  Section-level start time(s) if this is a course event. X can be any identifier,
  provided that it is consistent across the start_at, end_at and context_code */
  calendareventchildeventdataXstartat?: Date;
  /**
  Section-level end time(s) if this is a course event. */
  calendareventchildeventdataXendat?: Date;
  /**
  Context code(s) corresponding to the section-level start and end time(s). */
  calendareventchildeventdataXcontextcode?: string;
  /**
  Number of times to copy/duplicate the event.  Count cannot exceed 200. */
  calendareventduplicatecount?: number;
  /**
  Defaults to 1 if duplicate `count` is set.  The interval between the duplicated
  events. */
  calendareventduplicateinterval?: number;
  /**
  Allowed values: daily, weekly, monthly */
  calendareventduplicatefrequency?: string;
  /**
  Defaults to false.  If set to `true`, an increasing counter number will be
  appended to the event title when the event is duplicated.  (e.g. Event 1, Event
  2, Event 3, etc) */
  calendareventduplicateappenditerator?: boolean;
  /**
  If the calendar_series flag is enabled, this parameter replaces the
  calendar_event's duplicate parameter to create a series of recurring events. Its
  value is the iCalendar RRULE defining how the event repeats, though unending
  series not supported. */
  calendareventrrule?: string;
  /**
  If the blackout_date is true, this event represents a holiday or some other
  special day that does not count in course pacing. */
  calendareventblackoutdate?: boolean;
}

export interface ReserveTimeSlotParams {
  /**
  User or group id for whom you are making the reservation (depends on the
  participant type). Defaults to the current user (or user's candidate group). */
  participantid?: string;
  /**
  Comments to associate with this reservation */
  comments?: string;
  /**
  Defaults to false. If true, cancel any previous reservation(s) for this
  participant and appointment group. */
  cancelexisting?: boolean;
}

export interface UpdateCalendarEventParams {
  /**
  Context code of the course/group/user to move this event to. Scheduler
  appointments and events with section-specific times cannot be moved between
  calendars. */
  calendareventcontextcode?: string;
  /**
  Short title for the calendar event. */
  calendareventtitle?: string;
  /**
  Longer HTML description of the event. */
  calendareventdescription?: string;
  /**
  Start date/time of the event. */
  calendareventstartat?: Date;
  /**
  End date/time of the event. */
  calendareventendat?: Date;
  /**
  Location name of the event. */
  calendareventlocationname?: string;
  /**
  Location address */
  calendareventlocationaddress?: string;
  /**
  Time zone of the user editing the event. Allowed time zones are IANA time zones
  or friendlier Ruby on Rails time zones. */
  calendareventtimezoneedited?: string;
  /**
  When true event is considered to span the whole day and times are ignored. */
  calendareventallday?: boolean;
  /**
  Section-level start time(s) if this is a course event. X can be any identifier,
  provided that it is consistent across the start_at, end_at and context_code */
  calendareventchildeventdataXstartat?: Date;
  /**
  Section-level end time(s) if this is a course event. */
  calendareventchildeventdataXendat?: Date;
  /**
  Context code(s) corresponding to the section-level start and end time(s). */
  calendareventchildeventdataXcontextcode?: string;
  /**
  Valid if the calendar_series feature is enabled and the event whose ID is in the
  URL is part of a series. This defines the shape of the recurring event series
  after it's updated. Its value is the iCalendar RRULE, though unending series not
  supported. */
  calendareventrrule?: string;
  /**
  Allowed values: one, all, following */
  which?: string;
  /**
  If the blackout_date is true, this event represents a holiday or some other
  special day that does not count in course pacing. */
  calendareventblackoutdate?: boolean;
}

export interface DeleteCalendarEventParams {
  /**
  Reason for deleting/canceling the event. */
  cancelreason?: string;
  /**
  Allowed values: one, all, following */
  which?: string;
}

export interface SetCourseTimetableParams {
  /**
  An array of timetable objects for the course section specified by
  course_section_id. If course_section_id is set to “all”, events will be created
  for the entire course. */
  "timetables[course_section_id]"?: unknown[][];
  /**
  A comma-separated list of abbreviated weekdays (Mon-Monday, Tue-Tuesday, Wed-
  Wednesday, Thu-Thursday, Fri-Friday, Sat-Saturday, Sun-Sunday) */
  timetablescoursesectionidweekdays?: string;
  /**
  Time to start each event at (e.g. “9:00 am”) */
  timetablescoursesectionidstarttime?: string;
  /**
  Time to end each event at (e.g. “9:00 am”) */
  timetablescoursesectionidendtime?: string;
  /**
  A location name to set for each event */
  timetablescoursesectionidlocationname?: string;
}

export interface CreateOrUpdateEventsDirectlyForCourseTimetableParams {
  /**
  Events will be created for the course section specified by course_section_id. If
  not present, events will be created for the entire course. */
  coursesectionid?: string;
  /**
  An array of event objects to use. */
  events?: unknown[][];
  /**
  Start time for the event */
  eventsstartat?: Date;
  /**
  End time for the event */
  eventsendat?: Date;
  /**
  Location name for the event */
  eventslocationname?: string;
  /**
  A unique identifier that can be used to update the event at a later time If one
  is not specified, an identifier will be generated based on the start and end
  times */
  eventscode?: string;
  /**
  Title for the meeting. If not present, will default to the associated course's
  name */
  eventstitle?: string;
}

export interface ListMembersOfCollaborationParams {
  /**
  Allowed values: collaborator_lti_id, avatar_image_url */
  include?: string[];
}

export interface ListOfCommmessagesForUserParams {
  /**
  The user id for whom you want to retrieve CommMessages */
  userid?: string;
  /**
  The beginning of the time range you want to retrieve message from. Up to a year
  prior to the current date is available. */
  starttime?: Date;
  /**
  The end of the time range you want to retrieve messages for. Up to a year prior
  to the current date is available. */
  endtime?: Date;
}

export interface CreateCommunicationChannelParams {
  /**
  An email address or SMS number. Not required for “push” type channels. */
  communicationchanneladdress?: string;
  /**
  Allowed values: email, sms, push */
  communicationchanneltype?: string;
  /**
  A registration id, device token, or equivalent token given to an app when
  registering with a push notification provider. Only valid for “push” type
  channels. */
  communicationchanneltoken?: string;
  /**
  Only valid for site admins and account admins making requests; If true, the
  channel is automatically validated and no confirmation email or SMS is sent.
  Otherwise, the user must respond to a confirmation message to confirm the
  channel. */
  skipconfirmation?: boolean;
}

export interface ListConferencesForTheCurrentUserParams {
  /**
  If set to “live”, returns only conferences that are live (i.e., have started and
  not finished yet). If omitted, returns all conferences for this user's groups
  and courses. */
  state?: string;
}

export interface ExportContentParams {
  /**
  Allowed values: common_cartridge, qti, zip */
  exporttype?: string;
  /**
  Don't send the notifications about the export to the user. Default: false */
  skipnotifications?: boolean;
  /**
  Allowed values: folders, files, attachments, quizzes, assignments,
  announcements, calendar_events, discussion_topics, modules, module_items, pages,
  rubrics */
  select?: unknown;
}

export interface UpdateMigrationIssueParams {
  /**
  Allowed values: active, resolved */
  workflowstate?: string;
}

export interface CreateContentMigrationParams {
  /**
  The type of the migration. Use the Migrator endpoint to see all available
  migrators. Default allowed values: canvas_cartridge_importer,
  common_cartridge_importer, course_copy_importer, zip_file_importer,
  qti_converter, moodle_converter */
  migrationtype?: string;
  /**
  Required if uploading a file. This is the first step in uploading a file to the
  content migration. See the File Upload Documentation for details on the file
  upload workflow. */
  preattachmentname?: string;
  /**
  Other file upload properties, See File Upload Documentation */
  preattachment?: string;
  /**
  A URL to download the file from. Must not require authentication. */
  settingsfileurl?: string;
  /**
  The id of a ContentExport to import. This allows you to import content
  previously exported from Canvas without needing to download and re-upload it. */
  settingscontentexportid?: string;
  /**
  The course to copy from for a course copy migration. (required if doing course
  copy) */
  settingssourcecourseid?: string;
  /**
  The folder to unzip the .zip file into for a zip_file_import. */
  settingsfolderid?: string;
  /**
  Whether to overwrite quizzes with the same identifiers between content packages. */
  settingsoverwritequizzes?: boolean;
  /**
  The existing question bank ID to import questions into if not specified in the
  content package. */
  settingsquestionbankid?: number;
  /**
  The question bank to import questions into if not specified in the content
  package, if both bank id and name are set, id will take precedence. */
  settingsquestionbankname?: string;
  /**
  The id of a module in the target course. This will add all imported items (that
  can be added to a module) to the given module. */
  settingsinsertintomoduleid?: number;
  /**
  Allowed values: assignment, discussion_topic, file, page, quiz */
  settingsinsertintomoduletype?: string;
  /**
  The (1-based) position to insert the imported items into the course (if
  insert_into_module_id is supplied). If this parameter is omitted, items will be
  added to the end of the module. */
  settingsinsertintomoduleposition?: number;
  /**
  The id of an assignment group in the target course. If provided, all imported
  assignments will be moved to the given assignment group. */
  settingsmovetoassignmentgroupid?: number;
  /**
  Allowed values: all_course_settings, visibility_settings */
  settingsimporterskips?: unknown[];
  /**
  Whether to shift dates in the copied course */
  dateshiftoptionsshiftdates?: boolean;
  /**
  The original start date of the source content/course */
  dateshiftoptionsoldstartdate?: Date;
  /**
  The original end date of the source content/course */
  dateshiftoptionsoldenddate?: Date;
  /**
  The new start date for the content/course */
  dateshiftoptionsnewstartdate?: Date;
  /**
  The new end date for the source content/course */
  dateshiftoptionsnewenddate?: Date;
  /**
  Move anything scheduled for day 'X' to the specified day. (0-Sunday, 1-Monday,
  2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday) */
  dateshiftoptionsdaysubstitutionsX?: number;
  /**
  Whether to remove dates in the copied course. Cannot be used in conjunction with
  shift_dates. */
  dateshiftoptionsremovedates?: boolean;
  /**
  If set, perform a selective import instead of importing all content. The
  migration will identify the contents of the package and then stop in the
  waiting_for_select workflow state. At this point, use the List items endpoint to
  enumerate the contents of the package, identifying the copy parameters for the
  desired content. Then call the Update endpoint and provide these copy parameters
  to start the import. */
  selectiveimport?: boolean;
  /**
  Allowed values: folders, files, attachments, quizzes, assignments,
  announcements, calendar_events, discussion_topics, modules, module_items, pages,
  rubrics */
  select?: unknown;
}

export interface ListItemsForSelectiveImportParams {
  /**
  Allowed values: context_modules, assignments, quizzes,
  assessment_question_banks, discussion_topics, wiki_pages,
  context_external_tools, tool_profiles, announcements, calendar_events, rubrics,
  groups, learning_outcomes, attachments */
  type?: string;
}

export interface EnableDisableOrClearExplicitCspSettingParams {
  /**
  Allowed values: enabled, disabled, inherited */
  status?: string;
}

export interface LockOrUnlockCurrentCspSettingsForSubaccountsCoursesParams {
  /**
  Whether sub-accounts and courses will be prevented from overriding settings
  inherited from this account. */
  settingslocked?: boolean;
}

export interface AddAnAllowedDomainToAccountParams {
  /**
  no description */
  domain?: string;
}

export interface AddMultipleAllowedDomainsToAnAccountParams {
  /**
  no description */
  domains?: unknown[];
}

export interface RemoveDomainFromAccountParams {
  /**
  no description */
  domain?: string;
}

export interface CreateContentShareParams {
  /**
  IDs of users to share the content with. */
  receiverids?: unknown[];
  /**
  Allowed values: assignment, discussion_topic, page, quiz, module, module_item */
  contenttype?: string;
  /**
  The id of the content that you are sharing */
  contentid?: number;
}

export interface AddUsersToContentShareParams {
  /**
  IDs of users to share the content with. */
  receiverids?: unknown[];
}

export interface UpdateContentShareParams {
  /**
  Allowed values: read, unread */
  readstate?: string;
}

export interface ListConversationsParams {
  /**
  Allowed values: unread, starred, archived */
  scope?: string;
  /**
  When set, only return conversations for the specified courses, groups or users.
  The id should be prefixed with its type, e.g. “user_123” or “course_456”. Can be
  an array (by setting “filter[]”) or single value (by setting “filter”) */
  filter?: string[];
  /**
  Allowed values: and, or, default or */
  filtermode?: string;
  /**
  (Obsolete) Submissions are no longer linked to conversations. This parameter is
  ignored. */
  interleavesubmissions?: boolean;
  /**
  Default is false. If true, the top-level element of the response will be an
  object rather than an array, and will have the keys “conversations” which will
  contain the paged conversation data, and “conversation_ids” which will contain
  the ids of all conversations under this scope/filter in the same order. */
  includeallconversationids?: boolean;
  /**
  Allowed values: participant_avatars */
  include?: string[];
}

export interface CreateConversationParams {
  /**
  An array of recipient ids. These may be user ids or course/group ids prefixed
  with “course_” or “group_” respectively, e.g.
  recipients[]=1&recipients=2&recipients[]=course_3. If the course/group has over
  100 enrollments, 'bulk_message' and 'group_conversation' must be set to true. */
  recipients?: string[];
  /**
  The subject of the conversation. This is ignored when reusing a conversation.
  Maximum length is 255 characters. */
  subject?: string;
  /**
  The message to be sent */
  body?: string;
  /**
  Forces a new message to be created, even if there is an existing private
  conversation. */
  forcenew?: boolean;
  /**
  Defaults to false.  When false, individual private conversations will be created
  with each recipient. If true, this will be a group conversation (i.e. all
  recipients may see all messages and replies). Must be set true if the number of
  recipients is over the set maximum (default is 100). */
  groupconversation?: boolean;
  /**
  An array of attachments ids. These must be files that have been previously
  uploaded to the sender's “conversation attachments” folder. */
  attachment_ids?: string[];
  /**
  Media comment id of an audio or video file to be associated with this message. */
  mediacommentid?: string;
  /**
  Allowed values: audio, video */
  mediacommenttype?: string;
  /**
  Will add a faculty journal entry for each recipient as long as the user making
  the api call has permission, the recipient is a student and faculty journals are
  enabled in the account. */
  usernote?: boolean;
  /**
  Allowed values: sync, async */
  mode?: string;
  /**
  Allowed values: unread, starred, archived */
  scope?: string;
  /**
  Used when generating “visible” in the API response. See the explanation under
  the index API action */
  filter?: string[];
  /**
  Allowed values: and, or, default or */
  filtermode?: string;
  /**
  The course or group that is the context for this conversation. Same format as
  courses or groups in the recipients argument. */
  contextcode?: string;
}

export interface GetSingleConversationParams {
  /**
  (Obsolete) Submissions are no longer linked to conversations. This parameter is
  ignored. */
  interleavesubmissions?: boolean;
  /**
  Allowed values: unread, starred, archived */
  scope?: string;
  /**
  Used when generating “visible” in the API response. See the explanation under
  the index API action */
  filter?: string[];
  /**
  Allowed values: and, or, default or */
  filtermode?: string;
  /**
  Default true. If true, unread conversations will be automatically marked as
  read. This will default to false in a future API release, so clients should
  explicitly send true if that is the desired behavior. */
  automarkasread?: boolean;
}

export interface EditConversationParams {
  /**
  Allowed values: read, unread, archived */
  conversationworkflowstate?: string;
  /**
  Toggle the current user's subscription to the conversation (only valid for group
  conversations). If unsubscribed, the user will still have access to the latest
  messages, but the conversation won't be automatically flagged as unread, nor
  will it jump to the top of the inbox. */
  conversationsubscribed?: boolean;
  /**
  Toggle the starred state of the current user's view of the conversation. */
  conversationstarred?: boolean;
  /**
  Allowed values: unread, starred, archived */
  scope?: string;
  /**
  Used when generating “visible” in the API response. See the explanation under
  the index API action */
  filter?: string[];
  /**
  Allowed values: and, or, default or */
  filtermode?: string;
}

export interface AddRecipientsParams {
  /**
  An array of recipient ids. These may be user ids or course/group ids prefixed
  with “course_” or “group_” respectively, e.g.
  recipients[]=1&recipients=2&recipients[]=course_3 */
  recipients?: string[];
}

export interface AddMessageParams {
  /**
  The message to be sent. */
  body?: string;
  /**
  An array of attachments ids. These must be files that have been previously
  uploaded to the sender's “conversation attachments” folder. */
  attachment_ids?: string[];
  /**
  Media comment id of an audio of video file to be associated with this message. */
  mediacommentid?: string;
  /**
  Allowed values: audio, video */
  mediacommenttype?: string;
  /**
  no description */
  recipients?: string[];
  /**
  no description */
  included_messages?: string[];
  /**
  Will add a faculty journal entry for each recipient as long as the user making
  the api call has permission, the recipient is a student and faculty journals are
  enabled in the account. */
  usernote?: boolean;
}

export interface DeleteMessageParams {
  /**
  Array of message ids to be deleted */
  remove?: string[];
}

export interface BatchUpdateConversationsParams {
  /**
  List of conversations to update. Limited to 500 conversations. */
  conversation_ids?: string[];
  /**
  Allowed values: mark_as_read, mark_as_unread, star, unstar, archive, destroy */
  event?: string;
}

export interface QueryByCourseParams {
  /**
  The beginning of the time range from which you want events. */
  starttime?: Date;
  /**
  The end of the time range from which you want events. */
  endtime?: Date;
}

export interface QueryByAccountParams {
  /**
  The beginning of the time range from which you want events. */
  starttime?: Date;
  /**
  The end of the time range from which you want events. */
  endtime?: Date;
}

export interface SetExtensionsForStudentQuizSubmissionsParams {
  /**
  The ID of the user we want to add quiz extensions for. */
  userid?: number;
  /**
  Number of times the student is allowed to re-take the quiz over the multiple-
  attempt limit. This is limited to 1000 attempts or less. */
  extraattempts?: number;
  /**
  The number of extra minutes to allow for all attempts. This will add to the
  existing time limit on the submission. This is limited to 10080 minutes (1 week) */
  extratime?: number;
  /**
  Allow the student to take the quiz even if it's locked for everyone else. */
  manuallyunlocked?: boolean;
  /**
  The number of minutes to extend the quiz from the current time. This is mutually
  exclusive to extend_from_end_at. This is limited to 1440 minutes (24 hours) */
  extendfromnow?: number;
  /**
  The number of minutes to extend the quiz beyond the quiz's current ending time.
  This is mutually exclusive to extend_from_now. This is limited to 1440 minutes
  (24 hours) */
  extendfromendat?: number;
}

export interface ListCoursesParams {
  /**
  Allowed values: teacher, student, ta, observer, designer */
  enrollmenttype?: string;
  /**
  Deprecated When set, only return courses where the user is enrolled with the
  specified course-level role.  This can be a role created with the Add Role API
  or a base role type of 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
  'ObserverEnrollment', or 'DesignerEnrollment'. */
  enrollmentrole?: string;
  /**
  When set, only return courses where the user is enrolled with the specified
  course-level role.  This can be a role created with the Add Role API or a
  built_in role type of 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
  'ObserverEnrollment', or 'DesignerEnrollment'. */
  enrollmentroleid?: number;
  /**
  Allowed values: active, invited_or_pending, completed */
  enrollmentstate?: string;
  /**
  When set, only return courses that are not configured as blueprint courses. */
  excludeblueprintcourses?: boolean;
  /**
  Allowed values: needs_grading_count, syllabus_body, public_description,
  total_scores, current_grading_period_scores, grading_periods, term, account,
  course_progress, sections, storage_quota_used_mb, total_students,
  passback_status, favorites, teachers, observed_users, course_image,
  banner_image, concluded */
  include?: string[];
  /**
  Allowed values: unpublished, available, completed, deleted */
  state?: string[];
}

export interface ListCoursesForUserParams {
  /**
  Allowed values: needs_grading_count, syllabus_body, public_description,
  total_scores, current_grading_period_scores, grading_periods, term, account,
  course_progress, sections, storage_quota_used_mb, total_students,
  passback_status, favorites, teachers, observed_users, course_image,
  banner_image, concluded */
  include?: string[];
  /**
  Allowed values: unpublished, available, completed, deleted */
  state?: string[];
  /**
  Allowed values: active, invited_or_pending, completed */
  enrollmentstate?: string;
  /**
  If set, only return homeroom courses. */
  homeroom?: boolean;
}

export interface CreateNewCourseParams {
  /**
  The name of the course. If omitted, the course will be named “Unnamed Course.” */
  coursename?: string;
  /**
  The course code for the course. */
  coursecoursecode?: string;
  /**
  Course start date in ISO8601 format, e.g. 2011-01-01T01:00Z This value is
  ignored unless 'restrict_enrollments_to_course_dates' is set to true. */
  coursestartat?: Date;
  /**
  Course end date in ISO8601 format. e.g. 2011-01-01T01:00Z This value is ignored
  unless 'restrict_enrollments_to_course_dates' is set to true. */
  courseendat?: Date;
  /**
  The name of the licensing. Should be one of the following abbreviations (a
  descriptive name is included in parenthesis for reference):  'private' (Private
  Copyrighted)  'cc_by_nc_nd' (CC Attribution Non-Commercial No Derivatives)
  'cc_by_nc_sa' (CC Attribution Non-Commercial Share Alike)  'cc_by_nc' (CC
  Attribution Non-Commercial)  'cc_by_nd' (CC Attribution No Derivatives)
  'cc_by_sa' (CC Attribution Share Alike)  'cc_by' (CC Attribution)
  'public_domain' (Public Domain). */
  courselicense?: string;
  /**
  Set to true if course is public to both authenticated and unauthenticated users. */
  courseispublic?: boolean;
  /**
  Set to true if course is public only to authenticated users. */
  courseispublictoauthusers?: boolean;
  /**
  Set to true to make the course syllabus public. */
  coursepublicsyllabus?: boolean;
  /**
  Set to true to make the course syllabus public for authenticated users. */
  coursepublicsyllabustoauth?: boolean;
  /**
  A publicly visible description of the course. */
  coursepublicdescription?: string;
  /**
  If true, students will be able to modify the course wiki. */
  courseallowstudentwikiedits?: boolean;
  /**
  If true, course members will be able to comment on wiki pages. */
  courseallowwikicomments?: boolean;
  /**
  If true, students can attach files to forum posts. */
  courseallowstudentforumattachments?: boolean;
  /**
  Set to true if the course is open enrollment. */
  courseopenenrollment?: boolean;
  /**
  Set to true if the course is self enrollment. */
  courseselfenrollment?: boolean;
  /**
  Set to true to restrict user enrollments to the start and end dates of the
  course. This value must be set to true in order to specify a course start date
  and/or end date. */
  courserestrictenrollmentstocoursedates?: boolean;
  /**
  The unique ID of the term to create to course in. */
  coursetermid?: string;
  /**
  The unique SIS identifier. */
  coursesiscourseid?: string;
  /**
  The unique Integration identifier. */
  courseintegrationid?: string;
  /**
  If this option is set to true, the totals in student grades summary will be
  hidden. */
  coursehidefinalgrades?: boolean;
  /**
  Set to true to weight final grade based on assignment groups percentages. */
  courseapplyassignmentgroupweights?: boolean;
  /**
  The time zone for the course. Allowed time zones are IANA time zones or
  friendlier Ruby on Rails time zones. */
  coursetimezone?: string;
  /**
  If this option is set to true, the course will be available to students
  immediately. */
  offer?: boolean;
  /**
  Set to true to enroll the current user as the teacher. */
  enrollme?: boolean;
  /**
  Allowed values: feed, wiki, modules, syllabus, assignments */
  coursedefaultview?: string;
  /**
  The syllabus body for the course */
  coursesyllabusbody?: string;
  /**
  The grading standard id to set for the course.  If no value is provided for this
  argument the current grading_standard will be un-set from this course. */
  coursegradingstandardid?: number;
  /**
  Optional. The grade_passback_setting for the course. Only 'nightly_sync',
  'disabled', and '' are allowed */
  coursegradepassbacksetting?: string;
  /**
  Optional. Specifies the format of the course. (Should be 'on_campus', 'online',
  or 'blended') */
  coursecourseformat?: string;
  /**
  When true, will first try to re-activate a deleted course with matching
  sis_course_id if possible. */
  enablesisreactivation?: boolean;
}

export interface ListUsersInCourseParams {
  /**
  The partial name or full ID of the users to match and return in the results
  list. */
  searchterm?: string;
  /**
  Allowed values: username, last_login, email, sis_id */
  sort?: string;
  /**
  Allowed values: teacher, student, student_view, ta, observer, designer */
  enrollment_type?: string[];
  /**
  Deprecated When set, only return users enrolled with the specified course-level
  role.  This can be a role created with the Add Role API or a base role type of
  'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'ObserverEnrollment',
  or 'DesignerEnrollment'. */
  enrollmentrole?: string;
  /**
  When set, only return courses where the user is enrolled with the specified
  course-level role.  This can be a role created with the Add Role API or a
  built_in role id with type 'StudentEnrollment', 'TeacherEnrollment',
  'TaEnrollment', 'ObserverEnrollment', or 'DesignerEnrollment'. */
  enrollmentroleid?: number;
  /**
  Allowed values: enrollments, locked, avatar_url, test_student, bio,
  custom_links, current_grading_period_scores, uuid */
  include?: string[];
  /**
  If this parameter is given and it corresponds to a user in the course, the page
  parameter will be ignored and the page containing the specified user will be
  returned instead. */
  userid?: string;
  /**
  If included, the course users set will only include users with IDs specified by
  the param. Note: this will not work in conjunction with the “user_id” argument
  but multiple user_ids can be included. */
  user_ids?: number[];
  /**
  Allowed values: active, invited, rejected, completed, inactive */
  enrollment_state?: string[];
}

export interface SearchForContentShareUsersParams {
  /**
  Term used to find users.  Will search available share users with the search term
  in their name. */
  searchterm?: string;
}

export interface PreviewProcessedHtmlParams {
  /**
  The html content to process */
  html?: string;
}

export interface DeleteCourseParams {
  /**
  Allowed values: delete, conclude */
  event?: string;
}

export interface UpdateCourseSettingsParams {
  /**
  Let students create discussion topics */
  allowstudentdiscussiontopics?: boolean;
  /**
  Let students attach files to discussions */
  allowstudentforumattachments?: boolean;
  /**
  Let students edit or delete their own discussion replies */
  allowstudentdiscussionediting?: boolean;
  /**
  Let students organize their own groups */
  allowstudentorganizedgroups?: boolean;
  /**
  Let students report offensive discussion content */
  allowstudentdiscussionreporting?: boolean;
  /**
  Let students create anonymous discussion topics */
  allowstudentanonymousdiscussiontopics?: boolean;
  /**
  Filter SpeedGrader to only the selected student group */
  filterspeedgraderbystudentgroup?: boolean;
  /**
  Hide totals in student grades summary */
  hidefinalgrades?: boolean;
  /**
  Hide grade distribution graphs from students */
  hidedistributiongraphs?: boolean;
  /**
  Disallow students from viewing students in sections they do not belong to */
  hidesectionsoncourseuserspage?: boolean;
  /**
  Disable comments on announcements */
  lockallannouncements?: boolean;
  /**
  Copyright and license information must be provided for files before they are
  published. */
  usagerightsrequired?: boolean;
  /**
  Restrict students from viewing courses after end date */
  restrictstudentpastview?: boolean;
  /**
  Restrict students from viewing courses before start date */
  restrictstudentfutureview?: boolean;
  /**
  Show the most recent announcements on the Course home page (if a Wiki, defaults
  to five announcements, configurable via home_page_announcement_limit). Canvas
  for Elementary subjects ignore this setting. */
  showannouncementsonhomepage?: boolean;
  /**
  Limit the number of announcements on the home page if enabled via
  show_announcements_on_home_page */
  homepageannouncementlimit?: number;
  /**
  Show the course summary (list of assignments and calendar events) on the
  syllabus page. Default is true. */
  syllabuscoursesummary?: boolean;
  /**
  Set the default due time for assignments. This is the time that will be pre-
  selected in the Canvas user interface when setting a due date for an assignment.
  It does not change when any existing assignment is due. It should be given in
  24-hour HH:MM:SS format. The default is “23:59:59”. Use “inherit” to inherit the
  account setting. */
  defaultduetime?: string;
  /**
  Enable or disable individual learning paths for students based on assessment */
  conditionalrelease?: boolean;
}

export interface GetSingleCourseParams {
  /**
  Allowed values: needs_grading_count, syllabus_body, public_description,
  total_scores, current_grading_period_scores, term, account, course_progress,
  sections, storage_quota_used_mb, total_students, passback_status, favorites,
  teachers, observed_users, all_courses, permissions, course_image, banner_image,
  concluded */
  include?: string[];
  /**
  The maximum number of teacher enrollments to show. If the course contains more
  teachers than this, instead of giving the teacher enrollments, the count of
  teachers will be given under a teacher_count key. */
  teacherlimit?: number;
}

export interface UpdateCourseParams {
  /**
  The unique ID of the account to move the course to. */
  courseaccountid?: number;
  /**
  The name of the course. If omitted, the course will be named “Unnamed Course.” */
  coursename?: string;
  /**
  The course code for the course. */
  coursecoursecode?: string;
  /**
  Course start date in ISO8601 format, e.g. 2011-01-01T01:00Z This value is
  ignored unless 'restrict_enrollments_to_course_dates' is set to true, or the
  course is already published. */
  coursestartat?: Date;
  /**
  Course end date in ISO8601 format. e.g. 2011-01-01T01:00Z This value is ignored
  unless 'restrict_enrollments_to_course_dates' is set to true. */
  courseendat?: Date;
  /**
  The name of the licensing. Should be one of the following abbreviations (a
  descriptive name is included in parenthesis for reference):  'private' (Private
  Copyrighted)  'cc_by_nc_nd' (CC Attribution Non-Commercial No Derivatives)
  'cc_by_nc_sa' (CC Attribution Non-Commercial Share Alike)  'cc_by_nc' (CC
  Attribution Non-Commercial)  'cc_by_nd' (CC Attribution No Derivatives)
  'cc_by_sa' (CC Attribution Share Alike)  'cc_by' (CC Attribution)
  'public_domain' (Public Domain). */
  courselicense?: string;
  /**
  Set to true if course is public to both authenticated and unauthenticated users. */
  courseispublic?: boolean;
  /**
  Set to true if course is public only to authenticated users. */
  courseispublictoauthusers?: boolean;
  /**
  Set to true to make the course syllabus public. */
  coursepublicsyllabus?: boolean;
  /**
  Set to true to make the course syllabus to public for authenticated users. */
  coursepublicsyllabustoauth?: boolean;
  /**
  A publicly visible description of the course. */
  coursepublicdescription?: string;
  /**
  If true, students will be able to modify the course wiki. */
  courseallowstudentwikiedits?: boolean;
  /**
  If true, course members will be able to comment on wiki pages. */
  courseallowwikicomments?: boolean;
  /**
  If true, students can attach files to forum posts. */
  courseallowstudentforumattachments?: boolean;
  /**
  Set to true if the course is open enrollment. */
  courseopenenrollment?: boolean;
  /**
  Set to true if the course is self enrollment. */
  courseselfenrollment?: boolean;
  /**
  Set to true to restrict user enrollments to the start and end dates of the
  course. Setting this value to false will remove the course end date (if it
  exists), as well as the course start date (if the course is unpublished). */
  courserestrictenrollmentstocoursedates?: boolean;
  /**
  The unique ID of the term to create to course in. */
  coursetermid?: number;
  /**
  The unique SIS identifier. */
  coursesiscourseid?: string;
  /**
  The unique Integration identifier. */
  courseintegrationid?: string;
  /**
  If this option is set to true, the totals in student grades summary will be
  hidden. */
  coursehidefinalgrades?: boolean;
  /**
  The time zone for the course. Allowed time zones are IANA time zones or
  friendlier Ruby on Rails time zones. */
  coursetimezone?: string;
  /**
  Set to true to weight final grade based on assignment groups percentages. */
  courseapplyassignmentgroupweights?: boolean;
  /**
  Set the storage quota for the course, in megabytes. The caller must have the
  “Manage storage quotas” account permission. */
  coursestoragequotamb?: number;
  /**
  If this option is set to true, the course will be available to students
  immediately. */
  offer?: boolean;
  /**
  Allowed values: claim, offer, conclude, delete, undelete */
  courseevent?: string;
  /**
  Allowed values: feed, wiki, modules, syllabus, assignments */
  coursedefaultview?: string;
  /**
  The syllabus body for the course */
  coursesyllabusbody?: string;
  /**
  Optional. Indicates whether the Course Summary (consisting of the course's
  assignments and calendar events) is displayed on the syllabus page. Defaults to
  true. */
  coursesyllabuscoursesummary?: boolean;
  /**
  The grading standard id to set for the course.  If no value is provided for this
  argument the current grading_standard will be un-set from this course. */
  coursegradingstandardid?: number;
  /**
  Optional. The grade_passback_setting for the course. Only 'nightly_sync' and ''
  are allowed */
  coursegradepassbacksetting?: string;
  /**
  Optional. Specifies the format of the course. (Should be either 'on_campus' or
  'online') */
  coursecourseformat?: string;
  /**
  This is a file ID corresponding to an image file in the course that will be used
  as the course image. This will clear the course's image_url setting if set.  If
  you attempt to provide image_url and image_id in a request it will fail. */
  courseimageid?: number;
  /**
  This is a URL to an image to be used as the course image. This will clear the
  course's image_id setting if set.  If you attempt to provide image_url and
  image_id in a request it will fail. */
  courseimageurl?: string;
  /**
  If this option is set to true, the course image url and course image ID are both
  set to nil */
  courseremoveimage?: boolean;
  /**
  If this option is set to true, the course banner image url and course banner
  image ID are both set to nil */
  courseremovebannerimage?: boolean;
  /**
  Sets the course as a blueprint course. */
  courseblueprint?: boolean;
  /**
  Sets a default set to apply to blueprint course objects when restricted, unless
  use_blueprint_restrictions_by_object_type is enabled. See the Blueprint
  Restriction documentation */
  courseblueprintrestrictions?: BlueprintRestriction;
  /**
  When enabled, the blueprint_restrictions parameter will be ignored in favor of
  the blueprint_restrictions_by_object_type parameter */
  courseuseblueprintrestrictionsbyobjecttype?: boolean;
  /**
  Allows setting multiple Blueprint Restriction to apply to blueprint course
  objects of the matching type when restricted. The possible object types are
  “assignment”, “attachment”, “discussion_topic”, “quiz” and “wiki_page”. Example
  usage: course[blueprint_restrictions_by_object_type][assignment][content]=1 */
  courseblueprintrestrictionsbyobjecttype?: BlueprintRestriction[];
  /**
  Sets the course as a homeroom course. The setting takes effect only when the
  course is associated with a Canvas for Elementary-enabled account. */
  coursehomeroomcourse?: boolean;
  /**
  Syncs enrollments from the homeroom that is set in homeroom_course_id. The
  setting only takes effect when the course is associated with a Canvas for
  Elementary-enabled account and sync_enrollments_from_homeroom is enabled. */
  coursesyncenrollmentsfromhomeroom?: string;
  /**
  Sets the Homeroom Course id to be used with sync_enrollments_from_homeroom. The
  setting only takes effect when the course is associated with a Canvas for
  Elementary-enabled account and sync_enrollments_from_homeroom is enabled. */
  coursehomeroomcourseid?: string;
  /**
  Enable or disable the course as a template that can be selected by an account */
  coursetemplate?: boolean;
  /**
  Sets a color in hex code format to be associated with the course. The setting
  takes effect only when the course is associated with a Canvas for Elementary-
  enabled account. */
  coursecoursecolor?: string;
  /**
  Set a friendly name for the course. If this is provided and the course is
  associated with a Canvas for Elementary account, it will be shown instead of the
  course name. This setting takes priority over course nicknames defined by
  individual users. */
  coursefriendlyname?: string;
  /**
  Enable or disable Course Pacing for the course. This setting only has an effect
  when the Course Pacing feature flag is enabled for the sub-account. Otherwise,
  Course Pacing are always disabled. Note: Course Pacing is in active development. */
  courseenablecoursepaces?: boolean;
  /**
  Enable or disable individual learning paths for students based on assessment */
  courseconditionalrelease?: boolean;
  /**
  Default is true. If false, any fields containing “sticky” changes will not be
  updated. See SIS CSV Format documentation for information on which fields can
  have SIS stickiness */
  overridesisstickiness?: boolean;
}

export interface UpdateCoursesParams {
  /**
  List of ids of courses to update. At most 500 courses may be updated in one
  call. */
  course_ids?: string[];
  /**
  Allowed values: offer, conclude, delete, undelete */
  event?: string;
}

export interface GetEffectiveDueDatesParams {
  /**
  no description */
  assignment_ids?: string[];
}

export interface PermissionsParams {
  /**
  List of permissions to check against the authenticated user. Permission names
  are documented in the Create a role endpoint. */
  permissions?: string[];
}

export interface CopyCourseContentParams {
  /**
  ID or SIS-ID of the course to copy the content from */
  sourcecourse?: string;
  /**
  Allowed values: course_settings, assignments, external_tools, files, topics,
  calendar_events, quizzes, wiki_pages, modules, outcomes */
  except?: string[];
  /**
  Allowed values: course_settings, assignments, external_tools, files, topics,
  calendar_events, quizzes, wiki_pages, modules, outcomes */
  only?: string[];
}

export interface ListCustomGradebookColumnsParams {
  /**
  Include hidden parameters (defaults to false) */
  includehidden?: boolean;
}

export interface CreateCustomGradebookColumnParams {
  /**
  no description */
  columntitle?: string;
  /**
  The position of the column relative to other custom columns */
  columnposition?: number;
  /**
  Hidden columns are not displayed in the gradebook */
  columnhidden?: boolean;
  /**
  Set this if the column is created by a teacher.  The gradebook only supports one
  teacher_notes column. */
  columnteachernotes?: boolean;
  /**
  Set this to prevent the column from being editable in the gradebook ui */
  columnreadonly?: boolean;
}

export interface ReorderCustomColumnsParams {
  /**
  no description */
  order?: number[];
}

export interface ListEntriesForColumnParams {
  /**
  If true, hidden columns will be included in the result. If false or absent, only
  visible columns will be returned. */
  includehidden?: boolean;
}

export interface UpdateColumnDataParams {
  /**
  Column content.  Setting this to blank will delete the datum object. */
  columndatacontent?: string;
}

export interface BulkUpdateColumnDataParams {
  /**
  Column content. Setting this to an empty string will delete the data object. */
  column_data?: unknown[][];
}

export interface ListDiscussionTopicsParams {
  /**
  Allowed values: all_dates, sections, sections_user_count, overrides */
  include?: string[];
  /**
  Allowed values: position, recent_activity, title */
  orderby?: string;
  /**
  Allowed values: locked, unlocked, pinned, unpinned */
  scope?: string;
  /**
  Return announcements instead of discussion topics. Defaults to false */
  onlyannouncements?: boolean;
  /**
  Allowed values: all, unread */
  filterby?: string;
  /**
  The partial title of the discussion topics to match and return. */
  searchterm?: string;
  /**
  For students, exclude topics that are locked by module progression. Defaults to
  false. */
  excludecontextmodulelockedtopics?: boolean;
}

export interface CreateNewDiscussionTopicParams {
  /**
  no description */
  title?: string;
  /**
  no description */
  message?: string;
  /**
  Allowed values: side_comment, threaded */
  discussiontype?: string;
  /**
  Whether this topic is published (true) or draft state (false). Only teachers and
  TAs have the ability to create draft state topics. */
  published?: boolean;
  /**
  If a timestamp is given, the topic will not be published until that time. */
  delayedpostat?: Date;
  /**
  Whether or not users can rate entries in this topic. */
  allowrating?: boolean;
  /**
  If a timestamp is given, the topic will be scheduled to lock at the provided
  timestamp. If the timestamp is in the past, the topic will be locked. */
  lockat?: Date;
  /**
  If true, the topic will have an associated podcast feed. */
  podcastenabled?: boolean;
  /**
  If true, the podcast will include posts from students as well. Implies
  podcast_enabled. */
  podcasthasstudentposts?: boolean;
  /**
  If true then a user may not respond to other replies until that user has made an
  initial reply. Defaults to false. */
  requireinitialpost?: boolean;
  /**
  To create an assignment discussion, pass the assignment parameters as a sub-
  object. See the Create an Assignment API for the available parameters. The name
  parameter will be ignored, as it's taken from the discussion title. If you want
  to make a discussion that was an assignment NOT an assignment, pass
  set_assignment = false as part of the assignment object */
  assignment?: Assignment;
  /**
  If true, this topic is an announcement. It will appear in the announcement's
  section rather than the discussions section. This requires announcment-posting
  permissions. */
  isannouncement?: boolean;
  /**
  If true, this topic will be listed in the “Pinned Discussion” section */
  pinned?: boolean;
  /**
  By default, discussions are sorted chronologically by creation date, you can
  pass the id of another topic to have this one show up after the other when they
  are listed. */
  positionafter?: string;
  /**
  If present, the topic will become a group discussion assigned to the group. */
  groupcategoryid?: number;
  /**
  If true, only graders will be allowed to rate entries. */
  onlygraderscanrate?: boolean;
  /**
  If true, entries will be sorted by rating. */
  sortbyrating?: boolean;
  /**
  A multipart/form-data form-field-style attachment. Attachments larger than 1
  kilobyte are subject to quota restrictions. */
  attachment?: unknown;
  /**
  A comma-separated list of sections ids to which the discussion topic should be
  made specific to.  If it is not desired to make the discussion topic specific to
  sections, then this parameter may be omitted or set to “all”.  Can only be
  present only on announcements and only those that are for a course (as opposed
  to a group). */
  specificsections?: string;
}

export interface UpdateTopicParams {
  /**
  no description */
  title?: string;
  /**
  no description */
  message?: string;
  /**
  Allowed values: side_comment, threaded */
  discussiontype?: string;
  /**
  Whether this topic is published (true) or draft state (false). Only teachers and
  TAs have the ability to create draft state topics. */
  published?: boolean;
  /**
  If a timestamp is given, the topic will not be published until that time. */
  delayedpostat?: Date;
  /**
  If a timestamp is given, the topic will be scheduled to lock at the provided
  timestamp. If the timestamp is in the past, the topic will be locked. */
  lockat?: Date;
  /**
  If true, the topic will have an associated podcast feed. */
  podcastenabled?: boolean;
  /**
  If true, the podcast will include posts from students as well. Implies
  podcast_enabled. */
  podcasthasstudentposts?: boolean;
  /**
  If true then a user may not respond to other replies until that user has made an
  initial reply. Defaults to false. */
  requireinitialpost?: boolean;
  /**
  To create an assignment discussion, pass the assignment parameters as a sub-
  object. See the Create an Assignment API for the available parameters. The name
  parameter will be ignored, as it's taken from the discussion title. If you want
  to make a discussion that was an assignment NOT an assignment, pass
  set_assignment = false as part of the assignment object */
  assignment?: Assignment;
  /**
  If true, this topic is an announcement. It will appear in the announcement's
  section rather than the discussions section. This requires announcment-posting
  permissions. */
  isannouncement?: boolean;
  /**
  If true, this topic will be listed in the “Pinned Discussion” section */
  pinned?: boolean;
  /**
  By default, discussions are sorted chronologically by creation date, you can
  pass the id of another topic to have this one show up after the other when they
  are listed. */
  positionafter?: string;
  /**
  If present, the topic will become a group discussion assigned to the group. */
  groupcategoryid?: number;
  /**
  If true, users will be allowed to rate entries. */
  allowrating?: boolean;
  /**
  If true, only graders will be allowed to rate entries. */
  onlygraderscanrate?: boolean;
  /**
  If true, entries will be sorted by rating. */
  sortbyrating?: boolean;
  /**
  A comma-separated list of sections ids to which the discussion topic should be
  made specific too.  If it is not desired to make the discussion topic specific
  to sections, then this parameter may be omitted or set to “all”.  Can only be
  present only on announcements and only those that are for a course (as opposed
  to a group). */
  specificsections?: string;
}

export interface ReorderPinnedTopicsParams {
  /**
  The ids of the pinned discussion topics in the desired order. (For example,
  “order=104,102,103”.) */
  order?: number[];
}

export interface UpdateAnEntryParams {
  /**
  The updated body of the entry. */
  message?: string;
}

export interface GetSingleTopicParams {
  /**
  Allowed values: all_dates, sections, sections_user_count, overrides */
  include?: string[];
}

export interface PostAnEntryParams {
  /**
  The body of the entry. */
  message?: string;
  /**
  a multipart/form-data form-field-style attachment. Attachments larger than 1
  kilobyte are subject to quota restrictions. */
  attachment?: string;
}

export interface PostReplyParams {
  /**
  The body of the entry. */
  message?: string;
  /**
  a multipart/form-data form-field-style attachment. Attachments larger than 1
  kilobyte are subject to quota restrictions. */
  attachment?: string;
}

export interface ListEntriesParams {
  /**
  A list of entry ids to retrieve. Entries will be returned in id order, smallest
  id first. */
  ids?: string[];
}

export interface MarkAllEntriesAsReadParams {
  /**
  A boolean value to set all of the entries' forced_read_state. No change is made
  if this argument is not specified. */
  forcedreadstate?: boolean;
}

export interface MarkAllEntriesAsUnreadParams {
  /**
  A boolean value to set all of the entries' forced_read_state. No change is made
  if this argument is not specified. */
  forcedreadstate?: boolean;
}

export interface MarkEntryAsReadParams {
  /**
  A boolean value to set the entry's forced_read_state. No change is made if this
  argument is not specified. */
  forcedreadstate?: boolean;
}

export interface MarkEntryAsUnreadParams {
  /**
  A boolean value to set the entry's forced_read_state. No change is made if this
  argument is not specified. */
  forcedreadstate?: boolean;
}

export interface RateEntryParams {
  /**
  A rating to set on this entry. Only 0 and 1 are accepted. */
  rating?: number;
}

export interface CreateEnrollmentTermParams {
  /**
  The name of the term. */
  enrollmenttermname?: string;
  /**
  The day/time the term starts. Accepts times in ISO 8601 format, e.g.
  2015-01-10T18:48:00Z. */
  enrollmenttermstartat?: Date;
  /**
  The day/time the term ends. Accepts times in ISO 8601 format, e.g.
  2015-01-10T18:48:00Z. */
  enrollmenttermendat?: Date;
  /**
  The unique SIS identifier for the term. */
  enrollmenttermsistermid?: string;
  /**
  The day/time the term starts, overridden for the given enrollment type.
  enrollment_type can be one of StudentEnrollment, TeacherEnrollment,
  TaEnrollment, or DesignerEnrollment */
  enrollmenttermoverridesenrollmenttypestartat?: Date;
  /**
  The day/time the term ends, overridden for the given enrollment type.
  enrollment_type can be one of StudentEnrollment, TeacherEnrollment,
  TaEnrollment, or DesignerEnrollment */
  enrollmenttermoverridesenrollmenttypeendat?: Date;
}

export interface UpdateEnrollmentTermParams {
  /**
  The name of the term. */
  enrollmenttermname?: string;
  /**
  The day/time the term starts. Accepts times in ISO 8601 format, e.g.
  2015-01-10T18:48:00Z. */
  enrollmenttermstartat?: Date;
  /**
  The day/time the term ends. Accepts times in ISO 8601 format, e.g.
  2015-01-10T18:48:00Z. */
  enrollmenttermendat?: Date;
  /**
  The unique SIS identifier for the term. */
  enrollmenttermsistermid?: string;
  /**
  The day/time the term starts, overridden for the given enrollment type.
  enrollment_type can be one of StudentEnrollment, TeacherEnrollment,
  TaEnrollment, or DesignerEnrollment */
  enrollmenttermoverridesenrollmenttypestartat?: Date;
  /**
  The day/time the term ends, overridden for the given enrollment type.
  enrollment_type can be one of StudentEnrollment, TeacherEnrollment,
  TaEnrollment, or DesignerEnrollment */
  enrollmenttermoverridesenrollmenttypeendat?: Date;
  /**
  Default is true. If false, any fields containing “sticky” changes will not be
  updated. See SIS CSV Format documentation for information on which fields can
  have SIS stickiness */
  overridesisstickiness?: boolean;
}

export interface ListEnrollmentTermsParams {
  /**
  Allowed values: active, deleted, all */
  workflow_state?: string[];
  /**
  Allowed values: overrides */
  include?: string[];
}

export interface ListEnrollmentsParams {
  /**
  A list of enrollment types to return. Accepted values are 'StudentEnrollment',
  'TeacherEnrollment', 'TaEnrollment', 'DesignerEnrollment', and
  'ObserverEnrollment.' If omitted, all enrollment types are returned. This
  argument is ignored if `role` is given. */
  type?: string[];
  /**
  A list of enrollment roles to return. Accepted values include course-level roles
  created by the Add Role API as well as the base enrollment types accepted by the
  `type` argument above. */
  role?: string[];
  /**
  Allowed values: active, invited, creation_pending, deleted, rejected, completed,
  inactive, current_and_invited, current_and_future, current_and_concluded */
  state?: string[];
  /**
  Allowed values: avatar_url, group_ids, locked, observed_users, can_be_removed,
  uuid, current_points */
  include?: string[];
  /**
  Filter by user_id (only valid for course or section enrollment queries). If set
  to the current user's id, this is a way to determine if the user has any
  enrollments in the course or section, independent of whether the user has
  permission to view other people on the roster. */
  userid?: string;
  /**
  Return grades for the given grading_period.  If this parameter is not specified,
  the returned grades will be for the whole course. */
  gradingperiodid?: number;
  /**
  Returns only enrollments for the specified enrollment term. This parameter only
  applies to the user enrollments path. May pass the ID from the enrollment terms
  api or the SIS id prepended with 'sis_term_id:'. */
  enrollmenttermid?: number;
  /**
  Returns only enrollments for the specified SIS account ID(s). Does not look into
  sub_accounts. May pass in array or string. */
  sis_account_id?: string[];
  /**
  Returns only enrollments matching the specified SIS course ID(s). May pass in
  array or string. */
  sis_course_id?: string[];
  /**
  Returns only section enrollments matching the specified SIS section ID(s). May
  pass in array or string. */
  sis_section_id?: string[];
  /**
  Returns only enrollments for the specified SIS user ID(s). May pass in array or
  string. */
  sis_user_id?: string[];
  /**
  If sis_user_id is present and created_for_sis_id is true, Returns only
  enrollments for the specified SIS ID(s). If a user has two sis_id's, one
  enrollment may be created using one of the two ids. This would limit the
  enrollments returned from the endpoint to enrollments that were created from a
  sis_import with that sis_user_id */
  created_for_sis_id?: boolean[];
}

export interface EnrollmentByIdParams {
  /**
  The ID of the enrollment object */
  id?: number;
}

export interface EnrollUserParams {
  /**
  The start time of the enrollment, in ISO8601 format. e.g. 2012-04-18T23:08:51Z */
  enrollmentstartat?: Date;
  /**
  The end time of the enrollment, in ISO8601 format. e.g. 2012-04-18T23:08:51Z */
  enrollmentendat?: Date;
  /**
  The ID of the user to be enrolled in the course. */
  enrollmentuserid?: string;
  /**
  Allowed values: StudentEnrollment, TeacherEnrollment, TaEnrollment,
  ObserverEnrollment, DesignerEnrollment */
  enrollmenttype?: string;
  /**
  Assigns a custom course-level role to the user. */
  enrollmentroleid?: number;
  /**
  Allowed values: active, invited, inactive */
  enrollmentenrollmentstate?: string;
  /**
  The ID of the course section to enroll the student in. If the section-specific
  URL is used, this argument is redundant and will be ignored. */
  enrollmentcoursesectionid?: number;
  /**
  If set, the enrollment will only allow the user to see and interact with users
  enrolled in the section given by course_section_id.  For teachers and TAs, this
  includes grading privileges.  Section-limited students will not see any users
  (including teachers and TAs) not enrolled in their sections.  Users may have
  other enrollments that grant privileges to multiple sections in the same course. */
  enrollmentlimitprivilegestocoursesection?: boolean;
  /**
  If true, a notification will be sent to the enrolled user. Notifications are not
  sent by default. */
  enrollmentnotify?: boolean;
  /**
  If the current user is not allowed to manage enrollments in this course, but the
  course allows self-enrollment, the user can self- enroll as a student in the
  default section by passing in a valid code. When self-enrolling, the user_id
  must be 'self'. The enrollment_state will be set to 'active' and all other
  arguments will be ignored. */
  enrollmentselfenrollmentcode?: string;
  /**
  If true, marks the enrollment as a self-enrollment, which gives students the
  ability to drop the course if desired. Defaults to false. */
  enrollmentselfenrolled?: boolean;
  /**
  For an observer enrollment, the ID of a student to observe. This is a one-off
  operation; to automatically observe all a student's enrollments (for example, as
  a parent), please use the User Observees API. */
  enrollmentassociateduserid?: number;
}

export interface ConcludeDeactivateOrDeleteAnEnrollmentParams {
  /**
  Allowed values: conclude, delete, inactivate, deactivate */
  task?: string;
}

export interface GetAllEportfoliosForUserParams {
  /**
  Allowed values: deleted */
  include?: string[];
}

export interface ModerateAnEportfolioParams {
  /**
  Allowed values: marked_as_spam, marked_as_safe */
  spamstatus?: string;
}

export interface ModerateAllEportfoliosForUserParams {
  /**
  Allowed values: marked_as_spam, marked_as_safe */
  spamstatus?: string;
}

export interface CreateErrorReportParams {
  /**
  The summary of the problem */
  errorsubject?: string;
  /**
  URL from which the report was issued */
  errorurl?: string;
  /**
  Email address for the reporting user */
  erroremail?: string;
  /**
  The long version of the story from the user one what they experienced */
  errorcomments?: string;
  /**
  A collection of metadata about the users' environment.  If not provided, canvas
  will collect it based on information found in the request. (Doesn't have to be
  HTTPENV info, could be anything JSON object that can be serialized as a hash, a
  mobile app might include relevant metadata for itself) */
  errorhttpenv?: unknown;
}

export interface ListExternalToolsParams {
  /**
  The partial name of the tools to match and return. */
  searchterm?: string;
  /**
  If true, then only tools that are meant to be selectable are returned */
  selectable?: boolean;
  /**
  If true, then include tools installed in all accounts above the current context */
  includeparents?: boolean;
}

export interface GetSessionlessLaunchUrlForAnExternalToolParams {
  /**
  The external id of the tool to launch. */
  id?: string;
  /**
  The LTI launch url for the external tool. */
  url?: string;
  /**
  The assignment id for an assignment launch. Required if launch_type is set to
  “assessment”. */
  assignmentid?: string;
  /**
  The assignment id for a module item launch. Required if launch_type is set to
  “module_item”. */
  moduleitemid?: string;
  /**
  Allowed values: assessment, module_item */
  launchtype?: string;
  /**
  The identifier to lookup a resource link. */
  resourcelinklookupuuid?: string;
}

export interface CreateAnExternalToolParams {
  /**
  The client id is attached to the developer key. If supplied all other parameters
  are unnecessary and will be ignored */
  clientid?: string;
  /**
  The name of the tool */
  name?: string;
  /**
  Allowed values: anonymous, name_only, public */
  privacylevel?: string;
  /**
  The consumer key for the external tool */
  consumerkey?: string;
  /**
  The shared secret with the external tool */
  sharedsecret?: string;
  /**
  A description of the tool */
  description?: string;
  /**
  The url to match links against. Either “url” or “domain” should be set, not
  both. */
  url?: string;
  /**
  The domain to match links against. Either “url” or “domain” should be set, not
  both. */
  domain?: string;
  /**
  The url of the icon to show for this tool */
  iconurl?: string;
  /**
  The default text to show for this tool */
  text?: string;
  /**
  Custom fields that will be sent to the tool consumer; can be used multiple times */
  customfieldsfieldname?: string;
  /**
  (Deprecated in favor of Add tool to RCE Favorites and Remove tool from RCE
  Favorites) Whether this tool should appear in a preferred location in the RCE.
  This only applies to tools in root account contexts that have an editor button
  placement. */
  isrcefavorite?: boolean;
  /**
  The url of the external tool for account navigation */
  accountnavigationurl?: string;
  /**
  Set this to enable this feature */
  accountnavigationenabled?: boolean;
  /**
  The text that will show on the left-tab in the account navigation */
  accountnavigationtext?: string;
  /**
  The width of the dialog the tool is launched in */
  accountnavigationselectionwidth?: string;
  /**
  The height of the dialog the tool is launched in */
  accountnavigationselectionheight?: string;
  /**
  The layout type to use when launching the tool. Must be “full_width”,
  “full_width_in_context”, “in_nav_context”, “borderless”, or “default” */
  accountnavigationdisplaytype?: string;
  /**
  The url of the external tool for user navigation */
  usernavigationurl?: string;
  /**
  Set this to enable this feature */
  usernavigationenabled?: boolean;
  /**
  The text that will show on the left-tab in the user navigation */
  usernavigationtext?: string;
  /**
  Allowed values: admins, members, public */
  usernavigationvisibility?: string;
  /**
  The url of the external tool for right-side course home navigation menu */
  coursehomesubnavigationurl?: string;
  /**
  Set this to enable this feature */
  coursehomesubnavigationenabled?: boolean;
  /**
  The text that will show on the right-side course home navigation menu */
  coursehomesubnavigationtext?: string;
  /**
  The url of the icon to show in the right-side course home navigation menu */
  coursehomesubnavigationiconurl?: string;
  /**
  Set this to enable this feature */
  coursenavigationenabled?: boolean;
  /**
  The text that will show on the left-tab in the course navigation */
  coursenavigationtext?: string;
  /**
  Allowed values: admins, members, public */
  coursenavigationvisibility?: string;
  /**
  Allowed values: _blank, _self */
  coursenavigationwindowTarget?: string;
  /**
  Allowed values: disabled, enabled */
  coursenavigationdefault?: string;
  /**
  The layout type to use when launching the tool. Must be “full_width”,
  “full_width_in_context”, “in_nav_context”, “borderless”, or “default” */
  coursenavigationdisplaytype?: string;
  /**
  The url of the external tool */
  editorbuttonurl?: string;
  /**
  Set this to enable this feature */
  editorbuttonenabled?: boolean;
  /**
  The url of the icon to show in the WYSIWYG editor */
  editorbuttoniconurl?: string;
  /**
  The width of the dialog the tool is launched in */
  editorbuttonselectionwidth?: string;
  /**
  The height of the dialog the tool is launched in */
  editorbuttonselectionheight?: string;
  /**
  Set this to ContentItemSelectionRequest to tell the tool to use content-item;
  otherwise, omit */
  editorbuttonmessagetype?: string;
  /**
  The url of the external tool */
  homeworksubmissionurl?: string;
  /**
  Set this to enable this feature */
  homeworksubmissionenabled?: boolean;
  /**
  The text that will show on the homework submission tab */
  homeworksubmissiontext?: string;
  /**
  Set this to ContentItemSelectionRequest to tell the tool to use content-item;
  otherwise, omit */
  homeworksubmissionmessagetype?: string;
  /**
  The url of the external tool */
  linkselectionurl?: string;
  /**
  Set this to enable this feature */
  linkselectionenabled?: boolean;
  /**
  The text that will show for the link selection text */
  linkselectiontext?: string;
  /**
  Set this to ContentItemSelectionRequest to tell the tool to use content-item;
  otherwise, omit */
  linkselectionmessagetype?: string;
  /**
  The url of the external tool */
  migrationselectionurl?: string;
  /**
  Set this to enable this feature */
  migrationselectionenabled?: boolean;
  /**
  Set this to ContentItemSelectionRequest to tell the tool to use content-item;
  otherwise, omit */
  migrationselectionmessagetype?: string;
  /**
  The url of the external tool */
  toolconfigurationurl?: string;
  /**
  Set this to enable this feature */
  toolconfigurationenabled?: boolean;
  /**
  Set this to ContentItemSelectionRequest to tell the tool to use content-item;
  otherwise, omit */
  toolconfigurationmessagetype?: string;
  /**
  Set this to default the lis_person_contact_email_primary to prefer provisioned
  sis_email; otherwise, omit */
  toolconfigurationprefersisemail?: boolean;
  /**
  The url of the external tool */
  resourceselectionurl?: string;
  /**
  Set this to enable this feature. If set to false, not_selectable must also be
  set to true in order to hide this tool from the selection UI in modules and
  assignments. */
  resourceselectionenabled?: boolean;
  /**
  The url of the icon to show in the module external tool list */
  resourceselectioniconurl?: string;
  /**
  The width of the dialog the tool is launched in */
  resourceselectionselectionwidth?: string;
  /**
  The height of the dialog the tool is launched in */
  resourceselectionselectionheight?: string;
  /**
  Configuration can be passed in as CC xml instead of using query parameters. If
  this value is “by_url” or “by_xml” then an xml configuration will be expected in
  either the “config_xml” or “config_url” parameter. Note that the name parameter
  overrides the tool name provided in the xml */
  configtype?: string;
  /**
  XML tool configuration, as specified in the CC xml specification. This is
  required if “config_type” is set to “by_xml” */
  configxml?: string;
  /**
  URL where the server can retrieve an XML tool configuration, as specified in the
  CC xml specification. This is required if “config_type” is set to “by_url” */
  configurl?: string;
  /**
  Default: false. If set to true, and if resource_selection is set to false, the
  tool won't show up in the external tool selection UI in modules and assignments */
  notselectable?: boolean;
  /**
  Default: false, if set to true LTI query params will not be copied to the post
  body. */
  oauthcompliant?: boolean;
}

export interface GetVisibleCourseNavigationToolsParams {
  /**
  List of context_codes to retrieve visible course nav tools for (for example,
  course_123). Only courses are presently supported. */
  context_codes?: string[];
}

export interface ListFavoriteCoursesParams {
  /**
  When set, only return courses that are not configured as blueprint courses. */
  excludeblueprintcourses?: boolean;
}

export interface AddCourseToFavoritesParams {
  /**
  The ID or SIS ID of the course to add.  The current user must be registered in
  the course. */
  id?: string;
}

export interface AddGroupToFavoritesParams {
  /**
  The ID or SIS ID of the group to add.  The current user must be a member of the
  group. */
  id?: string;
}

export interface RemoveCourseFromFavoritesParams {
  /**
  the ID or SIS ID of the course to remove */
  id?: string;
}

export interface RemoveGroupFromFavoritesParams {
  /**
  the ID or SIS ID of the group to remove */
  id?: string;
}

export interface SetFeatureFlagParams {
  /**
  Allowed values: off, allowed, on */
  state?: string;
}

export interface ListFilesParams {
  /**
  Filter results by content-type. You can specify type/subtype pairs (e.g.,
  'image/jpeg'), or simply types (e.g., 'image', which will match 'image/gif',
  'image/jpeg', etc.). */
  content_types?: string[];
  /**
  Exclude given content-types from your results. You can specify type/subtype
  pairs (e.g., 'image/jpeg'), or simply types (e.g., 'image', which will match
  'image/gif', 'image/jpeg', etc.). */
  exclude_content_types?: string[];
  /**
  The partial name of the files to match and return. */
  searchterm?: string;
  /**
  Allowed values: user */
  include?: string[];
  /**
  Array of information to restrict to. Overrides include[] “names”  only returns
  file name information */
  only?: unknown[][];
  /**
  Allowed values: name, size, created_at, updated_at, content_type, user */
  sort?: string;
  /**
  Allowed values: asc, desc */
  order?: string;
}

export interface GetPublicInlinePreviewUrlParams {
  /**
  The id of the submission the file is associated with.  Provide this argument to
  gain access to a file that has been submitted to an assignment (Canvas will
  verify that the file belongs to the submission and the calling user has rights
  to view the submission). */
  submissionid?: number;
}

export interface GetFileParams {
  /**
  Allowed values: user */
  include?: string[];
  /**
  When a user replaces a file during upload, Canvas keeps track of the
  “replacement chain.” Include this parameter if you wish Canvas to follow the
  replacement chain if the requested file was deleted and replaced by another.
  Must be set to 'course' or 'account'. The “replacement_chain_context_id”
  parameter must also be included. */
  replacementchaincontexttype?: string;
  /**
  When a user replaces a file during upload, Canvas keeps track of the
  “replacement chain.” Include this parameter if you wish Canvas to follow the
  replacement chain if the requested file was deleted and replaced by another.
  Indicates the context ID Canvas should use when following the “replacement
  chain.” The “replacement_chain_context_type” parameter must also be included. */
  replacementchaincontextid?: number;
}

export interface UpdateFileParams {
  /**
  The new display name of the file, with a limit of 255 characters. */
  name?: string;
  /**
  The id of the folder to move this file into. The new folder must be in the same
  context as the original parent folder. If the file is in a context without
  folders this does not apply. */
  parentfolderid?: string;
  /**
  Allowed values: overwrite, rename */
  onduplicate?: string;
  /**
  The datetime to lock the file at */
  lockat?: Date;
  /**
  The datetime to unlock the file at */
  unlockat?: Date;
  /**
  Flag the file as locked */
  locked?: boolean;
  /**
  Flag the file as hidden */
  hidden?: boolean;
  /**
  Configure which roles can access this file */
  visibilitylevel?: string;
}

export interface DeleteFileParams {
  /**
  This action is irreversible. If replace is set to true the file contents will be
  replaced with a generic “file has been removed” file. This also destroys any
  previews that have been generated for the file. Must have manage files and
  become other users permissions */
  replace?: boolean;
}

export interface UpdateFolderParams {
  /**
  The new name of the folder */
  name?: string;
  /**
  The id of the folder to move this folder into. The new folder must be in the
  same context as the original parent folder. */
  parentfolderid?: string;
  /**
  The datetime to lock the folder at */
  lockat?: Date;
  /**
  The datetime to unlock the folder at */
  unlockat?: Date;
  /**
  Flag the folder as locked */
  locked?: boolean;
  /**
  Flag the folder as hidden */
  hidden?: boolean;
  /**
  Set an explicit sort position for the folder */
  position?: number;
}

export interface CreateFolderParams {
  /**
  The name of the folder */
  name?: string;
  /**
  The id of the folder to store the file in. If this and parent_folder_path are
  sent an error will be returned. If neither is given, a default folder will be
  used. */
  parentfolderid?: string;
  /**
  The path of the folder to store the new folder in. The path separator is the
  forward slash `/`, never a back slash. The parent folder will be created if it
  does not already exist. This parameter only applies to new folders in a context
  that has folders, such as a user, a course, or a group. If this and
  parent_folder_id are sent an error will be returned. If neither is given, a
  default folder will be used. */
  parentfolderpath?: string;
  /**
  The datetime to lock the folder at */
  lockat?: Date;
  /**
  The datetime to unlock the folder at */
  unlockat?: Date;
  /**
  Flag the folder as locked */
  locked?: boolean;
  /**
  Flag the folder as hidden */
  hidden?: boolean;
  /**
  Set an explicit sort position for the folder */
  position?: number;
}

export interface DeleteFolderParams {
  /**
  Set to 'true' to allow deleting a non-empty folder */
  force?: boolean;
}

export interface CopyFileParams {
  /**
  The id of the source file */
  sourcefileid?: string;
  /**
  Allowed values: overwrite, rename */
  onduplicate?: string;
}

export interface CopyFolderParams {
  /**
  The id of the source folder */
  sourcefolderid?: string;
}

export interface SetUsageRightsParams {
  /**
  List of ids of files to set usage rights for. */
  file_ids?: string[];
  /**
  List of ids of folders to search for files to set usage rights for. Note that
  new files uploaded to these folders do not automatically inherit these rights. */
  folder_ids?: string[];
  /**
  Whether the file(s) or folder(s) should be published on save, provided that
  usage rights have been specified (set to `true` to publish on save). */
  publish?: boolean;
  /**
  Allowed values: own_copyright, used_by_permission, fair_use, public_domain,
  creative_commons */
  usagerightsusejustification?: string;
  /**
  The legal copyright line for the files */
  usagerightslegalcopyright?: string;
  /**
  The license that applies to the files. See the List licenses endpoint for the
  supported license types. */
  usagerightslicense?: string;
}

export interface RemoveUsageRightsParams {
  /**
  List of ids of files to remove associated usage rights from. */
  file_ids?: string[];
  /**
  List of ids of folders. Usage rights will be removed from all files in these
  folders. */
  folder_ids?: string[];
}

export interface QueryByAssignmentParams {
  /**
  The beginning of the time range from which you want events. */
  starttime?: Date;
  /**
  The end of the time range from which you want events. */
  endtime?: Date;
}

export interface QueryByCourseParams {
  /**
  The beginning of the time range from which you want events. */
  starttime?: Date;
  /**
  The end of the time range from which you want events. */
  endtime?: Date;
}

export interface QueryByStudentParams {
  /**
  The beginning of the time range from which you want events. */
  starttime?: Date;
  /**
  The end of the time range from which you want events. */
  endtime?: Date;
}

export interface QueryByGraderParams {
  /**
  The beginning of the time range from which you want events. */
  starttime?: Date;
  /**
  The end of the time range from which you want events. */
  endtime?: Date;
}

export interface AdvancedQueryParams {
  /**
  Restrict query to events in the specified course. */
  courseid?: number;
  /**
  Restrict query to the given assignment. If “override” is given, query the course
  final grade override instead. */
  assignmentid?: number;
  /**
  User id of a student to search grading events for. */
  studentid?: number;
  /**
  User id of a grader to search grading events for. */
  graderid?: number;
  /**
  The beginning of the time range from which you want events. */
  starttime?: Date;
  /**
  The end of the time range from which you want events. */
  endtime?: Date;
}

export interface DaysInGradebookHistoryForThisCourseParams {
  /**
  The id of the contextual course for this API call */
  courseid?: number;
}

export interface DetailsForGivenDateInGradebookHistoryForThisCourseParams {
  /**
  The id of the contextual course for this API call */
  courseid?: number;
  /**
  The date for which you would like to see detailed information */
  date?: string;
}

export interface ListsSubmissionsParams {
  /**
  The id of the contextual course for this API call */
  courseid?: number;
  /**
  The date for which you would like to see submissions */
  date?: string;
  /**
  The ID of the grader for which you want to see submissions */
  graderid?: number;
  /**
  The ID of the assignment for which you want to see submissions */
  assignmentid?: number;
}

export interface ListUncollatedSubmissionVersionsParams {
  /**
  The id of the contextual course for this API call */
  courseid?: number;
  /**
  The ID of the assignment for which you want to see submissions. If absent,
  versions of submissions from any assignment in the course are included. */
  assignmentid?: number;
  /**
  The ID of the user for which you want to see submissions. If absent, versions of
  submissions from any user in the course are included. */
  userid?: number;
  /**
  Returns submission versions in ascending date order (oldest first). If absent,
  returns submission versions in descending date order (newest first). */
  ascending?: boolean;
}

export interface CreateGradingPeriodSetParams {
  /**
  A list of associated term ids for the grading period set */
  enrollment_term_ids?: unknown[][];
  /**
  The title of the grading period set */
  gradingperiodsettitle?: string;
  /**
  A boolean to determine whether the grading periods in the set are weighted */
  gradingperiodsetweighted?: boolean;
  /**
  A boolean to determine whether the totals for all grading periods in the set are
  displayed */
  gradingperiodsetdisplaytotalsforallgradingperiods?: boolean;
}

export interface UpdateGradingPeriodSetParams {
  /**
  A list of associated term ids for the grading period set */
  enrollment_term_ids?: unknown[][];
  /**
  The title of the grading period set */
  gradingperiodsettitle?: string;
  /**
  A boolean to determine whether the grading periods in the set are weighted */
  gradingperiodsetweighted?: boolean;
  /**
  A boolean to determine whether the totals for all grading periods in the set are
  displayed */
  gradingperiodsetdisplaytotalsforallgradingperiods?: boolean;
}

export interface UpdateSingleGradingPeriodParams {
  /**
  The date the grading period starts. */
  gradingperiodsstartdate?: Date;
  /**
  no description */
  gradingperiodsenddate?: Date;
  /**
  A weight value that contributes to the overall weight of a grading period set
  which is used to calculate how much assignments in this period contribute to the
  total grade */
  gradingperiodsweight?: number;
}

export interface BatchUpdateGradingPeriodsParams {
  /**
  The id of the grading period set. */
  setid?: string;
  /**
  The id of the grading period. If the id parameter does not exist, a new grading
  period will be created. */
  gradingperiodsid?: string;
  /**
  The title of the grading period. The title is required for creating a new
  grading period, but not for updating an existing grading period. */
  gradingperiodstitle?: string;
  /**
  The date the grading period starts. The start_date is required for creating a
  new grading period, but not for updating an existing grading period. */
  gradingperiodsstartdate?: Date;
  /**
  The date the grading period ends. The end_date is required for creating a new
  grading period, but not for updating an existing grading period. */
  gradingperiodsenddate?: Date;
  /**
  The date after which grades can no longer be changed for a grading period. The
  close_date is required for creating a new grading period, but not for updating
  an existing grading period. */
  gradingperiodsclosedate?: Date;
  /**
  A weight value that contributes to the overall weight of a grading period set
  which is used to calculate how much assignments in this period contribute to the
  total grade */
  gradingperiodsweight?: number;
}

export interface CreateNewGradingStandardParams {
  /**
  The title for the Grading Standard. */
  title?: string;
  /**
  The name for an entry value within a GradingStandard that describes the range of
  the value e.g. A- */
  gradingschemeentryname?: string;
  /**
  The value for the name of the entry within a GradingStandard. The entry
  represents the lower bound of the range for the entry. This range includes the
  value up to the next entry in the GradingStandard, or 100 if there is no upper
  bound. The lowest value will have a lower bound range of 0. e.g. 93 */
  gradingschemeentryvalue?: number;
}

export interface CreateGroupCategoryParams {
  /**
  Name of the group category */
  name?: string;
  /**
  Allowed values: enabled, restricted */
  selfsignup?: string;
  /**
  Allowed values: first, random */
  autoleader?: string;
  /**
  Limit the maximum number of users in each group (Course Only). Requires self
  signup. */
  grouplimit?: number;
  /**
  The unique SIS identifier. */
  sisgroupcategoryid?: string;
  /**
  Create this number of groups (Course Only). */
  creategroupcount?: number;
  /**
  (Deprecated) Create this number of groups, and evenly distribute students among
  them. not allowed with “enable_self_signup”. because the group assignment
  happens synchronously, it's recommended that you instead use the
  assign_unassigned_members endpoint. (Course Only) */
  splitgroupcount?: string;
}

export interface ImportCategoryGroupsParams {
  /**
  There are two ways to post group category import data - either via a
  multipart/form-data form-field-style attachment, or via a non-multipart raw post
  request. 'attachment' is required for multipart/form-data style posts. Assumed
  to be outcome data from a file upload form field named 'attachment'. Examples:
  curl -F attachment=@<filename> -H "Authorization: Bearer <token>" \
  'https://<canvas>/api/v1/group_categories/<category_id>/import'  If you decide
  to do a raw post, you can skip the 'attachment' argument, but you will then be
  required to provide a suitable Content-Type header. You are encouraged to also
  provide the 'extension' argument. Examples: curl -H 'Content-Type: text/csv'
  --data-binary @<filename>.csv \     -H "Authorization: Bearer <token>" \
  'https://<canvas>/api/v1/group_categories/<category_id>/import' */
  attachment?: string;
}

export interface UpdateGroupCategoryParams {
  /**
  Name of the group category */
  name?: string;
  /**
  Allowed values: enabled, restricted */
  selfsignup?: string;
  /**
  Allowed values: first, random */
  autoleader?: string;
  /**
  Limit the maximum number of users in each group (Course Only). Requires self
  signup. */
  grouplimit?: number;
  /**
  The unique SIS identifier. */
  sisgroupcategoryid?: string;
  /**
  Create this number of groups (Course Only). */
  creategroupcount?: number;
  /**
  (Deprecated) Create this number of groups, and evenly distribute students among
  them. not allowed with “enable_self_signup”. because the group assignment
  happens synchronously, it's recommended that you instead use the
  assign_unassigned_members endpoint. (Course Only) */
  splitgroupcount?: string;
}

export interface ListUsersInGroupCategoryParams {
  /**
  The partial name or full ID of the users to match and return in the results
  list. Must be at least 3 characters. */
  searchterm?: string;
  /**
  Set this value to true if you wish only to search unassigned users in the group
  category. */
  unassigned?: boolean;
}

export interface AssignUnassignedMembersParams {
  /**
  The assigning is done asynchronously by default. If you would like to override
  this and have the assigning done synchronously, set this value to true. */
  sync?: boolean;
}

export interface ListGroupsParams {
  /**
  Allowed values: Account, Course */
  contexttype?: string;
  /**
  Allowed values: tabs */
  include?: string[];
}

export interface ListTheGroupsAvailableInContextParams {
  /**
  Will only include groups that the user belongs to if this is set */
  onlyowngroups?: boolean;
  /**
  Allowed values: tabs */
  include?: string[];
}

export interface GetSingleGroupParams {
  /**
  Allowed values: permissions, tabs */
  include?: string[];
}

export interface CreateGroupParams {
  /**
  The name of the group */
  name?: string;
  /**
  A description of the group */
  description?: string;
  /**
  whether the group is public (applies only to community groups) */
  ispublic?: boolean;
  /**
  Allowed values: parent_context_auto_join, parent_context_request,
  invitation_only */
  joinlevel?: string;
  /**
  The allowed file storage for the group, in megabytes. This parameter is ignored
  if the caller does not have the manage_storage_quotas permission. */
  storagequotamb?: number;
  /**
  The sis ID of the group. Must have manage_sis permission to set. */
  sisgroupid?: string;
}

export interface EditGroupParams {
  /**
  The name of the group */
  name?: string;
  /**
  A description of the group */
  description?: string;
  /**
  Whether the group is public (applies only to community groups). Currently you
  cannot set a group back to private once it has been made public. */
  ispublic?: boolean;
  /**
  Allowed values: parent_context_auto_join, parent_context_request,
  invitation_only */
  joinlevel?: string;
  /**
  The id of the attachment previously uploaded to the group that you would like to
  use as the avatar image for this group. */
  avatarid?: number;
  /**
  The allowed file storage for the group, in megabytes. This parameter is ignored
  if the caller does not have the manage_storage_quotas permission. */
  storagequotamb?: number;
  /**
  An array of user ids for users you would like in the group. Users not in the
  group will be sent invitations. Existing group members who aren't in the list
  will be removed from the group. */
  members?: string[];
  /**
  The sis ID of the group. Must have manage_sis permission to set. */
  sisgroupid?: string;
  /**
  Default is true. If false, any fields containing “sticky” changes will not be
  updated. See SIS CSV Format documentation for information on which fields can
  have SIS stickiness */
  overridesisstickiness?: boolean;
}

export interface InviteOthersToGroupParams {
  /**
  An array of email addresses to be sent invitations. */
  invitees?: string[];
}

export interface ListGroupsUsersParams {
  /**
  The partial name or full ID of the users to match and return in the results
  list. Must be at least 3 characters. */
  searchterm?: string;
  /**
  Allowed values: avatar_url */
  include?: string[];
  /**
  Whether to filter out inactive users from the results. Defaults to false unless
  explicitly provided. */
  excludeinactive?: boolean;
}

export interface PreviewProcessedHtmlParams {
  /**
  The html content to process */
  html?: string;
}

export interface PermissionsParams {
  /**
  List of permissions to check against the authenticated user. Permission names
  are documented in the Create a role endpoint. */
  permissions?: string[];
}

export interface ListGroupMembershipsParams {
  /**
  Allowed values: accepted, invited, requested */
  filter_states?: string[];
}

export interface CreateMembershipParams {
  /**
  no description */
  userid?: string;
}

export interface UpdateMembershipParams {
  /**
  Allowed values: accepted */
  workflowstate?: string;
  /**
  no description */
  moderator?: string;
}

export interface FindImagesParams {
  /**
  Search terms used for matching images (e.g. “cats”). */
  query?: string;
}

export interface ConfirmImageSelectionParams {
  /**
  The ID from the image_search result. */
  id?: string;
}

export interface CreateJwtParams {
  /**
  Adds additional data to the JWT to be used by the consuming service workflow */
  workflows?: string[];
  /**
  Allowed values: Course, User, Account */
  contexttype?: string;
  /**
  The id of the context in case a specified workflow uses it to consuming the
  service. */
  contextid?: number;
  /**
  The uuid of the context in case a specified workflow uses it to consuming the
  service. */
  contextuuid?: string;
}

export interface RefreshJwtParams {
  /**
  An existing JWT token to be refreshed. The new token will have the same context
  and workflows as the existing token. */
  jwt?: string;
}

export interface CreateLatePolicyParams {
  /**
  Whether to enable the missing submission deduction late policy. */
  latepolicymissingsubmissiondeductionenabled?: boolean;
  /**
  How many percentage points to deduct from a missing submission. */
  latepolicymissingsubmissiondeduction?: number;
  /**
  Whether to enable the late submission deduction late policy. */
  latepolicylatesubmissiondeductionenabled?: boolean;
  /**
  How many percentage points to deduct per the late submission interval. */
  latepolicylatesubmissiondeduction?: number;
  /**
  The interval for late policies. */
  latepolicylatesubmissioninterval?: string;
  /**
  Whether to enable the late submission minimum percent for a late policy. */
  latepolicylatesubmissionminimumpercentenabled?: boolean;
  /**
  The minimum grade a submissions can have in percentage points. */
  latepolicylatesubmissionminimumpercent?: number;
}

export interface PatchLatePolicyParams {
  /**
  Whether to enable the missing submission deduction late policy. */
  latepolicymissingsubmissiondeductionenabled?: boolean;
  /**
  How many percentage points to deduct from a missing submission. */
  latepolicymissingsubmissiondeduction?: number;
  /**
  Whether to enable the late submission deduction late policy. */
  latepolicylatesubmissiondeductionenabled?: boolean;
  /**
  How many percentage points to deduct per the late submission interval. */
  latepolicylatesubmissiondeduction?: number;
  /**
  The interval for late policies. */
  latepolicylatesubmissioninterval?: string;
  /**
  Whether to enable the late submission minimum percent for a late policy. */
  latepolicylatesubmissionminimumpercentenabled?: boolean;
  /**
  The minimum grade a submissions can have in percentage points. */
  latepolicylatesubmissionminimumpercent?: number;
}

export interface CreateLineItemParams {
  /**
  The maximum score for the line item. Scores created for the Line Item may exceed
  this value. */
  scoreMaximum?: number;
  /**
  The label for the Line Item. If no resourceLinkId is specified this value will
  also be used as the name of the placeholder assignment. */
  label?: string;
  /**
  A Tool Provider specified id for the Line Item. Multiple line items may share
  the same resourceId within a given context. */
  resourceId?: string;
  /**
  A value used to qualify a line Item beyond its ids. Line Items may be queried by
  this value in the List endpoint. Multiple line items can share the same tag
  within a given context. */
  tag?: string;
  /**
  The resource link id the Line Item should be attached to. This value should
  match the LTI id of the Canvas assignment associated with the tool. */
  resourceLinkId?: string;
  /**
  The ISO8601 date and time when the line item stops receiving submissions.
  Corresponds to the assignment's due_at date. */
  endDateTime?: string;
  /**
  (EXTENSION) - Optional block to set Assignment Submission Type when creating a
  new assignment is created. type - 'none' or 'external_tool' external_tool_url -
  Submission URL only used when type: 'external_tool' */
  httpscanvasinstructurecomltisubmissiontype?: Record<string, unknown>;
}

export interface UpdateLineItemParams {
  /**
  The maximum score for the line item. Scores created for the Line Item may exceed
  this value. */
  scoreMaximum?: number;
  /**
  The label for the Line Item. If no resourceLinkId is specified this value will
  also be used as the name of the placeholder assignment. */
  label?: string;
  /**
  A Tool Provider specified id for the Line Item. Multiple line items may share
  the same resourceId within a given context. */
  resourceId?: string;
  /**
  A value used to qualify a line Item beyond its ids. Line Items may be queried by
  this value in the List endpoint. Multiple line items can share the same tag
  within a given context. */
  tag?: string;
  /**
  The ISO8601 date and time when the line item stops receiving submissions.
  Corresponds to the assignment's due_at date. */
  endDateTime?: string;
}

export interface ShowLineItemParams {
  /**
  Allowed values: launch_url */
  include?: string[];
}

export interface ListLineItemsParams {
  /**
  If specified only Line Items with this tag will be included. */
  tag?: string;
  /**
  If specified only Line Items with this resource_id will be included. */
  resourceid?: string;
  /**
  If specified only Line Items attached to the specified resource_link_id will be
  included. */
  resourcelinkid?: string;
  /**
  May be used to limit the number of Line Items returned in a page */
  limit?: string;
  /**
  Allowed values: launch_url */
  include?: string[];
}

export interface ListLiveAssessmentResultsParams {
  /**
  If set, restrict results to those for this user */
  userid?: number;
}

export interface CreateUserLoginParams {
  /**
  The ID of the user to create the login for. */
  userid?: string;
  /**
  The unique ID for the new login. */
  loginuniqueid?: string;
  /**
  The new login's password. */
  loginpassword?: string;
  /**
  SIS ID for the login. To set this parameter, the caller must be able to manage
  SIS permissions on the account. */
  loginsisuserid?: string;
  /**
  Integration ID for the login. To set this parameter, the caller must be able to
  manage SIS permissions on the account. The Integration ID is a secondary
  identifier useful for more complex SIS integrations. */
  loginintegrationid?: string;
  /**
  The authentication provider this login is associated with. Logins associated
  with a specific provider can only be used with that provider. Legacy providers
  (LDAP, CAS, SAML) will search for logins associated with them, or unassociated
  logins. New providers will only search for logins explicitly associated with
  them. This can be the integer ID of the provider, or the type of the provider
  (in which case, it will find the first matching provider). */
  loginauthenticationproviderid?: string;
  /**
  The declared intention of the user type. This can be set, but does not change
  any Canvas functionality with respect to their access. A user can still be a
  teacher, admin, student, etc. in any particular context without regard to this
  setting. This can be used for administrative purposes for integrations to be
  able to more easily identify why the user was created. Valid values are: *
  administrative * observer * staff * student * student_other * teacher */
  logindeclaredusertype?: string;
}

export interface EditUserLoginParams {
  /**
  The new unique ID for the login. */
  loginuniqueid?: string;
  /**
  The new password for the login. Can only be set by an admin user if admins are
  allowed to change passwords for the account. */
  loginpassword?: string;
  /**
  SIS ID for the login. To set this parameter, the caller must be able to manage
  SIS permissions on the account. */
  loginsisuserid?: string;
  /**
  Integration ID for the login. To set this parameter, the caller must be able to
  manage SIS permissions on the account. The Integration ID is a secondary
  identifier useful for more complex SIS integrations. */
  loginintegrationid?: string;
  /**
  The authentication provider this login is associated with. Logins associated
  with a specific provider can only be used with that provider. Legacy providers
  (LDAP, CAS, SAML) will search for logins associated with them, or unassociated
  logins. New providers will only search for logins explicitly associated with
  them. This can be the integer ID of the provider, or the type of the provider
  (in which case, it will find the first matching provider). */
  loginauthenticationproviderid?: string;
  /**
  Allowed values: active, suspended */
  loginworkflowstate?: string;
  /**
  The declared intention of the user type. This can be set, but does not change
  any Canvas functionality with respect to their access. A user can still be a
  teacher, admin, student, etc. in any particular context without regard to this
  setting. This can be used for administrative purposes for integrations to be
  able to more easily identify why the user was created. Valid values are: *
  administrative * observer * staff * student * student_other * teacher */
  logindeclaredusertype?: string;
  /**
  Default is true. If false, any fields containing “sticky” changes will not be
  updated. See SIS CSV Format documentation for information on which fields can
  have SIS stickiness */
  overridesisstickiness?: boolean;
}

export interface ListMediaTracksForMediaObjectParams {
  /**
  Allowed values: content, webvtt_content, updated_at, created_at */
  include?: string[];
}

export interface UpdateMediaTracksParams {
  /**
  Retuns a listing of the resulting set of MediaTracks. Like List Media Objects,
  use the include[] parameter to add additional fields. */
  include?: string[];
}

export interface ListMediaObjectsParams {
  /**
  Allowed values: title, created_at */
  sort?: string;
  /**
  Allowed values: asc, desc */
  order?: string;
  /**
  Allowed values: sources, tracks */
  exclude?: string[];
}

export interface SelectStudentsForModerationParams {
  /**
  user ids for students to select for moderation */
  student_ids?: number[];
}

export interface ShowProvisionalGradeStatusForStudentParams {
  /**
  The id of the student to show the status for */
  studentid?: number;
}

export interface ShowProvisionalGradeStatusForStudentParams {
  /**
  The id of the student to show the status for */
  anonymousid?: string;
}

export interface ListModulesParams {
  /**
  Allowed values: items, content_details */
  include?: string[];
  /**
  The partial name of the modules (and module items, if 'items' is specified with
  include[]) to match and return. */
  searchterm?: string;
  /**
  Returns module completion information for the student with this id. */
  studentid?: string;
}

export interface ShowModuleParams {
  /**
  Allowed values: items, content_details */
  include?: string[];
  /**
  Returns module completion information for the student with this id. */
  studentid?: string;
}

export interface CreateModuleParams {
  /**
  The name of the module */
  modulename?: string;
  /**
  The date the module will unlock */
  moduleunlockat?: Date;
  /**
  The position of this module in the course (1-based) */
  moduleposition?: number;
  /**
  Whether module items must be unlocked in order */
  modulerequiresequentialprogress?: boolean;
  /**
  IDs of Modules that must be completed before this one is unlocked. Prerequisite
  modules must precede this module (i.e. have a lower position value), otherwise
  they will be ignored */
  "module[prerequisite_module_ids]"?: string[];
  /**
  Whether to publish the student's final grade for the course upon completion of
  this module. */
  modulepublishfinalgrade?: boolean;
}

export interface UpdateModuleParams {
  /**
  The name of the module */
  modulename?: string;
  /**
  The date the module will unlock */
  moduleunlockat?: Date;
  /**
  The position of the module in the course (1-based) */
  moduleposition?: number;
  /**
  Whether module items must be unlocked in order */
  modulerequiresequentialprogress?: boolean;
  /**
  IDs of Modules that must be completed before this one is unlocked Prerequisite
  modules must precede this module (i.e. have a lower position value), otherwise
  they will be ignored */
  "module[prerequisite_module_ids]"?: string[];
  /**
  Whether to publish the student's final grade for the course upon completion of
  this module. */
  modulepublishfinalgrade?: boolean;
  /**
  Whether the module is published and visible to students */
  modulepublished?: boolean;
}

export interface ListModuleItemsParams {
  /**
  Allowed values: content_details */
  include?: string[];
  /**
  The partial title of the items to match and return. */
  searchterm?: string;
  /**
  Returns module completion information for the student with this id. */
  studentid?: string;
}

export interface ShowModuleItemParams {
  /**
  Allowed values: content_details */
  include?: string[];
  /**
  Returns module completion information for the student with this id. */
  studentid?: string;
}

export interface CreateModuleItemParams {
  /**
  The name of the module item and associated content */
  moduleitemtitle?: string;
  /**
  Allowed values: File, Page, Discussion, Assignment, Quiz, SubHeader,
  ExternalUrl, ExternalTool */
  moduleitemtype?: string;
  /**
  The id of the content to link to the module item. Required, except for
  'ExternalUrl', 'Page', and 'SubHeader' types. */
  moduleitemcontentid?: string;
  /**
  The position of this item in the module (1-based). */
  moduleitemposition?: number;
  /**
  0-based indent level; module items may be indented to show a hierarchy */
  moduleitemindent?: number;
  /**
  Suffix for the linked wiki page (e.g. 'front-page'). Required for 'Page' type. */
  moduleitempageurl?: string;
  /**
  External url that the item points to. [Required for 'ExternalUrl' and
  'ExternalTool' types. */
  moduleitemexternalurl?: string;
  /**
  Whether the external tool opens in a new tab. Only applies to 'ExternalTool'
  type. */
  moduleitemnewtab?: boolean;
  /**
  Allowed values: must_view, must_contribute, must_submit, must_mark_done */
  moduleitemcompletionrequirementtype?: string;
  /**
  Minimum score required to complete. Required for completion_requirement type
  'min_score'. */
  moduleitemcompletionrequirementminscore?: number;
  /**
  Width of the ExternalTool on launch */
  moduleitemiframewidth?: number;
  /**
  Height of the ExternalTool on launch */
  moduleitemiframeheight?: number;
}

export interface UpdateModuleItemParams {
  /**
  The name of the module item */
  moduleitemtitle?: string;
  /**
  The position of this item in the module (1-based) */
  moduleitemposition?: number;
  /**
  0-based indent level; module items may be indented to show a hierarchy */
  moduleitemindent?: number;
  /**
  External url that the item points to. Only applies to 'ExternalUrl' type. */
  moduleitemexternalurl?: string;
  /**
  Whether the external tool opens in a new tab. Only applies to 'ExternalTool'
  type. */
  moduleitemnewtab?: boolean;
  /**
  Allowed values: must_view, must_contribute, must_submit, must_mark_done */
  moduleitemcompletionrequirementtype?: string;
  /**
  Minimum score required to complete, Required for completion_requirement type
  'min_score'. */
  moduleitemcompletionrequirementminscore?: number;
  /**
  Whether the module item is published and visible to students. */
  moduleitempublished?: boolean;
  /**
  Move this item to another module by specifying the target module id here. The
  target module must be in the same course. */
  moduleitemmoduleid?: string;
}

export interface SelectMasteryPathParams {
  /**
  Assignment set chosen, as specified in the mastery_paths portion of the context
  module item response */
  assignmentsetid?: string;
  /**
  Which student the selection applies to.  If not specified, current user is
  implied. */
  studentid?: string;
}

export interface GetModuleItemSequenceParams {
  /**
  Allowed values: ModuleItem, File, Page, Discussion, Assignment, Quiz,
  ExternalTool */
  assettype?: string;
  /**
  The id of the asset (or the url in the case of a Page) */
  assetid?: number;
}

export interface ListCourseMembershipsParams {
  /**
  If specified only NamesAndRoleMemberships with access to the LTI link references
  by this `rlid` will be included. Also causes the member array to be included for
  each returned NamesAndRoleMembership. If the `role` parameter is also present,
  it will be 'and-ed' together with this parameter */
  rlid?: string;
  /**
  If specified only NamesAndRoleMemberships having this role in the given Course
  will be included. Value must be a fully-qualified LTI/LIS role URN. If the
  `rlid` parameter is also present, it will be 'and-ed' together with this
  parameter */
  role?: string;
  /**
  May be used to limit the number of NamesAndRoleMemberships returned in a page.
  Defaults to 50. */
  limit?: string;
}

export interface ListGroupMembershipsParams {
  /**
  If specified only NamesAndRoleMemberships with access to the LTI link references
  by this `rlid` will be included. Also causes the member array to be included for
  each returned NamesAndRoleMembership. If the role parameter is also present, it
  will be 'and-ed' together with this parameter */
  rlid?: string;
  /**
  If specified only NamesAndRoleMemberships having this role in the given Group
  will be included. Value must be a fully-qualified LTI/LIS role URN. Further,
  only purl.imsglobal.org/vocab/lis/v2/membership#Member and
  purl.imsglobal.org/vocab/lis/v2/membership#Manager are supported. If the `rlid`
  parameter is also present, it will be 'and-ed' together with this parameter */
  role?: string;
  /**
  May be used to limit the number of NamesAndRoleMemberships returned in a page.
  Defaults to 50. */
  limit?: string;
}

export interface UpdatePreferenceParams {
  /**
  The desired frequency for this notification */
  notificationpreferencesfrequency?: string;
}

export interface UpdatePreferencesByCategoryParams {
  /**
  The name of the category. Must be parameterized (e.g. The category “Course
  Content” should be “course_content”) */
  category?: string;
  /**
  The desired frequency for each notification in the category */
  notificationpreferencesfrequency?: string;
}

export interface UpdateMultiplePreferencesParams {
  /**
  The desired frequency for <X> notification */
  notificationpreferencesXfrequency?: string;
}

export interface CreateAnOriginalityReportParams {
  /**
  The id of the file being given an originality score. Required if creating a
  report associated with a file. */
  originalityreportfileid?: number;
  /**
  A number between 0 and 100 representing the measure of the specified file's
  originality. */
  originalityreportoriginalityscore?: number;
  /**
  The URL where the originality report for the specified file may be found. */
  originalityreportoriginalityreporturl?: string;
  /**
  The ID of the file within Canvas that contains the originality report for the
  submitted file provided in the request URL. */
  originalityreportoriginalityreportfileid?: number;
  /**
  The resource type code of the resource handler Canvas should use for the LTI
  launch for viewing originality reports. If set Canvas will launch to the message
  with type 'basic-lti-launch-request' in the specified resource handler rather
  than using the originality_report_url. */
  originalityreporttoolsettingresourcetypecode?: string;
  /**
  The URL Canvas should launch to when showing an LTI originality report. Note
  that this value is inferred from the specified resource handler's message “path”
  value (See `resource_type_code`) unless it is specified. If this parameter is
  used a `resource_type_code` must also be specified. */
  originalityreporttoolsettingresourceurl?: string;
  /**
  May be set to “pending”, “error”, or “scored”. If an originality score is
  provided a workflow state of “scored” will be inferred. */
  originalityreportworkflowstate?: string;
  /**
  A message describing the error. If set, the “workflow_state” will be set to
  “error.” */
  originalityreporterrormessage?: string;
  /**
  If no `file_id` is given, and no file is required for the assignment (that is,
  the assignment allows an online text entry), this parameter may be given to
  clarify which attempt number the report is for (in the case of resubmissions).
  If this field is omitted and no `file_id` is given, the report will be created
  (or updated, if it exists) for the first submission attempt with no associated
  file. */
  originalityreportattempt?: number;
}

export interface EditAnOriginalityReportParams {
  /**
  A number between 0 and 100 representing the measure of the specified file's
  originality. */
  originalityreportoriginalityscore?: number;
  /**
  The URL where the originality report for the specified file may be found. */
  originalityreportoriginalityreporturl?: string;
  /**
  The ID of the file within Canvas that contains the originality report for the
  submitted file provided in the request URL. */
  originalityreportoriginalityreportfileid?: number;
  /**
  The resource type code of the resource handler Canvas should use for the LTI
  launch for viewing originality reports. If set Canvas will launch to the message
  with type 'basic-lti-launch-request' in the specified resource handler rather
  than using the originality_report_url. */
  originalityreporttoolsettingresourcetypecode?: string;
  /**
  The URL Canvas should launch to when showing an LTI originality report. Note
  that this value is inferred from the specified resource handler's message “path”
  value (See `resource_type_code`) unless it is specified. If this parameter is
  used a `resource_type_code` must also be specified. */
  originalityreporttoolsettingresourceurl?: string;
  /**
  May be set to “pending”, “error”, or “scored”. If an originality score is
  provided a workflow state of “scored” will be inferred. */
  originalityreportworkflowstate?: string;
  /**
  A message describing the error. If set, the “workflow_state” will be set to
  “error.” */
  originalityreporterrormessage?: string;
}

export interface UpdateAnOutcomeGroupParams {
  /**
  The new outcome group title. */
  title?: string;
  /**
  The new outcome group description. */
  description?: string;
  /**
  A custom GUID for the learning standard. */
  vendorguid?: string;
  /**
  The id of the new parent outcome group. */
  parentoutcomegroupid?: number;
}

export interface ListLinkedOutcomesParams {
  /**
  The detail level of the outcomes. Defaults to “abbrev”. Specify “full” for more
  information. */
  outcomestyle?: string;
}

export interface CreateAnOutcomeParams {
  /**
  The ID of the existing outcome to link. */
  outcomeid?: number;
  /**
  The ID of the old outcome group. Only used if outcome_id is present. */
  movefrom?: number;
  /**
  The title of the new outcome. Required if outcome_id is absent. */
  title?: string;
  /**
  A friendly name shown in reports for outcomes with cryptic titles, such as
  common core standards names. */
  displayname?: string;
  /**
  The description of the new outcome. */
  description?: string;
  /**
  A custom GUID for the learning standard. */
  vendorguid?: string;
  /**
  The mastery threshold for the embedded rubric criterion. */
  masterypoints?: number;
  /**
  The description of a rating level for the embedded rubric criterion. */
  ratingsdescription?: string;
  /**
  The points corresponding to a rating level for the embedded rubric criterion. */
  ratingspoints?: number;
  /**
  Allowed values: decaying_average, n_mastery, latest, highest, average */
  calculationmethod?: string;
  /**
  The new calculation int.  Only applies if the calculation_method is
  “decaying_average” or “n_mastery”. Defaults to 65 */
  calculationint?: number;
}

export interface CreateSubgroupParams {
  /**
  The title of the new outcome group. */
  title?: string;
  /**
  The description of the new outcome group. */
  description?: string;
  /**
  A custom GUID for the learning standard */
  vendorguid?: string;
}

export interface ImportAnOutcomeGroupParams {
  /**
  The ID of the source outcome group. */
  sourceoutcomegroupid?: number;
  /**
  If true, perform action asynchronously.  In that case, this endpoint will return
  a Progress object instead of an OutcomeGroup. Use the progress endpoint to query
  the status of the operation.  The imported outcome group id and url will be
  returned in the results of the Progress object as “outcome_group_id” and
  “outcome_group_url” */
  async?: boolean;
}

export interface ImportOutcomesParams {
  /**
  Choose the data format for reading outcome data. With a standard Canvas install,
  this option can only be 'instructure_csv', and if unprovided, will be assumed to
  be so. Can be part of the query string. */
  importtype?: string;
  /**
  There are two ways to post outcome import data - either via a multipart/form-
  data form-field-style attachment, or via a non-multipart raw post request.
  'attachment' is required for multipart/form-data style posts. Assumed to be
  outcome data from a file upload form field named 'attachment'. Examples: curl -F
  attachment=@<filename> -H "Authorization: Bearer <token>" \     'https://<canvas
  >/api/v1/accounts/<account_id>/outcome_imports?import_type=instructure_csv' curl
  -F attachment=@<filename> -H "Authorization: Bearer <token>" \     'https://<can
  vas>/api/v1/courses/<course_id>/outcome_imports?import_type=instructure_csv'  If
  you decide to do a raw post, you can skip the 'attachment' argument, but you
  will then be required to provide a suitable Content-Type header. You are
  encouraged to also provide the 'extension' argument. Examples: curl -H 'Content-
  Type: text/csv' --data-binary @<filename>.csv \     -H "Authorization: Bearer
  <token>" \     'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports?im
  port_type=instructure_csv'  curl -H 'Content-Type: text/csv' --data-binary
  @<filename>.csv \     -H "Authorization: Bearer <token>" \     'https://<canvas>
  /api/v1/courses/<course_id>/outcome_imports?import_type=instructure_csv' */
  attachment?: string;
  /**
  Recommended for raw post request style imports. This field will be used to
  distinguish between csv and other file format extensions that would usually be
  provided with the filename in the multipart post request scenario. If not
  provided, this value will be inferred from the Content-Type, falling back to
  csv-file format if all else fails. */
  extension?: string;
}

export interface GetOutcomeResultsParams {
  /**
  If specified, only the users whose ids are given will be included in the
  results. SIS ids can be used, prefixed by “sis_user_id:”. It is an error to
  specify an id for a user who is not a student in the context. */
  user_ids?: number[];
  /**
  If specified, only the outcomes whose ids are given will be included in the
  results. it is an error to specify an id for an outcome which is not linked to
  the context. */
  outcome_ids?: number[];
  /**
  String, “alignments”|“outcomes”|“outcomes.alignments”|“outcome_groups”|“outcome_
  links”|“outcome_paths”|“users”  Specify additional collections to be side loaded
  with the result. “alignments” includes only the alignments referenced by the
  returned results. “outcomes.alignments” includes all alignments referenced by
  outcomes in the context. */
  include?: string[];
  /**
  If true, results that are hidden from the learning mastery gradebook and student
  rollup scores will be included */
  includehidden?: boolean;
}

export interface GetOutcomeResultRollupsParams {
  /**
  Allowed values: course */
  aggregate?: string;
  /**
  Allowed values: mean, median */
  aggregatestat?: string;
  /**
  If specified, only the users whose ids are given will be included in the results
  or used in an aggregate result. it is an error to specify an id for a user who
  is not a student in the context */
  user_ids?: number[];
  /**
  If specified, only the outcomes whose ids are given will be included in the
  results. it is an error to specify an id for an outcome which is not linked to
  the context. */
  outcome_ids?: number[];
  /**
  String, “courses”|“outcomes”|“outcomes.alignments”|“outcome_groups”|“outcome_lin
  ks”|“outcome_paths”|“users”  Specify additional collections to be side loaded
  with the result. */
  include?: string[];
  /**
  Allowed values: missing_user_rollups */
  exclude?: string[];
  /**
  Allowed values: student, outcome */
  sortby?: string;
  /**
  If outcome sorting requested, then this determines which outcome to use for
  rollup score sorting. */
  sortoutcomeid?: number;
  /**
  Allowed values: asc, desc */
  sortorder?: string;
  /**
  If defaults are requested, then color and mastery level defaults will be added
  to outcome ratings in the rollup. This will only take effect if the Account
  Level Mastery Scales FF is DISABLED */
  adddefaults?: boolean;
  /**
  If contributing scores are requested, then each individual outcome score will
  also include all graded artifacts that contributed to the outcome score */
  contributingscores?: boolean;
}

export interface ShowAnOutcomeParams {
  /**
  If defaults are requested, then color and mastery level defaults will be added
  to outcome ratings in the result. This will only take effect if the Account
  Level Mastery Scales FF is DISABLED */
  adddefaults?: boolean;
}

export interface UpdateAnOutcomeParams {
  /**
  The new outcome title. */
  title?: string;
  /**
  A friendly name shown in reports for outcomes with cryptic titles, such as
  common core standards names. */
  displayname?: string;
  /**
  The new outcome description. */
  description?: string;
  /**
  A custom GUID for the learning standard. */
  vendorguid?: string;
  /**
  The new mastery threshold for the embedded rubric criterion. */
  masterypoints?: number;
  /**
  The description of a new rating level for the embedded rubric criterion. */
  ratingsdescription?: string;
  /**
  The points corresponding to a new rating level for the embedded rubric
  criterion. */
  ratingspoints?: number;
  /**
  Allowed values: decaying_average, n_mastery, latest, highest, average */
  calculationmethod?: string;
  /**
  The new calculation int.  Only applies if the calculation_method is
  “decaying_average” or “n_mastery” */
  calculationint?: number;
  /**
  If defaults are requested, then color and mastery level defaults will be added
  to outcome ratings in the result. This will only take effect if the Account
  Level Mastery Scales FF is DISABLED */
  adddefaults?: boolean;
}

export interface UpdateFrontPageParams {
  /**
  The title for the new page. NOTE: changing a page's title will change its url.
  The updated url will be returned in the result. */
  wikipagetitle?: string;
  /**
  The content for the new page. */
  wikipagebody?: string;
  /**
  Allowed values: teachers, students, members, public */
  wikipageeditingroles?: string;
  /**
  Whether participants should be notified when this page changes. */
  wikipagenotifyofupdate?: boolean;
  /**
  Whether the page is published (true) or draft state (false). */
  wikipagepublished?: boolean;
}

export interface ListPagesParams {
  /**
  Allowed values: title, created_at, updated_at */
  sort?: string;
  /**
  Allowed values: asc, desc */
  order?: string;
  /**
  The partial title of the pages to match and return. */
  searchterm?: string;
  /**
  If true, include only published paqes. If false, exclude published pages. If not
  present, do not filter on published status. */
  published?: boolean;
}

export interface CreatePageParams {
  /**
  The title for the new page. */
  wikipagetitle?: string;
  /**
  The content for the new page. */
  wikipagebody?: string;
  /**
  Allowed values: teachers, students, members, public */
  wikipageeditingroles?: string;
  /**
  Whether participants should be notified when this page changes. */
  wikipagenotifyofupdate?: boolean;
  /**
  Whether the page is published (true) or draft state (false). */
  wikipagepublished?: boolean;
  /**
  Set an unhidden page as the front page (if true) */
  wikipagefrontpage?: boolean;
  /**
  Schedule a future date/time to publish the page. This will have no effect unless
  the “Scheduled Page Publication” feature is enabled in the account. If a future
  date is supplied, the page will be unpublished and wiki_page will be ignored. */
  wikipagepublishat?: Date;
}

export interface UpdatePageParams {
  /**
  The title for the new page. NOTE: changing a page's title will change its url.
  The updated url will be returned in the result. */
  wikipagetitle?: string;
  /**
  The content for the new page. */
  wikipagebody?: string;
  /**
  Allowed values: teachers, students, members, public */
  wikipageeditingroles?: string;
  /**
  Whether participants should be notified when this page changes. */
  wikipagenotifyofupdate?: boolean;
  /**
  Whether the page is published (true) or draft state (false). */
  wikipagepublished?: boolean;
  /**
  Schedule a future date/time to publish the page. This will have no effect unless
  the “Scheduled Page Publication” feature is enabled in the account. If a future
  date is set and the page is already published, it will be unpublished. */
  wikipagepublishat?: Date;
  /**
  Set an unhidden page as the front page (if true) */
  wikipagefrontpage?: boolean;
}

export interface ShowRevisionParams {
  /**
  If set, exclude page content from results */
  summary?: boolean;
}

export interface RevertToRevisionParams {
  /**
  The revision to revert to (use the List Revisions API to see available
  revisions) */
  revisionid?: number;
}

export interface GetAllPeerReviewsParams {
  /**
  Allowed values: submission_comments, user */
  include?: string[];
}

export interface CreatePeerReviewParams {
  /**
  user_id to assign as reviewer on this assignment */
  userid?: number;
}

export interface DeletePeerReviewParams {
  /**
  user_id to delete as reviewer on this assignment */
  userid?: number;
}

export interface ListPlannerItemsParams {
  /**
  Only return items starting from the given date. The value should be formatted
  as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ. */
  startdate?: Date;
  /**
  Only return items up to the given date. The value should be formatted as: yyyy-
  mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ. */
  enddate?: Date;
  /**
  List of context codes of courses and/or groups whose items you want to see. If
  not specified, defaults to all contexts associated to the current user. Note
  that concluded courses will be ignored unless specified in the includes[]
  parameter. The format of this field is the context type, followed by an
  underscore, followed by the context id. For example: course_42, group_123 */
  context_codes?: string[];
  /**
  Return planner items for the given observed user. Must be accompanied by
  context_codes[]. The user making the request must be observing the observed user
  in all the courses specified by context_codes[]. */
  observeduserid?: string;
  /**
  Allowed values: new_activity */
  filter?: string;
}

export interface ListPlannerNotesParams {
  /**
  Only return notes with todo dates since the start_date (inclusive). No default.
  The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ. */
  startdate?: Date;
  /**
  Only return notes with todo dates before the end_date (inclusive). No default.
  The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
  If end_date and start_date are both specified and equivalent, then only notes
  with todo dates on that day are returned. */
  enddate?: Date;
  /**
  List of context codes of courses whose notes you want to see. If not specified,
  defaults to all contexts that the user belongs to. The format of this field is
  the context type, followed by an underscore, followed by the context id. For
  example: course_42 Including a code matching the user's own context code (e.g.
  user_1) will include notes that are not associated with any particular course. */
  context_codes?: string[];
}

export interface UpdatePlannerNoteParams {
  /**
  The title of the planner note. */
  title?: string;
  /**
  Text of the planner note. */
  details?: string;
  /**
  The date where this planner note should appear in the planner. The value should
  be formatted as: yyyy-mm-dd. */
  tododate?: Date;
  /**
  The ID of the course to associate with the planner note. The caller must be able
  to view the course in order to associate it with a planner note. Use a null or
  empty value to remove a planner note from a course. Note that if the planner
  note is linked to a learning object, its course_id cannot be changed. */
  courseid?: number;
}

export interface CreatePlannerNoteParams {
  /**
  The title of the planner note. */
  title?: string;
  /**
  Text of the planner note. */
  details?: string;
  /**
  The date where this planner note should appear in the planner. The value should
  be formatted as: yyyy-mm-dd. */
  tododate?: Date;
  /**
  The ID of the course to associate with the planner note. The caller must be able
  to view the course in order to associate it with a planner note. */
  courseid?: number;
  /**
  The type of a learning object to link to this planner note. Must be used in
  conjunction wtih linked_object_id and course_id. Valid linked_object_type values
  are: 'announcement', 'assignment', 'discussion_topic', 'wiki_page', 'quiz' */
  linkedobjecttype?: string;
  /**
  The id of a learning object to link to this planner note. Must be used in
  conjunction with linked_object_type and course_id. The object must be in the
  same course as specified by course_id. If the title argument is not provided,
  the planner note will use the learning object's title as its title. Only one
  planner note may be linked to a specific learning object. */
  linkedobjectid?: number;
}

export interface UpdatePlannerOverrideParams {
  /**
  determines whether the planner item is marked as completed */
  markedcomplete?: string;
  /**
  determines whether the planner item shows in the opportunities list */
  dismissed?: string;
}

export interface CreatePlannerOverrideParams {
  /**
  Allowed values: announcement, assignment, discussion_topic, quiz, wiki_page,
  planner_note */
  plannabletype?: string;
  /**
  ID of the item that you are overriding in the planner */
  plannableid?: number;
  /**
  If this is true, the item will show in the planner as completed */
  markedcomplete?: boolean;
  /**
  If this is true, the item will not show in the opportunities list */
  dismissed?: boolean;
}

export interface CreateSinglePollSessionParams {
  /**
  The id of the course this session is associated with. */
  pollsessionscourseid?: number;
  /**
  The id of the course section this session is associated with. */
  pollsessionscoursesectionid?: number;
  /**
  Whether or not results are viewable by students. */
  pollsessionshaspublicresults?: boolean;
}

export interface UpdateSinglePollSessionParams {
  /**
  The id of the course this session is associated with. */
  pollsessionscourseid?: number;
  /**
  The id of the course section this session is associated with. */
  pollsessionscoursesectionid?: number;
  /**
  Whether or not results are viewable by students. */
  pollsessionshaspublicresults?: boolean;
}

export interface CreateSinglePollChoiceParams {
  /**
  The descriptive text of the poll choice. */
  pollchoicestext?: string;
  /**
  Whether this poll choice is considered correct or not. Defaults to false. */
  pollchoicesiscorrect?: boolean;
  /**
  The order this poll choice should be returned in the context it's sibling poll
  choices. */
  pollchoicesposition?: number;
}

export interface UpdateSinglePollChoiceParams {
  /**
  The descriptive text of the poll choice. */
  pollchoicestext?: string;
  /**
  Whether this poll choice is considered correct or not.  Defaults to false. */
  pollchoicesiscorrect?: boolean;
  /**
  The order this poll choice should be returned in the context it's sibling poll
  choices. */
  pollchoicesposition?: number;
}

export interface CreateSinglePollParams {
  /**
  The title of the poll. */
  pollsquestion?: string;
  /**
  A brief description or instructions for the poll. */
  pollsdescription?: string;
}

export interface UpdateSinglePollParams {
  /**
  The title of the poll. */
  pollsquestion?: string;
  /**
  A brief description or instructions for the poll. */
  pollsdescription?: string;
}

export interface CreateSinglePollSubmissionParams {
  /**
  The chosen poll choice for this submission. */
  pollsubmissionspollchoiceid?: number;
}

export interface CreateProficiencyRatingsParams {
  /**
  The description of the rating level. */
  ratingsdescription?: string;
  /**
  The non-negative number of points of the rating level. Points across ratings
  should be strictly decreasing in value. */
  ratingspoints?: number;
  /**
  Indicates the rating level where mastery is first achieved. Only one rating in a
  proficiency should be marked for mastery. */
  ratingsmastery?: number;
  /**
  The color associated with the rating level. Should be a hex color code like
  '00FFFF'. */
  ratingscolor?: number;
}

export interface UpdatePublicJwkParams {
  /**
  The new public jwk that will be set to the tools current public jwk. */
  publicjwk?: Record<string, unknown>;
}

export interface RetrieveAssignmentoverriddenDatesForClassicQuizzesParams {
  /**
  An array of quiz IDs. If omitted, overrides for all quizzes available to the
  operating user will be returned. */
  "quiz_assignment_overrides[0][quiz_ids]"?: number[];
}

export interface RetrieveAssignmentoverriddenDatesForNewQuizzesParams {
  /**
  An array of quiz IDs. If omitted, overrides for all quizzes available to the
  operating user will be returned. */
  "quiz_assignment_overrides[0][quiz_ids]"?: number[];
}

export interface SetExtensionsForStudentQuizSubmissionsParams {
  /**
  The ID of the user we want to add quiz extensions for. */
  quizextensionsuserid?: number;
  /**
  Number of times the student is allowed to re-take the quiz over the multiple-
  attempt limit. This is limited to 1000 attempts or less. */
  quizextensionsextraattempts?: number;
  /**
  The number of extra minutes to allow for all attempts. This will add to the
  existing time limit on the submission. This is limited to 10080 minutes (1 week) */
  quizextensionsextratime?: number;
  /**
  Allow the student to take the quiz even if it's locked for everyone else. */
  quizextensionsmanuallyunlocked?: boolean;
  /**
  The number of minutes to extend the quiz from the current time. This is mutually
  exclusive to extend_from_end_at. This is limited to 1440 minutes (24 hours) */
  quizextensionsextendfromnow?: number;
  /**
  The number of minutes to extend the quiz beyond the quiz's current ending time.
  This is mutually exclusive to extend_from_now. This is limited to 1440 minutes
  (24 hours) */
  quizextensionsextendfromendat?: number;
}

export interface CreateQuestionGroupParams {
  /**
  The name of the question group. */
  quizgroupsname?: string;
  /**
  The number of questions to randomly select for this group. */
  quizgroupspickcount?: number;
  /**
  The number of points to assign to each question in the group. */
  quizgroupsquestionpoints?: number;
  /**
  The id of the assessment question bank to pull questions from. */
  quizgroupsassessmentquestionbankid?: number;
}

export interface UpdateQuestionGroupParams {
  /**
  The name of the question group. */
  quizgroupsname?: string;
  /**
  The number of questions to randomly select for this group. */
  quizgroupspickcount?: number;
  /**
  The number of points to assign to each question in the group. */
  quizgroupsquestionpoints?: number;
}

export interface ReorderQuestionGroupsParams {
  /**
  The associated item's unique identifier */
  orderid?: number;
  /**
  Allowed values: question */
  ordertype?: string;
}

export interface ListQuestionsInQuizOrSubmissionParams {
  /**
  If specified, the endpoint will return the questions that were presented for
  that submission. This is useful if the quiz has been modified after the
  submission was created and the latest quiz version's set of questions does not
  match the submission's. NOTE: you must specify quiz_submission_attempt as well
  if you specify this parameter. */
  quizsubmissionid?: number;
  /**
  The attempt of the submission you want the questions for. */
  quizsubmissionattempt?: number;
}

export interface GetSingleQuizQuestionParams {
  /**
  The quiz question unique identifier. */
  id?: number;
}

export interface CreateSingleQuizQuestionParams {
  /**
  The name of the question. */
  questionquestionname?: string;
  /**
  The text of the question. */
  questionquestiontext?: string;
  /**
  The id of the quiz group to assign the question to. */
  questionquizgroupid?: number;
  /**
  Allowed values: calculated_question, essay_question, file_upload_question,
  fill_in_multiple_blanks_question, matching_question, multiple_answers_question,
  multiple_choice_question, multiple_dropdowns_question, numerical_question,
  short_answer_question, text_only_question, true_false_question */
  questionquestiontype?: string;
  /**
  The order in which the question will be displayed in the quiz in relation to
  other questions. */
  questionposition?: number;
  /**
  The maximum amount of points received for answering this question correctly. */
  questionpointspossible?: number;
  /**
  The comment to display if the student answers the question correctly. */
  questioncorrectcomments?: string;
  /**
  The comment to display if the student answers incorrectly. */
  questionincorrectcomments?: string;
  /**
  The comment to display regardless of how the student answered. */
  questionneutralcomments?: string;
  /**
  no description */
  questiontextafteranswers?: string;
  /**
  no description */
  questionanswers?: [Answer][];
}

export interface UpdateAnExistingQuizQuestionParams {
  /**
  The associated quiz's unique identifier. */
  quizid?: number;
  /**
  The quiz question's unique identifier. */
  id?: number;
  /**
  The name of the question. */
  questionquestionname?: string;
  /**
  The text of the question. */
  questionquestiontext?: string;
  /**
  The id of the quiz group to assign the question to. */
  questionquizgroupid?: number;
  /**
  Allowed values: calculated_question, essay_question, file_upload_question,
  fill_in_multiple_blanks_question, matching_question, multiple_answers_question,
  multiple_choice_question, multiple_dropdowns_question, numerical_question,
  short_answer_question, text_only_question, true_false_question */
  questionquestiontype?: string;
  /**
  The order in which the question will be displayed in the quiz in relation to
  other questions. */
  questionposition?: number;
  /**
  The maximum amount of points received for answering this question correctly. */
  questionpointspossible?: number;
  /**
  The comment to display if the student answers the question correctly. */
  questioncorrectcomments?: string;
  /**
  The comment to display if the student answers incorrectly. */
  questionincorrectcomments?: string;
  /**
  The comment to display regardless of how the student answered. */
  questionneutralcomments?: string;
  /**
  no description */
  questiontextafteranswers?: string;
  /**
  no description */
  questionanswers?: [Answer][];
}

export interface DeleteQuizQuestionParams {
  /**
  The associated quiz's unique identifier */
  quizid?: number;
  /**
  The quiz question's unique identifier */
  id?: number;
}

export interface RetrieveAllQuizReportsParams {
  /**
  Whether to retrieve reports that consider all the submissions or only the most
  recent. Defaults to false, ignored for item_analysis reports. */
  includesallversions?: boolean;
}

export interface CreateQuizReportParams {
  /**
  Allowed values: student_analysis, item_analysis */
  quizreportreporttype?: string;
  /**
  Whether the report should consider all submissions or only the most recent.
  Defaults to false, ignored for item_analysis. */
  quizreportincludesallversions?: boolean;
  /**
  Allowed values: file, progress */
  include?: string[];
}

export interface GetQuizReportParams {
  /**
  Allowed values: file, progress */
  include?: string[];
}

export interface FetchingTheLatestQuizStatisticsParams {
  /**
  Whether the statistics report should include all submissions attempts. */
  allversions?: boolean;
}

export interface SubmitCapturedEventsParams {
  /**
  The submission events to be recorded */
  quiz_submission_events?: unknown[][];
}

export interface RetrieveCapturedEventsParams {
  /**
  The specific submission attempt to look up the events for. If unspecified, the
  latest attempt will be used. */
  attempt?: number;
}

export interface UploadFileParams {
  /**
  The name of the quiz submission file */
  name?: string;
  /**
  How to handle duplicate names */
  onduplicate?: string;
}

export interface GetAllQuizSubmissionQuestionsParams {
  /**
  Allowed values: quiz_question */
  include?: string[];
}

export interface AnsweringQuestionsParams {
  /**
  The attempt number of the quiz submission being taken. Note that this must be
  the latest attempt index, as questions for earlier attempts can not be modified. */
  attempt?: number;
  /**
  The unique validation token you received when the Quiz Submission was created. */
  validationtoken?: string;
  /**
  Access code for the Quiz, if any. */
  accesscode?: string;
  /**
  Set of question IDs and the answer value. See Appendix: Question Answer Formats
  for the accepted answer formats for each question type. */
  quiz_questions?: QuizSubmissionQuestion[];
}

export interface GetFormattedStudentNumericalAnswerParams {
  /**
  no description */
  answer?: number;
}

export interface FlaggingQuestionParams {
  /**
  The attempt number of the quiz submission being taken. Note that this must be
  the latest attempt index, as questions for earlier attempts can not be modified. */
  attempt?: number;
  /**
  The unique validation token you received when the Quiz Submission was created. */
  validationtoken?: string;
  /**
  Access code for the Quiz, if any. */
  accesscode?: string;
}

export interface UnflaggingQuestionParams {
  /**
  The attempt number of the quiz submission being taken. Note that this must be
  the latest attempt index, as questions for earlier attempts can not be modified. */
  attempt?: number;
  /**
  The unique validation token you received when the Quiz Submission was created. */
  validationtoken?: string;
  /**
  Access code for the Quiz, if any. */
  accesscode?: string;
}

export interface SendMessageToUnsubmittedOrSubmittedUsersForTheQuizParams {
  /**
  Body and recipients to send the message to. */
  conversations?: unknown;
}

export interface GetAllQuizSubmissionsParams {
  /**
  Allowed values: submission, quiz, user */
  include?: string[];
}

export interface GetTheQuizSubmissionParams {
  /**
  Allowed values: submission, quiz, user */
  include?: string[];
}

export interface GetSingleQuizSubmissionParams {
  /**
  Allowed values: submission, quiz, user */
  include?: string[];
}

export interface CreateTheQuizSubmissionstartQuiztakingSessionParams {
  /**
  Access code for the Quiz, if any. */
  accesscode?: string;
  /**
  Whether this should be a preview QuizSubmission and not count towards the user's
  course record. Teachers only. */
  preview?: boolean;
}

export interface UpdateStudentQuestionScoresCommentsParams {
  /**
  The attempt number of the quiz submission that should be updated. This attempt
  MUST be already completed. */
  quizsubmissionsattempt?: number;
  /**
  Amount of positive or negative points to fudge the total score by. */
  quizsubmissionsfudgepoints?: number;
  /**
  A set of scores and comments for each question answered by the student. The keys
  are the question IDs, and the values are hashes of `score` and `comment`
  entries. See Appendix: Manual Scoring for more on this parameter. */
  quizsubmissionsquestions?: unknown;
}

export interface CompleteTheQuizSubmissionturnItInParams {
  /**
  The attempt number of the quiz submission that should be completed. Note that
  this must be the latest attempt index, as earlier attempts can not be modified. */
  attempt?: number;
  /**
  The unique validation token you received when this Quiz Submission was created. */
  validationtoken?: string;
  /**
  Access code for the Quiz, if any. */
  accesscode?: string;
}

export interface ListQuizzesInCourseParams {
  /**
  The partial title of the quizzes to match and return. */
  searchterm?: string;
}

export interface CreateQuizParams {
  /**
  The quiz title. */
  quiztitle?: string;
  /**
  A description of the quiz. */
  quizdescription?: string;
  /**
  Allowed values: practice_quiz, assignment, graded_survey, survey */
  quizquiztype?: string;
  /**
  The assignment group id to put the assignment in. Defaults to the top assignment
  group in the course. Only valid if the quiz is graded, i.e. if quiz_type is
  “assignment” or “graded_survey”. */
  quizassignmentgroupid?: number;
  /**
  Time limit to take this quiz, in minutes. Set to null for no time limit.
  Defaults to null. */
  quiztimelimit?: number;
  /**
  If true, quiz answers for multiple choice questions will be randomized for each
  student. Defaults to false. */
  quizshuffleanswers?: boolean;
  /**
  Allowed values: always, until_after_last_attempt */
  quizhideresults?: string;
  /**
  Only valid if hide_results=null If false, hides correct answers from students
  when quiz results are viewed. Defaults to true. */
  quizshowcorrectanswers?: boolean;
  /**
  Only valid if show_correct_answers=true and allowed_attempts > 1 If true, hides
  correct answers from students when quiz results are viewed until they submit the
  last attempt for the quiz. Defaults to false. */
  quizshowcorrectanswerslastattempt?: boolean;
  /**
  Only valid if show_correct_answers=true If set, the correct answers will be
  visible by students only after this date, otherwise the correct answers are
  visible once the student hands in their quiz submission. */
  quizshowcorrectanswersat?: Date;
  /**
  Only valid if show_correct_answers=true If set, the correct answers will stop
  being visible once this date has passed. Otherwise, the correct answers will be
  visible indefinitely. */
  quizhidecorrectanswersat?: Date;
  /**
  Number of times a student is allowed to take a quiz. Set to -1 for unlimited
  attempts. Defaults to 1. */
  quizallowedattempts?: number;
  /**
  Allowed values: keep_highest, keep_latest */
  quizscoringpolicy?: string;
  /**
  If true, shows quiz to student one question at a time. Defaults to false. */
  quizonequestionatatime?: boolean;
  /**
  Only valid if one_question_at_a_time=true If true, questions are locked after
  answering. Defaults to false. */
  quizcantgoback?: boolean;
  /**
  Restricts access to the quiz with a password. For no access code restriction,
  set to null. Defaults to null. */
  quizaccesscode?: string;
  /**
  Restricts access to the quiz to computers in a specified IP range. Filters can
  be a comma-separated list of addresses, or an address followed by a mask
  Examples: "192.168.217.1" "192.168.217.1/24" "192.168.217.1/255.255.255.0"  For
  no IP filter restriction, set to null. Defaults to null. */
  quizipfilter?: string;
  /**
  The day/time the quiz is due. Accepts times in ISO 8601 format, e.g.
  2011-10-21T18:48Z. */
  quizdueat?: Date;
  /**
  The day/time the quiz is locked for students. Accepts times in ISO 8601 format,
  e.g. 2011-10-21T18:48Z. */
  quizlockat?: Date;
  /**
  The day/time the quiz is unlocked for students. Accepts times in ISO 8601
  format, e.g. 2011-10-21T18:48Z. */
  quizunlockat?: Date;
  /**
  Whether the quiz should have a draft state of published or unpublished. NOTE: If
  students have started taking the quiz, or there are any submissions for the
  quiz, you may not unpublish a quiz and will recieve an error. */
  quizpublished?: boolean;
  /**
  Whether students should be prevented from viewing their quiz results past the
  first time (right after they turn the quiz in.) Only valid if “hide_results” is
  not set to “always”. Defaults to false. */
  quizonetimeresults?: boolean;
  /**
  Whether this quiz is only visible to overrides (Only useful if 'differentiated
  assignments' account setting is on) Defaults to false. */
  quizonlyvisibletooverrides?: boolean;
}

export interface EditQuizParams {
  /**
  If true, notifies users that the quiz has changed. Defaults to true */
  quiznotifyofupdate?: boolean;
}

export interface ReorderQuizItemsParams {
  /**
  The associated item's unique identifier */
  orderid?: number;
  /**
  Allowed values: question, group */
  ordertype?: string;
}

export interface ValidateQuizAccessCodeParams {
  /**
  The access code being validated */
  accesscode?: string;
}

export interface ListRolesParams {
  /**
  The id of the account to retrieve roles for. */
  accountid?: string;
  /**
  Allowed values: active, inactive */
  state?: string[];
  /**
  If this argument is true, all roles inherited from parent accounts will be
  included. */
  showinherited?: boolean;
}

export interface GetSingleRoleParams {
  /**
  The id of the account containing the role */
  accountid?: string;
  /**
  The unique identifier for the role */
  roleid?: number;
  /**
  The name for the role */
  role?: string;
}

export interface CreateNewRoleParams {
  /**
  Label for the role. */
  label?: string;
  /**
  Deprecated alias for label. */
  role?: string;
  /**
  Allowed values: AccountMembership, StudentEnrollment, TeacherEnrollment,
  TaEnrollment, ObserverEnrollment, DesignerEnrollment */
  baseroletype?: string;
  /**
  no description */
  permissionsXexplicit?: boolean;
  /**
  If explicit is 1 and enabled is 1, permission <X> will be explicitly granted to
  this role. If explicit is 1 and enabled has any other value (typically 0),
  permission <X> will be explicitly denied to this role. If explicit is any other
  value (typically 0) or absent, or if enabled is absent, the value for permission
  <X> will be inherited from upstream. Ignored if permission <X> is locked
  upstream (in an ancestor account). May occur multiple times with unique values
  for <X>. Recognized permission names for <X> are: [For Account-Level Roles Only]
  become_user                      -- Users - act as import_sis
  -- SIS Data - import manage_account_memberships       -- Admins - add / remove
  manage_account_settings          -- Account-level settings - manage
  manage_alerts                    -- Global announcements - add / edit / delete
  manage_catalog                   -- Catalog - manage Manage Course Templates
  granular permissions     add_course_template          -- Course Templates - add
  delete_course_template       -- Course Templates - delete
  edit_course_template         -- Course Templates - edit manage_courses_add
  -- Courses - add manage_courses_admin             -- Courses - manage / update
  manage_developer_keys            -- Developer keys - manage manage_feature_flags
  -- Feature Options - enable / disable manage_master_courses            --
  Blueprint Courses - add / edit / associate / delete manage_role_overrides
  -- Permissions - manage manage_storage_quotas            -- Storage Quotas -
  manage manage_sis                       -- SIS data - manage manage_user_logins
  -- Users - manage login details manage_user_observers            -- Users -
  manage observers moderate_user_content            -- Users - moderate content
  read_course_content              -- Course Content - view read_course_list
  -- Courses - view list view_course_changes              -- Courses - view change
  logs view_feature_flags               -- Feature Options - view
  view_grade_changes               -- Grades - view change logs view_notifications
  -- Notifications - view view_quiz_answer_audits          -- Quizzes - view
  submission log view_statistics                  -- Statistics - view
  undelete_courses                 -- Courses - undelete  [For both Account-Level
  and Course-Level roles]  Note: Applicable enrollment types for course-level
  roles are given in brackets:        S = student, T = teacher (instructor), A =
  TA, D = designer, O = observer.        Lower-case letters indicate permissions
  that are off by default.        A missing letter indicates the permission cannot
  be enabled for the role        or any derived custom roles.
  allow_course_admin_actions       -- [ Tad ] Users - allow administrative actions
  in courses create_collaborations            -- [STADo] Student Collaborations -
  create create_conferences               -- [STADo] Web conferences - create
  create_forum                     -- [STADo] Discussions - create
  generate_observer_pairing_code   -- [ tado] Users - Generate observer pairing
  codes for students import_outcomes                  -- [ TaDo] Learning Outcomes
  - import lti_add_edit                     -- [ TAD ] LTI - add / edit / delete
  manage_account_banks             -- [ td  ] Item Banks - manage account
  manage_assignments               -- [ TADo] Assignments and Quizzes - add / edit
  / delete (deprecated) Manage Assignments and Quizzes granular permissions
  manage_assignments_add       -- [ TADo] Assignments and Quizzes - add
  manage_assignments_edit      -- [ TADo] Assignments and Quizzes - edit / manage
  manage_assignments_delete    -- [ TADo] Assignments and Quizzes - delete
  manage_calendar                  -- [sTADo] Course Calendar - add / edit /
  delete manage_content                   -- [ TADo] Course Content - add / edit /
  delete manage_course_visibility         -- [ TAD ] Course - change visibility
  Manage Courses granular permissions     manage_courses_conclude      -- [ TaD ]
  Courses - conclude     manage_courses_delete        -- [ TaD ] Courses - delete
  manage_courses_publish       -- [ TaD ] Courses - publish
  manage_courses_reset         -- [ TaD ] Courses - reset Manage Files granular
  permissions     manage_files_add             -- [ TADo] Course Files - add
  manage_files_edit            -- [ TADo] Course Files - edit
  manage_files_delete          -- [ TADo] Course Files - delete manage_grades
  -- [ TA  ] Grades - edit Manage Groups granular permissions
  manage_groups_add            -- [ TAD ] Groups - add     manage_groups_delete
  -- [ TAD ] Groups - delete     manage_groups_manage         -- [ TAD ] Groups -
  manage manage_interaction_alerts        -- [ Ta  ] Alerts - add / edit / delete
  manage_outcomes                  -- [sTaDo] Learning Outcomes - add / edit /
  delete manage_proficiency_calculations  -- [ t d ] Outcome Proficiency
  Calculations - add / edit / delete manage_proficiency_scales        -- [ t d ]
  Outcome Proficiency/Mastery Scales - add / edit / delete Manage Sections
  granular permissions     manage_sections_add          -- [ TaD ] Course Sections
  - add     manage_sections_edit         -- [ TaD ] Course Sections - edit
  manage_sections_delete       -- [ TaD ] Course Sections - delete manage_students
  -- [ TAD ] Users - manage students in courses manage_user_notes
  -- [ TA  ] Faculty Journal - manage entries manage_rubrics                   --
  [ TAD ] Rubrics - add / edit / delete Manage Pages granular permissions
  manage_wiki_create           -- [ TADo] Pages - create     manage_wiki_delete
  -- [ TADo] Pages - delete     manage_wiki_update           -- [ TADo] Pages -
  update moderate_forum                   -- [sTADo] Discussions - moderate
  post_to_forum                    -- [STADo] Discussions - post
  read_announcements               -- [STADO] Announcements - view
  read_email_addresses             -- [sTAdo] Users - view primary email address
  read_forum                       -- [STADO] Discussions - view
  read_question_banks              -- [ TADo] Question banks - view and link
  read_reports                     -- [ TAD ] Courses - view usage reports
  read_roster                      -- [STADo] Users - view list read_sis
  -- [sTa  ] SIS Data - read select_final_grade               -- [ TA  ] Grades -
  select final grade for moderation send_messages                    -- [STADo]
  Conversations - send messages to individual course members send_messages_all
  -- [sTADo] Conversations - send messages to entire class Users - Teacher
  granular permissions     add_teacher_to_course        -- [ Tad ] Add a teacher
  enrollment to a course     remove_teacher_from_course   -- [ Tad ] Remove a
  Teacher enrollment from a course Users - TA granular permissions
  add_ta_to_course             -- [ Tad ] Add a TA enrollment to a course
  remove_ta_from_course        -- [ Tad ] Remove a TA enrollment from a course
  Users - Designer granular permissions     add_designer_to_course       -- [ Tad
  ] Add a designer enrollment to a course     remove_designer_from_course  -- [
  Tad ] Remove a designer enrollment from a course Users - Observer granular
  permissions     add_observer_to_course       -- [ Tad ] Add an observer
  enrollment to a course     remove_observer_from_course  -- [ Tad ] Remove an
  observer enrollment from a course Users - Student granular permissions
  add_student_to_course        -- [ Tad ] Add a student enrollment to a course
  remove_student_from_course   -- [ Tad ] Remove a student enrollment from a
  course view_all_grades                  -- [ TAd ] Grades - view all grades
  view_analytics                   -- [sTA  ] Analytics - view pages
  view_audit_trail                 -- [ t   ] Grades - view audit trail
  view_group_pages                 -- [sTADo] Groups - view all student groups
  view_user_logins                 -- [ TA  ] Users - view login IDs  Some of
  these permissions are applicable only for roles on the site admin account, on a
  root account, or for course-level roles with a particular base role type; if a
  specified permission is inapplicable, it will be ignored. Additional permissions
  may exist based on installed plugins. A comprehensive list of all permissions
  are available: Course Permissions PDF: bit.ly/cnvs-course-permissions Account
  Permissions PDF: bit.ly/cnvs-acct-permissions */
  permissionsXenabled?: boolean;
  /**
  If the value is 1, permission <X> will be locked downstream (new roles in
  subaccounts cannot override the setting). For any other value, permission <X> is
  left unlocked. Ignored if permission <X> is already locked upstream. May occur
  multiple times with unique values for <X>. */
  permissionsXlocked?: boolean;
  /**
  If the value is 1, permission <X> applies to the account this role is in. The
  default value is 1. Must be true if applies_to_descendants is false. This value
  is only returned if enabled is true. */
  permissionsXappliestoself?: boolean;
  /**
  If the value is 1, permission <X> cascades down to sub accounts of the account
  this role is in. The default value is 1.  Must be true if applies_to_self is
  false.This value is only returned if enabled is true. */
  permissionsXappliestodescendants?: boolean;
}

export interface DeactivateRoleParams {
  /**
  The unique identifier for the role */
  roleid?: number;
  /**
  The name for the role */
  role?: string;
}

export interface ActivateRoleParams {
  /**
  The unique identifier for the role */
  roleid?: number;
}

export interface UpdateRoleParams {
  /**
  The label for the role. Can only change the label of a custom role that belongs
  directly to the account. */
  label?: string;
  /**
  no description */
  permissionsXexplicit?: boolean;
  /**
  These arguments are described in the documentation for the add_role method. */
  permissionsXenabled?: boolean;
  /**
  If the value is 1, permission <X> applies to the account this role is in. The
  default value is 1. Must be true if applies_to_descendants is false. This value
  is only returned if enabled is true. */
  permissionsXappliestoself?: boolean;
  /**
  If the value is 1, permission <X> cascades down to sub accounts of the account
  this role is in. The default value is 1.  Must be true if applies_to_self is
  false.This value is only returned if enabled is true. */
  permissionsXappliestodescendants?: boolean;
}

export interface CreateSingleRubricParams {
  /**
  The id of the rubric */
  id?: number;
  /**
  The id of the object with which this rubric is associated */
  rubricassociationid?: number;
  /**
  The title of the rubric */
  rubrictitle?: string;
  /**
  Whether or not you can write custom comments in the ratings field for a rubric */
  rubricfreeformcriterioncomments?: boolean;
  /**
  The id of the object with which this rubric is associated */
  rubricassociationassociationid?: number;
  /**
  Allowed values: Assignment, Course, Account */
  rubricassociationassociationtype?: string;
  /**
  Whether or not the associated rubric is used for grade calculation */
  rubricassociationuseforgrading?: boolean;
  /**
  Whether or not the score total is displayed within the rubric. This option is
  only available if the rubric is not used for grading. */
  rubricassociationhidescoretotal?: boolean;
  /**
  Whether or not the association is for grading (and thus linked to an assignment)
  or if it's to indicate the rubric should appear in its context */
  rubricassociationpurpose?: string;
  /**
  An indexed Hash of RubricCriteria objects where the keys are integer ids and the
  values are the RubricCriteria objects */
  rubriccriteria?: unknown;
}

export interface UpdateSingleRubricParams {
  /**
  The id of the rubric */
  id?: number;
  /**
  The id of the object with which this rubric is associated */
  rubricassociationid?: number;
  /**
  The title of the rubric */
  rubrictitle?: string;
  /**
  Whether or not you can write custom comments in the ratings field for a rubric */
  rubricfreeformcriterioncomments?: boolean;
  /**
  Whether or not to update the points possible */
  rubricskipupdatingpointspossible?: boolean;
  /**
  The id of the object with which this rubric is associated */
  rubricassociationassociationid?: number;
  /**
  Allowed values: Assignment, Course, Account */
  rubricassociationassociationtype?: string;
  /**
  Whether or not the associated rubric is used for grade calculation */
  rubricassociationuseforgrading?: boolean;
  /**
  Whether or not the score total is displayed within the rubric. This option is
  only available if the rubric is not used for grading. */
  rubricassociationhidescoretotal?: boolean;
  /**
  Allowed values: grading, bookmark */
  rubricassociationpurpose?: string;
  /**
  An indexed Hash of RubricCriteria objects where the keys are integer ids and the
  values are the RubricCriteria objects */
  rubriccriteria?: unknown;
}

export interface GetSingleRubricParams {
  /**
  Allowed values: assessments, graded_assessments, peer_assessments, associations,
  assignment_associations, course_associations, account_associations */
  include?: string[];
  /**
  Allowed values: full, comments_only */
  style?: string;
}

export interface CreateSingleRubricAssessmentParams {
  /**
  The id of the course */
  courseid?: number;
  /**
  The id of the object with which this rubric assessment is associated */
  rubricassociationid?: number;
  /**
  (optional) Indicates whether this assessment is provisional, defaults to false. */
  provisional?: string;
  /**
  (optional) Indicates a provisional grade will be marked as final. It only takes
  effect if the provisional param is passed as true. Defaults to false. */
  final?: string;
  /**
  (optional) Defaults to false */
  gradedanonymously?: boolean;
  /**
  A Hash of data to complement the rubric assessment: The user id that refers to
  the person being assessed rubric_assessment[user_id]  Assessment type. There are
  only three valid types:  'grading', 'peer_review', or 'provisional_grade'
  rubric_assessment[assessment_type]  The points awarded for this row.
  rubric_assessment[criterion_id][points]  Comments to add for this row.
  rubric_assessment[criterion_id][comments]  For each criterion_id, change the id
  by the criterion number, ex: criterion_123 If the criterion_id is not specified
  it defaults to false, and nothing is updated. */
  rubricassessment?: unknown;
}

export interface UpdateSingleRubricAssessmentParams {
  /**
  The id of the rubric assessment */
  id?: number;
  /**
  The id of the course */
  courseid?: number;
  /**
  The id of the object with which this rubric assessment is associated */
  rubricassociationid?: number;
  /**
  (optional) Indicates whether this assessment is provisional, defaults to false. */
  provisional?: string;
  /**
  (optional) Indicates a provisional grade will be marked as final. It only takes
  effect if the provisional param is passed as true. Defaults to false. */
  final?: string;
  /**
  (optional) Defaults to false */
  gradedanonymously?: boolean;
  /**
  A Hash of data to complement the rubric assessment: The user id that refers to
  the person being assessed rubric_assessment[user_id]  Assessment type. There are
  only three valid types:  'grading', 'peer_review', or 'provisional_grade'
  rubric_assessment[assessment_type]  The points awarded for this row.
  rubric_assessment[criterion_id][points]  Comments to add for this row.
  rubric_assessment[criterion_id][comments]  For each criterion_id, change the id
  by the criterion number, ex: criterion_123 If the criterion_id is not specified
  it defaults to false, and nothing is updated. */
  rubricassessment?: unknown;
}

export interface CreateRubricassociationParams {
  /**
  The id of the Rubric */
  rubricassociationrubricid?: number;
  /**
  The id of the object with which this rubric is associated */
  rubricassociationassociationid?: number;
  /**
  Allowed values: Assignment, Course, Account */
  rubricassociationassociationtype?: string;
  /**
  The name of the object this rubric is associated with */
  rubricassociationtitle?: string;
  /**
  Whether or not the associated rubric is used for grade calculation */
  rubricassociationuseforgrading?: boolean;
  /**
  Whether or not the score total is displayed within the rubric. This option is
  only available if the rubric is not used for grading. */
  rubricassociationhidescoretotal?: boolean;
  /**
  Allowed values: grading, bookmark */
  rubricassociationpurpose?: string;
  /**
  Whether or not the associated rubric appears in its context */
  rubricassociationbookmarked?: boolean;
}

export interface UpdateRubricassociationParams {
  /**
  The id of the RubricAssociation to update */
  id?: number;
  /**
  The id of the Rubric */
  rubricassociationrubricid?: number;
  /**
  The id of the object with which this rubric is associated */
  rubricassociationassociationid?: number;
  /**
  Allowed values: Assignment, Course, Account */
  rubricassociationassociationtype?: string;
  /**
  The name of the object this rubric is associated with */
  rubricassociationtitle?: string;
  /**
  Whether or not the associated rubric is used for grade calculation */
  rubricassociationuseforgrading?: boolean;
  /**
  Whether or not the score total is displayed within the rubric. This option is
  only available if the rubric is not used for grading. */
  rubricassociationhidescoretotal?: boolean;
  /**
  Allowed values: grading, bookmark */
  rubricassociationpurpose?: string;
  /**
  Whether or not the associated rubric appears in its context */
  rubricassociationbookmarked?: boolean;
}

export interface CreateScoreParams {
  /**
  The lti_user_id or the Canvas user_id. Returns a 422 if user not found in Canvas
  or is not a student. */
  userId?: string;
  /**
  Indicate to Canvas the status of the user towards the activity's completion.
  Must be one of Initialized, Started, InProgress, Submitted, Completed. */
  activityProgress?: string;
  /**
  Indicate to Canvas the status of the grading process. A value of PendingManual
  will require intervention by a grader. Values of NotReady, Failed, and Pending
  will cause the scoreGiven to be ignored. FullyGraded values will require no
  action. Possible values are NotReady, Failed, Pending, PendingManual,
  FullyGraded. */
  gradingProgress?: string;
  /**
  Date and time when the score was modified in the tool. Should use
  ISO8601-formatted date with subsecond precision. Returns a 400 if the timestamp
  is earlier than the updated_at time of the Result. */
  timestamp?: string;
  /**
  The Current score received in the tool for this line item and user, scaled to
  the scoreMaximum */
  scoreGiven?: number;
  /**
  Maximum possible score for this result; it must be present if scoreGiven is
  present. Returns 412 if not present when scoreGiven is present. */
  scoreMaximum?: number;
  /**
  Comment visible to the student about this score. */
  comment?: string;
  /**
  (EXTENSION) Optional submission type and data. Fields listed below. */
  httpscanvasinstructurecomltisubmission?: Record<string, unknown>;
  /**
  (EXTENSION field) flag to indicate that this is a new submission. Defaults to
  true unless submission_type is none. */
  httpscanvasinstructurecomltisubmissionnewsubmission?: boolean;
  /**
  (EXTENSION field) flag to prevent a request from overwriting an existing grade
  for a submission. Defaults to false. */
  httpscanvasinstructurecomltisubmissionprioritizenontoolgrade?: boolean;
  /**
  (EXTENSION field) permissible values are: none, basic_lti_launch,
  online_text_entry, external_tool, online_upload, or online_url. Defaults to
  external_tool. Ignored if content_items are provided. */
  httpscanvasinstructurecomltisubmissionsubmissiontype?: string;
  /**
  (EXTENSION field) submission data (URL or body text). Only used for
  submission_types basic_lti_launch, online_text_entry, online_url. Ignored if
  content_items are provided. */
  httpscanvasinstructurecomltisubmissionsubmissiondata?: string;
  /**
  (EXTENSION field) Date and time that the submission was originally created.
  Should use ISO8601-formatted date with subsecond precision. This should match
  the data and time that the original submission happened in Canvas. */
  httpscanvasinstructurecomltisubmissionsubmittedat?: string;
  /**
  (EXTENSION field) Files that should be included with the submission. Each item
  should contain `type: file`, and a url pointing to the file. It can also contain
  a title, and an explicit MIME type if needed (otherwise, MIME type will be
  inferred from the title or url). If any items are present, submission_type will
  be online_upload. */
  httpscanvasinstructurecomltisubmissioncontentitems?: unknown[];
}

export interface FindRecipientsParams {
  /**
  Search terms used for matching users/courses/groups (e.g. “bob smith”). If
  multiple terms are given (separated via whitespace), only results matching all
  terms will be returned. */
  search?: string;
  /**
  Limit the search to a particular course/group (e.g. “course_3” or “group_4”). */
  context?: string;
  /**
  Array of ids to exclude from the search. These may be user ids or course/group
  ids prefixed with “course_” or “group_” respectively, e.g.
  exclude[]=1&exclude=2&exclude[]=course_3 */
  exclude?: string[];
  /**
  Allowed values: user, context */
  type?: string;
  /**
  Search for a specific user id. This ignores the other above parameters, and will
  never return more than one result. */
  userid?: number;
  /**
  When searching by user_id, only users that could be normally messaged by this
  user will be returned. This parameter allows you to specify a conversation that
  will be referenced for a shared context – if both the current user and the
  searched user are in the conversation, the user will be returned. This is used
  to start new side conversations. */
  fromconversationid?: number;
  /**
  Array of permission strings to be checked for each matched context (e.g.
  “send_messages”). This argument determines which permissions may be returned in
  the response; it won't prevent contexts from being returned if they don't grant
  the permission(s). */
  permissions?: string[];
}

export interface ListAllCoursesParams {
  /**
  Search terms used for matching users/courses/groups (e.g. “bob smith”). If
  multiple terms are given (separated via whitespace), only results matching all
  terms will be returned. */
  search?: string;
  /**
  Only return courses with public content. Defaults to false. */
  publiconly?: boolean;
  /**
  Only return courses that allow self enrollment. Defaults to false. */
  openenrollmentonly?: boolean;
}

export interface ListCourseSectionsParams {
  /**
  Allowed values: students, avatar_url, enrollments, total_students,
  passback_status, permissions */
  include?: string[];
}

export interface CreateCourseSectionParams {
  /**
  The name of the section */
  coursesectionname?: string;
  /**
  The sis ID of the section. Must have manage_sis permission to set. This is
  ignored if caller does not have permission to set. */
  coursesectionsissectionid?: string;
  /**
  The integration_id of the section. Must have manage_sis permission to set. This
  is ignored if caller does not have permission to set. */
  coursesectionintegrationid?: string;
  /**
  Section start date in ISO8601 format, e.g. 2011-01-01T01:00Z */
  coursesectionstartat?: Date;
  /**
  Section end date in ISO8601 format. e.g. 2011-01-01T01:00Z */
  coursesectionendat?: Date;
  /**
  Set to true to restrict user enrollments to the start and end dates of the
  section. */
  coursesectionrestrictenrollmentstosectiondates?: boolean;
  /**
  When true, will first try to re-activate a deleted section with matching
  sis_section_id if possible. */
  enablesisreactivation?: boolean;
}

export interface CrosslistSectionParams {
  /**
  Default is true. If false, any fields containing “sticky” changes will not be
  updated. See SIS CSV Format documentation for information on which fields can
  have SIS stickiness */
  overridesisstickiness?: boolean;
}

export interface DecrosslistSectionParams {
  /**
  Default is true. If false, any fields containing “sticky” changes will not be
  updated. See SIS CSV Format documentation for information on which fields can
  have SIS stickiness */
  overridesisstickiness?: boolean;
}

export interface EditSectionParams {
  /**
  The name of the section */
  coursesectionname?: string;
  /**
  The sis ID of the section. Must have manage_sis permission to set. */
  coursesectionsissectionid?: string;
  /**
  The integration_id of the section. Must have manage_sis permission to set. */
  coursesectionintegrationid?: string;
  /**
  Section start date in ISO8601 format, e.g. 2011-01-01T01:00Z */
  coursesectionstartat?: Date;
  /**
  Section end date in ISO8601 format. e.g. 2011-01-01T01:00Z */
  coursesectionendat?: Date;
  /**
  Set to true to restrict user enrollments to the start and end dates of the
  section. */
  coursesectionrestrictenrollmentstosectiondates?: boolean;
  /**
  Default is true. If false, any fields containing “sticky” changes will not be
  updated. See SIS CSV Format documentation for information on which fields can
  have SIS stickiness */
  overridesisstickiness?: boolean;
}

export interface GetSectionInformationParams {
  /**
  Allowed values: students, avatar_url, enrollments, total_students,
  passback_status, permissions */
  include?: string[];
}

export interface ShareBrandconfigthemeParams {
  /**
  Name to share this BrandConfig (theme) as. */
  sharedbrandconfigname?: string;
  /**
  MD5 of brand_config to share */
  sharedbrandconfigbrandconfigmd5?: string;
}

export interface GetSisImportErrorListParams {
  /**
  If set, only shows errors on a sis import that would cause a failure. */
  failure?: boolean;
}

export interface GetSisImportListParams {
  /**
  If set, only shows imports created after the specified date (use ISO8601 format) */
  createdsince?: Date;
  /**
  If set, only shows imports created before the specified date (use ISO8601
  format) */
  createdbefore?: Date;
  /**
  Allowed values: initializing, created, importing, cleanup_batch, imported,
  imported_with_messages, aborted, failed, failed_with_messages, restoring,
  partially_restored, restored */
  workflow_state?: string[];
}

export interface ImportSisDataParams {
  /**
  Choose the data format for reading SIS data. With a standard Canvas install,
  this option can only be 'instructure_csv', and if unprovided, will be assumed to
  be so. Can be part of the query string. */
  importtype?: string;
  /**
  There are two ways to post SIS import data - either via a multipart/form-data
  form-field-style attachment, or via a non-multipart raw post request.
  'attachment' is required for multipart/form-data style posts. Assumed to be SIS
  data from a file upload form field named 'attachment'. Examples: curl -F
  attachment=@<filename> -H "Authorization: Bearer <token>" \     https://<canvas>
  /api/v1/accounts/<account_id>/sis_imports.json?import_type=instructure_csv  If
  you decide to do a raw post, you can skip the 'attachment' argument, but you
  will then be required to provide a suitable Content-Type header. You are
  encouraged to also provide the 'extension' argument. Examples: curl -H 'Content-
  Type: application/octet-stream' --data-binary @<filename>.zip \     -H
  "Authorization: Bearer <token>" \     https://<canvas>/api/v1/accounts/<account_
  id>/sis_imports.json?import_type=instructure_csv&extension=zip  curl -H
  'Content-Type: application/zip' --data-binary @<filename>.zip \     -H
  "Authorization: Bearer <token>" \     https://<canvas>/api/v1/accounts/<account_
  id>/sis_imports.json?import_type=instructure_csv  curl -H 'Content-Type:
  text/csv' --data-binary @<filename>.csv \     -H "Authorization: Bearer <token>"
  \     https://<canvas>/api/v1/accounts/<account_id>/sis_imports.json?import_type
  =instructure_csv  curl -H 'Content-Type: text/csv' --data-binary @<filename>.csv
  \     -H "Authorization: Bearer <token>" \     https://<canvas>/api/v1/accounts/
  <account_id>/sis_imports.json?import_type=instructure_csv&batch_mode=1&batch_mod
  e_term_id=15  If the attachment is a zip file, the uncompressed file(s) cannot
  be 100x larger than the zip, or the import will fail. For example, if the zip
  file is 1KB but the total size of the uncompressed file(s) is 100KB or greater
  the import will fail. There is a hard cap of 50 GB. */
  attachment?: string;
  /**
  Recommended for raw post request style imports. This field will be used to
  distinguish between zip, xml, csv, and other file format extensions that would
  usually be provided with the filename in the multipart post request scenario. If
  not provided, this value will be inferred from the Content-Type, falling back to
  zip-file format if all else fails. */
  extension?: string;
  /**
  If set, this SIS import will be run in batch mode, deleting any data previously
  imported via SIS that is not present in this latest import. See the SIS CSV
  Format page for details. Batch mode cannot be used with diffing. */
  batchmode?: boolean;
  /**
  Limit deletions to only this term. Required if batch mode is enabled. */
  batchmodetermid?: string;
  /**
  Runs batch mode against all terms in terms file. Requires change_threshold. */
  multitermbatchmode?: boolean;
  /**
  When set the import will skip any deletes. This does not account for objects
  that are deleted during the batch mode cleanup process. */
  skipdeletes?: boolean;
  /**
  Default is true. If false, any fields containing “sticky” changes will not be
  updated. See SIS CSV Format documentation for information on which fields can
  have SIS stickiness */
  overridesisstickiness?: boolean;
  /**
  This option, if present, will process all changes as if they were UI changes.
  This means that “stickiness” will be added to changed fields. This option is
  only processed if 'override_sis_stickiness' is also provided. */
  addsisstickiness?: boolean;
  /**
  This option, if present, will clear “stickiness” from all fields touched by this
  import. Requires that 'override_sis_stickiness' is also provided. If
  'add_sis_stickiness' is also provided, 'clear_sis_stickiness' will overrule the
  behavior of 'add_sis_stickiness' */
  clearsisstickiness?: boolean;
  /**
  This option, if present, will override the old (or non-existent) non-matching
  SIS ID with the new SIS ID in the upload, if a pseudonym is found from the login
  field and the SIS ID doesn't match. */
  updatesisidifloginclaimed?: boolean;
  /**
  If set on a CSV import, Canvas will attempt to optimize the SIS import by
  comparing this set of CSVs to the previous set that has the same data set
  identifier, and only applying the difference between the two. See the SIS CSV
  Format documentation for more details. Diffing cannot be used with batch_mode */
  diffingdatasetidentifier?: string;
  /**
  If true, and diffing_data_set_identifier is sent, this SIS import will be part
  of the data set, but diffing will not be performed. See the SIS CSV Format
  documentation for details. */
  diffingremasterdataset?: boolean;
  /**
  Allowed values: deleted, completed, inactive */
  diffingdropstatus?: string;
  /**
  Allowed values: deleted, completed, inactive */
  batchmodeenrollmentdropstatus?: string;
  /**
  If set with batch_mode, the batch cleanup process will not run if the number of
  items deleted is higher than the percentage set. If set to 10 and a term has 200
  enrollments, and batch would delete more than 20 of the enrollments the batch
  will abort before the enrollments are deleted. The change_threshold will be
  evaluated for course, sections, and enrollments independently. If set with
  diffing, diffing will not be performed if the files are greater than the
  threshold as a percent. If set to 5 and the file is more than 5% smaller or more
  than 5% larger than the file that is being compared to, diffing will not be
  performed. If the files are less than 5%, diffing will be performed. The way the
  percent is calculated is by taking the size of the current import and dividing
  it by the size of the previous import. The formula used is: |(1 -
  current_file_size / previous_file_size)| * 100 See the SIS CSV Format
  documentation for more details. Required for multi_term_batch_mode. */
  changethreshold?: number;
  /**
  If set with diffing, diffing will not be performed if the number of rows to be
  run in the fully calculated diff import exceeds the threshold. */
  diffrowcountthreshold?: number;
}

export interface RestoreWorkflowstatesOfSisImportedItemsParams {
  /**
  If set, will only restore items that were deleted from batch_mode. */
  batchmode?: boolean;
  /**
  If set, will only restore items that were deleted. This will ignore any items
  that were created or modified. */
  undeleteonly?: boolean;
  /**
  If set, will only restore enrollments that were concluded. This will ignore any
  items that were created or deleted. */
  unconcludeonly?: boolean;
}

export interface RetrieveAssignmentsEnabledForGradeExportToSisParams {
  /**
  The ID of the account to query. */
  accountid?: number;
  /**
  The ID of the course to query. */
  courseid?: number;
  /**
  When searching on an account, */
  startsbefore?: Date;
  /**
  When searching on an account, */
  endsafter?: Date;
  /**
  Allowed values: student_overrides */
  include?: string;
}

export interface DisableAssignmentsCurrentlyEnabledForGradeExportToSisParams {
  /**
  The ID of the course. */
  courseid?: number;
  /**
  The ID of the grading period. */
  gradingperiodid?: number;
}

export interface EditSubmissionCommentParams {
  /**
  If this argument is present, edit the text of a comment. */
  comment?: string;
}

export interface SubmitAnAssignmentParams {
  /**
  Include a textual comment with the submission. */
  commenttextcomment?: string;
  /**
  Allowed values: online_text_entry, online_url, online_upload, media_recording,
  basic_lti_launch, student_annotation */
  submissionsubmissiontype?: string;
  /**
  Submit the assignment as an HTML document snippet. Note this HTML snippet will
  be sanitized using the same ruleset as a submission made from the Canvas web UI.
  The sanitized HTML will be returned in the response as the submission body.
  Requires a submission_type of “online_text_entry”. */
  submissionbody?: string;
  /**
  Submit the assignment as a URL. The URL scheme must be “http” or “https”, no
  “ftp” or other URL schemes are allowed. If no scheme is given (e.g.
  “www.example.com”) then “http” will be assumed. Requires a submission_type of
  “online_url” or “basic_lti_launch”. */
  submissionurl?: string;
  /**
  Submit the assignment as a set of one or more previously uploaded files residing
  in the submitting user's files section (or the group's files section, for group
  assignments). To upload a new file to submit, see the submissions Upload a file
  API. Requires a submission_type of “online_upload”. */
  "submission[file_ids]"?: number[];
  /**
  The media comment id to submit. Media comment ids can be submitted via this API,
  however, note that there is not yet an API to generate or list existing media
  comments, so this functionality is currently of limited use. Requires a
  submission_type of “media_recording”. */
  submissionmediacommentid?: string;
  /**
  Allowed values: audio, video */
  submissionmediacommenttype?: string;
  /**
  Submit on behalf of the given user. Requires grading permission. */
  submissionuserid?: number;
  /**
  The Attachment ID of the document being annotated. This should match the
  annotatable_attachment_id on the assignment. Requires a submission_type of
  “student_annotation”. */
  submissionannotatableattachmentid?: number;
  /**
  Choose the time the submission is listed as submitted at.  Requires grading
  permission. */
  submissionsubmittedat?: Date;
}

export interface ListAssignmentSubmissionsParams {
  /**
  Allowed values: submission_history, submission_comments, rubric_assessment,
  assignment, visibility, course, user, group, read_status */
  include?: string[];
  /**
  If this argument is true, the response will be grouped by student groups. */
  grouped?: boolean;
}

export interface ListSubmissionsForMultipleAssignmentsParams {
  /**
  List of student ids to return submissions for. If this argument is omitted,
  return submissions for the calling user. Students may only list their own
  submissions. Observers may only list those of associated students. The special
  id “all” will return submissions for all students in the course/section as
  appropriate. */
  student_ids?: string[];
  /**
  List of assignments to return submissions for. If none are given, submissions
  for all assignments are returned. */
  assignment_ids?: string[];
  /**
  If this argument is present, the response will be grouped by student, rather
  than a flat array of submissions. */
  grouped?: boolean;
  /**
  If this argument is set to true, the response will only include submissions for
  assignments that have the post_to_sis flag set to true and user enrollments that
  were added through sis. */
  posttosis?: boolean;
  /**
  If this argument is set, the response will only include submissions that were
  submitted after the specified date_time. This will exclude submissions that do
  not have a submitted_at which will exclude unsubmitted submissions. The value
  must be formatted as ISO 8601 YYYY-MM-DDTHH:MM:SSZ. */
  submittedsince?: Date;
  /**
  If this argument is set, the response will only include submissions that were
  graded after the specified date_time. This will exclude submissions that have
  not been graded. The value must be formatted as ISO 8601 YYYY-MM-DDTHH:MM:SSZ. */
  gradedsince?: Date;
  /**
  The id of the grading period in which submissions are being requested (Requires
  grading periods to exist on the account) */
  gradingperiodid?: number;
  /**
  Allowed values: submitted, unsubmitted, graded, pending_review */
  workflowstate?: string;
  /**
  Allowed values: active, concluded */
  enrollmentstate?: string;
  /**
  If omitted it is set to true. When set to false it will ignore the effective
  state of the student enrollments and use the workflow_state for the enrollments.
  The argument is ignored unless enrollment_state argument is also passed. */
  statebasedondate?: boolean;
  /**
  Allowed values: id, graded_at */
  order?: string;
  /**
  Allowed values: ascending, descending */
  orderdirection?: string;
  /**
  Allowed values: submission_history, submission_comments, rubric_assessment,
  assignment, total_scores, visibility, course, user */
  include?: string[];
}

export interface GetSingleSubmissionParams {
  /**
  Allowed values: submission_history, submission_comments, rubric_assessment,
  full_rubric_assessment, visibility, course, user, read_status */
  include?: string[];
}

export interface GetSingleSubmissionByAnonymousIdParams {
  /**
  Allowed values: submission_history, submission_comments, rubric_assessment,
  full_rubric_assessment, visibility, course, user, read_status */
  include?: string[];
}

export interface GradeOrCommentOnSubmissionParams {
  /**
  Add a textual comment to the submission. */
  commenttextcomment?: string;
  /**
  The attempt number (starts at 1) to associate the comment with. */
  commentattempt?: number;
  /**
  Whether or not this comment should be sent to the entire group (defaults to
  false). Ignored if this is not a group assignment or if no text_comment is
  provided. */
  commentgroupcomment?: boolean;
  /**
  Add an audio/video comment to the submission. Media comments can be added via
  this API, however, note that there is not yet an API to generate or list
  existing media comments, so this functionality is currently of limited use. */
  commentmediacommentid?: string;
  /**
  Allowed values: audio, video */
  commentmediacommenttype?: string;
  /**
  Attach files to this comment that were previously uploaded using the Submission
  Comment API's files action */
  "comment[file_ids]"?: number[];
  /**
  Whether this assignment is visible to the owner of the submission */
  includevisibility?: string;
  /**
  Treat posted_grade as points if the value matches a grading scheme value */
  preferpointsoverscheme?: boolean;
  /**
  Assign a score to the submission, updating both the “score” and “grade” fields
  on the submission record. This parameter can be passed in a few different
  formats: points  A floating point or integral value, such as “13.5”. The grade
  will be interpreted directly as the score of the assignment. Values above
  assignment.points_possible are allowed, for awarding extra credit.  percentage
  A floating point value appended with a percent sign, such as  "40%". The grade
  will be interpreted as a percentage score on the assignment, where 100% ==
  assignment.points_possible. Values above 100% are allowed, for awarding extra
  credit.  letter grade  A letter grade, following the assignment's defined letter
  grading scheme. For example, "A-". The resulting score will be the high end of
  the defined range for the letter grade. For instance, if "B" is defined as 86%
  to 84%, a letter grade of "B" will be worth 86%. The letter grade will be
  rejected if the assignment does not have a defined letter grading scheme. For
  more fine-grained control of scores, pass in points or percentage rather than
  the letter grade.  “pass/complete/fail/incomplete”  A string value of “pass” or
  “complete”  will give a score of 100%. "fail" or "incomplete" will give a score
  of 0.  Note that assignments with grading_type of “pass_fail” can only be
  assigned a score of 0 or assignment.points_possible, nothing inbetween. If a
  posted_grade in the “points” or “percentage” format is sent, the grade will only
  be accepted if the grade equals one of those two values. */
  submissionpostedgrade?: string;
  /**
  Sets the “excused” status of an assignment. */
  submissionexcuse?: boolean;
  /**
  Sets the late policy status to either “late”, “missing”, “extended”, “none”, or
  null. NB: "extended" values can only be set in the UI when the "UI features for
  'extended' Submissions" Account Feature is on */
  submissionlatepolicystatus?: string;
  /**
  Sets the seconds late if late policy status is “late” */
  submissionsecondslateoverride?: number;
  /**
  Assign a rubric assessment to this assignment submission. The sub-parameters
  here depend on the rubric for the assignment. The general format is, for each
  row in the rubric: The points awarded for this row.
  rubric_assessment[criterion_id][points]  The rating id for the row.
  rubric_assessment[criterion_id][rating_id]  Comments to add for this row.
  rubric_assessment[criterion_id][comments]  For example, if the assignment rubric
  is (in JSON format): [   {     'id': 'crit1',     'points': 10,
  'description': 'Criterion 1',     'ratings':     [       { 'id': 'rat1',
  'description': 'Good', 'points': 10 },       { 'id': 'rat2', 'description':
  'Poor', 'points': 3 }     ]   },   {     'id': 'crit2',     'points': 5,
  'description': 'Criterion 2',     'ratings':     [       { 'id': 'rat1',
  'description': 'Exemplary', 'points': 5 },       { 'id': 'rat2', 'description':
  'Complete', 'points': 5 },       { 'id': 'rat3', 'description': 'Incomplete',
  'points': 0 }     ]   } ]  Then a possible set of values for rubric_assessment
  would be: rubric_assessment[crit1][points]=3&rubric_assessment[crit1][rating_id]
  =rat1&rubric_assessment[crit2][points]=5&rubric_assessment[crit2][rating_id]=rat
  2&rubric_assessment[crit2][comments]=Well%20Done. */
  rubricassessment?: RubricAssessment;
}

export interface GradeOrCommentOnSubmissionByAnonymousIdParams {
  /**
  Add a textual comment to the submission. */
  commenttextcomment?: string;
  /**
  Whether or not this comment should be sent to the entire group (defaults to
  false). Ignored if this is not a group assignment or if no text_comment is
  provided. */
  commentgroupcomment?: boolean;
  /**
  Add an audio/video comment to the submission. Media comments can be added via
  this API, however, note that there is not yet an API to generate or list
  existing media comments, so this functionality is currently of limited use. */
  commentmediacommentid?: string;
  /**
  Allowed values: audio, video */
  commentmediacommenttype?: string;
  /**
  Attach files to this comment that were previously uploaded using the Submission
  Comment API's files action */
  "comment[file_ids]"?: number[];
  /**
  Whether this assignment is visible to the owner of the submission */
  includevisibility?: string;
  /**
  Assign a score to the submission, updating both the “score” and “grade” fields
  on the submission record. This parameter can be passed in a few different
  formats: points  A floating point or integral value, such as “13.5”. The grade
  will be interpreted directly as the score of the assignment. Values above
  assignment.points_possible are allowed, for awarding extra credit.  percentage
  A floating point value appended with a percent sign, such as  "40%". The grade
  will be interpreted as a percentage score on the assignment, where 100% ==
  assignment.points_possible. Values above 100% are allowed, for awarding extra
  credit.  letter grade  A letter grade, following the assignment's defined letter
  grading scheme. For example, "A-". The resulting score will be the high end of
  the defined range for the letter grade. For instance, if "B" is defined as 86%
  to 84%, a letter grade of "B" will be worth 86%. The letter grade will be
  rejected if the assignment does not have a defined letter grading scheme. For
  more fine-grained control of scores, pass in points or percentage rather than
  the letter grade.  “pass/complete/fail/incomplete”  A string value of “pass” or
  “complete”  will give a score of 100%. "fail" or "incomplete" will give a score
  of 0.  Note that assignments with grading_type of “pass_fail” can only be
  assigned a score of 0 or assignment.points_possible, nothing inbetween. If a
  posted_grade in the “points” or “percentage” format is sent, the grade will only
  be accepted if the grade equals one of those two values. */
  submissionpostedgrade?: string;
  /**
  Sets the “excused” status of an assignment. */
  submissionexcuse?: boolean;
  /**
  Sets the late policy status to either “late”, “missing”, “extended”, “none”, or
  null. NB: "extended" values can only be set in the UI when the "UI features for
  'extended' Submissions" Account Feature is on */
  submissionlatepolicystatus?: string;
  /**
  Sets the seconds late if late policy status is “late” */
  submissionsecondslateoverride?: number;
  /**
  Assign a rubric assessment to this assignment submission. The sub-parameters
  here depend on the rubric for the assignment. The general format is, for each
  row in the rubric: The points awarded for this row.
  rubric_assessment[criterion_id][points]  The rating id for the row.
  rubric_assessment[criterion_id][rating_id]  Comments to add for this row.
  rubric_assessment[criterion_id][comments]  For example, if the assignment rubric
  is (in JSON format): [   {     'id': 'crit1',     'points': 10,
  'description': 'Criterion 1',     'ratings':     [       { 'id': 'rat1',
  'description': 'Good', 'points': 10 },       { 'id': 'rat2', 'description':
  'Poor', 'points': 3 }     ]   },   {     'id': 'crit2',     'points': 5,
  'description': 'Criterion 2',     'ratings':     [       { 'id': 'rat1',
  'description': 'Exemplary', 'points': 5 },       { 'id': 'rat2', 'description':
  'Complete', 'points': 5 },       { 'id': 'rat3', 'description': 'Incomplete',
  'points': 0 }     ]   } ]  Then a possible set of values for rubric_assessment
  would be: rubric_assessment[crit1][points]=3&rubric_assessment[crit1][rating_id]
  =rat1&rubric_assessment[crit2][points]=5&rubric_assessment[crit2][rating_id]=rat
  2&rubric_assessment[crit2][comments]=Well%20Done. */
  rubricassessment?: RubricAssessment;
}

export interface ListMultipleAssignmentsGradeableStudentsParams {
  /**
  Assignments being requested */
  assignment_ids?: string[];
}

export interface GradeOrCommentOnMultipleSubmissionsParams {
  /**
  See documentation for the posted_grade argument in the Submissions Update
  documentation */
  gradedatastudentidpostedgrade?: string;
  /**
  See documentation for the excuse argument in the Submissions Update
  documentation */
  gradedatastudentidexcuse?: boolean;
  /**
  See documentation for the rubric_assessment argument in the Submissions Update
  documentation */
  gradedatastudentidrubricassessment?: RubricAssessment;
  /**
  no description */
  gradedatastudentidtextcomment?: string;
  /**
  no description */
  gradedatastudentidgroupcomment?: boolean;
  /**
  no description */
  gradedatastudentidmediacommentid?: string;
  /**
  Allowed values: audio, video */
  gradedatastudentidmediacommenttype?: string;
  /**
  See documentation for the comment[] arguments in the Submissions Update
  documentation */
  "grade_data[<student_id>][file_ids]"?: number[];
  /**
  Specifies which assignment to grade.  This argument is not necessary when using
  the assignment-specific endpoints. */
  gradedataassignmentidstudentid?: number;
}

export interface SubmissionSummaryParams {
  /**
  If this argument is true, the response will take into account student groups. */
  grouped?: boolean;
}

export interface ListAvailableTabsForCourseOrGroupParams {
  /**
  Allowed values: course_subject_tabs */
  include?: string[];
}

export interface UpdateTabForCourseParams {
  /**
  The new position of the tab, 1-based */
  position?: number;
  /**
  no description */
  hidden?: boolean;
}

export interface ListObserveesParams {
  /**
  Allowed values: avatar_url */
  include?: string[];
}

export interface ListObserversParams {
  /**
  Allowed values: avatar_url */
  include?: string[];
}

export interface AddAnObserveeWithCredentialsParams {
  /**
  The login id for the user to observe.  Required if access_token is omitted. */
  observeeuniqueid?: string;
  /**
  The password for the user to observe. Required if access_token is omitted. */
  observeepassword?: string;
  /**
  The access token for the user to observe.  Required if observee[unique_id] or
  observee[password] are omitted. */
  accesstoken?: string;
  /**
  A generated pairing code for the user to observe. Required if the Observer
  pairing code feature flag is enabled */
  pairingcode?: string;
  /**
  The ID for the root account to associate with the observation link. Defaults to
  the current domain account. If 'all' is specified, a link will be created for
  each root account associated to both the observer and observee. */
  rootaccountid?: number;
}

export interface AddAnObserveeParams {
  /**
  The ID for the root account to associate with the observation link. If not
  specified, a link will be created for each root account associated to both the
  observer and observee. */
  rootaccountid?: number;
}

export interface RemoveAnObserveeParams {
  /**
  If specified, only removes the link for the given root account */
  rootaccountid?: number;
}

export interface ListUsersInAccountParams {
  /**
  The partial name or full ID of the users to match and return in the results
  list. Must be at least 3 characters. Note that the API will prefer matching on
  canonical user ID if the ID has a numeric form. It will only search against
  other fields if non-numeric in form, or if the numeric value doesn't yield any
  matches. Queries by administrative users will search on SIS ID, login ID, name,
  or email address */
  searchterm?: string;
  /**
  When set, only return users enrolled with the specified course-level base role.
  This can be a base role type of 'student', 'teacher', 'ta', 'observer', or
  'designer'. */
  enrollmenttype?: string;
  /**
  Allowed values: username, email, sis_id, last_login */
  sort?: string;
  /**
  Allowed values: asc, desc */
  order?: string;
}

export interface ListTheActivityStreamParams {
  /**
  If true, will only return objects for courses the user is actively participating
  in */
  onlyactivecourses?: boolean;
}

export interface ListTheTodoItemsParams {
  /**
  Allowed values: ungraded_quizzes */
  include?: string[];
}

export interface ListCountsForTodoItemsParams {
  /**
  Allowed values: ungraded_quizzes */
  include?: string[];
}

export interface ListMissingSubmissionsParams {
  /**
  the student's ID */
  userid?: string;
  /**
  Return missing submissions for the given observed user. Must be accompanied by
  course_ids[]. The user making the request must be observing the observed user in
  all the courses specified by course_ids[]. */
  observeduserid?: string;
  /**
  Allowed values: planner_overrides, course */
  include?: string[];
  /**
  Allowed values: submittable, current_grading_period */
  filter?: string[];
  /**
  Optionally restricts the list of past-due assignments to only those associated
  with the specified course IDs. Required if observed_user_id is passed. */
  course_ids?: string[];
}

export interface ShowUserDetailsParams {
  /**
  Allowed values: uuid, last_login */
  include?: string[];
}

export interface CreateUserParams {
  /**
  The full name of the user. This name will be used by teacher for grading.
  Required if this is a self-registration. */
  username?: string;
  /**
  User's name as it will be displayed in discussions, messages, and comments. */
  usershortname?: string;
  /**
  User's name as used to sort alphabetically in lists. */
  usersortablename?: string;
  /**
  The time zone for the user. Allowed time zones are IANA time zones or friendlier
  Ruby on Rails time zones. */
  usertimezone?: string;
  /**
  The user's preferred language, from the list of languages Canvas supports. This
  is in RFC-5646 format. */
  userlocale?: string;
  /**
  Whether the user accepts the terms of use. Required if this is a self-
  registration and this canvas instance requires users to accept the terms (on by
  default). If this is true, it will mark the user as having accepted the terms of
  use. */
  usertermsofuse?: boolean;
  /**
  Automatically mark the user as registered. If this is true, it is recommended to
  set "pseudonym[send_confirmation]" to true as well. Otherwise, the user will not
  receive any messages about their account creation. The users communication
  channel confirmation can be skipped by setting
  "communication_channel[skip_confirmation]" to true as well. */
  userskipregistration?: boolean;
  /**
  User's login ID. If this is a self-registration, it must be a valid email
  address. */
  pseudonymuniqueid?: string;
  /**
  User's password. Cannot be set during self-registration. */
  pseudonympassword?: string;
  /**
  SIS ID for the user's account. To set this parameter, the caller must be able to
  manage SIS permissions. */
  pseudonymsisuserid?: string;
  /**
  Integration ID for the login. To set this parameter, the caller must be able to
  manage SIS permissions. The Integration ID is a secondary identifier useful for
  more complex SIS integrations. */
  pseudonymintegrationid?: string;
  /**
  Send user notification of account creation if true. Automatically set to true
  during self-registration. */
  pseudonymsendconfirmation?: boolean;
  /**
  Send user a self-registration style email if true. Setting it means the users
  will get a notification asking them to “complete the registration process” by
  clicking it, setting a password, and letting them in.  Will only be executed on
  if the user does not need admin approval. Defaults to false unless explicitly
  provided. */
  pseudonymforceselfregistration?: boolean;
  /**
  The authentication provider this login is associated with. Logins associated
  with a specific provider can only be used with that provider. Legacy providers
  (LDAP, CAS, SAML) will search for logins associated with them, or unassociated
  logins. New providers will only search for logins explicitly associated with
  them. This can be the integer ID of the provider, or the type of the provider
  (in which case, it will find the first matching provider). */
  pseudonymauthenticationproviderid?: string;
  /**
  The communication channel type, e.g. 'email' or 'sms'. */
  communicationchanneltype?: string;
  /**
  The communication channel address, e.g. the user's email address. */
  communicationchanneladdress?: string;
  /**
  Only valid for account admins. If true, returns the new user account
  confirmation URL in the response. */
  communicationchannelconfirmationurl?: boolean;
  /**
  Only valid for site admins and account admins making requests; If true, the
  channel is automatically validated and no confirmation email or SMS is sent.
  Otherwise, the user must respond to a confirmation message to confirm the
  channel. If this is true, it is recommended to set
  "pseudonym[send_confirmation]" to true as well. Otherwise, the user will not
  receive any messages about their account creation. */
  communicationchannelskipconfirmation?: boolean;
  /**
  If true, validations are performed on the newly created user (and their
  associated pseudonym) even if the request is made by a privileged user like an
  admin. When set to false, or not included in the request parameters, any newly
  created users are subject to validations unless the request is made by a user
  with a 'manage_user_logins' right. In which case, certain validations such as
  'require_acceptance_of_terms' and 'require_presence_of_name' are not enforced.
  Use this parameter to return helpful json errors while building users with an
  admin request. */
  forcevalidations?: boolean;
  /**
  When true, will first try to re-activate a deleted user with matching
  sis_user_id if possible. This is commonly done with user and
  communication_channel so that the default communication_channel is also
  restored. */
  enablesisreactivation?: boolean;
  /**
  If you're setting the password for the newly created user, you can provide this
  param with a valid URL pointing into this Canvas installation, and the response
  will include a destination field that's a URL that you can redirect a browser to
  and have the newly created user automatically logged in. The URL is only valid
  for a short time, and must match the domain this request is directed to, and be
  for a well-formed path that Canvas can recognize. */
  destination?: string;
  /**
  `observer` if doing a self-registration with a pairing code. This allows setting
  the password during user creation. */
  initialenrollmenttype?: string;
  /**
  If provided and valid, will link the new user as an observer to the student's
  whose pairing code is given. */
  pairingcodecode?: string;
}

export interface deprecatedSelfRegisterUserParams {
  /**
  The full name of the user. This name will be used by teacher for grading. */
  username?: string;
  /**
  User's name as it will be displayed in discussions, messages, and comments. */
  usershortname?: string;
  /**
  User's name as used to sort alphabetically in lists. */
  usersortablename?: string;
  /**
  The time zone for the user. Allowed time zones are IANA time zones or friendlier
  Ruby on Rails time zones. */
  usertimezone?: string;
  /**
  The user's preferred language, from the list of languages Canvas supports. This
  is in RFC-5646 format. */
  userlocale?: string;
  /**
  Whether the user accepts the terms of use. */
  usertermsofuse?: boolean;
  /**
  User's login ID. Must be a valid email address. */
  pseudonymuniqueid?: string;
  /**
  The communication channel type, e.g. 'email' or 'sms'. */
  communicationchanneltype?: string;
  /**
  The communication channel address, e.g. the user's email address. */
  communicationchanneladdress?: string;
}

export interface UpdateUserSettingsParams {
  /**
  If true, require user to manually mark discussion posts as read (don't auto-mark
  as read). */
  manualmarkasread?: boolean;
  /**
  If true, hide the badge for new release notes. */
  releasenotesbadgedisabled?: boolean;
  /**
  If true, the user's page loads with the global navigation collapsed */
  collapseglobalnav?: boolean;
  /**
  If true, the user's course pages will load with the course navigation collapsed. */
  collapsecoursenav?: boolean;
  /**
  If true, images on course cards will be presented without being tinted to match
  the course color. */
  hidedashcardcoloroverlays?: boolean;
  /**
  If true, suggestions within the comment library will be shown. */
  commentlibrarysuggestionsenabled?: boolean;
  /**
  If true, will display the user's preferred class Canvas dashboard view instead
  of the canvas for elementary view. */
  elementarydashboarddisabled?: boolean;
}

export interface UpdateCustomColorParams {
  /**
  The hexcode of the color to set for the context, if you choose to pass the
  hexcode as a query parameter rather than in the request body you should NOT
  include the '#' unless you escape it first. */
  hexcode?: string;
}

export interface EditUserParams {
  /**
  The full name of the user. This name will be used by teacher for grading. */
  username?: string;
  /**
  User's name as it will be displayed in discussions, messages, and comments. */
  usershortname?: string;
  /**
  User's name as used to sort alphabetically in lists. */
  usersortablename?: string;
  /**
  The time zone for the user. Allowed time zones are IANA time zones or friendlier
  Ruby on Rails time zones. */
  usertimezone?: string;
  /**
  The default email address of the user. */
  useremail?: string;
  /**
  The user's preferred language, from the list of languages Canvas supports. This
  is in RFC-5646 format. */
  userlocale?: string;
  /**
  A unique representation of the avatar record to assign as the user's current
  avatar. This token can be obtained from the user avatars endpoint. This
  supersedes the user [avatar] [url] argument, and if both are included the url
  will be ignored. Note: this is an internal representation and is subject to
  change without notice. It should be consumed with this api endpoint and used in
  the user update endpoint, and should not be constructed by the client. */
  useravatartoken?: string;
  /**
  To set the user's avatar to point to an external url, do not include a token and
  instead pass the url here. Warning: For maximum compatibility, please use 128 px
  square images. */
  useravatarurl?: string;
  /**
  Allowed values: none, submitted, approved, locked, reported, re_reported */
  useravatarstate?: string;
  /**
  Sets a title on the user profile. (See Get user profile.) Profiles must be
  enabled on the root account. */
  usertitle?: string;
  /**
  Sets a bio on the user profile. (See Get user profile.) Profiles must be enabled
  on the root account. */
  userbio?: string;
  /**
  Sets pronouns on the user profile. Passing an empty string will empty the user's
  pronouns Only Available Pronouns set on the root account are allowed Adding and
  changing pronouns must be enabled on the root account. */
  userpronouns?: string;
  /**
  Allowed values: suspend, unsuspend */
  userevent?: string;
  /**
  Default is true. If false, any fields containing “sticky” changes will not be
  updated. See SIS CSV Format documentation for information on which fields can
  have SIS stickiness */
  overridesisstickiness?: boolean;
}

export interface GetPandataEventsJwtTokenItsExpirationDateParams {
  /**
  The pandata events appKey for this mobile app */
  appkey?: string;
}

export interface ListUserPageViewsParams {
  /**
  The beginning of the time range from which you want page views. */
  starttime?: Date;
  /**
  The end of the time range from which you want page views. */
  endtime?: Date;
}

export interface StoreCustomDataParams {
  /**
  The namespace under which to store the data.  This should be something other
  Canvas API apps aren't likely to use, such as a reverse DNS for your
  organization. */
  ns?: string;
  /**
  The data you want to store for the user, at the specified scope.  If the data is
  composed of (possibly nested) JSON objects, scopes will be generated for the
  (nested) keys (see examples). */
  data?: Record<string, unknown>;
}

export interface LoadCustomDataParams {
  /**
  The namespace from which to retrieve the data.  This should be something other
  Canvas API apps aren't likely to use, such as a reverse DNS for your
  organization. */
  ns?: string;
}

export interface DeleteCustomDataParams {
  /**
  The namespace from which to delete the data.  This should be something other
  Canvas API apps aren't likely to use, such as a reverse DNS for your
  organization. */
  ns?: string;
}

export interface SetCourseNicknameParams {
  /**
  The nickname to set.  It must be non-empty and shorter than 60 characters. */
  nickname?: string;
}

export interface GetSingleAssignmentltiParams {
  /**
  The id of the user. Can be a Canvas or LTI id for the user. */
  userid?: string;
}

export interface CreateWebhookSubscriptionParams {
  /**
  The id of the context for the subscription. */
  subscriptionContextId?: string;
  /**
  The type of context for the subscription. Must be 'assignment', 'account', or
  'course'. */
  subscriptionContextType?: string;
  /**
  Array of strings representing the event types for the subscription. */
  subscriptionEventTypes?: unknown[];
  /**
  Format to deliver the live events. Must be 'live-event' or 'caliper'. */
  subscriptionFormat?: string;
  /**
  An object with a single key: 'Url'. Example: { “Url”: “sqs.example” } */
  subscriptionTransportMetadata?: Record<string, unknown>;
  /**
  Must be either 'sqs' or 'https'. */
  subscriptionTransportType?: string;
}
