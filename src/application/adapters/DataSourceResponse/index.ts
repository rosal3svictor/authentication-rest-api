import { SUCCESSFUL_HTTP_STATUS_CODE, type DataSourceResponseOutput } from '@domain';

export function DataSourceResponse<T>(message: string, dataSource: T): DataSourceResponseOutput<T> {
  return {
    httpStatusCode: SUCCESSFUL_HTTP_STATUS_CODE.CREATED,
    data: {
      message,
      dataSource,
    },
  };
}
