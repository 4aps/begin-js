// console.log(Math.PI);

// Math.PI = 5;
// console.log(Math.PI); // not change

const descrip = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descrip);

const item = {
    Name: 'Masala Chai',
    Price: 290,
    isAvailable: true,
    takeOrder: function(){
        console.log('getting ready...')
    }
}

// console.log(item); 
// console.log(Object.getOwnPropertyDescriptor(item, 'Price'));

// for (const [key, value] of Object.entries(item)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`);    
//     }
// }

// Object.defineProperty(item, 'Name', { //only* Name iteratiblility stops from Object:item
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(item, 'Name'));

// for (const [key, value] of Object.entries(item)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`);    
//     }
// }

Object.defineProperties(item, {
    Name:{ //Name iteratiblility stops
        writable: false,
        enumerable: false,
        configurable: false       
    },
    Price:{ //Price iteratiblility stops
        writable: false,
        enumerable: false,
        configurable: false
    },
    isAvailable:{ //isAvailable iteratiblility stays
        writable: false,
        enumerable: true, //*
        configurable: false        
    }
})

for (const [key, value] of Object.entries(item)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);    
    }
}