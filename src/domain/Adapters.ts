export interface ApplicationGeneralResponse {
  httpStatusCode: number;
  passed: boolean;
  message: string;
}

export interface DataSourceResponseOutput<T> {
  httpStatusCode: number;
  data: {
    message: string;
    dataSource: T;
  };
}

export interface ApplicationFailedResponseOutput {
  httpStatusCode: number;
  data: {
    message: string;
  };
}
