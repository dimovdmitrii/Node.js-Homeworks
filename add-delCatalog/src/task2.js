import fs from "fs";

fs.writeFile("./src/info.txt", "Node.js is awesome!", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("File written successfully");

  fs.readFile("./src/info.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
    }
    console.log("File read successfully:");
    console.log(data);
  });
});
