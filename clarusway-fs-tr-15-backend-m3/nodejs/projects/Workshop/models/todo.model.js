"use strict";
const mongoose = require("mongoose");
const PRIORITIES = {
  LOW: "Low",
  NORMAL: "Normal",
  HIGH: "High",
};
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    priority: {
      // low, normal, high
      type: String,
      // enum, Mongoose şemasında belirli bir alanın değerini belirli bir dizi değerle sınırlamak için kullanılan bir kısıtlamadır. Bu, bir alanın yalnızca belirli değerlerden biri olabileceğini belirtmek için kullanışlıdır.
      enum: {
        values: Object.values(PRIORITIES),
        message: "low, normal,high could be select",
      },
      default: "Normal",
    },
  },
  {
    collection: "todo",
    timestamps: true,
  }
);

todoSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    // ret.createdAt=re.createdAt.toLocaleString("tr-tr")
  },
});
const Todo = mongoose.model("Todo", todoSchema);
module.exports = { Todo };
