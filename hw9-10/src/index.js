import "dotenv/config";

import connectDatabase from "./db/connectDatabase.js";
import startServer from "./server.js";

const bootstrap = async () => {
  try {
    await connectDatabase();
  } catch (error) {
    console.log("Error:", error.message);
  }
  startServer();
};
bootstrap();
