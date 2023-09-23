let myDate = new Date();
console.log(myDate);

console.log(typeof myDate); //object

console.log(myDate.toDateString()); //Sat Sep 23 2023
//console.log(myDate.toLocaleDateString()); //9/23/2023
//console.log(myDate.toISOString());  //2023-09-23T16:04:19.090Z
console.log(myDate.toLocaleString()); //9/23/2023, 4:04:19 PM
//console.log(myDate.toString()); 
//console.log(myDate.toTimeString());

//let myCreatedDate = new Date(2024, 0, 6);
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2024, 0, 6, 7, 30);
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2012-03-08");
//console.log(myCreatedDate.toLocaleString());

const currentTime = Date.now();
console.log(currentTime);
console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
