import fs from "node:fs/promises";

async function addDelDir() {
  try {
    await fs.mkdir("./src/myFolder");
    console.log("Directory  was successfuly created");
  } catch (error) {
    console.log("Error by creating directory", error.message);
    return;
  }

  try {
    await fs.rm("./src/myFolder", { recursive: true });
    console.log("Directory was successfuly deleted");
  } catch (error) {
    console.log("Error by deleting directory", error.message);
  }
}

addDelDir();
