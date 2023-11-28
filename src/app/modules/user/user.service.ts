import { User } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (userData: User) => {
  // if (await UserModel.isUserExists(userData.id)) {
  //   throw new Error('user already exist');
  // }
  const result = await UserModel.create(userData);
  // const user = new User(userData); //create an instance

  // const result = await user.save();
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
