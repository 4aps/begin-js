// objects literals 

const id_as_sym = Symbol('key1');

const JS_User = {
    [id_as_sym]: 12652,
    Name: "Harry",
    "Full Name": "Harry Potter",
    Age: 25,
    Location: "Bengaluru",
    Email: "abc@mlp.com",
    isLoggedIn: false,
    lastLoggedIn: ['Tuesday', 'Friday']
}

//console.log(JS_User.Age);

//console.log(JS_User['Age']);

//console.log(JS_User['Full Name']);

//console.log(JS_User[id_as_sym]);

JS_User.Location ='Noida';
//console.log(JS_User);

//Object.freeze(JS_User);

JS_User.Email = "harry@hogwarts.ln";
//console.log(JS_User);

JS_User.greeting = function(){
    console.log("Hello JS user!");
}

//console.log(JS_User.greeting());  

JS_User.greeting2 = function(){
    console.log(`Hello JS user, ${this.Name}!`);
}

console.log(JS_User.greeting2());