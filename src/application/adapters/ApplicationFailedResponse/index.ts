import { type ApplicationFailedResponseOutput } from '@domain';

export function ApplicationFailedResponse(
  httpStatusCode: number,
  message: string,
): ApplicationFailedResponseOutput {
  return {
    httpStatusCode,
    data: {
      message,
    },
  };
}
