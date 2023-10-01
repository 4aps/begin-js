// const promiseOne =  new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async Task is completed.');
//         resolve();
//     })
// }, 1000);
// promiseOne.then(function(){
//     console.log('Promise consumed...')
// })


// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('Async task 2 is completed.');
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log('Promise 2 is consumed...')
// })

// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: 'Ishan', email: 'ishan@example.com'});
//     }, 1000);
// })

// promiseTwo.then(function(user){
//     console.log(user);
// });

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({id : 282, username: 'Alphino'});
//         }
//         else{
//             reject('ERROR: Something went wrong!!');
//         }
//     }, 1000);
// })

// promiseFour
// .then(function(user){
//     // console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log('The promise is either resolved or rejected.');
// })

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({id : 123, username: 'Javascript'});
//         }
//         else{
//             reject('ERROR: JS went wrong!!');
//         }
//     }, 1000);
// })

//------- can't handle error------

// async function consumePromiseFive(){
//     const response = await promiseFive;
//     console.log(response);
// }
// consumePromiseFive();



//---- to handle error-------

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();

// async function getGitUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/4aps');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error", error);
//     }
// }
// getGitUsers();


fetch('https://api.github.com/users/hiteshchoudhary').then
(function (response){
    return response.json();
}).then((data) => {
    console.log(data)
}).catch((error) => console.log('Erroe encountered...', error));
