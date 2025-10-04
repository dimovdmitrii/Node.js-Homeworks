import express from "express";
import cors from "cors";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import basicRouter from "./routers/basic.router.js";

const startServer = () => {
  const app = express();
  const port = Number(process.env.PORT) || 3000;

  app.use(cors());
  app.use(express.json());

  app.use("/", basicRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

export default startServer;
