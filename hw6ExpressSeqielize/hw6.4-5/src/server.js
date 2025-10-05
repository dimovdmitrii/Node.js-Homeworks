import express from "express";
import cors from "cors";
import productRoutes from "./routers/productRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/products", productRoutes);

  app.use(errorHandler);
  app.use(notFoundHandler);

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port} port `));
};

export default startServer;
