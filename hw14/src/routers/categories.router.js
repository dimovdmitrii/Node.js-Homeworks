import express from "express";
import { createCategoryController } from "../controllers/categories.controller.js";

const categoryRouter = express.Router();

categoryRouter.post("/", createCategoryController);

export default categoryRouter;
