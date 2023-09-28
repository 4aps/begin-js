const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (nums) => nums > 6);
// console.log(newNums);

// const anyNums = myNums.filter( (nums) =>{
//     return (nums > 6); // condition is in scope {} so 'return' is must 
// } )
// console.log(anyNums);

const books = [
    {
        BookName: 'Safar Mein Dhoop Toh Hogi',
        Genre: 'Poem',
        Author: 'Nida Fazli',
        Publish: 1960,
        Edition: 2011
    },
    {
        BookName: 'Sapiens',
        Genre: 'History',
        Author: 'Yuval Noah Harari',
        Publish: 2014,
        Edition: 2020
    },
    {
        BookName: 'Godan',
        Genre: 'Fiction',
        Author: 'Munshi Premchand',
        Publish: 1944,
        Edition: 2011
    },
    {
        BookName: 'The 5AM Club',
        Genre: 'Non-Fiction',
        Author: 'Robin Sharma',
        Publish: 2017,
        Edition: 2021
    },
    {
        BookName: 'Psychology of Money',
        Genre: 'Finacial Fiction',
        Author: 'Morgan Housel',
        Publish: 2018,
        Edition: 2023
    },
    {
        BookName: 'Rich Dad Poor Dad',
        Genre: 'Financial Fiction',
        Author: 'Robert Kiyosaki',
        Publish: 1997,
        Edition: 2011
    },
    {
        BookName: 'The Monk Who Sold His Ferrari',
        Genre: 'Biography',
        Author: 'Robin Sharma',
        Publish: 1997,
        Edition: 2011
    },
    {
        BookName: 'Atomic Habits',
        Genre: 'Autobiography',
        Author: 'James Clear',
        Publish: 2018,
        Edition: 2020
    },
    {
        BookName: 'Romeo and Juliet',
        Genre: 'Play',
        Author: 'William Shakespeare',
        Publish: 1595,
        Edition: ''
    },
    {
        BookName: 'Mountain Interval',
        Genre: 'Poem',
        Author: 'Robert Frost',
        Publish: 1916,
        Edition: 2012
    },
    {
        BookName: 'Rashmirathi',
        Genre: 'Poem',
        Author: 'Ramdhari Singh Dinkar',
        Publish: 1952,
        Edition: 2017
    }
]

//let userBooks = books.filter( (bk) => bk.Genre === 'Poem');

let userBooks = books.filter( (bk) =>{
    return bk.Genre === 'Biography' && bk.Author === 'Robin Sharma';
});

console.log(userBooks);