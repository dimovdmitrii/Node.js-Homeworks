import startServer from "./server.js";
import createWsServer from "./wsServer.js";

const bootstrap = async () => {
  startServer();
  createWsServer();
};
bootstrap();
