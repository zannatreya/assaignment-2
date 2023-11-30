import { Model } from 'mongoose';

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  isDeleted: boolean;
  orders: Order[];
};

export type Order = {
  productName: string;
  price: number;
  quantity: number;
};

//for creating static

export interface UserModel extends Model<TUser> {
  isUserExists(id: number): Promise<TUser | null>;
}

// for creating instance

// export interface UserMethods {
//   isUserExists(id: number): Promise<TUser | null>;
// }

// export type UserModel = Model<TUser, Record<string, never>, UserMethods>;
