import { APPLICATION } from './application';
import { BUSINESS_LOGIC } from './domain';
import { INFRASTRUCTURE } from './infrastructure';

export const USERS = {
  APPLICATION,
  DOMAIN: {
    BUSINESS_LOGIC,
  },
  INFRASTRUCTURE,
};

export * from './domain';
