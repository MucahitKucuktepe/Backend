'use strict'
console.log('this line from modules')

const testFunction=function(){
    console.log('this is function')
}

module.exports=testFunction

const testFunctionA=function(){
    console.log('this is function A')
}
const testFunctionB=function(){
    console.log('this is function B')
}
const testFunctionC=function(){
    console.log('this is function C')
}

module.exports=[testFunctionA,testFunctionB,testFunctionC]
