"use strict";
console.log("this line from modules");

// module.exports.testFunction = function () {
//   console.log("this is function");
// };

// module.exports = testFunction;

// module.exports = [testFunctionA, testFunctionB, testFunctionC];
// module.exports = {
//   testFunctionA: testFunctionA,
//   testFunctionB: testFunctionB,
//   testFunctionC: testFunctionC,
// };
module.exports = {
  testFunctionA: function () {
    console.log("this is function A");
  },
  testFunctionB: function () {
    console.log("this is function B");
  },
  testFunctionC: function () {
    console.log("this is function C");
  },
};
