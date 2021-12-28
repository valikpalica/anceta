const Anceta = require("../model/Anceta");
const AssessmentCompetence = require("../model/AssessmentCompetence");
const AssessmentQuastion = require("../model/AssessmentQuastion");
const Competence = require("../model/Competence");
const Quastion = require("../model/Quastion");
const TypeAnceta = require("../model/TypeAnceta");
const User = require("../model/User");

class DBHelper{
    getTypeAnceta = () => TypeAnceta.findAll({raw:true}).then(data =>{
        return data
    }).catch(e=>{
        console.error(e);
        throw new Error('DBHelper getTypeAnceta ',e);
    });
    getUser = (name,surname,patronime) => User.findOne({raw:true,where:{
        name,
        surname,
        patronime
    }}).then(data=>{
        return data
    }).catch(e=>{
        console.error(e);
        throw new Error('DBHelper getUser ', e)
    })
    getAnceta =  (user_id) => Anceta.findAll({raw:true,where:{
        user_id,
    },
    include:[TypeAnceta,Quastion,Competence,AssessmentCompetence,AssessmentQuastion]
    }).then(data=>{
        return data;
    }).catch(e=>{
        console.error(e);
        throw new Error('DBHelper getAnceta ',e);
    })
}

module.exports = new DBHelper();