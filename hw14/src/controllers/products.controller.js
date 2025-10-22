import validateBody from "../utils/validate.body.js";
import { getAllProducts, createProduct } from "../services/product.service.js";
import { productFullSchema } from "../schemas/products.schema.js";

export const createProductController = async (req, res) => {
  validateBody(productFullSchema, req.body);
  const result = await createProduct(req.body);
  res.status(201).json(result);
};

export const getAllProductsController = async (req, res) => {
  const result = await getAllProducts();
  res.status(200).json(result);
};
