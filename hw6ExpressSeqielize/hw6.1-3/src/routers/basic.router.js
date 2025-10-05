import { Router } from "express";
import {
  getBasicController,
  addBasicController,
} from "../controllers/basic.controller.js";

const basicRouter = Router();

basicRouter.get("/", getBasicController);
basicRouter.post("/", addBasicController);

export default basicRouter;
