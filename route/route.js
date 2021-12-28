const DBhelper = require('../DB/DBhelper');

const Router = require('express').Router();

Router.get('/allAncetas',(req,res)=>{

});

Router.post('/user_info_anceta',(req,res)=>{
    DBhelper.getAncetasForPerson(1).then(data=>{
        res.status(200).json({message:data});
    }).catch(e=>{
        res.status(400).json({message:e});
    })
});
Router.post('/user_info_comander',(req,res)=>{
    DBhelper.getComanderTest(1).then(data=>{
        res.status(200).json({message:data});
    }).catch(e=>{
        res.status(400).json({message:e});
    })
});

module.exports = Router;