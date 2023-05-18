import { RecordPreExists } from './dbInteraction';
import { CreateDataIsValid } from './crud';
import { AuthDataIsValid } from './auth';

export const BUSINESS_LOGIC = {
  RECORD_PRE_EXSISTS: RecordPreExists,
  CEATE_DATA_IS_VALID: CreateDataIsValid,
  AUTH_DATA_IS_VALID: AuthDataIsValid,
};
