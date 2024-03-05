"use strict";

console.log("hello fs 15");
require("./modules/index");

//? single function call

// const testFunction = require("./modules/index");
// testFunction();

//? Multi Function

// const [test1, test2, test3] = require("./modules/index");

// test1();
// test2()
// test3()

const {testFunctionA,testFunctionB:test2,testFunctionC}=require('./modules/index')
testFunctionA()
test2()