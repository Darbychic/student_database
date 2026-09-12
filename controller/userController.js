import userModel from "../model/userModel.js";

const createUser = async (req, res) => {
    try {
        const { student_name, student_email, student_regNo } = req.body;
        const user = await userModel.create({
            student_name, student_email, student_regNo
        });
    res.status(201).json(user);
        message: 'User created successfully'
        data: user

    }catch (error) {
        res.status(400).json({message: 'Error creating user', error: error.message})
    }
}

const updateUser = async (req, res) => {
    try {
         const { student_regNo } = req.params
         const { student_name, student_email } = req.body
         const user = await userModel.findOneAndUpdate(
            { student_regNo }, 
            { student_name, student_email },
             { new: 'after' }
        );
        if (user) {
            res.status(200).json({
                message: 'Student updated successfully',
                data: user
            });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating student', 
            error: error.message 
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { student_regNo } = req.params;
        const user = await userModel.findOneAndDelete({ student_regNo });
        res.status(200).json({
            message: 'Student deleted successfully',
            data: user
        })
    } catch (error) {
        res.status(400).json({ message: 'Error deleting student', error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({
                 message: 'Student not found' 
                });
        }
        res.status(200).json({
            message: 'Student retrieved successfully',
            data: user
        });
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving student',
             error: error.message 
            });
    }
};

export {
    createUser,
    updateUser,
    deleteUser,
    getUser
};