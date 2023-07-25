import { ADAPTERS } from '@core/application/adapters';
import { type CoreEntityLog, CoreEntityEnum } from '@core/domain';

import { CRUD_RESPONSES } from '.';

describe('Responses App Logic - CrudResponses', () => {
  let mockHelperAppResponseLog: CoreEntityLog.AppResponseDefinition;
  let mockAdapter: { DATA_SOURCE_RESPONSE: any; APPLICATION_FAILED_RESPONSE: any };

  beforeEach(() => {
    // @ts-expect-error: This is not introducing a bug
    mockHelperAppResponseLog = {
      success: jest.fn(),
      warning: jest.fn(),
    };

    mockAdapter = {
      DATA_SOURCE_RESPONSE: jest.fn(),
      APPLICATION_FAILED_RESPONSE: jest.fn(),
    };

    // jest.spyOn(HELPER, 'APP_RESPONSE_LOG', 'get').mockReturnValue(mockHelperAppResponseLog);
    jest.spyOn(ADAPTERS, 'DataSourceResponse').mockImplementation(mockAdapter.DATA_SOURCE_RESPONSE);
    jest
      .spyOn(ADAPTERS, 'ApplicationFailedResponse')
      .mockImplementation(mockAdapter.APPLICATION_FAILED_RESPONSE);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return the correct response when creation succeeds', () => {
    const dataSource = {
      email: 'test@example.com',
      name: 'John Doe',
      age: 30,
    };

    const crudResponses = new CRUD_RESPONSES();

    const result = crudResponses.creationSucceeded(dataSource);

    expect(result).toEqual(
      expect.objectContaining({
        // Add any necessary properties for the response
      }),
    );
    expect(mockAdapter.DATA_SOURCE_RESPONSE).toHaveBeenCalledWith(
      'A new user has been created successfully',
      dataSource,
    );
  });

  it('should return the correct response when creation fails', () => {
    const crudResponses = new CRUD_RESPONSES();

    const result = crudResponses.creationFailed();

    expect(result).toEqual(
      expect.objectContaining({
        // Add any necessary properties for the response
      }),
    );
    expect(mockAdapter.APPLICATION_FAILED_RESPONSE).toHaveBeenCalledWith(
      CoreEntityEnum.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      'The information provided is already associated to a pre-existing record',
    );
  });
});
