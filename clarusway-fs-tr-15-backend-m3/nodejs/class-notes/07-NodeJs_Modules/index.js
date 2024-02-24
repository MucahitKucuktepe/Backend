'use strict'
console.log("hello FS15")
require("./modules/module")
//* js uzantıya gerek yok
require("./modules")

//? single function call
const testSingleFunction=require('./modules/module')
// testSingleFunction()


//?multı function
// const [test1,test2,test3]=require('./modules/module')
const { testFunctionA, testFunctionB, testFunctionC,pi}=require('./modules/module')
testFunctionA()
testFunctionB()
testFunctionC()
console.log(pi)
