"use strict";
/*
    Expressjs Routing
*/
require("dotenv").config();

const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

const express = require("express");

const app = express(); //* express üzerinde bir server oluşturduk
// app.get("/", (req, res) => {
//   //   res.write(
//   //     JSON.stringify({
//   //       message: "hello",
//   //     })
//   //   );
//   //   res.end();
//   console.log("hello");
//   res.send({
//     message: "hello",
//   });
// });

// app.post("/", (req, res) => {
//   res.send({
//     message: "POST method request",
//   });
// });

// app.put("/", (req, res) => {
//   res.send({
//     message: "PUT method request",
//   });
// });

// app.delete("/", (req, res) => {
//   res.send({
//     message: "DELETE method request",
//   });
// });
// app.all("/", (req, res) => {
//   res.send({
//     message: "ALL method request",
//   });
// });
// app.get("/drive1/drive2", (req, res) => {
//     res.send({
//       message: "GET method CALLED",
//     });
//   });
// app.listen(PORT, HOST, () =>
// app.get(/abc$/, (req, res) => {
//     res.send({
//       message: "GET method CALLED",
//     });
//   });
// app.get("/:blogId/location/:location", (req, res) => {
//   //   res.send({
//   //     param:req.params,
//   //     message: "HELLO",
//   //   });
//   res.send({
//     params: req.params.blogId,
//     url: {
//       protocol: req.protocol,
//       domain: req.hostname,
//       method: req.method,
//       url: req.url,
//       params: req.params,
//       body: req.body,
//     },
//   });
// });
// app.get('/', (req, res) => {
//     // res.status(201).send({
//     //   message: "GET method CALLED",
//     // });
//     res.redirect(301,'https://www.google.com')
//   });
// app.get('/file', (req, res) => {
//   //*__dirname bulunduğum klasör
//     res.sendFile(__dirname+'/readme.md')
//   });
app.get('/download', (req, res) => {
    //*__dirname bulunduğum klasör
      res.download('readme.md','express routing')
    });
app.listen(PORT, HOST, () =>
  console.log(`Server Runned http://${HOST}:${PORT}`)
);
