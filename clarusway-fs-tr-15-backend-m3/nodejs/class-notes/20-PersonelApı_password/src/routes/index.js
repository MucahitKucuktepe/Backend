"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// /auth:
router.use("/auth", require("../routes/auth.router"));
// /token:
router.use("/tokens", require("../routes/token.router"));
// /personnels
router.use("/personnels", require("../routes/personnel.router"));
// /departments
router.use("/departments", require("../routes/department.router"));



module.exports = router;
