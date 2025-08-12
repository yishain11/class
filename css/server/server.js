import express from "express";
import { readFileSync } from "node:fs";
const server = express();

server.use((req, res, next) => {
  console.log(`req: method: ${req.method}, url: ${req.url}`);
  next();
});

server.use(express.static("www"));

server.get("/", (req, res) => {
  const file = readFileSync("./www/home.html", "utf8");
  console.log(`file`, file);
  res.send(file);
});

server.listen(3434);
