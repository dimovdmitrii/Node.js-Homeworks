import { Router } from "express";
import {
  getProductsController,
  addProductController,
} from "../controllers/productController.js";

const router = Router();

router.get("/", getProductsController);

router.post("/", addProductController);

export default router;
