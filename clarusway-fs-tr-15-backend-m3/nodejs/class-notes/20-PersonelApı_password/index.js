"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

//envVariables to process.env.
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configurations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- *
//?MORGAN LOGGING
// https://expressjs.com/en/resources/middleware/morgan.html
// https://github.com/expressjs/morgan

const morgan = require("morgan");

app.use(morgan('IP=:remote-addr | TIME=:date[clf] | METHOD=:method | URL=:url | STATUS=:status | LENGTH=:res[content-length] | REF=:referrer |  AGENT=:user-agent'));

/* ------------------------------------------------------- */

// //! Write to log file
// const morgan = require("morgan");
// const fs= require('node:fs')
// app.use(morgan('combined', {
//   stream: fs.createWriteStream('./access.log', {flags:'a+'})
// }))

// //! Write to log file day by day
// const morgan = require("morgan");
// const fs= require('node:fs')
// const now=new Date()
// const today=now.toISOString().split('T')[0]
// // console.log(typeof today,today)
// app.use(morgan('combined', {
//   stream: fs.createWriteStream(`./logs/${today}.log`, {flags:'a+'})
// }))

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());
// Logging:
app.use(require("./src/middlewares/logging"));

// SessionsCookies:
app.use(require("cookie-session")({ secret: process.env.SECRET_KEY }));

// res.getModelList():
app.use(require("./src/middlewares/findSearchSortPage"));

/* ------------------------------------------------------- */
// // Login/Logout Control Middleware
// app.use(async (req, res, next) => {
//   const Personnel = require("./src/models/personnel.model");

//   req.isLogin = false;

//   if (req.session?.id) {
//     const user = await Personnel.findOne({ _id: req.session.id });

//     // if (user && user.password == req.session.password) {
//     //     req.isLogin = true
//     // }
//     req.isLogin = user && user.password == req.session.password;
//   }
//   console.log("isLogin: ", req.isLogin);

//   next();
// });

/* ------------------------------------------------------- */
app.use(require("./src/middlewares/authentication"));
/* ------------------------------------------------------- */
// Routes:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PERSONNEL API",
    user: req.user,
  });
});

// // /departments
// app.use("/departments", require("./src/routes/department.router"));
// // /personnels
// app.use("/personnels", require("./src/routes/personnel.router"));
app.use(require("./src/routes/index"));

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()
