 // setTimeout(function(){
    //     console.log("Welcome! Hello Ji hello...")
    // }, 2000)

    // const greet = function(){
    //     console.log("Welcome to Marscode! Hello Ji hello...")
    // }
    // setTimeout(greet, 3000);

    // const changeText = function(){
    //     document.querySelector('h1').
    //     innerHTML = "Willkommen bei MarsCode..!";
    // }
    // const setChange = setTimeout(changeText, 3000);

    // document.querySelector('#stop').
    // addEventListener('click', function(){
    //     clearTimeout(setChange);
    //     console.log('Stopped')
    // })

    // const print = function(str){
    //    console.log(str, Date.now()); 
    // }
    
    // const setTime = setInterval(print, 1000, 'Hello Ji!');
    // // clearInterval(setTime)
    
    // function myStopFunction(args) {
    //     clearInterval(args);

    // }
    // myStopFunction(setTime);

    // let intervalID;
    // function change(){
    //     if (!intervalID) {
    //         console.log(intervalID)
    //     intervalID = setInterval(changeText, 1000);
    // }
    // }

    // function changeText(){
    //     console.log(Date.now(), 'Hello Ji, toh kaise hain aap log...!');
    // }

    // function stopText() {
    //     clearInterval(intervalID);
    //     // release our intervalID from the variable
    //     intervalID = null;
    // }

    // document.getElementById("start").addEventListener("click", change);
    // document.getElementById("stop").addEventListener("click", stopText);


///variable to store our intervalID

let newIntervId;

function changeColor() {
// check if an interval has already been set up
if (!newIntervId) {
    newIntervId = setInterval(flashText, 1000);
}
}

function flashText() {
     const oElem = document.getElementById("my_box");
    oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
    clearInterval(newIntervId);
    newIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);

