import { User } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (userData: User) => {
  const result = await UserModel.create(userData);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.findOne({ id });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
};
