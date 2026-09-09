const express = require('express');
const userRouter = express.Router();
const { createUser, updateUser, deleteUser, getUser} = require('../controller/userController');

userRouter.post('/:new-users', createUser);
userRouter.put('/:student_regNo', updateUser);
userRouter.delete('/:student_regNo', deleteUser);
userRouter.get('/:id', getUser);

module.exports = userRouter;