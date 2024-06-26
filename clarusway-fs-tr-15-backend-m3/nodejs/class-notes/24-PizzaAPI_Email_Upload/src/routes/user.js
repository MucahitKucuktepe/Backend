"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const user = require('../controllers/user')
const permissions = require('../middlewares/permissions')

// URL: /users

router.route('/')
    .get( user.list) // permissions.isAdmin,
    .post(user.create) // AllowAny

router.route('/:id')
    .get(permissions.isLogin, user.read)
    .put(permissions.isLogin, user.update)
    .patch(permissions.isLogin, user.update)
    .delete( user.delete) // permissions.isAdmin

/* ------------------------------------------------------- */
module.exports = router