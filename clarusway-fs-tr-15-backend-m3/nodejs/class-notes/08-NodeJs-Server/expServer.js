"use strict";

//? NodeJs SERVER
require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
// console.log("welcome")
const http = require("node:http");
//  http.createServer((req,res)=>{
//     res.end('<h1>Welcome to Node.js Server</h1>  ')

//  }).listen(8000,()=>console.log(`server runned: http://${HOST}:${PORT}`))
// }).listen(8000,()=>console.log("server runned: http:127.0.0.1:8000"))
