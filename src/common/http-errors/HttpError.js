import messages from "../../../commons/messages";

export default class HttpError extends Error {
  messageKey;
  statusCode;

  constructor(message = messages.httpMessages[544]) {
    super();

    Object.setPrototypeOf(this, HttpError.prototype);
    this.name = this.constructor.name;
    this.message = message;
  }
}
