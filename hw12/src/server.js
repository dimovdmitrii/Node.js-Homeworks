import express from "express";
import router from "./routers/products.router.js";
import errorHandler from "./middlewares/errorhandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

const startServer = () => {
  const app = express();

  app.use(express.json());

  app.use("/products", router);

  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = Number(process.env.PORT);
  app.listen(port, () => console.log(`Server is running on ${port} port`));
};

export default startServer;
