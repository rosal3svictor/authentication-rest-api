import { HELPERS } from '@core/infrastructure/helpers';

import { UserValidation } from '.';

jest.mock('@infrastructure/helpers', () => ({
  HELPERS: {
    IS_VALID_EMAIL: jest.fn(),
    IS_EQUAL: jest.fn(),
  },
}));

describe('UserValidation', () => {
  describe('isValidEmail', () => {
    it('It should call HELPER.IS_VALID_EMAIL with the email parameter', () => {
      const email = 'test@example.com';
      const userValidation = new UserValidation();

      userValidation.isValidEmail(email);

      expect(HELPERS.isValidEmail).toHaveBeenCalledWith(email);
    });

    it('It should return the result from HELPER.IS_VALID_EMAIL', () => {
      const email = 'test@example.com';
      const expectedResult = true;
      // @ts-expect-error: Property 'mockReturnValue' does not exist on
      // type '(email: string) => boolean'
      HELPER.IS_VALID_EMAIL.mockReturnValue(expectedResult);
      const userValidation = new UserValidation();

      const result = userValidation.isValidEmail(email);

      expect(result).toBe(expectedResult);
    });
  });

  describe('areEqual', () => {
    it('It should call HELPER.IS_EQUAL with the two arrays', () => {
      const valueOne = ['a', 'b', 'c'];
      const valueTwo = ['a', 'b', 'c'];
      const userValidation = new UserValidation();

      userValidation.areEqual(valueOne, valueTwo);

      expect(HELPERS.isEqual).toHaveBeenCalledWith(valueOne, valueTwo);
    });

    it('It should return the result from HELPER.IS_EQUAL', () => {
      const valueOne = ['a', 'b', 'c'];
      const valueTwo = ['a', 'b', 'c'];
      const expectedResult = true;
      // @ts-expect-error: Property 'mockReturnValue' does not exist on type
      // '(valueOne: string[], valueTwo: string[]) => boolean'.
      HELPER.IS_EQUAL.mockReturnValue(expectedResult);
      const userValidation = new UserValidation();

      const result = userValidation.areEqual(valueOne, valueTwo);

      expect(result).toBe(expectedResult);
    });
  });
});
