const fs = require('fs');
const model = require('../model/product');
const Product = model.Product;
const mongoose = require('mongoose');

exports.createAllProducts = (req, res)=>{

   const product = new Product(req.body);
   product.title = 'iPhoneXV';
   product.rating = 5;
   product.price = 99999;
   product.brand = 'Apple';
   product.save().then(savedDoc => {
      savedDoc === product; // true
      res.status(201).json(product);
    },(reason) => {
      console.error(reason); // Error!
    },);
    
 }
    

 exports.getAllProducts = async(req, res)=>{
   const products = await Product.find();
    res.json(products);
 }

 exports.getOneProduct = async(req, res)=>{
    const id = (req.params.id);
    const product = Product.findById(id);
    res.json(product);
 }

 exports.replaceProduct = async(req, res)=>{
    const id = (req.params.id);
    try{
      const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
      res.status(201).json(doc)
    }
    catch(err){
      res.status(404).json(err)
    }
 } 

 exports.updateProduct = async(req, res)=>{
   const id = (req.params.id);
   try{
     const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
     res.status(201).json(doc)
   }
   catch(err){
     res.status(404).json(err)
   }  
 }

 exports.deleteProduct = async(req, res)=>{
   const id = (req.params.id);
   try{
     const doc = await Product.findOneAndDelete({_id:id})
     res.status(201).json(doc)
   }
   catch(err){
     res.status(404).json(err)
   }
}

