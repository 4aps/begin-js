const user = {
    username: "Torak",
    balance: 299,

    welcomeMessage: function(){
        //console.log(`${this.username}, welcome to this website.`);
        //console.log(this);
    }
}

//user.welcomeMessage();
//user.username = 'JF Kennedy';
//user.welcomeMessage();

console.log("************************************");

//console.log(this); //{}

//try this in functions

function pm(){
    let username = 'JL Nehru'
    console.log(this.username); //undefined
}
//pm();

const anyFun = function cm(){
    let username = 'Mayavati'
    console.log(this.username); //undefined 
} 
//anyFun();

const anyFunction = () =>{
    let username = 'Ravish Kumar'
    console.log(this); //{}
} 
//anyFunction();

// const addition = (num1, num2) => {
//     return num1 + num2;
// }
//console.log(addition(16, 7));

const diff = (num1, num2) => (num1 - num2);
//console.log(diff(16, 7));

const hero = () => ({username: 'Tony Stark'});
console.log(hero());

//Immediately invoked function

(function abc(){
    console.log('Hello');
})();

((name) =>{
    console.log(`Hello, ${name}`);
})('Akhand');