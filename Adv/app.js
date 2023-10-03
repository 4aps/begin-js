const { application, json } = require('express');
const http = require('http');

const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const index = fs.readFileSync('index.html', 'utf-8');
const productBox = data.products;

const server = http.createServer((req, res) =>{
    console.log('server started');
    console.log(req.url, req.method);

    if(req.url.startsWith('/product')){
        const id = req.url.split('/')[2];
        const product = productBox.find(p=>p.id===(+id));
        console.log(product);
        res.setHeader('Content-Type', 'text/html');
        const indexNew = index.replace('**title**', product.title)
        .replace('**url**', product.thumbnail)
        .replace('**price**', product.price)
        .replace('**rating**', product.rating);
        res.end(indexNew);   
        return;        
    }
 
    switch(req.url){
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));           
            break;     
        default:
            res.send(404);
            res.end();    
            // res.status(404).send('Not found');
    }
    

    // res.end(JSON.stringify(data));
})

server.listen(8080);
