export default {
  generalMessage: {
    Error: 'There was some error',
    ApiNotExist: 'Method does not exist',
    success: 'Success',
  },
  httpMessages: {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not found',
    409: 'Conflict',
    422: 'Unprocessable Entity',
    500: 'Internal Server Error',
    544: 'Unknown HTTP Error',
  },
  auth: {
    failed: 'Either email or password is incorrect. Please try again',
    userExists: 'Email Address already in use',
    inviteUserExists: 'Email address already in the system',
    codeRegisExists: 'Registration Code already in use',
    inactive: 'Your account is deactivated',
    userNotExists: 'The email address you entered does not exist',
    passwordNotExists: 'The current password you entered does not exist',
    passcodeNotExists: 'The current passcode you entered does not exist',
    invalidCode: 'Incorrect verification code',
    invalidAction: 'Not Supported',
    canNotDeleteStaff: 'There are ongoing dictations referenced to this editor/assignee',
    invalidToken: 'Token invalid',
    passwordRules: 'Password does not match the rules',
    notActivated: 'The account has not been verified',
    passwordTheSame: 'Sorry , your new password cannot be the same as your old password',
  },
  mail: {
    sendError: 'An error occurred while sending mail',
    subject: {
      verificationCode: 'EHR verification code',
      uploadedFileToTeam: 'Client Upload',
      uploadedFileToUser: 'Dictation Successfully Uploaded',
      uploadedTranscriptionToUser: 'Transcription Successfully Uploaded',
      uploadedTranscriptionToTeam: 'Transcription Successfully Uploaded',
      inviteUser: 'EHR Invitation',
    },
  },
  upload: {
    fileExtensionNotAllow: 'File extension not allowed',
    fileAvatarExtensionNotAllow: 'The file extension is not supported',
    fileExtensionAttachmentNotAllow: 'The file extension is not supported',
    fileTranscriptionExtensionNotAllow: 'The file extension is not supported',
    apk: 'APK failed',
  },
  assignee: {
    somethingWrong: 'Something has wrong',
    notFoundAssignee: 'Not found assignee',
    hasReference: 'Assignee has unresolved tasks. Resolve tasks or remove assignments to continue.',
  },
  template: {
    somethingWrong: 'Something has wrong',
    notFoundTemplate: 'Not found template',
  },
  transcription: {
    somethingWrong: 'Something has wrong',
    notFoundTranscription: 'Not found transcription',
  },
  dictationAssignee: {
    somethingWrong: 'Something has wrong',
    notFoundAssignee: 'Not found assignee',
  },
  turnAroundTime: {
    somethingWrong: 'Something has wrong',
    notFoundTurnAroundTime: 'Not found Turn Around Time',
    hasReference: 'This turnaround time is currently on use. Resolve tasks or change assigned TAT to continue.',
  },
  dictation: {
    changeStatus: {
      notHaveEditorInCharge: 'An Editor-In-charge is required to set this dictation in progress.',
      notHaveTranscriptions: "There's no transcription to submit. Kindly attach transcription file first.",
    },
  },
};
