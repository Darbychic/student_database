const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "student_name": { type: String, required: true },
    "student_email": { type: String, unique: true, required: true },
    "student_regNo": { type: String, unique: true, required: true }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;


