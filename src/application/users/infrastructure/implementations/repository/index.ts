import { type User, USERS, type CrudImplementation } from '@application/users';
import bcrypt from 'bcrypt';

export class UsersRepository implements CrudImplementation {
  async save(user: User): Promise<void> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await USERS.INFRASTRUCTURE.COLLECTION.insertOne({
      ...user,
      password: hashedPassword,
    });
  }

  async recordPreExists(email: string): Promise<boolean> {
    const recordFound = await USERS.INFRASTRUCTURE.COLLECTION.findOne({
      email,
    });

    return Boolean(recordFound);
  }
}
