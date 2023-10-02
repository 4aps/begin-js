class User {
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`USERNAME is: ${this.userName}.`);
    }

    createId(){
        const Id = parseInt(Math.random() * 100 + 1);
        return `${Id}vXuZ03E1`;
    }

    static createNewId(){
        const Id = parseInt(Math.random() * 100 + 1);
        return `${Id}vXuZ03E1`;
    }
}

class Teacher extends User{
    constructor(userName, email, password){
        super(userName);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A course is added by ${this.userName}.`);
    }
}

// const userA = new Teacher('ChuChu', 'chuchu@kid.in', 762);
// userA.addCourse();
// userA.logMe();

// const userB = new User('Ramkishan');
// userB.logMe();

// console.log(userA instanceof Teacher); //true
// console.log(userA instanceof User); //true
// console.log(userB instanceof Teacher); //false
// console.log(userB instanceof User); //true

const userC = new User('Hiten');
console.log(userC.createId());

const newUser = new Teacher('PK Dean', 'pk@dean.math', 632);

console.log(newUser.createId());
newUser.logMe();

// console.log(userC.createNewId()); //error as createNewId is static
// console.log(newUser.createNewId()); //error as createNewId is static