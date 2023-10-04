const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const index = fs.readFileSync('index.html', 'utf-8');
const productBox = data.products;

const expres = require('express');
const morgan = require('morgan');   

const server = expres();

server.use(expres.json());
// server.use(expres.urlencoded());

// server.use(morgan('dev'));
server.use(morgan('default'));


server.use(expres.static('public'));


// server.get('/', function(req, res){
    // res.send('<h1>Hello</h1>');
    // res.sendFile('/Users/akhan/Desktop/node-app/index.html');
    // res.json(productBox);
    // res.sendStatus(404);
// })

// server.use((req, res, next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'))
//     next();
// });

const auth = ((req, res, next) => {
    // console.log(req.query);
    // if (req.body.password == '1234') {
         next();
    // }
    // else{
    //     res.sendStatus(401);
    // }
});

// server.use(auth);   

//API -- ENDPOINT - - ROUTE

//----** C R U D **----
//Create POST/products
server.post('/products',(req, res)=>{
    console.log(req.body);
    productBox.push(req.body);
    res.status(201).json(req.body);
 })

// READ API- GET/ products
server.get('/products',(req, res)=>{
        res.json(productBox);
     })
    
//READ API- GET/ products/:id
 server.get('/products/:id',(req, res)=>{
    const id = +(req.params.id);
    const product = productBox.find(p => p.id === id);
    res.json(product);
 })


 //Update API- PUT/ products/:id
 server.put('/products/:id',(req, res)=>{
    const id = +(req.params.id);
    const productIndex = productBox.findIndex(p => p.id === id);
    productBox.splice(productIndex, 1, {...req.body, id: id})
    res.status(201).json({product: 'updated'});
 })

 
 //Update API- PATCH/ products/:id
 server.patch('/products/:id',(req, res)=>{
    const id = +(req.params.id);
    const productIndex = productBox.findIndex(p => p.id === id);
    const product = productBox[productIndex];
    productBox.splice(productIndex, 1, {...product,...req.body})
    res.status(201).json({product: 'patch updated'});
 })  

  //Delete API- DELETE/ products/:id
  server.delete('/products/:id',(req, res)=>{
    const id = +(req.params.id);
    const productIndex = productBox.findIndex(p => p.id === id);
    const product = productBox[productIndex];
    productBox.splice(productIndex, 1)
    // res.status(201).json({product: 'id:1 deleted'});
    res.status(201).json(product);

})
 


// server.get('/product/:id',auth, (req, res)=>{
//     console.log(req.params);
//     res.json({type:'GET'}) 
//  })

// server.get('/',auth, (req, res)=>{
//    res.json({type:'GET1'}) 
// })
// server.get('/', (req, res)=>{
//     res.json({type:'GET2'}) 
//  })


server.post('/',auth, (req, res)=>{
    res.json({type:'POST'}) 
 })


//  server.put('/', (req, res)=>{
//     res.json({type:'PUT'}) 
//  })
//  server.patch('/', (req, res)=>{
//     res.json({type:'PATCH'}) 
//  })
//  server.delete('/', (req, res)=>{
//     res.json({type:'DELETE'}) 
//  })

 

server.listen(8080, () => {
    console.log('server started..')
});

