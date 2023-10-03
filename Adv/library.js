// const add = (a, b) => {
//     return a + b;
// }

// const diff = (a, b) =>{
//     return a - b;
// }

// export {add, diff}


function sum(a, b){
    return a + b;
}
exports.add = sum;

//OR
  
exports.diff = function diff(a, b){
    return a -b;
}



