import { USER_ENTITY, type User, type UserEntityImplLogic } from 'entities/users';

import {
  MockCrudImplementation,
  MockCrudResponsesImplementation,
  MockCrudValidationResponsesImplementation,
  MockCrudValidationImplementation,
} from './mocks';

import { Create } from '.';

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
  let crudImplementationMock: MockCrudImplementation | UserEntityImplLogic.Crud;
  let crudValidationImplementationMock;
  let crudResponsesImplementationMock:
    | MockCrudResponsesImplementation
    | UserEntityImplLogic.CrudResponses;
  let crudValidationResponsesImplementationMock;
  let createUseCase: ReturnType<() => Create>;
  let user: User;

  beforeEach(() => {
    crudImplementationMock = new MockCrudImplementation();
    crudValidationImplementationMock = new MockCrudValidationImplementation();
    crudResponsesImplementationMock = new MockCrudResponsesImplementation();
    crudValidationResponsesImplementationMock = new MockCrudValidationResponsesImplementation();

    createUseCase = new Create(
      crudImplementationMock,
      crudValidationImplementationMock,
      crudResponsesImplementationMock,
      crudValidationResponsesImplementationMock,
    );

    user = {
      email: 'test@gmail.com',
      password: '1234',
      name: 'TestName',
      age: 18,
    };

    // @ts-expect-error: Property 'mockReturnValue' does not exist on type
    // 'typeof CreateDataIsValid'.
    USER_ENTITY.BUSINESS_LOGIC.CreateDataIsValid.mockReturnValue({
      invoke: jest.fn().mockReturnValueOnce(true),
      failed: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`It should return a successful response when user data is valid and record
    does not exist`, async () => {
    // @ts-expect-error: Property 'mockReturnValue' does not exist on type
    // 'typeof RecordPreExists'.
    USER_ENTITY.BUSINESS_LOGIC.RecordPreExists.mockReturnValue({
      invoke: jest.fn().mockResolvedValueOnce({ passed: true }),
    });

    await createUseCase.invoke(user);

    expect(USER_ENTITY.BUSINESS_LOGIC.CreateDataIsValid).toHaveBeenCalled();
    expect(USER_ENTITY.BUSINESS_LOGIC.RecordPreExists).toHaveBeenCalled();
    expect(crudImplementationMock.save).toHaveBeenCalledWith(user);
    expect(crudResponsesImplementationMock.creationSucceeded).toHaveBeenCalled();
  });

  it(`It should return a failed response when user data is valid and record
   already exists`, async () => {
    // @ts-expect-error: Property 'mockReturnValue' does not exist on type
    // 'typeof RecordPreExists'.
    USER_ENTITY.BUSINESS_LOGIC.RecordPreExists.mockReturnValue({
      invoke: jest.fn().mockResolvedValueOnce({ passed: false }),
    });

    await createUseCase.invoke(user);

    expect(USER_ENTITY.BUSINESS_LOGIC.CreateDataIsValid).toHaveBeenCalled();
    expect(USER_ENTITY.BUSINESS_LOGIC.RecordPreExists).toHaveBeenCalled();
    expect(crudResponsesImplementationMock.creationFailed).toHaveBeenCalled();
  });
});
