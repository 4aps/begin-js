//const anyObj = new Object();

const instaUser = {};

instaUser.id = 'avs131';
instaUser.name = 'Sia';
instaUser.isLoggedIn = false;

//console.log(instaUser);

const regularUser = {
    email: 'avs@vvs.in',
    "full name": {
        first_name: 'Akhand',
        middle_name: 'Pratap',
        last_name: 'Singh'
    }
}

//console.log(regularUser["full name"]);

//console.log(regularUser["full name"].first_name);

const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: 'c',
    4: 'd'
}

const obj3 = {obj1, obj2};

//console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);

//console.log(obj4);

const newObject = {...obj1, ...obj2};
//console.log(newObject);

//console.log(Object.keys(instaUser));
//console.log(Object.values(instaUser));
//console.log(Object.entries(instaUser));

//console.log(instaUser.hasOwnProperty('isLoggedIn'));


const course = {
    course_name: 'JS',
    courseInstructor: 'hcv',
    price: 1323
}

const  {courseInstructor: instructor} = course;

console.log(instructor);
