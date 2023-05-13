// eslint-disable-next-line max-len
import { ApplicationFailedResponseAdapter } from './ApplicationFailedResponseAdapter';
import { DataSourceResponseAdapter } from './DataSourceResponseAdapter';
import { UnhandledErrorResponseAdapter } from './UnhandledErrorResponseAdapter';
import { RefineUserEntity } from './RefineUserEntity';

export const ADAPTER = {
  APPLICATION_FAILED_RESPONSE: ApplicationFailedResponseAdapter,
  DATA_SOURCE_RESPONSE: DataSourceResponseAdapter,
  UNHANDLED_ERROR: UnhandledErrorResponseAdapter,
  REFINE_USER: RefineUserEntity,
};
