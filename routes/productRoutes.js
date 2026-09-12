import express from "express";

import { createProduct, getAllProduct } from "../controller/productController.js";

const router = express.Router();

router.post("/upload/:id", createProduct);
router.get("/getAll", getAllProduct);

export default router;
