import fs from "node:fs/promises";

async function readFile() {
  try {
    await fs.writeFile("./src/info.txt", "Node.js is awesome!");
    console.log("File writed successfuly");
  } catch (error) {
    console.log("Error by writing file", error.message);
    return;
  }
  try {
    const text = await fs.readFile("./src/info.txt", "utf-8");
    console.log("File readed successfully!");
    console.log("----------------------");
    console.log(text);
  } catch (error) {
    console.log("Error by reading  file", error.mesasge);
  }
}

readFile();
