import { ApplicationFailedResponse } from './ApplicationFailedResponse';
import { DataSourceResponse } from './DataSourceResponse';
import { UnhandledErrorResponse } from './UnhandledErrorResponse';
import { RefineUserEntity } from './RefineUserEntity';

export const ADAPTER = {
  APPLICATION_FAILED_RESPONSE: ApplicationFailedResponse,
  DATA_SOURCE_RESPONSE: DataSourceResponse,
  UNHANDLED_ERROR: UnhandledErrorResponse,
  REFINE_USER: RefineUserEntity,
};
