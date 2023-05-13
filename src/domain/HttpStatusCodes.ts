/** @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses} */
export const enum INFORMATIONAL_HTTP_STATUS_CODE {
  CONTINUE = 100,
}

/** @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses} */
export const enum SUCCESSFUL_HTTP_STATUS_CODE {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
}

/** @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages} */
export const enum REDIRECTION_HTTP_STATUS_CODE {
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
}

/** @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses} */
export const enum CLIENT_ERROR_HTTP_STATUS_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
}

/** @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses} */
export const enum SERVER_ERROR_HTTP_STATUS_CODE {
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}
