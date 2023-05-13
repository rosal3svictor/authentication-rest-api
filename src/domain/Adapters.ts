export interface ApplicationGeneralResponse {
  httpStatusCode: number;
  passed: boolean;
  message: string;
}

export interface DataSourceResponse<T> {
  httpStatusCode: number;
  data: {
    message: string;
    dataSource: T;
  };
}

export interface ApplicationFailedResponse {
  httpStatusCode: number;
  data: {
    message: string;
  };
}
