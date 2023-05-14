import { type User } from '@application/users';

export function RefineUserEntity(user: User): Omit<User, 'password'> {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    age: user.age,
  };
}
