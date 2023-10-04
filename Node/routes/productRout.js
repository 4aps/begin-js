const expres = require('express');
const productController = require('../controller/product.js')

const router = expres.Router();

//MVC model-view-controller

router 
.post('/products', productController.createAllProducts)
.get('/products', productController.getAllProducts)
.get('/products/:id', productController.getOneProduct)
.put('/products/:id', productController.replceProduct)
.patch('/products/:id', productController.updateProduct)  
.delete('/products/:id', productController.deleteProduct)

exports.router = router;