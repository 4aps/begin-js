let strName = "Keshav";
let carName = "Bugatti Veyron";

//This is how string must be called----

console.log(`The boy ${strName} has the amazing car whose name is ${carName}`);

//console.log(strName.charAt(4));
//console.log(strName.indexOf('h'));
//console.log(strName.concat(' ki gaddi => ', carName));

const mood = 'Happy! ';

//console.log(`I feel ${mood.repeat(3)}`);

let theme = 'Happy Ending!';
console.log(theme.includes('ppy'));

console.log(theme.replace('Ending', 'Coding'));
console.log(theme.search('!'));

const str = 'The quick green grasshopper jumps over the lazy bitch.';

//console.log(str.slice(34));

//console.log(str.slice(16, 27));

//console.log(str.slice(-6, -1));

//console.log(str.slice(-26, -15));

//console.log(theme.substring(6, 9));

const newString = 'Welcome to the coding world, Mr. Ironman';

const words = newString.split(' ');
console.log(words[5]);

const chars = newString.split('');
console.log(chars[8]);

const strCopy = newString.split();
//console.log(strCopy);

const greeting = '   Hello world!   ';
//console.log(greeting);

console.log(greeting.trim());

const p = 'Hi there, this is MarsCode and I am learning javascript and this tutorial consist string methods.';

console.log(p.replaceAll('this', 'THIS'));

//console.log(p.toLowerCase());
//console.log(p.toUpperCase());

