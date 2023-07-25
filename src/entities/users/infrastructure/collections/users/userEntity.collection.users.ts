import { type User } from 'entities/users';
import { mongodb } from '@core/infrastructure/dbClients';

export const COLLECTION = mongodb.collection<User>('users');
