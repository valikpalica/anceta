const DBhelper = require('../DB/DBhelper');

const Router = require('express').Router();

Router.get('/allAncetas',(req,res)=>{

});

Router.post('/user_info',(req,res)=>{
    DBhelper.getAnceta(1).then(data=>{
        res.status(200).json({message:data});
    }).catch(e=>{
        res.status(400).json({message:e});
    })
});


module.exports = Router;