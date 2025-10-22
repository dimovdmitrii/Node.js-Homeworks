import Product from "../db/models/Product.js";

export const createProduct = (payload) => Product.create(payload);

export const getAllProducts = (query) =>
  Product.find(query).populate("category");
