require('dotenv').config();
const mongoose = require('mongoose');
const expres = require('express');
const server = expres();
const {schema} = mongoose;
const routerUser = require('./routes/users')

// DB connection

// getting-started.js
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
console.log('database started');
}

//schema


//body parser
server.use(expres.json());
server.use(expres.static('public'));
server.use(expres.static('default'));
server.use('/users', routerUser.router)


 

server.listen(process.env.PORT, () => {
    console.log('server started..')
});

