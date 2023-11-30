import { Schema, model } from 'mongoose';
import { Order, TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const OrderSchema = new Schema<Order>({
  productName: {
    type: String,
    required: [true, 'Productname  is required'],
  },
  price: Number,
  quantity: Number,
});

const UserSchema = new Schema<TUser, UserModel>({
  userId: {
    type: Number,
    required: [true, 'User id is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username  is required'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    maxlength: [20, 'can not be more than 20 character'],
  },
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
  isDeleted: {
    type: Boolean,
    default: false,
  },
  orders: [OrderSchema],
});

UserSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook:this will save data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

UserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
// Query Middleware
UserSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

UserSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

UserSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

UserSchema.statics.isUserExists = async function (id: number) {
  const existingUser = await User.findOne({ id });
  return existingUser;
};

export const User = model<TUser, UserModel>('User', UserSchema);
