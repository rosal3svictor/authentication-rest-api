class InternalServerErrorException extends Error {
  constructor(cause: string) {
    super(`There was an exception when processing the request. Cause: ${cause}`);
  }
}

class ResourceNotFound extends Error {
  constructor(cause: string) {
    super(`There was an exception when processing the request. Cause: ${cause}`);
  }
}

export const APP_EXCEPTION = {
  INTERNAL_SERVER_ERROR: InternalServerErrorException,
  RESOURCE_NOT_FOUND: ResourceNotFound,
};
