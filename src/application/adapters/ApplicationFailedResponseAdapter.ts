import { type ApplicationFailedResponse } from '@domain';

export function ApplicationFailedResponseAdapter(
  httpStatusCode: number,
  message: string,
): ApplicationFailedResponse {
  return {
    httpStatusCode,
    data: {
      message,
    },
  };
}
