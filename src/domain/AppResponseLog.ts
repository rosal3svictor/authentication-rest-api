export const enum APP_RESPONSE_TYPE {
  SUCESS = 'SUCCESS',
  WARNING = 'WARNING',
  EXCEPTION = 'EXCEPTION',
  INFO = 'INFO',
}

export interface APP_RESPONSE_DEFINITION {
  SUCCESS: (message: string) => void;
  WARNING: (message: string) => void;
  EXCEPTION: (message: string) => void;
  INFO: (message: string) => void;
}
