const mongoose = require('mongoose');
const {Schema} = mongoose;
//schema
const productSchema = new Schema({
    title: {type: String},
    description: {type: String, required: true},
    price: {type: Number, min:[1, 'Wrong price'], required: true},
    discountPercentage: {type: Number, min:0, max:99},
    rating: {type: Number, min:[1, 'Wrong Rating'], max:[10, 'Rating can be maximum 10']},
    stock: {type: Number},
    brand: {type: String},
    category: {type: String},
    thumbnali: {type: String},
    image: [String]
});

//models 
exports.Product = mongoose.model('Product', productSchema);
