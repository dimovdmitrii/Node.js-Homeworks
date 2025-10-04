import express from "express";
import {
  getProductsController,
  addProductController,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProductsController);

router.post("/", addProductController);

export default router;
