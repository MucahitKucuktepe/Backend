// "use strict";
// /* -------------------------------------------------------
//     EXPRESSJS - ROUTING
// ------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

// /* ------------------------------------------------------- */
// //? "Router" is special app for URL control in ExpressJS.

// /* express.Router() */
// const router = express.Router()

// router.get('/', (req, res) => res.send({ message: "Home Area" }))
// router.get('/about', (req, res) => res.send({ message: "About Area" }))
// router.get('/user/:id', (req, res) => res.send({ message: "User Area" }))

// //? After finished router-design, it will call with middleware:
// app.use(router)
const router=require('./routes/')

app.use(router)

// /* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
