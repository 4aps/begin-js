const user = {
    username: 'Harry',
    isSignedUp: true,
    loginCount: 13,

    greet: function(){
                console.log(`Welcome Mr. ${this.username}`);
                // console.log(this); //return fn and undefined
                return this; //return fn
            }
}

// console.log(user.username); //Harry
// console.log(this); //{}
// console.log(user.greet());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greet = function(){
        console.log(`Welcome Mr/Ms ${username}.`);
    }
    // return this;
}

const userOne = new User('Adam', 30, true);
const userTwo = new User('Eve', 29, false);
// console.log(userOne);
// console.log(userTwo.constructor);

//call and this---

function setUserName(username){
    this.username = username;
    console.log('called');
}

function createUser(username, email, password){
    // setUserName(username); // called but out from stack so result not shown
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const userNew = new createUser('Jonas Kahnwald', 'jonas@dark.netflix', 123);
console.log(userNew);