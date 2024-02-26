"use strict";

//? NodeJs SERVER
require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

//* npm i express
require("express")
const express=require("express")
const app=express()
console.log("express server")
app.get('/',(req,res)=>{
  res.send("express deneme")
})
app.listen(8000,()=>console.log(`server runned: http://${HOST}:${PORT}`))
//  }).listen(8000,()=>console.log(`server runned: http://${HOST}:${PORT}`))
// }).listen(8000,()=>console.log("server runned: http:127.0.0.1:8000"))
