"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
const passwordEncrypt = require("../helpers/passwordEncrypt");
//USER MODEL
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      // validate: [
      //   (password) =>
      //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password),
      //   "Password type is not correct.",
      // ],
      // set: passwordEncrypt,
      set: (password) => {
        if (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
        ) {
          return passwordEncrypt(password);
        } else {
          // res.errorStatusCode = 403;
          // throw new Error("Password type is not correct.");
          return "wrong";
        }
      },
      validate: (password) => password != "wrong",
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Email type is not correct.",
      ],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

// Model:
module.exports = mongoose.model("User", UserSchema);
