//single argument support 

function calculateCartPrice(cart1){
    return cart1;
}

//console.log(calculateCartPrice(200, 500, 100, 500)); // 200

//mutiple arguments support

function calculateCartPrice1(...cart1){
    return cart1;
}

//console.log(calculateCartPrice1(200, 400, 809, 2933))


function calculateCartPrice2(val1, val2, ...cart1){
    console.log(val1, val2); //200 2900
    return cart1;
}

//console.log(calculateCartPrice2(200, 2900, 230, 489, 800, 645, 2000)); 

const user = {
    username: "Che Guevara",
    balance: 2960
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the respected amount is ${anyObject.balance}.`);
}
//handleObject(user);

// handleObject({
//     username: "Abhimanyu Singh",
//     balance: 150
// })

const newArray = [200, 300, 400, 500, 100, 201, 101];

function handleArray(anyArray){
    console.log("A:", anyArray);
    console.log("A[5] is", anyArray[5]);
}

//handleArray(newArray);
handleArray([123, 343, 43, 341, 67, 203, 20, 99]);