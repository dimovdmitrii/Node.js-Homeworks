import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("All right!");
});

app.post("/data", (req: Request, res: Response) => {
  const body = req.body;

  res.json({
    message: "Data request success",
    received: body,
  });
});

app.listen(3000, () => {
  console.log("Server running on 3000 port");
});
