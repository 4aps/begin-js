const expres = require('express');
const server = expres();
const mongoose = require('mongoose');

const productRouter = require('./routes/productRout')

//DB connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://MarsCode:A16t74aapsXzmlpMDBzaq01@cluster0.ri9zmzs.mongodb.net/Ecommerce');
    console.log('database started');
}


//body parser
server.use(expres.json());
server.use(expres.static('public'));
server.use(expres.static('default'));
server.use('/products', productRouter.router)


 

server.listen(8080, () => {
    console.log('server started..')
});

