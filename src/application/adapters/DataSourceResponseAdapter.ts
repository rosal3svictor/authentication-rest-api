import { SUCCESSFUL_HTTP_STATUS_CODE, type DataSourceResponse } from '@domain';

export function DataSourceResponseAdapter<T>(
  message: string,
  dataSource: T,
): DataSourceResponse<T> {
  return {
    httpStatusCode: SUCCESSFUL_HTTP_STATUS_CODE.CREATED,
    data: {
      message,
      dataSource,
    },
  };
}
