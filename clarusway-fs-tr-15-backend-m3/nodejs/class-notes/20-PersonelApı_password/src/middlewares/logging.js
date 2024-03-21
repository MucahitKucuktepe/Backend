"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Logging
//! Write to log file day by day
const morgan = require("morgan");
const fs = require("node:fs");
const now = new Date();
const today = now.toISOString().split("T")[0];
// console.log(typeof today,today)
// app.use(morgan('combined', {
//   stream: fs.createWriteStream(`./logs/${today}.log`, {flags:'a+'})
// }))

module.exports = morgan("combined", {
  stream: fs.createWriteStream(`./logs/${today}.log`, { flags: "a+" }),
});
