const myArray = [1, 2, 3, 4, 5];

// const totalSum = myArray.reduce( 
//     function (accumulator, currentValue) {
//         return accumulator + currentValue;
//     }, 0);

// console.log(totalSum);

// const newTotal = myArray.reduce( 
//     ((accumulator, currentValue) => 
//     accumulator + currentValue), 0
// )

// console.log(newTotal);

const courses = [
    {
        Course: 'JS course',
        Price: 999
    },
    {
        Course: 'Java DSA course',
        Price: 2999
    },
    {
        Course: 'Mobile dev course',
        Price: 5999
    },
    {
        Course: 'Python course',
        Price: 1299
    },
    {
        Course: 'Data Scientist course',
        Price: 10299
    }
];

const priceToPay = courses.reduce( 
    (acc, item) => (acc + item.Price), 0);

console.log(priceToPay);