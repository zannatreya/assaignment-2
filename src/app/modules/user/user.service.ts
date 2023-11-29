import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};
const getSingleUserFromDB = async (userId: number) => {
  const result = await User.findOne({ userId });
  return result;
};

const deleteUserFromDB = async (userId: number) => {
  const result = await User.updateOne({ userId }, { isDeleted: true });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
};
