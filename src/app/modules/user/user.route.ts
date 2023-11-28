import express from 'express';
import { userController } from './user.controller';
const router = express.Router();
router.post('/create-user', userController.createUser);
router.get('/:userId', userController.getSingleUser);
router.get('/', userController.getAllUsers);

export const UserRoutes = router;
