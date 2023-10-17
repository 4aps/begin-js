// for loop

// let l = 5;
// for(i = 0; i < l; i++){
//     console.log(i);
// }

//---for in  JS---
// let employee = ["Shivam", "Raja", "Abhishek", "Pooja", "Karan"];
// for (let index = 0; index < employee.length; index++) {
//     const element = employee[index];
//     console.log(element);
// }

// ---Modern JS---
//-----type-1-----/././.{   foreach   }
    // let employee = ["Shivam", "Raja", "Abhishek", "Pooja", "Karan"];
    // employee.forEach(function nameGreet(element){
    //     console.log("Hello Ji, "+ element +" Welcome in world of programming of modern JS." );
    // })

//-----type-2-----/././.{    forof   }

    // let employee = ["Shivam", "Raja", "Abhishek", "Pooja", "Karan"];
    // for (const iterator of employee) {
    //     console.log("Hello Ji, "+ iterator +" Welcome in world of programming of modern JS." );
        
    // }


// let objCar = {
//     "car name": "Vovlo",
//     "model": "EX60",
//     "car price": "ninty lacs",
// }

//---obj iteration {   for in   }

// for (const key in objCar) {
//         console.log(`The ${key} is ${objCar[key]}.`);
//     }

// --- while loop in JS---

let i = 0;
while(i < 3){
    console.log(`${i} is less than 3`);
    i++;
}

// --- do while loop in JS---

let k = 34;
do{
    console.log(`${k} is less than 3 and statement may be wrong as we wre in do while loop`);
    k++;
}while(k<3);
