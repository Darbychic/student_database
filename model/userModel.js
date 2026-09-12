import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    student_name: { type: String, required: true },
    student_email: { type: String, unique: true, required: true },
    student_regNo: { type: String, unique: true, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],//REFRENCES THE PRODUCT MODEL
    
});

const userModel = mongoose.model('User', userSchema);

export default userModel;


