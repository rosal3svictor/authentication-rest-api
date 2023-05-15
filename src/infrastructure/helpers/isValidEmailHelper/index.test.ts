import { isValidEmailHelper } from '.';

describe('isValidEmailHelper', () => {
  it('should return true for valid email addresses', () => {
    expect(isValidEmailHelper('test@example.com')).toBe(true);
    expect(isValidEmailHelper('john.doe@example.co.uk')).toBe(true);
    expect(isValidEmailHelper('user123_456@example.net')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isValidEmailHelper('invalidemail')).toBe(false);
    expect(isValidEmailHelper('test@example')).toBe(false);
    expect(isValidEmailHelper('@example.com')).toBe(false);
    expect(isValidEmailHelper('test@.com')).toBe(false);
  });
});
