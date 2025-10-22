import Category from "../db/models/Category.js";

export const createCategory = (payload) => Category.create(payload);