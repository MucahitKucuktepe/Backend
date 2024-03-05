"use strict";

//? NodeJs SERVER
require("dotenv").config();
// console.log(process.env)
const PORT = process.env.PORT;
const HOST = process.env.HOST;
// console.log("welcome")
const http = require("node:http");
//  http.createServer((req,res)=>{
//     res.end('<h1>Welcome to Node.js Server</h1>  ')

//  }).listen(8000,()=>console.log(`server runned: http://${HOST}:${PORT}`))
// }).listen(8000,()=>console.log("server runned: http:127.0.0.1:8000"))
const app = http.createServer((req, res) => {
  console.log(req);
  console.log("**************");
  console.log(req.method);
  console.log("**************");
  console.log(req.url);

  // //* end points home: /, list: /list, test: /test
  // if(req.url== '/'){
  //     res.write('this')
  //     res.write('is')
  //     res.write('HOME')
  //     res.write('Page')

  //     res.end()
  // }else if (req.url== '/list'){
  //     res.end('<h1>This is LİST Page</h1> ')
  // }else if (req.url== '/test'){
  //     res.end('<h1>This is TEST Page</h1> ')
  // }
  //* end points home: /, list: /list, test: /test
  if (req.url == "/") {
    if (req.method == "GET") {
      res.write("this ");
      res.write("is ");
      res.write("HOME ");
      res.write("Page");
      res.end();
    } else if (req.method == "POST") {
      res.statusCode = 400;
      res.statusMessage = "post yapamazsin";
      res.end("Post Yapamazsin");
    } else if (req.method == "DELETE") {
      res.writeHead(405, "Silme yapamazsin", {
        "Content-Type": "text/html",
        "another-header": "another header",
      });

      res.statusMessage = "Silme";
      res.end("Bu methodu Kullanma");
    } else {
      res.end("Can not use this Method");
    }
  } else if (req.url == "/list") {
    const obj = {
      error: false,
      message: "this is list page",
      deneme: "deneme",
    };
    res.end(JSON.stringify(obj));
  } else if (req.url == "/test") {
    res.end("<h1>This is TEST Page</h1> ");
  }
});
app.listen(8000, () => console.log(`server runned: http://${HOST}:${PORT}`));
