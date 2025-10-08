import "dotenv/config";
import connectDatabase from "./db/connectiDatabase.js";
import startServer from "./server.js";

const bootstrap = async () => {
  await connectDatabase();
  startServer();
};

bootstrap();
