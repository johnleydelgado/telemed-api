export default {
  validationAction: {
    signUp: 'SignUp',
    resetPassword: 'ResetPassword',
  },
  loginStatus: {
    success: 'SUCCESS',
    invalidAccount: 'INVALID_ACCOUNT',
    inactiveAccount: 'INACTIVE_ACCOUNT',
  },
  // userRole: {
  //   editor: "Editor",
  //   doctor: "Doctor",
  //   assignee: "Assignee",
  //   admin: "Admin",
  // },
  canBeDeletedStatus: ['Canceled', 'Finished'],
  mailTemplate: {
    verificationCode: 'verification-code',
    verificationLogin: 'verification-login',
    uploadedFileToTeam: 'uploaded-file-to-team',
    uploadedFileToUser: 'uploaded-file-to-user',
    uploadedTranscriptionToTeam: 'uploaded-transcription-to-team',
    uploadedTranscriptionToUser: 'uploaded-transcription-to-user',
    inviteUser: 'invite-user',
    inviteEmployee: 'invite-user-employee',
  },
};

// export const USER_ROLE = {
//   EDITOR: "Editor",
//   ASSIGNEE: "Assignee",
//   ADMIN: "Admin",
//   USER: "USER",
// };

export const USER_STATUS = {
  ACTIVATED: 'Activated',
  DEACTIVATED: 'Deactivated',
};

export const COMMON = {
  SUCCESS: 'SUCCESS',
};

export const PASSWORD_RULE_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,32}$/;
