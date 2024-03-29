"use strict";

/* -------------------------------------------------------
    OBJECTS
------------------------------------------------------- */
// const exampleObject = {
//   propertyName: "value",
//   methodName: function () {
//     return "this is a method";
//   },
//   methodAlternative() {
//     return "this is a method";
//   },
// };
// console.log(exampleObject.propertyName)
// console.log(exampleObject.methodName())
/* ------------------------------------------------------- *

const Car = {
  brand: "Ford",
  model: "Mustang",
  year: "1967",
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color1: "white",
    color2: "red",
    enginSize: 4900,
  },
  startEngine: function (param1) {
    console.log(param1)
    return "Engine runned";
  },
};
console.log(Car.brand);
console.log(Car.colors);
console.log(Car.colors[0])
console.log(Car.details)
console.log(Car.details.color1)
console.log(Car.startEngine('value'))
console.log(Car['colors'][0])
console.log(Car['startEngine'](0))
/* ------------------------------------------------------- *
const Car = {
  brand: "Ford",
  model: "Mustang",
  year: "1967",
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color1: "white",
    color2: "red",
    enginSize: 4900,
  },
  startEngine: function (param1) {
    console.log(param1);
    return "Engine runned";
  },
  getDetails: function () {
    // return this.brand + ' ' +this.model + ' ' +this.year
    return this.startEngine("selam");
  },
  arrowMethod: () => {
    //*Arrow function globalScoptur (Not working this keyword is here)
    return this;
  },
};

console.log(Car.arrowMethod());

/* ------------------------------------------------------- *
//? ARRAY ESTRUCTURING

const testArray = ['value0', 'value1', 'value2', 'value3', 'value4']
// const var0=testArray[0]
// const var1=testArray[1]
// const var2=testArray[2]
// const var9=testArray.slice(3,5)
// console.log(var0, var1,var2,var9)
//? sıralama önemli
//? Rest Operator (Toplayıcı) (Eşittirin sol tarafında) (En sonda olmak zorunda.)
const [var0,var1,var2, ...var9]=testArray
console.log(var0, var1,var2,var9)
console.log("merhaba")
console.log("merhaba")
console.log("first")

// const newArr=['value5', 'value6'] + testArray
const newArr=[...testArray, 'value5', 'value6']
console.log(newArr)

/* ------------------------------------------------------- *
//?OBJECT DESTRUCTURING
const Car = {

  brand: 'Ford',
  model: 'Mustang',
  year: 1967,
  isAutoGear: true,
  colors: ['white', 'red'],
  details: {
      color1: 'white',
      color2: 'red',
      engineSize: 4900
  },
  startEngine: function() {
      return 'Engine Runned.'
  }
}

//? REST OPERATOR (KEY İSİMLERİ ÖNEMLİ)
const {year, model:newName, brand, ...others}=Car
console.log(year, newName, brand, others)

//?SPREAD OPERATORU
const newObj={
  ...Car,
  newKey:'new-value'
}
console.log(newObj)
//? Object to JSON
const json =JSON.stringify(Car)
console.log(typeof json, json)
const obj=JSON.parse(json)
console.log(typeof obj, obj)


//! OBJECT TO ARRAY
const arrKey=Object.keys(Car)
console.log(arrKey)
const arrValue=Object.values(Car)
console.log(arrValue)
//? Tamamını taşıma yöntemi
const arrEnt=Object.entries(Car)
console.log(arrEnt)

/* ------------------------------------------------------- */
//? CONSTRUCTORS
// const constructorFunction=function(){
//   this.property='value'
// }
/* ------------------------------------------------------- */
//? "NEW" KEYWORD
const carConstructor = function (brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.startEngine = function () {
    return ("Engine runned");
  };
};
const newCar= new carConstructor('Ford','Mustang',1967)
console.log(typeof newCar,newCar)
console.log(newCar.brand)
console.log(newCar.startEngine())

/* ------------------------------------------------------- */
