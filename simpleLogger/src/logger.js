import fs from "node:fs/promises";

function logMessage(message) {
  fs.appendFile("./src/log.txt", message + "\n");
}

export default logMessage;
