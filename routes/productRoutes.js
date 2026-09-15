import express from "express";

import { createProduct, getAllProduct } from "../controller/productController.js";
import upload from '../config/multer.js'

const router = express.Router();

router.post("/upload/:id",upload.single('image'), createProduct);
router.get("/getAll", getAllProduct);

export default router;
