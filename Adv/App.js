const { generateKey } = require("crypto");
const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port = 80;


//EXPRESS SPECIFIC CONFIG.
app.use('/static', express.static('static'));  // for serving static files
// app.use(express.urlencoded());
 app.use(express.urlencoded({extended: true}));   //inbuilt in express
// app.use(express.json());    //inbuilt in express

//PUG SPECIFIC CONFIG.
app.set('view engine', 'pug');  //setting up template engine as pug 
app.set('views', path.join(__dirname, 'templates'));  //setting up template directory

//ENDPOINTS
app.get('/', (req, res)=>{
    const cont  = 'Gym plan is 69$ per year only';
    const parameters = {'title': 'WebDev', 'content':cont};
    res.status(200).render('index.pug', parameters);
}); 

app.post('/', (req, res)=>{
    console.log(req.body);
    Name = req.body.Name;
    Gender = req.body.Gender;
    Age = req.body.Age;
    Profession = req.body.Profession;
    Workplace = req.body.Workplace;

    let ouputToWrite = `The name of the client is ${Name}, ${Age} years old, and gender is ${Gender}, with profession of ${Profession} and works at ${Workplace}`;
    fs.writeFileSync('output.txt', ouputToWrite);
    const parameters = {'message': 'Your form has been sent successfully'};
    res.status(200).render('index.pug', parameters);
});

// //fetch requests

// app.get('/demo', (req, res) => {
//     res.status(200).render('demo', { title: 'Hey Akhand.', message: 'Hello there! Welcome to web world.' })
//   })

// app.get("/", (req, res)=>{
//     res.send("This is my first express application with Mr.Harry with get request.");
// });

// app.post("/", (req, res)=>{
//     res.send("This is my first express application with Mr.Harry with post request.");
// });

// app.post("/about", (req, res)=>{
//     res.send("Hello ji, kaise ho saare???");
// });

// //status code

// app.get("/home", (req, res)=>{
//     res.status(400).send("This is the home page of webapp MarsCode.");
// });

// app.post("/this", (req, res)=>{
//     res.status(404).send("This page is not found.");
// });


//START THE SERVER

app.listen(port, ()=>{
    console.log(`The application has succesfully run over port number ${port}`);
}); 
