const myArray = [11, 24, 13, 49, 10, 28, 0];
//console.log("A", myArray);

const myArray2 = [1, 27, 2.90, 'k', 'Harry', true, '123'];
//console.log("B", myArray2);
console.log(myArray2[4]);

//console.log(myArray.sort());

//myArray.push(90)
//console.log(myArray);

//myArray.pop();
//console.log(myArray);

//console.log(myArray2.includes('false'));
//console.log(myArray.includes(0));

const newArr = new Array(1, 34, 22, 5, 67);
//console.log(newArr);

newArr.unshift(22);
console.log(newArr);

newArr.shift();
console.log(newArr);

console.log(newArr.indexOf(22));

//let anyVar = console.log(newArr.join());  //undefined
//console.log(typeof anyVar); // string
//console.log(typeof newArr.join())

//console.log(newArr);

const anyArr = new Array(10, 32, 45, 34, 65, 15, 86 , 24, 8, 12, 99);
//console.log("A", anyArr);

onsole.log("B", anyArr.slice(1,5));
//console.log("A", anyArr);

console.log("C", anyArr.splice(1, 5)); // mannipulate the original array [1, 5] get spliced
//console.log("A", anyArr);

console.log(anyArr.toLocaleString());
console.log("D", anyArr.reverse());

console.log(anyArr.entries());
console.log(anyArr.values());
