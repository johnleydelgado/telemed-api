import httpStatus from 'http-status';
import { Server } from 'socket.io';
import { FIELDS } from '../constants/fields.js';
import { responseError, responseSuccess } from '../helpers/response.js';
import { isFieldDataExist } from '../repository/main.repository.js';
import { db } from '../services/db.js';

export const createMeeting = async (req, res) => {
  const data = req.body;

  // validation for fields
  if (!isFieldDataExist(data, FIELDS.MEETING_CREATION)) { return responseError(res, httpStatus.BAD_REQUEST, 'missing or invalid fields'); }

  // creation of meeting
  try {
    const document = db.collection('MEETING').doc();
    await document.set(data);
    data.meeting_id = document.id; // meeting_id
    return responseSuccess(res, data);
  } catch (e) {
    return responseError(res, httpStatus.BAD_REQUEST, e);
  }
};
