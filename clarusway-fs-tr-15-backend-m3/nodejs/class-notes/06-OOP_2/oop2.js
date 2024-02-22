"use strict";

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- *
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.
//* Class Declaration:
// class PascalCaseClassName {...}
//* Class Expression:
const PascalCaseClassName = class {
  undefinedProperty; // only definition
  propertyName = "value"; // attribute, field
  //? "new Class ile obje oluştururken parametre göndermek için "constructor" isminde birmethod kullanırız
  constructor(param1, param2 = "default-value") {
    this.param1 = param1;
    this.param2 = param2;
  }
methodName1(){
    return this
}
};

//? INSTANCE =bİR CLASS'TAN TÜRETİELN OBJEDİR
const PascalCaseInstanceName=new PascalCaseClassName (0, 1)
console.log(PascalCaseInstanceName)
console.log(PascalCaseInstanceName.param1)
console.log(PascalCaseInstanceName.param2)
console.log(PascalCaseInstanceName.methodName1)

/* ------------------------------------------------------- *
class Car {
    isRunning =false
    constructor (brand,model,year){
        this.brand=brand
        this.model=model
        this.year=year
    }
    runEngine(){
        this.isRunning=true
        console.log('Engin runned')
        return this.isRunning
    }
}
const Ford = new Car ('Ford', 'Mustang',1967)
console.log(Ford)
Ford.runEngine()
/* ------------------------------------------------------- */
//*INHERITANCE
class Car {
    isRunning =false
    constructor (brand,model,year){
        this.brand=brand
        this.model=model
        this.year=year
    }
    runEngine(){
        this.isRunning=true
        console.log('Engin runned')
        return this.isRunning
    }
}
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
