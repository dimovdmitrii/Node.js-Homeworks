import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import categoryRouter from "./routers/categories.router.js";
import productRouter from "./routers/products.router.js";

const startServer = () => {
  const app = express();

  app.use(express.json());

  app.use("/categories", categoryRouter);

  app.use("/products", productRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = Number(process.env.PORT);
  app.listen(port, () => console.log(`Server running on port: ${port}`));
};

export default startServer;
