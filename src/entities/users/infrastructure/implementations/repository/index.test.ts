import bcrypt from 'bcrypt';

import { Repository } from './index';

// Mock bcrypt.hash function
jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashedPassword'),
}));

// Mock USERS.INFRASTRUCTURE.COLLECTION object
const mockCollection = {
  insertOne: jest.fn().mockResolvedValue(undefined),
  findOne: jest.fn(),
};

describe('Repository - Users', () => {
  beforeEach(() => {
    // Mock USERS.INFRASTRUCTURE.COLLECTION object
    const mockCollection = {
      insertOne: jest.fn().mockResolvedValue(undefined),
      findOne: jest.fn(),
    };

    jest.mock('@application/users', () => ({
      USERS: {
        INFRASTRUCTURE: {
          COLLECTION: mockCollection,
        },
      },
    }));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should save a user with hashed password', async () => {
    const user = {
      email: 'test@example.com',
      password: 'password',
      name: 'John Doe',
      age: 30,
    };

    const usersRepository = new Repository();

    await usersRepository.save(user);

    expect(bcrypt.hash).toHaveBeenCalledWith('password', 10);
  });

  it('should return true when record exists', async () => {
    const email = 'test@example.com';

    mockCollection.findOne.mockResolvedValue({ email });

    const usersRepository = new Repository();

    const result = await usersRepository.recordPreExists(email);

    expect(result).toBe(true);
  });

  it('should return false when record does not exist', async () => {
    const email = 'test@example.com';

    mockCollection.findOne.mockResolvedValue(null);

    const usersRepository = new Repository();

    const result = await usersRepository.recordPreExists(email);

    expect(result).toBe(true);
  });
});
