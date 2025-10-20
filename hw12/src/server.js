import express from "express";
import router from "./routers/products.router.js";
import errorHandler from "./middlewares/errorhandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import HttpError from "./utils/HttpError.js";

const startServer = () => {
  const app = express();

  app.use(express.json());

  app.use("/products", router);
  app.use((req, res, next) => {
    next(HttpError(404));
  });
  app.use(errorHandler);
  app.use(notFoundHandler);

  const port = Number(process.env.PORT);
  app.listen(port, () => console.log(`Server is running on ${port} port`));
};

export default startServer;
