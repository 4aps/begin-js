class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password}mdd`;
    }

    set password(value){
        this._password = value.toUpperCase(); 
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value; 
    }
}

const UserOne = new user('Hannah', 'hanno@ai.co', 'bncj');
// console.log(UserOne.password);
// console.log(UserOne.email);
// console.log(UserOne);

// getter setter using define [Object.defineProperty]

function Customer(name, email){
    this._email = email;
    this._name = name;

    Object.defineProperty(this, 'name', {
        get: function(){
            return this._name.toUpperCase();
        },
        set: function(value){
            this._name = value;
        }
    })
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })
}

// const custOne = new Customer('Saurabh Dwivedi', 'lallantop@media.in');
// console.log(custOne.name);
// console.log(custOne.email);

// console.log(custOne);


//get snd set in objects

const Emp = {
    _email: 'hcv@physics.iit',
    _password: 'bcjdj',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}
const emp1 = Object.create(Emp);
console.log(emp1.email);

