const DBhelper = require('../DB/DBhelper');
const Router = require('express').Router();

Router.get('/allAncetas',(req,res)=>{
    DBhelper.getTypeAnceta().then(data=>{
        res.status(200).json({response:data});
    }).catch(e=>{
        res.status(400).json({response:e})
    })
});

Router.post('/quiz',(req,res)=>{
    DBhelper.getQuiz(req.body).then(data=>{
        res.status(200).json({response:data});
    }).catch(e=>{
        res.status(400).json({response:e});
    });
});

Router.get('/comanderQuiz',(req,res)=>{
    DBhelper.getComanderQuiz().then(data=>{
        res.status(200).json({response:data});
    }).catch(e=>{
        console.log(e);
        res.status(400).json({response:e})
    });
});

Router.post('/user_info_anceta',(req,res)=>{
    DBhelper.getAncetasForPerson(req.body).then(data=>{
        res.status(200).json({response:data});
    }).catch(e=>{
        res.status(400).json({response:e});
    })
});

Router.post('/user_info_comander',(req,res)=>{
    DBhelper.getComanderTest(req.body).then(data=>{
        res.status(200).json({response:data});
    }).catch(e=>{
        res.status(400).json({response:e});
    })
});

Router.post('/setUser',(req,res)=>{
    DBhelper.setUser(req.body).then(data=>{
        res.status(200).json({response:data});
    }).catch(e=>{
        res.status(400).json({response:e});
    })
});

Router.post('/checkUser',(req,res)=>{
    DBhelper.getUser(req.body).then(data=>{
        res.status(200).json({response:data});
    }).catch(e=>{
        res.status(400).json({response:e});
    })
});
Router.post('/setComanderTest',(req,res)=>{
    DBhelper.setComanderQuiz(req.body).then(data=>{
        res.status(200).json({response:data})
    }).catch(e=>{
        res.status(400).json({response:e});
    })
});

Router.post('/setComanderAnceta',(req,res)=>{
    DBhelper.setComanderAnceta(req.body).then(data=>{
        res.status(200).json({response:data});
    }).catch(e=>{
        res.status(400).json({response:e});
    })
});
Router.post('/setQuiz',(req,res)=>{
    DBhelper.setQuiz(req.body).then(data=>{
        res.status(200).json({response:data})
    }).catch(e=>{
        res.status(400).json({response:e});
    });
});
Router.post('/setAnceta',(req,res)=>{
    DBhelper.setAnceta(req.body).then(data=>{
        res.status(200).json({response:data});
    }).catch(e=>{
        res.status(400).json({response:e});
    })
}); 
module.exports = Router;