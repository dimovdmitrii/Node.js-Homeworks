import App from "../db/models/Product.js";

export const addProduct = (payload) => App.create(payload);

export const getProducts = () => App.findAll();

export const getProductById = (id) => App.findByPk(id);

export const updateProductById = async (id, payload) => {
  const product = await getProductById(id);
  if (!product) return null;
  return product.update(payload);
};

export const deleteProductById = async (id) => {
  const product = await getProductById(id);
  if (!product) return null;
  await product.destroy();
  return product;
};
