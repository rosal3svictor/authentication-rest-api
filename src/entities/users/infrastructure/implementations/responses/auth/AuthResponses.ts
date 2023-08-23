import { type Response, Enum } from 'core/domain'
import { Adapter as CoreAdapter } from 'core/application'
import { Utils } from 'core/infrastructure'

import type { Interfaces, ImplLogic } from 'entities/users/domain'

export class AuthResponses implements ImplLogic.AuthValidationResponses {
  authenticationSucceeded(
    dataSource: Pick<Interfaces.Tokens, 'accessToken'>
  ): Response.DataSourceOutput<Pick<Interfaces.Tokens, 'accessToken'>> {
    Utils.AppResponseLog.success(
      'APP_LOGIC - AUTH_USER_USE_CASE: User has been authenticated successfully'
    )

    return CoreAdapter.dataSourceResponse<Pick<Interfaces.Tokens, 'accessToken'>>(
      Enum.SUCCESSFUL_HTTP_STATUS_CODE.OK,
      'User has been authenticated successfully',
      dataSource
    )
  }

  authenticationFailed(): Response.ApplicationFailedOutput {
    Utils.AppResponseLog.warning('APP_LOGIC - AUTH_USER_USE_CASE: User could not be authenticated')

    return CoreAdapter.applicationFailedResponse(
      Enum.CLIENT_ERROR_HTTP_STATUS_CODE.UNAUTHORIZED,
      'User could not be authenticated'
    )
  }

  incompleteInputData(): boolean {
    Utils.AppResponseLog.info(
      'BUSINESS_LOGIC - AUTH_USER_DATA_IS_VALID: Not all the properties were provided'
    )

    return false
  }

  completeInputData(): boolean {
    Utils.AppResponseLog.info(
      'BUSINESS_LOGIC - AUTH_USER_DATA_IS_VALID: All properties were provided'
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

  validPropertyValues(): boolean {
    Utils.AppResponseLog.info(
      'BUSINESS_LOGIC - AUTH_USER_DATA_IS_VALID: All property values are well defined'
    )

    return true
  }

  validInputData(): boolean {
    Utils.AppResponseLog.success(
      'BUSINESS_LOGIC - AUTH_USER_DATA_IS_VALID: Auth User Data is valid to continue'
    )

    return true
  }

  invalidInputData(): Response.ApplicationFailedOutput {
    Utils.AppResponseLog.exception(
      `BUSINESS_LOGIC - AUTH_USER_DATA_IS_VALID: The information provided is
      incomplete or invalid, please verify it`
    )

    return CoreAdapter.applicationFailedResponse(
      Enum.CLIENT_ERROR_HTTP_STATUS_CODE.BAD_REQUEST,
      'The information provided is incomplete or invalid, please verify it'
    )
  }

  tokenValidationSucceeded(
    dataSource: Omit<Interfaces.Tokens, 'refreshToken'>
  ): Response.DataSourceOutput<Pick<Interfaces.Tokens, 'accessToken'>> {
    Utils.AppResponseLog.success(
      `APP_LOGIC - REFRESH_TOKEN_USE_CASE: Token verified successfully: ${JSON.stringify(dataSource.decoded)}`
    )

    return CoreAdapter.dataSourceResponse<Pick<Interfaces.Tokens, 'accessToken'>>(
      Enum.SUCCESSFUL_HTTP_STATUS_CODE.OK,
      'User has been authenticated successfully',
      { accessToken: dataSource.accessToken }
    )
  }

  tokenValidationFailed(message: string): Response.ApplicationFailedOutput {
    Utils.AppResponseLog.exception(`APP_LOGIC - REFRESH_TOKEN_USE_CASE: Token verification failed: ${message}`)

    return CoreAdapter.applicationFailedResponse(
      Enum.CLIENT_ERROR_HTTP_STATUS_CODE.UNAUTHORIZED,
      `Token verification failed: ${message}`
    )
  }

  logOutSucceeded(): Response.DataSourceOutput<string> {
    Utils.AppResponseLog.success('APP_LOGIC - LOG_OUT_USE_CASE: User has been logged out successfully')

    return CoreAdapter.dataSourceResponse(
      Enum.SUCCESSFUL_HTTP_STATUS_CODE.OK,
      'User has been logged out successfully',
      ''
    )
  }

  logOutFailed(message: string): Response.ApplicationFailedOutput {
    Utils.AppResponseLog.exception(`APP_LOGIC - LOG_OUT_USE_CASE: Token verification failed: ${message}`)

    return CoreAdapter.applicationFailedResponse(
      Enum.CLIENT_ERROR_HTTP_STATUS_CODE.UNAUTHORIZED,
      `Token verification failed: ${message}`
    )
  }
}
