import { Router } from "express";
import {
  getProductsController,
  addProductController,
  getProductByIdController,
  updateProductByIdController,
  deleteProductByIdController,
} from "../controllers/productController.js";

const productsRouter = new Router();

productsRouter.get("/", getProductsController);

productsRouter.get("/:id", getProductByIdController);

productsRouter.post("/", addProductController);

productsRouter.put("/:id", updateProductByIdController);

productsRouter.delete("/:id", deleteProductByIdController);

export default productsRouter;
