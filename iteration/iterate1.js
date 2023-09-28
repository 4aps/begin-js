// forof

//["", "", "", ...]
//[{}, {}, {}, ....]


// const arr = [1, 2, 3, 4, 5];
// for (const i of arr) {
//     console.log(i);
// }

//const str = 'Guten Abend!';
//for (const i of str) {
//    console.log(i);
//}

//object : not iterable using {forof}

const myObj = {
    Name: 'Akhand',
    Course: 'B.Tech',
    Branch: 'CSE',
    Year: 2,
    Semester: 'III'
}

//for (const [key, value] of myObj) {
//    console.log(key, ":-", value); // (error) not iterable
//}

for (const key in myObj) {
    console.log(`${key} : ${myObj[key]}`);
}

// Maps: not iterable using {forin}

const map = new Map();
map.set('IN', 'India');
map.set('UK', 'United Kingdom');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India'); //does not count in map as it pushes unique values

//console.log(map);

// for (const i of map) {
//     console.log(i[0]);  //key
//     console.log(i[1]);  //value
//     console.log(i); // returns key-value pair in array format i.e []
// }

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

// for (const key in map) {
//     console.log(`${key}`); // no error but not iterable as well
// }

