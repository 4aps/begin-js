const value = 3084;
//console.log(value);

const balance = new Number(5000);
console.log(balance);

//console.log(balance.toFixed(2));
//console.log(balance.toString());

const newNum = 844.7490;
console.log(newNum.toPrecision(3));
console.log(newNum.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

//******************* MATHS ********************
console.log('******************* MATHS ********************');

//console.log(Math.abs(-737));
//console.log(Math.round(634.47));
//console.log(Math.max(100, 900, 89823));
//console.log(Math.min(100, 900, 89823));

//console.log(Math.ceil(12.11)); //just upper int
//console.log(Math.floor(62.93)); //just lower int
//console.log(Math.sqrt(100));  
//console.log(Math.pow(6, 4)); // 6 to the power 4

const min = 10;
const max = 99;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);