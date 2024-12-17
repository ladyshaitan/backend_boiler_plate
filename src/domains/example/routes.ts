import express from "express";
const exampleRouter = express.Router();

exampleRouter.get("/dog", (req, res) => {
  console.log("bark bark!");
  res.status(200);
  res.send("Woof!\n");
});

exampleRouter.get("/cat", (req, res) => {
  console.log("purr");
  res.status(200);
  res.send("Maow!\n");
});

export default exampleRouter;
