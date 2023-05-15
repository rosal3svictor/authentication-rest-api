import { type User } from '@application/users';
import { mongodb } from '@infrastructure/db-instances';

export const COLLECTION = mongodb.collection<User>('users');
