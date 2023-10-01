function multiplyBy5(num){
    return num * 5;
}

// multiplyBy5.power = 2;

// console.log(multiplyBy5(5)); //25
// console.log(multiplyBy5.power); //2
// console.log(multiplyBy5.prototype); //{}

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Price of ${this.username} is ${this.score}.`);
}

const tea = new createUser('tea', 25);
const coffee = new createUser('coffee', 250);

// tea.printMe();
// coffee.printMe();

let myHeroes = ['Thor', 'Ironman'];

let heroPower = {
    Thor: 'Hammer',
    Ironman: 'Intelligence',

    getIronmanPower: function(){
        console.log(`Ironman power is ${this.Ironman}`);
    }
}

Object.prototype.test = function(){
    console.log(`test() method is present in all objects.`);
}

// heroPower.test();
// myHeroes.test();

Array.prototype.testAgain = function(){
    console.log(`testAgain() method is present in only Array prototype.`)
}

// myHeroes.testAgain();
// heroPower.testAgain(); //error as heroPower is an object(Parent Prototype)

const User = {
    name: 'Golu',
    email: 'golu@molu.in'
}

const Teacher = {
    makeVideo: true,
    teacherName: 'David Marc'
}

const TeachSupport = {
    isAvailable: false,
    numOfEmp: 3 
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachSupport
}
// console.log(TASupport.isAvailable); //false
// console.log(TASupport.numOfEmp); //3



// Teacher.__proto__ = User;
// console.log(Teacher.name); //Golu


//modern syntax:

// Object.setPrototypeOf(TeachSupport, Teacher); 
// console.log(TeachSupport.teacherName); //David Marc



//trueLength function creation using Prototype------

let userName = 'MarsCode     ';

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`)
}

userName.trueLength();
"HarryPotter".trueLength();
'Javascript    '.trueLength();