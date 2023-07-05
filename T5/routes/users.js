const express = require('express');
const router = express.Router();
const users = require('../database/userData');

router.get('/', (req, res) =>{
    res.json({message:"Users retrieved",
        success:true,
        "users":users});
});

router.put('/update/:id', (req, res)=>{
    const userid = req.params.id;
    const {email, firstName} = req.body;
    const user = users.find((user) => user.id === userid);

    if(!user){
        res.status(404).json({error:"User not found!"});
    }else{
        user.firstName = firstName;
        user.email = email;

        res.json({message:"User updated",
            success:true});
    }
});

router.post('/add', (req, res) => {
    const { email, firstName } = req.body;
    const newUser = { email, id: Math.floor(100000 + Math.random() * 900000).toString(), firstName };
    users.push(newUser);

    res.json({message:"User added",
        success:true});
});

router.get('/user/:id', (req, res) => {
    const userid = req.params.id;
    const user = users.find((user) => user.id === userid);

    if (!user) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.json({
            success:true,
            'user':user});
    }
});

module.exports = router;