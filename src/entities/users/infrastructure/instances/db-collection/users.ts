import { type Interfaces } from 'entities/users/domain'
import { mongodb } from 'core/infrastructure/instances/db-client'

export const Collection = mongodb.collection<Interfaces.User>('users')
