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
/* ------------------------------------------------------- *
//*INHERITANCE
class Vehicle {
    vehicleIsActive=false
    constructor (vehicleType){
        this.vehicleType=vehicleType
    }
}
class Car extends Vehicle {
    
    isRunning =false
    constructor (brand,model,year,vehicleType='Car'){
        super(vehicleType)
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
/* ------------------------------------------------------- */
//?POLYMOPHIN

//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? Overload: Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)
class Vehicle {
    vehicleIsActive=false
    constructor (vehicleType){
        this.vehicleType=vehicleType
    }
    getDetails(){
        console.log('Vehicle.getDetail runned.')
        return this.vehicleType
    }
}
class Car extends Vehicle {
    
    isRunning =false
    constructor (brand,model,year,vehicleType='Car'){
        super(vehicleType)
        this.brand=brand
        this.model=model
        this.year=year
    }
    runEngine(){
        this.isRunning=true
        console.log('Engin runned')
        return this.isRunning
    }
    getDetails(){
        console.log('Car.getDetail runned.')
        return this
    }
}
const Ford = new Car ('Ford', 'Mustang',1967)
console.log(Ford.getDetails())

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
