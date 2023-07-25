import { DataSourceResponse } from '.';

import type { User } from 'entities/users';

describe('Adapter - DataSourceResponse', () => {
  it('It should return an object with the form of DataSourceResponseOutput', () => {
    const dataSource: User = {
      email: 'test@gmail.com',
      password: '1234',
      name: 'TestName',
      age: 18,
    };

    const response = DataSourceResponse('A new user has been created successfully', dataSource);

    expect(Object.keys(response)).toStrictEqual(['httpStatusCode', 'data']);
    expect(typeof response.httpStatusCode).toBe('number');

    expect(typeof response.data).toBe('object');
    expect(Object.keys(response.data)).toStrictEqual(['message', 'dataSource']);
  });
});
