import Product from "../db/models/Product.js";

export const getAllProducts = (query) => Product.find(query);

export const getProductById = (id) => Product.findById(id);

export const createProduct = (payload) => Product.create(payload);

export const updateProduct = (id, payload) =>
  Product.findByIdAndUpdate(id, payload);

export const deleteProduct = (id) => Product.findByIdAndDelete(id);
