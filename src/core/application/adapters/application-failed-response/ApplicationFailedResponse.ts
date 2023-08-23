import { type Response } from 'core/domain'

export function applicationFailedResponse(
  httpStatusCode: number,
  message: string
): Response.ApplicationFailedOutput {
  return {
    httpStatusCode,
    data: {
      message
    }
  }
}
