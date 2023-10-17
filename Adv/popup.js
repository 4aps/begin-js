
// ---alert or window.alert---
// alert("This is an adult websites");

// window.alert("This is an adult websites");

// --- prompt in JS---

// let name = prompt("What is your name?", "Guest");
// console.log(name);

// --- confirm in JS---

// let deletePost = confirm("Do you really wanna proceed to delete?");
// console.log(deletePost);
// if (deletePost) {
//     console.log("Your post has been deleted successfully.");
// }
// else{
//     console.log("Post deletion has been cancelled.");
// }

//--- Age ask for page access

const age = prompt("Enter your age.", "18");
if(age >= 18){
    alert("You are welcomed on this platform.");
    console.log("Welcome Guest!");
}
else{
    alert("You are restricted as you are a minor.")
    console.log("Access denied.");
}
