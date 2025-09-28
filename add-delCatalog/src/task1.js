import fs from "fs";

fs.mkdir("./src/myFolder", (err) => {
  if (err) {
    if (err.code === "EEXIST") {
      console.log("Directory already exists");
    }
    console.log(err);
  }
  console.log("Directory created successfully");

  fs.rmdir("./src/myFolder", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Directory deleted successfully");
  });
});
