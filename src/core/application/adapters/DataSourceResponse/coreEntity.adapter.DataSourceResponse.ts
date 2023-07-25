import { CoreEntityEnum, type CoreEntityResponse } from '@core/domain';

export function DataSourceResponse<T>(
  message: string,
  dataSource: T,
): CoreEntityResponse.DataSourceOutput<T> {
  return {
    httpStatusCode: CoreEntityEnum.SUCCESSFUL_HTTP_STATUS_CODE.CREATED,
    data: {
      message,
      dataSource,
    },
  };
}
