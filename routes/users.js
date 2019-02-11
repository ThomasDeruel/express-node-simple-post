const express = require('express');
const router = express.Router();

const tableau = [];

router.get('/users',(req,res)=>{
    res.render('users')
})

router.post('/users',(req,res)=>{
    tableau.push(req.body)
    res.redirect('/')
})

exports.route = router;

exports.tableau = tableau;