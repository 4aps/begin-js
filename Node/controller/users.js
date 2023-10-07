const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const index = fs.readFileSync('index.html', 'utf-8');
const users = data.users;

exports.createAll = (req, res)=>{
    console.log(req.body);
    users.push(req.body);
    res.status(201).json(req.body);
 }

 exports.getAll = (req, res)=>{
    res.json(users);
 }

 exports.getOne = (req, res)=>{
    const id = +(req.params.id);
    const user = users.find(p => p.id === id);
    res.json(user);
 }

 exports.replace = (req, res)=>{
    const id = +(req.params.id);
    const UserIndex = users.findIndex(p => p.id === id);
    users.splice(UserIndex, 1, {...req.body, id: id})
    res.status(201).json({user: 'updated'});
 } 

 exports.update = (req, res)=>{
    const id = +(req.params.id);
    const UserIndex = users.findIndex(p => p.id === id);
    const user = users[UserIndex];
    users.splice(UserIndex, 1, {...user,...req.body})
    res.status(201).json({user: 'patch updated'});
 }

 exports.delete = (req, res)=>{
    const id = +(req.params.id);
    const UserIndex = users.findIndex(p => p.id === id);
    const user = users[UserIndex];
    users.splice(UserIndex, 1)
    res.status(201).json({user: 'id:1 deleted'});
}

