const marvel_heroes = ['Thor', 'Ironman', 'Spiderman', 'Loki'];
const dc_heroes = ['Superman', 'Flash', 'Batman'];

//marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes);

//console.log(marvel_heroes[4][2]);
//console.log(marvel_heroes.pop());


// concat return new array

const favHeroes = marvel_heroes.concat(dc_heroes);
//console.log(favHeroes); 

const indHeroes = ['Shaktiman', 'Krrish', 'Baalveer', 'Chhota Bheem', 'RaOne'];

const allHeroes = [...marvel_heroes, ...dc_heroes, ...indHeroes];
//console.log(allHeroes);

const newArray = [1, 4, 6, [2, 3, 7], 8, 9, [21, 33, 11, [15, 75], 21]];
const real_array = newArray.flat(Infinity);

//console.log(real_array);

//console.log(Array.isArray("AndrewGarfield")); //false
//console.log(Array.from("AndrewGarfield")); // returns array
//console.log(Array.from({name: "AndrewGarfield"})); // returns null arrray

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3, score2));