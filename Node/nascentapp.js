const expres = require('express');
const server = expres();

const productRouter = require('./routes/productRout')

//body parser
server.use(expres.json());
server.use(expres.static('public'));
// server.use(expres.static('default'));
server.use('/api/v1', productRouter.router)


 

server.listen(8888, () => {
    console.log('server started..')
});

