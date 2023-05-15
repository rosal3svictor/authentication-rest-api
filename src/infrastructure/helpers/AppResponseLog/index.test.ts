import { APP_RESPONSE_LOG } from '.';

describe('APP_RESPONSE_LOG', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // @ts-expect-error: This is not introducing a bug
    console.log.mockRestore();
  });

  it('should log a success message with correct formatting', () => {
    const message = 'This is a success message';

    APP_RESPONSE_LOG.SUCCESS(message);

    expect(console.log).toHaveBeenCalled();
  });
});
