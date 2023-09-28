const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = numArr.map( (nums) => {return nums + 10});
// console.log(newNums);

//chaining

const anyNums = numArr.map( 
    (nums) => nums*10).map(
        (nums) => nums + 1).filter(
            (nums) => {return nums > 44}
);

console.log(anyNums);