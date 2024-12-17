import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log("hello world!");
  res.status(200);
  res.send("hello anne!\n");
});

app.listen(3000);
