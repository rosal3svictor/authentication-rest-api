import { Utils } from 'core/infrastructure/implementations'

import type { ImplLogic } from 'entities/users/domain'

export class UserValidation implements ImplLogic.CrudValidation {
  isValidEmail(email: string): boolean {
    return Utils.isValidEmail(email)
  }

  isValidPassword(password: string): boolean {
    return password !== ''
  }

  areEqual(valueOne: string[], valueTwo: string[]): boolean {
    return Utils.isEqual(valueOne, valueTwo)
  }
}
