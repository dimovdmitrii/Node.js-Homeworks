import fs from "node:fs/promises";
import "dotenv/config";

const { FILENAME } = process.env;

async function fileOperation() {
  try {
    await fs.writeFile(FILENAME, "This is first homework about dotenv");
    console.log(`File ${FILENAME} successfully created`);
  } catch (error) {
    console.log(error.message);
    return;
  }
  try {
    const data = await fs.readFile(FILENAME, "utf-8");
    console.log("File successfuly readed: ");
    console.log(data);
  } catch (error) {
    console.log("error.message");
  }
}
fileOperation();
