//console.log("2" > 1); // true
//console.log("033" == 33); // true

let str1 = "Hello ";
let str2 = "Damane!!";
//console.log(str1 + str2);

//console.log("1" + "str1");
//console.log (typeof (1 + "HelloJi"));

//for <= or >= null considered as 0 

//console.log(null > 0); //false
//console.log(null == 0); //false
//console.log(null >= 0); //true
//console.log(null <= 0); //true

//console.log(undefined > 0); //false
//console.log(undefined == 0); //false
//console.log(undefined >= 0); //false
//console.log(undefined >= 0); //false

// first input act as preferred type from LHS

console.log("1" + "1"); //11
console.log("1" + 1); //11
console.log("1" + 2 + 3); //123
console.log(1 + 9 + "5"); //105
console.log(1 + 6 + "7" + 8 + 3); //7783

//strict comparison === (as it check datatype as well)

console.log("2" === 2); // false
console.log("2" === "2"); // true

//*********************** DATATYPES ***********************
console.log("*********************** DATATYPES ***********************");

//Primitive: String, Boolean, BigInt, Number, null, undefined, Symbol

//Reference: Array, Object, Function

const id = Symbol('786');
const newId = Symbol('786');

console.log(id == newId); //false

const carName = ['Buggati', 'Ferrri', 'Audi']; //Array

let student = {
    Name: "Akhand",
    Course: "B.Tech",
    Branch: "CSE",
    Contact: 36383 
}

let myFunction = function () {
    console.log("Hello Ji!");
}

myFunction();

console.log(carName);

console.log(student); 