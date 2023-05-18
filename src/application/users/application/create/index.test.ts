/* eslint-disable max-len */
import {
  USERS,
  type User,
  type CrudImplementation,
  type CrudResponsesImplementation,
} from '@application/users';

import {
  MockCrudImplementation,
  MockCrudResponsesImplementation,
  MockCrudValidationResponsesImplementation,
  MockCrudValidationImplementation,
  MockRecordPreExistsResponseImplementation,
} from './mocks';

import { CreateUseCase } from '.';

jest.mock('@application/users', () => ({
  USERS: {
    DOMAIN: {
      BUSINESS_LOGIC: {
        CEATE_DATA_IS_VALID: jest.fn(),
        RECORD_PRE_EXSISTS: jest.fn(),
      },
    },
  },
}));

jest.mock('@application/adapters', () => ({
  ADAPTER: {
    UNHANDLED_ERROR: jest.fn(),
    REFINE_USER: jest.fn(),
  },
}));

describe('Use Case - Create User', () => {
  let crudImplementationMock: MockCrudImplementation | CrudImplementation;
  let crudValidationImplementationMock;
  let crudResponsesImplementationMock:
    | MockCrudResponsesImplementation
    | CrudResponsesImplementation;
  let crudValidationResponsesImplementationMock;
  let recordPreExistsResponseImplementationMock;
  let createUseCase: ReturnType<() => CreateUseCase>;
  let user: User;

  beforeEach(() => {
    crudImplementationMock = new MockCrudImplementation();
    crudValidationImplementationMock = new MockCrudValidationImplementation();
    crudResponsesImplementationMock = new MockCrudResponsesImplementation();
    crudValidationResponsesImplementationMock = new MockCrudValidationResponsesImplementation();
    recordPreExistsResponseImplementationMock = new MockRecordPreExistsResponseImplementation();

    createUseCase = new CreateUseCase(
      crudImplementationMock,
      crudValidationImplementationMock,
      crudResponsesImplementationMock,
      crudValidationResponsesImplementationMock,
      recordPreExistsResponseImplementationMock,
    );

    user = {
      email: 'test@gmail.com',
      password: '1234',
      name: 'TestName',
      age: 18,
    };

    // @ts-expect-error: Property 'mockReturnValue' does not exist on type 'typeof CreateDataIsValid'
    USERS.DOMAIN.BUSINESS_LOGIC.CEATE_DATA_IS_VALID.mockReturnValue({
      invoke: jest.fn().mockReturnValueOnce(true),
      failed: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('It should return a successful response when user data is valid and record does not exist', async () => {
    // @ts-expect-error: Property 'mockReturnValue' does not exist on type 'typeof RecordPreExists'
    USERS.DOMAIN.BUSINESS_LOGIC.RECORD_PRE_EXSISTS.mockReturnValue({
      invoke: jest.fn().mockResolvedValueOnce({ passed: true }),
    });

    await createUseCase.invoke(user);

    expect(USERS.DOMAIN.BUSINESS_LOGIC.CEATE_DATA_IS_VALID).toHaveBeenCalled();
    expect(USERS.DOMAIN.BUSINESS_LOGIC.RECORD_PRE_EXSISTS).toHaveBeenCalled();
    expect(crudImplementationMock.save).toHaveBeenCalledWith(user);
    expect(crudResponsesImplementationMock.creationSucceeded).toHaveBeenCalled();
  });

  it('It should return a failed response when user data is valid and record already exists', async () => {
    // @ts-expect-error: Property 'mockReturnValue' does not exist on type 'typeof RecordPreExists'
    USERS.DOMAIN.BUSINESS_LOGIC.RECORD_PRE_EXSISTS.mockReturnValue({
      invoke: jest.fn().mockResolvedValueOnce({ passed: false }),
    });

    await createUseCase.invoke(user);

    expect(USERS.DOMAIN.BUSINESS_LOGIC.CEATE_DATA_IS_VALID).toHaveBeenCalled();
    expect(USERS.DOMAIN.BUSINESS_LOGIC.RECORD_PRE_EXSISTS).toHaveBeenCalled();
    expect(crudResponsesImplementationMock.creationFailed).toHaveBeenCalled();
  });
});
