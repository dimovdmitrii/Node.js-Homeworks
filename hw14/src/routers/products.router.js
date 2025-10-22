import express from "express";
import {
  createProductController,
  getAllProductsController,
} from "../controllers/products.controller.js";

const productRouter = express.Router();

productRouter.post("/", createProductController);

productRouter.get("/", getAllProductsController);

export default productRouter;
