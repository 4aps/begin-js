function sum(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operation(a, b ,op){
    return op(a, b);
}

let ans = operation(2, 5, divide);
console.log(ans)
