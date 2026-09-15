import express from'express';
const userRouter = express.Router();
import { createUser, loginUser, updateUser, deleteUser, getUser, } from '../controller/userController.js';

userRouter.post('/:new-users', createUser);
userRouter.get('/login', loginUser)
userRouter.put('/:student_regNo', updateUser);
userRouter.delete('/:student_regNo', deleteUser);
userRouter.get('/:id', getUser);

export default userRouter;