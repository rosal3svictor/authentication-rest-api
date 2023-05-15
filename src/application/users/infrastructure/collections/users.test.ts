import { COLLECTION } from './users';

describe('Mongo DB Collection - User', () => {
  it('It should be of type "Collection<User>"', () => {
    expect(typeof COLLECTION).toBe('object');
  });
});
