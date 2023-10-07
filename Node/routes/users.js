const expres = require('express');
const usersController = require('../controller/users.js')

const router = expres.Router();

//MVC model-view-controller

router 
.post('/', usersController.createAll)
.get('/', usersController.getAll)
.get('/:id', usersController.getOne)
.put('/:id', usersController.replace)
.patch('/:id', usersController.update)  
.delete('/:id', usersController.delete)

exports.router = router;
