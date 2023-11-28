import { UserServices } from './user.service';
import { Request, Response } from 'express';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await UserServices.createUserIntoDB(user);

    res.status(200).json({
      success: true,
      message: 'user is created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const userController = {
  createUser,
};
