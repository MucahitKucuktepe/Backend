"use strict";

//*-----------------------

// EXPRESS - MONGODB CONNECTİON MONGOOSE

const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/blogAPI')
require("dotenv").config();
const MONGODB = process.env.MONGODB;
mongoose
  .connect(MONGODB)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Not Connected"));
