import validateBody from "../utils/validate.body.js";
import { createCategory } from "../services/category.service.js";
import { categoryFullSchema } from "../schemas/categories.schema.js";

export const createCategoryController = async (req, res) => {
  validateBody(categoryFullSchema, req.body);
  const result = await createCategory(req.body);
  res.status(201).json(result);
};
