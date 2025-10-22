import HttpError from "../utils/HttpError.js";

import {
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../services/product.service.js";

import { productFullSchema } from "../schemas/product.schema.js";
import validateBody from "../utils/validateBody.js";

export const getAllProductsController = async (req, res, next) => {
  const result = await getAllProducts();
  res.json(result);
};

export const getProductByIdController = async (req, res, next) => {
  const { id } = req.params;
  const result = await getProductById(id);

  if (!result) {
    throw HttpError(404, `Product with id=${id} not found`);
  }

  res.json(result);
};

export const createProductController = async (req, res, next) => {
  validateBody(productFullSchema, req.body);

  const result = await createProduct(req.body);

  res.status(201).json(result);
};

export const updateProductController = async (req, res, next) => {
  validateBody(productFullSchema, req.body);

  const { id } = req.params;
  const result = await updateProduct(id, req.body);

  if (!result) {
    throw HttpError(404, `Product with id=${id} not found`);
  }

  res.json(result);
};

export const deleteProductController = async (req, res, next) => {
  const { id } = req.params;
  const result = await deleteProduct(id);

  if (!result) {
    throw HttpError(404, `Product with id=${id} not found`);
  }

  res.status(204).send();
};
