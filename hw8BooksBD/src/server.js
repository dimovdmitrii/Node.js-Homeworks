import express from "express";
import cors from "cors";
import errorHnadler from "./middlewars/errorHandler.js";
import notFoundHandler from "./middlewars/notFoundHandler.js";
import booksRouter from "./routers/books.router.js";

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/books", booksRouter);

  app.use(notFoundHandler);
  app.use(errorHnadler);

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port} port`));
};
export default startServer;
