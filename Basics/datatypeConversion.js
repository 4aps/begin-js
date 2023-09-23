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
console.log(typeof stringNumber); 
console.log(stringNumber); 

// to String
// null => null (conversion typeof shows as string for *)
// undefined =>undefined
// 23.32 = string
