import {
  getProducts,
  addProduct,
  getProductById,
  deleteProductById,
  updateProductById,
} from "../services/products.service.js";
import HttpError from "../utils/HttpError.js";

export const getProductsController = async (req, res) => {
  const result = await getProducts();
  res.json(result);
};

export const addProductController = async (req, res) => {
  const result = await addProduct(req.body);
  res.status(201).json(result);
};

export const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getProductById(id);
  if (!result) throw HttpError(404, `Product with id= ${id} not found`);
  res.json(result);
};

export const updateProductByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await updateProductById(id, req.body);
  if (!result) throw HttpError(404, `Product with id= ${id} not found`);
  res.json(result);
};

export const deleteProductByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteProductById(id);
  if (!result) throw HttpError(404, `Product with id= ${id} not found`);
  res.json(result);
};
