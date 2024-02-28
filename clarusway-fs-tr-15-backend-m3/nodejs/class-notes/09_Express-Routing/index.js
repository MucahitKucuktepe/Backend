"use strict";
/*
    Expressjs Routing
*/
require("dotenv").config();

const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

const express = require("express");

const app = express(); //* express üzerinde bir server oluşturduk
app.get("/", (req, res) => {
  //   res.write(
  //     JSON.stringify({
  //       message: "hello",
  //     })
  //   );
  //   res.end();
  console.log("hello");
  res.send({
    message: "hello",
  });
});

app.post("/", (req, res) => {
  res.send({
    message: "POST method request",
  });
});

app.put("/", (req, res) => {
  res.send({
    message: "PUT method request",
  });
});

app.delete("/", (req, res) => {
  res.send({
    message: "DELETE method request",
  });
});
app.all("/", (req, res) => {
  res.send({
    message: "ALL method request",
  });
});
app.listen(PORT, HOST, () =>
  console.log(`Server Runned http://${HOST}:${PORT}`)
);
