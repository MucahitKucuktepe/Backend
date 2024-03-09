"use strict";

/*

BLOG API WITH MONGOOSE 

*/

//* npm i express doteenv express express-async-errors
//* npm i mongoose

const express = require("express");
const app = express();
//!DB CONNECTİON
require('./src/dbConnection')

app.use(express.json); // yukarıda kalmalı



require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;



app.all("/", (req, res) => {
  res.send("WELCOME BLOG API PROJECT");
});

app.use(require("./src/errorHandler"));
app.listen(PORT, () =>
  console.log(`Server Running on  http://${HOST}:${PORT}`)
);
