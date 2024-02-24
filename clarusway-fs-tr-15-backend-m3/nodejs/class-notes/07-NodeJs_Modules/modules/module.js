'use strict'
console.log("this line modules")

//? single line function
// const testFunction =function(){
//     console.log("this is function")
// }

// module.exports=testFunction
module.exports=function(){
    console.log("this is function")
}

// module.exports.testFunctionA =function(){
//         console.log("this is function A")
//  }
//  module.exports.testFunctionB =function(){
//         console.log("this is function B")
//  }
//  module.exports.testFunctionC =function(){
//         console.log("this is function C")
//  }


 module.exports={
    testFunctionA :function(){
    console.log("this is function A")
},
testFunctionB :function(){
    console.log("this is function B")
},
testFunctionC :function(){
    console.log("this is function C")
},
pi: 3.14
 }
 //?array
//  module.exports=[
//     testFunctionA,
//     testFunctionB,
//     testFunctionC
//  ]
//?OBJE
// module.exports={
//     testFunctionA:testFunctionA,
//     testFunctionB:testFunctionB,
//     testFunctionC:testFunctionC

