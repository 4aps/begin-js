let num = "93";

let strNum = Number(num);
//console.log(strNum);

//console.log(typeof strNum);
//console.log(typeof num);

let num1 = "83mck";

let strNum1 = Number(num1);
//console.log(typeof num1);
//console.log(typeof strNum1);

//console.log(strNum1);

// "93" => 93 (string to Num)
// "23and" => NaN (type always shows Num* but actually it's NaN)
// true => 1 & false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1;

let newIsLoggedIn = Boolean(isLoggedIn);
//console.log(newIsLoggedIn);

//to Boolean
// 1 => true and 0 => false
// "" => false and "xyz" => true

let anyNum;

let stringNumber = String(anyNum);
//console.log(typeof stringNumber); 
//console.log(stringNumber); 

// to String
// null => null (conversion typeof shows as string for *)
// undefined =>undefined
// 23.32 = string

//**************** Operations ******************//
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**4);
console.log(12%8);
*/

let value = 82;
let negValue = -value;
//console.log(negValue);

let str1 = "Hello";
let str2 = " Papparaazi!";
//console.log(str1 + str2);

//first input is considered as preferred type form LHS:

console.log("1" + "1"); // 11
console.log("1" + 1);  // 11
console.log("1" + 1 + 3); // 113
console.log(1 + 5 + "7"); // 67
console.log(1 + 9 + "5" + 7 + 2); // 10572