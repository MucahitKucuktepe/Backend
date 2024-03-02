"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// app.get("/", (req, res) => {
//   throw new Error("Error Message");
// });

// app.get("/user/:id", (req, res) => {
//   const id = req.params?.id || 0;
//   try {
//     if (isNaN(id)) {
//       throw new Error("ID is not number", { cause: "params.id= " + id });
//     } else {
//       res.send({
//         message: "OK",
//         id,
//       });
//     }
//   } catch (error) {
//     res.send({
//         error:true,
//         message:err.message
//     })
//   }
// });

/* ------------------------------------------------------- */
//** ERROR HANDLER */
app.get("/*", (req, res) => {
    res.errorStatusCode = 404;
    throw new Error("Error Message");
  });
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

  const errorHandler = (err, req, res, next) => {
    console.log("errorHandler started");
    const errorStatusCode = res?.errorStatusCode || 500;
    res.status(errorStatusCode).send({
      error: true,
      message: err.message,
    });
  };
  app.use(errorHandler);
  
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
