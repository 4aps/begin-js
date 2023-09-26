function firstFun(){
    console.log('A');
    console.log('K');
    console.log('H');
    console.log('A');
    console.log('N');
    console.log('D');
}

//firstFun();

function addNum(num1, num2){
    console.log(num1 + num2);
}

//const result = addNum(23, 34);
//console.log("Result: ", result);


function addNum(num1, num2){
    let result = num1 + num2;
    console.log(typeof result); //number
    return result;
}


//addNum(12,32);


function loginMessage(username){
    if(username === undefined){
    console.log('Please enter a username!!');
        return;
    }
    return `${username} just logged in.`;
}

//console.log(loginMessage(''));



function loginMessage(username){
    if(!username){
    console.log('Please enter a username!!');
        return;
    }
    return `${username} just logged in.`;
}

//console.log(loginMessage('Abhishek'));

//console.log(loginMessage('')); // null string 

//console.log(loginMessage());



// if loop will run if any argument is passed even if it's null string 

function loginMessage(username = 'Arun'){
    if(!username){
    console.log('Please enter a username!!');
        return;
    }
    return `${username} just logged in.`;
}
console.log(loginMessage('Abhishek'));

console.log(loginMessage()); // chooses default parameter
 
console.log(loginMessage(''));