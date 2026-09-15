import productModel from "../model/productModel.js";
import userModel from "../model/userModel.js";
import cloudinary from "../config/cloudinary.js";

/**
 * create : upload product
 * get all
 * get one
 * update :update product (stock)
 * delete
*/
//create / upload
const createProduct = async (req, res) => {
    try {
        const getUserID = await userModel.findById(req.params.id);
        const { name, description, price, category, availability, quantity, image } = req.body;
        if (!getUserID) {
            return res.status(404).json({ 
                message: "User not found" 
            });
        }

       if (!req.file){
           return res.status(400).json({
               message : "image is required...please upload an image",
    
           })
        }      
const result = await cloudinary.uploader.upload(req.file.path)
const imageUrl = result.secure_url
        const product = await productModel.create(
            {
             name, description, price, category, availability, quantity, image : imageUrl
             });

        await getUserID.products.push(product._id);
        await getUserID.save();
        return res.status(201).json({
            name, description, price, category, availability, quantity, image
        });
        return res.status(201).json({
            message: "Product created successfully", product
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//get all products
const getAllProduct = async (req, res) => {
    try {
        const getAll = await productModel.find();
        return res.status(200).json({
            message: "Products retrieved successfully",
            data: getAll
        });
    }catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export { 
    createProduct, 
    getAllProduct
};

