import { RecordPreExists } from '.';

import type { CrudImplementation } from '../../implementation';

describe('Business Logic - RecordPreExists', () => {
  let mockImplementation: CrudImplementation;

  beforeEach(() => {
    // @ts-expect-error: This is not introducing a bug
    mockImplementation = {
      recordPreExists: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('It should return "found" response when record exists', async () => {
    // @ts-expect-error: Property 'mockResolvedValue' does not exist on type
    // '(email: string) => Promise<boolean>'
    mockImplementation.recordPreExists.mockResolvedValue(true);

    const recordPreExists = new RecordPreExists(mockImplementation);

    const result = await recordPreExists.invoke('test@example.com');

    expect(result).toEqual(
      expect.objectContaining({
        // Add any necessary properties for the "found" response
      }),
    );
    expect(mockImplementation.recordPreExists).toHaveBeenCalledWith('test@example.com');
  });

  it('It should return "notFound" response when record does not exist', async () => {
    // @ts-expect-error: Property 'mockResolvedValue' does not exist on type
    // '(email: string) => Promise<boolean>'
    mockImplementation.recordPreExists.mockResolvedValue(false);

    const recordPreExists = new RecordPreExists(mockImplementation);

    const result = await recordPreExists.invoke('test@example.com');

    expect(result).toEqual(
      expect.objectContaining({
        // Add any necessary properties for the "notFound" response
      }),
    );
    expect(mockImplementation.recordPreExists).toHaveBeenCalledWith('test@example.com');
  });
});
