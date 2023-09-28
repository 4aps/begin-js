const langC = ['Java', 'C++', 'Python', 'Javascript', 'Ruby'];

// langC.forEach(function (lang){
//     console.log(lang);
//  })

// langC.forEach( (lang) => {
//     console.log(lang);
//  })

// function printMe(item){
//     console.log(item);
// }

// langC.forEach(printMe);

// langC.forEach( (lang, index, array) => {
//     console.log(lang, index, array);
//  })

const myLang = [
    {
        langName: 'Java',
        langFileExt: '.java'
    },
    {
        langName: 'Javascript',
        langFileExt: '.js'
    },
    {
        langName: 'C++',
        langFileExt: '.cpp'
    },
    {
        langName: 'Python',
        langFileExt: '.py'
    }
]

// myLang.forEach((lang)=>{
//     console.log(`${lang.langName} : [${lang.langFileExt}]`);
// })



// const value = langC.forEach((lang) => {
//     //console.log(lang);
//     return lang;
// })
// console.log(value); // undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const extNums = [];

myNums.forEach( (nums) => {
    if(nums > 6){
        extNums.push(nums)
    }
})
console.log(extNums);