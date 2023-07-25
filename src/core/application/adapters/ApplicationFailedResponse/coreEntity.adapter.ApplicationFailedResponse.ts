import { type CoreEntityResponse } from '@core/domain';

export function ApplicationFailedResponse(
  httpStatusCode: number,
  message: string,
): CoreEntityResponse.ApplicationFailedOutput {
  return {
    httpStatusCode,
    data: {
      message,
    },
  };
}
