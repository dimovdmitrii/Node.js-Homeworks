import { Router } from "express";

const router = Router();

router.put("/", (req, res) => {
  res
    .status(200)
    .type("Content-Type", "text/plain")
    .send("PUT - request proccesed");
});

router.delete("/", (req, res) => {
  res
    .status(200)
    .type("Content-Type", "text/plain")
    .send("DELETE - request proccesed");
});

export default router;
