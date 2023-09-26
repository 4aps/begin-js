const openVar = 12; //global declaration

//{is the scope} 

if (true){
    let openVar = 30;
    let a = 200;
    const b = 900;
    var c = 69;
    d = 99;
    //console.log("INNER:", openVar); //30
}

//console.log("OUTER", openVar); 

//console.log(a); // (error):a is not defined 
//console.log(b); // (error):b is not defined

//console.log(c); //69
//console.log(d); //99

//scopes in function

function one(){
    username = "Harry"

    function two(){
        const website = "flipkart"
        console.log(username);
    }
    //console.log(website); // (error): function two is not called yet

    two();
    //console.log(website); // (error): website is not defined in scope    
}
//one();

if(true){
    username = 'Rajamouli'
    if(username === 'Rajamouli'){
        const website = " youtuber";
        //console.log(username + website);
    }
    //console.log(website); // (error): out of scope
}
//console.log(username); // (error): out of scope

console.log(addOne(9)); // can be called 

function addOne(num){
    return num + 1;
}

//console.log(addTwo(19)); // cannot called before intialisation as it acts as expression

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(19));