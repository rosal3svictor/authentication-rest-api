import { type User, type UserEntityImplLogic, USER_ENTITY } from 'entities/users';
import bcrypt from 'bcrypt';

export class Repository implements UserEntityImplLogic.Crud {
  async save(user: User): Promise<void> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await USER_ENTITY.COLLECTION.insertOne({
      ...user,
      password: hashedPassword,
    });
  }

  async recordPreExists(email: string): Promise<boolean> {
    const recordFound = await USER_ENTITY.COLLECTION.findOne({
      email,
    });

    return Boolean(recordFound);
  }
}
