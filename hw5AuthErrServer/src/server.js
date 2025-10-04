import express from "express";
import cors from "cors";
import { checkAuthorization } from "./middlewares/auth/checkAuthorization.js";
import { triggerError } from "./middlewares/error/triggerError.js";
import { errorLoger } from "./middlewares/error/errorLogger.js";
import apiRouter from "./routes/api.routes.js";

const PORT = process.env.PORT;

const startServer = () => {
  const app = express();

  app.use(cors());

  app.use(triggerError);

  app.use("/", apiRouter);

  app.use("/", checkAuthorization);

  app.use(errorLoger);

  app.listen(PORT, () => {
    console.log(` Server successfuly running on ${PORT} port`);
  });
};

export default startServer;
