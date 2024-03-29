"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");

module.exports = {
  list: async (req, res) => {
    // const data = await Personnel.find(search).sort(sort).skip(skip).limit(limit)
    const data = await res.getModelList(Personnel);

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Personnel),
      data, // data: data
    });
  },

  create: async (req, res) => {
    // isLead Control:
    // const isLead = req.body.isLead || false;
    const isLead = req.body.isLead || false;

    if (isLead) {
      await Personnel.updateMany(
        { departmentId: req.body.departmentId, isLead: true },
        { isLead: false }
      );
    }
    const data = await Personnel.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Personnel.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    // isLead Control:
    const isLead = req.body?.isLead || false;

    //* personelId yi kullanarak departmentId ye eriştim
    if (isLead) {
      const { departmentId } = await Personnel.findOne(
        { _id: req.params.id },
        { departmentId: 1 }
      );
      //* departmenId si şu olan personel içerisindeki tüm personelin isLead durunu false yaptım.
      await Personnel.updateMany(
        { departmentId, isLead: true },
        { isLead: false }
      );
    }

    const data = await Personnel.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Personnel.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Personnel.deleteOne({ _id: req.params.id });

    // const isDeleted = data.deletedCount >= 1 ? true : false;
    // res.status(isDeleted ? 204 : 404).send({
    //   error: !isDeleted,
    //   data,
    // });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
