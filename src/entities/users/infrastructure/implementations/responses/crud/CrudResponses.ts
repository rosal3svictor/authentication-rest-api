import { type Response, Enum } from 'core/domain'
import { Adapter as CoreAdapter } from 'core/application'
import { Utils } from 'core/infrastructure'

import type { Interfaces, ImplLogic } from 'entities/users/domain'

export class CrudResponses implements ImplLogic.CrudResponses {
  creationSucceeded(
    dataSource: Omit<Interfaces.User, 'password'>
  ): Response.DataSourceOutput<Omit<Interfaces.User, 'password'>> {
    Utils.AppResponseLog.success(
      'APP_LOGIC - CREATE_USER_USE_CASE: A new user has been created successfully'
    )

    return CoreAdapter.dataSourceResponse<Omit<Interfaces.User, 'password'>>(
      Enum.SUCCESSFUL_HTTP_STATUS_CODE.CREATED,
      'A new user has been created successfully',
      dataSource
    )
  }

  creationFailed(): Response.ApplicationFailedOutput {
    Utils.AppResponseLog.warning(
      `APP_LOGIC - CREATE_USER_USE_CASE: The information provided is already
      associated to a pre-existing record`
    )

    return CoreAdapter.applicationFailedResponse(
      Enum.CLIENT_ERROR_HTTP_STATUS_CODE.CONFLICT,
      'The information provided is already associated to a pre-existing record'
    )
  }

  incompleteInputData(): boolean {
    Utils.AppResponseLog.info(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: Not all the properties were provided'
    )

    return false
  }

  completeInputData(): boolean {
    Utils.AppResponseLog.info(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: All properties were provided'
    )

    return true
  }

  invalidEmail(email: string): boolean {
    Utils.AppResponseLog.exception(`Email property value is not valid: ${email}`)

    return false
  }

  invalidPassword(password: string): boolean {
    Utils.AppResponseLog.exception(`Password property value is not valid: ${password}`)

    return false
  }

  invalidName(name: string): boolean {
    Utils.AppResponseLog.exception(`Name property value is no valid: ${name}`)

    return false
  }

  invalidAge(age: number): boolean {
    Utils.AppResponseLog.exception(`Age property value is no valid: ${age}`)

    return false
  }

  validPropertyValues(): boolean {
    Utils.AppResponseLog.info(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: All property values are well defined'
    )

    return true
  }

  validInputData(): boolean {
    Utils.AppResponseLog.success(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: Create User Data is valid to continue'
    )

    return true
  }

  invalidInputData(): Response.ApplicationFailedOutput {
    Utils.AppResponseLog.exception(
      `BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: The information provided is
      incomplete or invalid, please verify it`
    )

    return CoreAdapter.applicationFailedResponse(
      Enum.CLIENT_ERROR_HTTP_STATUS_CODE.BAD_REQUEST,
      'The information provided is incomplete or invalid, please verify it'
    )
  }
}
