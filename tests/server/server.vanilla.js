import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.end("hi from /");
});

server.listen(4545, () => {
  console.log(`server on`);
});
