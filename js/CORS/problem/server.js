import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("hi from server").end();
});

server.listen(3535, () => {
  console.log(`server on`);
});
