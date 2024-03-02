"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BUILTIN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//DATA RECEIVING
//? Accept JSON and covert to object:
app.use(express.json())
app.use(express.text())
app.use('/static', express.static('./public/images'))
app.all('/*',(req, res)=>{
    res.send({
        body:req.body,
        message:'Hello'
    })
})

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));