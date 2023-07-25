import { ADAPTERS } from '@core/application/adapters';

import { CrudValidationResponses } from '.';

describe('Responses App Logic - CrudValidationResponses', () => {
  let mockAdapter;

  beforeEach(() => {
    mockAdapter = {
      APPLICATION_FAILED_RESPONSE: jest.fn(),
    };

    jest
      .spyOn(ADAPTERS, 'APPLICATION_FAILED_RESPONSE')
      .mockImplementation(mockAdapter.APPLICATION_FAILED_RESPONSE);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should log an info message and return false for incompleteInputData', () => {
    const crudValidationResponses = new CrudValidationResponses();

    const result = crudValidationResponses.incompleteInputData();

    expect(result).toBe(false);
  });

  it('should log an info message and return true for completeInputData', () => {
    const crudValidationResponses = new CrudValidationResponses();

    const result = crudValidationResponses.completeInputData();

    expect(result).toBe(true);
  });

  it('should log an exception message and return false for invalidEmail', () => {
    const email = 'test@example.com';

    const crudValidationResponses = new CrudValidationResponses();

    const result = crudValidationResponses.invalidEmail(email);

    expect(result).toBe(false);
  });

  it('should log an exception message and return false for invalidName', () => {
    const name = 'John Doe';

    const crudValidationResponses = new CrudValidationResponses();

    const result = crudValidationResponses.invalidName(name);

    expect(result).toBe(false);
  });

  it('should log an exception message and return false for invalidAge', () => {
    const age = 30;

    const crudValidationResponses = new CrudValidationResponses();

    const result = crudValidationResponses.invalidAge(age);

    expect(result).toBe(false);
  });

  it('should log an info message and return true for validPropertyValues', () => {
    const crudValidationResponses = new CrudValidationResponses();

    const result = crudValidationResponses.validPropertyValues();

    expect(result).toBe(true);
  });
});
