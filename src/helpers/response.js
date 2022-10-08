import httpStatus from 'http-status'
import messages from '../constants/messages.js'

function returnObject(success = true, code, message = '', data = null) {
  return {
    success,
    code,
    message,
    data,
  }
}

function responseData(res, httpCode, success = true, message = '', data = null) {
  return res.json(returnObject(success, httpCode, message, data))
}

export function responseError(
  res,
  code = httpStatus.INTERNAL_SERVER_ERROR,
  message = messages.generalMessage.Error,
  data = null,
) {
  return responseData(res, code, false, message, data)
}

export function responseSuccess(res, data) {
  return responseData(res, httpStatus.OK, true, messages.generalMessage.success, data)
}
