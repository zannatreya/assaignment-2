import { Schema, model } from 'mongoose';
import { Order, TUser } from './user.interface';

const OrderSchema = new Schema<Order>({
  productName: {
    type: String,
    required: [true, 'Productname  is required'],
  },
  price: Number,
  quantity: Number,
});

const UserSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, 'User id is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username  is required'],
  },
  //   password: {
  //     type: String,
  //     required: [true, 'password is required'],
  //     maxlength: [20, 'can not be more than 20 character'],
  //   },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'Firstname  is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Lastname  is required'],
    },
  },
  age: Number,
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  isActive: Boolean,
  hobbies: [String],
  address: {
    street: String,
    city: String,
    country: {
      type: String,
      required: [true, 'Countryname  is required'],
    },
  },
  orders: [OrderSchema],
});

export const User = model<TUser>('User', UserSchema);
