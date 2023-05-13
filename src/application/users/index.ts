import { APPLICATION } from './application';
import { BUSINESS_LOGIC } from './domain';
import { UserValidation } from './infrastructure/implementations/validations';
import {
  BUSINESS_RULES_RESPONSES,
  CRUD_RESPONSES,
  COLLECTION,
  CONTROLLER,
  ROUTER,
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
      ROUTER,
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
