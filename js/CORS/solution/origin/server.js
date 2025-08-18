import express from "express";

const server = express();

// fixing origin problem - but what if we send POST?
server.use((req, res, next) => {
  res.appendHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  next();
});

server.get("/", (req, res) => {
  res.send("hi from server").end();
});

server.delete("/", (req, res) => {
  res.send("hi from DEL Sserver").end();
});

server.listen(3535, () => {
  console.log(`server on`);
});
