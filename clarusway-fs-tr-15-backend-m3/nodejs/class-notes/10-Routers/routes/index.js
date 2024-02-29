"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();
const router= require('express').Router()


/* ------------------------------------------------------- */
//? "Router" is special app for URL control in ExpressJS.

/* express.Router() */


// router.get('/', (req, res) => res.send({ message: "Home Area" }))
// router.get('/about', (req, res) => res.send({ message: "About Area" }))
// router.get('/user/:id', (req, res) => res.send({ message: "User Area" }))

router.route('/')
    .get((req, res) => res.send({ message: "get" }))
    .post((req, res) => res.send({ message: "post" }))
    .put((req, res) => res.send({ message: "put" }))
    .delete((req, res) => res.send({ message: "delete" }))

    module.exports=router

