import express from "express";
import { readFile } from "node:fs/promises";
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use((req, res, next) => {
  console.log(`method: ${req.method}, url: ${req.url}`);
  next();
});

server.post("/data", (req, res) => {
  console.log(req.body);
  res.send("got data");
});

server.get("/", async (req, res) => {
  res.send((await readFile("./www/index.html")).toString());
});

server.get("/form", async (req, res) => {
  res.send((await readFile("./www/forms.html")).toString());
});

server.listen(3434, () => {
  console.log(`server listening on 3434`);
});
