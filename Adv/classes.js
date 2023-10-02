// class User {
//     constructor(userName, email, password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}azx`;
//     }

//     changeUserName(){
//         return `${this.userName.toUpperCase()}`;
//     }
// }

// const userOne = new User('Martha', 'martha@dark.netlify', 123);

// console.log(userOne.encryptPassword());
// console.log(userOne.changeUserName());

//via function

function User(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;    
}

User.prototype.encryptPassword = function(){
    return `${this.password}azx`;
}

User.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`;
}

const userNew = new User('Franziska', 'frn@dark,netflix', 123);

console.log(userNew.encryptPassword());
console.log(userNew.changeUserName());
