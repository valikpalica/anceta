const Anceta = require("../model/Anceta");
const ComanderAnceta = require("../model/AncetaComander");
const AssessmenetComanderTest = require("../model/AssessmentComanderTest");
const AssessmentCompetence = require("../model/AssessmentCompetence");
const AssessmentQuastion = require("../model/AssessmentQuastion");
const ComanderQuastion = require("../model/ComanderQuastion");
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

    setUser = ({name,surname,patronime,posada,rank,staff,graduation,year,facultet,specialize}) => 
    User.create({name,surname,patronime,posada,rank,staff,graduation,year,facultet,specialize}).then(data=>{
        return data;
    }).catch(e=>{
        console.error(e);
        throw new Error('DBHelper setUser ',e);
    })

    setAnceta = ({name,surname,patronime,posada,staff,user_id,type_anceta_id}) =>
    Anceta.create({name,surname,patronime,posada,staff,user_id,type_anceta_id}).then(data=>{
        return data
    }).catch(e=>{
        console.error(e);
        throw new Error('DBHelper setAnceta ',e);
    })
    
    getAncetasForPerson =  (user_id) => Anceta.findAll({raw:true,where:{
        user_id,
    },
    include:[
        {
            model:TypeAnceta,
            include:[Quastion,Competence]
        }
        ,AssessmentCompetence,AssessmentQuastion]
    }).then(data=>{
        return data;
    }).catch(e=>{
        console.error(e);
        throw new Error('DBHelper getAncetasForPerson ',e);
    })

    setComanderAnceta = ({comandervch,comandermpz,comander,zaohochenja,stagnenja,studyOpninion,yearPoint,mainOpinion,vidpovidnist}) =>
    ComanderAnceta.create({comandervch,comandermpz,comander,zaohochenja,stagnenja,studyOpninion,yearPoint,mainOpinion,vidpovidnist}).then(data=>{
        return data
    }).catch(e=>{
        console.error(e);
        throw new Error('DBHelper setComandeAnceta ',e);
    })

    getComanderTest = (user_id) => ComanderAnceta.findAll({raw:true,where:{
        user_id
    },include:[
        {
            model:AssessmenetComanderTest,
            include:[ComanderQuastion]
        }
    ]}).then(data=>{
        return data
    }).catch(e=>{
        console.error(e);
        throw new Error('DBHelper getComanderTest ',e);
    });
    

}

module.exports = new DBHelper();