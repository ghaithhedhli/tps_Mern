const express = require('express');
const app = express();
const port = 3000.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
let users =[
{id :1 , name: 'alice ',email:'alice@example.com '},
{id :2 , name:'bob',email:'bob@example.com'}
];
app.get('/users',(req,res)=>res.json(users));

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
    });

app.listen(port,()=>{
    console.log(`application exemple a l'ecoute sur le port ${port}`)
}); 