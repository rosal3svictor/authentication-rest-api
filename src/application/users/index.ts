import { APPLICATION } from './application';
import { BUSINESS_LOGIC } from './domain';
import { UserValidation } from './infrastructure/implementations';
import {
  BUSINESS_RULES_RESPONSES,
  CRUD_RESPONSES,
  COLLECTION,
  CONTROLLER,
  CRUD_ROUTER,
  AUTH_ROUTER,
  UsersRepository,
} from './infrastructure';

export const USERS = {
  APPLICATION: {
    ...APPLICATION,
  },
  DOMAIN: {
    BUSINESS_LOGIC,
  },
  INFRASTRUCTURE: {
    COLLECTION,
    ENDPOINTS: {
      CRUD_ROUTER,
      AUTH_ROUTER,
    },
    IMPLEMENTATIONS: {
      CONTROLLER,
      REPOSITORY: UsersRepository,
      RESPONSES: {
        ...BUSINESS_RULES_RESPONSES,
        CRUD_RESPONSES,
      },
      VALIDATION_CRITERIA: UserValidation,
    },
  },
};

export * from './domain';
