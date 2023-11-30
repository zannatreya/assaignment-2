import { z } from 'zod';

const OrderSchema = z.object({
  productName: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
});

const UserValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string().min(1).max(20),
  fullName: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
  }),
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean().optional(),
  hobbies: z.array(z.string()).optional(),
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    country: z.string().min(1),
  }),
  isDeleted: z.boolean().default(false),
  orders: z.array(OrderSchema).optional(),
});

export default UserValidationSchema;
