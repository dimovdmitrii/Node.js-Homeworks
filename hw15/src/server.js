import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const startServer = () => {
  const app = express();

  app.use(express.static(path.join(__dirname, "../public")));

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`Server running on ${port} port`);
  });
};
export default startServer;
