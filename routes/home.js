const express = require('express');
const router = express.Router();
const handleUsers = require('./users');

router.get('/',(req,res)=>{
    console.log(handleUsers.tableau)
    res.render('home',{users:handleUsers.tableau})
})

module.exports = router;