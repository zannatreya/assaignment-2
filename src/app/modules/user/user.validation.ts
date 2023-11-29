import { z } from 'zod';
// import { TUser, Order } from './user.interface';

const OrderSchema = z.object({
  productName: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
});

const UserValidationSchema = z.object({
  userId: z.number(),
  username: z.string().min(1),
  password: z.string().min(1).max(20),
  fullName: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
  }),
  age: z.number(),
  email: z.string().email(),
  isActive: z.enum(['active', 'blocked']).default('active'),
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

// export const validateUser = (data: unknown): TUser => {
//   try {
//     const result = UserSchema.parse(data);
//     return result;
//   } catch (error) {
//     if (error instanceof ZodError) {
//       // Handle validation errors as needed
//       throw new Error(`Validation error: ${error.errors}`);
//     }
//     throw error;
//   }
// };
