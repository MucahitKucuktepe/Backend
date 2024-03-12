"use strict";
const express = require("express");
const { todo } = require("../controllers/todo.controller");
const idValidation = require("../middlewares/idValidation");
const router = express.Router();
const todoRouter = express.Router();

todoRouter.route("/").get(todo.list).post(todo.create);

todoRouter
.route("/:id")
.all(idValidation)
.get(todo.read)
.put(todo.update)
.patch(todo.update)
.delete(todo.delete);

//   Put değişiklik olunca hepsini günceller.
//   Patch sadece değişen yeri günceller
module.exports = { todoRouter };
