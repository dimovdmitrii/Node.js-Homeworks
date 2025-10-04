import { getProducts, addProduct } from "../services/products.service.js";

export const getProductsController = async (req, res) => {
  const result = await getProducts();
  res.json(result);
};

export const addProductController = async (req, res) => {
  const result = await addProduct(req.body);
  res.status(201).json(result);
};
