import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import HttpError from "./utils/HttpError.js";

const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use((req, res, next) => {
    next.apply(HttpError(404));
  });

  app.use(errorHandler);
  app.use(notFoundHandler);

  const port = Number(process.env.PORT);
  app.listen(port, () => console.log(`Server is running on ${port} port`));
};

export default startServer;
