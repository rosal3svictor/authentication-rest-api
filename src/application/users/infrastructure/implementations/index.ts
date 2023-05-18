import { CONTROLLER } from './controllers';
import { UsersRepository } from './repository';
import { RESPONSES } from './responses';
import { VALIDATION_CRITERIA } from './validations';

export const IMPLEMENTATIONS = {
  CONTROLLER,
  REPOSITORY: UsersRepository,
  RESPONSES,
  VALIDATION_CRITERIA,
};
