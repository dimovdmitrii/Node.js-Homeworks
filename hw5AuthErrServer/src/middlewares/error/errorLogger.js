import fs from "node:fs/promises";

const ERROR_LOF_FILE = "errors.log";

export const errorLoger = async (err, req, res, next) => {
  const now = new Date();
  const logEntry = `${now} | Method: ${req.method} | URL: ${req.url} | Error: ${err.message}\n`;

  try {
    await fs.appendFile(ERROR_LOF_FILE, logEntry);
  } catch (error) {
    console.log(err.message);
  }
  res
    .status(500)
    .type("Content-Type", "text/plain")
    .send("Internal Server Error");
};
