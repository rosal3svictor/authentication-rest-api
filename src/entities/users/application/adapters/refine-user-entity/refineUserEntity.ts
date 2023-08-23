import { type Interfaces } from 'entities/users/domain'

export function refineUserEntity(user: Interfaces.User): Omit<Interfaces.User, 'password'> {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    age: user.age
  }
}
