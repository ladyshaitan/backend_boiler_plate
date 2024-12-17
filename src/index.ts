import express from "express";
import exampleRouter from "./domains/example/routes";
const app = express();

app.get("/", (req, res) => {
  console.log("hello world!");
  res.status(200);
  res.send("hello anne!\n");
});

app.use("/pets", exampleRouter);

app.listen(3000);

export default app;
