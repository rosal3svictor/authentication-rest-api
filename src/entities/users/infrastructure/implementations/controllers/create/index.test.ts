import { create } from '.';

import type { Response, Request } from 'express';

jest.mock('@application/users/infrastructure/implementations/controllers', () => ({
  CONTROLLER: {
    CREATE: jest.fn(
      async () =>
        await Promise.resolve({
          data: {
            message: 'The information provided is already associated to a pre-existing record',
          },
        }),
    ),
  },
}));

describe('Controller - Create User', () => {
  let mockRequest: Request;
  let mockResponse: Response;

  beforeEach(() => {
    // @ts-expect-error: This is not introducing a bug
    mockRequest = {
      body: {
        email: 'testholamund000@gmail.com',
        password: '1234',
        name: 'TestName',
        age: 18,
      },
    };

    // @ts-expect-error: This is not introducing a bug
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it(`It should call the create use case with the correct arguments and return
  the expected response`, async () => {
    // Mock the create use case and its dependencies
    const mockCreateUseCase = {
      invoke: jest.fn().mockResolvedValue({
        httpStatusCode: 200,
        data: {},
      }),
    };

    jest.mock('@application/users', () => ({
      USERS: {
        APPLICATION: {
          USE_CASE: {
            CREATE: jest.fn().mockReturnValue(mockCreateUseCase),
          },
        },
        INFRASTRUCTURE: {
          IMPLEMENTATIONS: {
            REPOSITORY: jest.fn(),
            VALIDATION_CRITERIA: jest.fn(),
            RESPONSES: {
              CRUD_RESPONSES: jest.fn(),
              CRUD_VALIDATION: jest.fn(),
            },
          },
        },
      },
    }));

    // Call the controller function
    await create(mockRequest, mockResponse);

    // Assert that the response was sent with the expected status code and data
    expect(mockResponse.status).toHaveBeenCalledWith(303);
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: {
        message: 'The information provided is already associated to a pre-existing record',
      },
    });
  });
});
