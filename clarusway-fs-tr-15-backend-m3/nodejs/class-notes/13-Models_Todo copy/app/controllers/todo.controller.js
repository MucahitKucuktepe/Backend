"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//!****************CONTROLLERS************//
/* ------------------------------------------------------- */
const Todo = require("../models/todo.model");
module.exports = {
  list:
    ("/",
    async (req, res) => {
      const data = await Todo.findAndCountAll();

      res.status(200).send({
        error: false,
        result: data,
      });
    }),

  //CRUD:
  create:
    ("/",
    async (req, res) => {
      const receivedData = req.body;

      // const data = await Todo.create({
      //   title: receivedData.title,
      //   description: receivedData.description,
      //   priorty: receivedData.priorty,
      //   isDone: receivedData.isDone,
      // });

      const data = await Todo.create({ ...receivedData });
      res.status(201).send({
        error: false,
        result: data.dataValues,
      });
    }),
  read:
    ("/:id",
    async (req, res) => {
      // const data = await Todo.findOne({ where: { id: req.params.id } });
      const data = await Todo.findByPk(req.params.id);
      res.status(200).send({
        error: false,
        result: data,
      });
    }),
  update:
    ("/:id",
    async (req, res) => {
      // const data=Todo.update({...newData}, {...where})
      const data = await Todo.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(202).send({
        error: false,
        message: "updated",
        rbody: req.body,
        result: data,
        new: await Todo.findByPk(req.params.id),
      });
    }),
  delete:
    ("/:id",
    async (req, res) => {
      const data = await Todo.destroy({ where: { id: req.params.id } });
      // res.status(204).send({
      //   error:false,
      //   message:'Deleted',
      //   result:data
      // })
      //   if(data>0){
      //     res.sendStatus(204)
      //   }else{
      //     res.status(404).send({
      //       error:true,
      //       result:data
      //     })
      //   }

      res.errorStatusCode = 404;
      throw new Error("Not Found.");
    }),
};
