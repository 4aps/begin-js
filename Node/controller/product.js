const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const index = fs.readFileSync('index.html', 'utf-8');
const productBox = data.products;

exports.createAllProducts = (req, res)=>{
    console.log(req.body);
    productBox.push(req.body);
    res.status(201).json(req.body);
 }

 exports.getAllProducts = (req, res)=>{
    res.json(productBox);
 }

 exports.getOneProduct = (req, res)=>{
    const id = +(req.params.id);
    const product = productBox.find(p => p.id === id);
    res.json(product);
 }

 exports.replceProduct = (req, res)=>{
    const id = +(req.params.id);
    const productIndex = productBox.findIndex(p => p.id === id);
    productBox.splice(productIndex, 1, {...req.body, id: id})
    res.status(201).json({product: 'updated'});
 } 

 exports.updateProduct = (req, res)=>{
    const id = +(req.params.id);
    const productIndex = productBox.findIndex(p => p.id === id);
    const product = productBox[productIndex];
    productBox.splice(productIndex, 1, {...product,...req.body})
    res.status(201).json({product: 'patch updated'});
 }

 exports.deleteProduct = (req, res)=>{
    const id = +(req.params.id);
    const productIndex = productBox.findIndex(p => p.id === id);
    const product = productBox[productIndex];
    productBox.splice(productIndex, 1)
    res.status(201).json({product: 'id:1 deleted'});
}

