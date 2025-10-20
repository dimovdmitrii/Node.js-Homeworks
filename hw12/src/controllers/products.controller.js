import HttpError from "../utils/HttpError.js";

import {
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../services/product.service.js";

import { productFullSchema } from "../schemas/product.schema.js";
import validateBody from "../utils/valodateBody.js";

export const getAllProductsController = async (req, res, next) => {
  try {
    const result = await getAllProducts();
    res.json(result);
  } catch (error) {
    next(HttpError(500, error.message));
  }
};

export const getProductByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getProductById(id);

    if (!result) {
      throw HttpError(404, `Product with id=${id} not found`);
    }

    res.json(result);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return next(HttpError(400, "Invalid product ID format"));
    }

    next(error.status ? error : HttpError(500, error.message));
  }
};

export const createProductController = async (req, res, next) => {
  try {
    validateBody(productFullSchema, req.body);

    const result = await createProduct(req.body);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateProductController = async (req, res, next) => {
  try {
    validateBody(productFullSchema, req.body);

    const { id } = req.params;
    const result = await updateProduct(id, req.body);

    if (!result) {
      throw HttpError(404, `Product with id=${id} not found`);
    }

    res.json(result);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return next(HttpError(400, "Invalid product ID format"));
    }

    next(error.status ? error : HttpError(500, error.message));
  }
};

export const deleteProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProduct(id);

    if (!result) {
      throw HttpError(404, `Product with id=${id} not found`);
    }

    res.status(204).send();
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return next(HttpError(400, "Invalid product ID format"));
    }

    next(error.status ? error : HttpError(500, error.message));
  }
};
