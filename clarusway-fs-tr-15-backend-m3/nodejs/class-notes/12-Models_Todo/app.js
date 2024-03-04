"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json());
require("express-async-errors");

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});
/* ------------------------------------------------------- */
// continue from here...
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite:./db.sqlite3");

//? define methodu sequelize modeli olusturur:
//?Her bir model veritabanında bir tabloya denk gelir
//! sequelize.define("tableName",{ ModelDetails })

const Todo = sequelize.define("todos", {
  //! İlk sütun olarak id sütunu sequelize tarafından otomatik oluşturulur/yönetilir
  // id:{
  //     type: DataTypes.INTEGER,
  //     allowNull:false, //? default:true
  //     unique:true, //? default:false
  //     comment:'description',
  //     primaryKey:true, //?default:false
  //     autoIncrement:true, //? default:false
  //     field:'custom_name',
  //     defaultValue:'default', //? default: null
  // }
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT, // ShortHand Using

  priorty: {
    // -1:low, 0:Norm, 1:High
    type: DataTypes.TINYINT,
    allowNull: false,
    default: 0,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },

  //? Not need define creatAt & updetedAt fields.
  //? CretedAt ve updetedAt tanımlamaya gerek yok. Sequelize otomatik olarak oluşturur yönetir.
});

//!Sycnronization
//!Model bilgilerini db ' ye uygula
// sequelize.sync() //* CREATE TABLE İŞLEMİ YAPAR
// sequelize.sync({force:true}) //* DROP TABLE & CREATE TABLE
// sequelize.sync({alter:true}) //* TODO BACKUP & DROP  TABLE & CREATE TABLE & FROM BACKUP

//? Connect to db:
sequelize
  .authenticate()
  .then(() => console.log("*DB Connected"))
  .catch(() => console.log("*DB Not Connected"));

/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
