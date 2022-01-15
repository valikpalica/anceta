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
    getTypeAnceta =  async () => new Promise((resolve,reject)=>{
        TypeAnceta.findAll({raw:true}).then(data =>{
            if(data.length>0){
                resolve({message:data,stattus:true});
            }
            else{
                reject({message:'Not type anceta',status:false});
            }
        }).catch(e=>{
            console.error(e);
            reject({message:new Error(`DBHelper getTypeAnceta ${e}`)});
        });
    });
    getQuiz =  ({type_anceta_id}) => new Promise(async (resolve,reject)=>{
        try {
            let quastion = await Quastion.findAll({raw:true,where:{type_anceta_id}});
            let competence = await Competence.findAll({raw:true,where:{type_anceta_id}});
            if(quastion.length> 0 && competence.length> 0){
                resolve({message:{quastion,competence},stattus:true});
            }
            else{
                reject({message:`Not Quiz`, status:false})
            }
        } catch (e) {
            console.error(e);
            reject({message:new Error(`DBHelper getQuiz ${e}`)})
        }
    })
    getComanderQuiz = async () => new Promise((resolve,reject)=>{
        ComanderQuastion.findAll({raw:true}).then(data=>{
            if(data.length>0){
                resolve({message:data,stattus:true});
            }   
            else{
                reject({message:'not comander quastion',stattus:false})
            }   
        }).catch(e=>{
            console.error(e);
            reject({message:new Error(`DBHelper getComander ${e}`)})
        })
    });

    getUser = async ({name,surname,patronime}) => new Promise((resolve,reject)=>{
        User.findOne({raw:true,where:{
            name,
            surname,
            patronime
        }}).then(data=>{
            if(data){
                resolve({message:data,stattus:true})
            }
            else{
                reject({message:'Not find Person',stattus:false})
            }
        }).catch(e=>{
            console.error(e);
            reject({message:new Error(`DBHelper getUser ${e}`)})
        })
    }); 

    setUser = async ({name,surname,patronime,posada,rank,staff,graduation,year,facultet,specialize}) => new Promise((resolve,reject)=>{
        User.findOne({raw:true,where:{
            name,surname,patronime
       }}).then(user=>{
            if(!user){
                User.create({name,surname,patronime,posada,rank,staff,graduation,year,facultet,specialize}).then(data=>{
                    resolve({message:data});
                }).catch(e=>{
                    console.error(e);
                    reject({message:`Problem with create user ${e}`,stattus:false});
                })
            }
            else{
                reject({message:'Person already exists',stattus:false});
            }
       }).catch(e=>{
            console.error(e);
            reject({message:new Error(`DBHelper setUser find user ${e}`)})
       });
    })
    

    setAnceta = async ({name,surname,patronime,posada,staff,user_id,type_anceta_id}) => new Promise((resolve,reject)=>{
        User.findAll({raw:true,where:{
            id_user:user_id
        }}).then(data=>{
            if(data.length>0){
                Anceta.create({name,surname,patronime,posada,staff,user_id,type_anceta_id}).then(data=>{
                    resolve({message:data,stattus:true})
                }).catch(e=>{
                    console.error(e);
                    throw new Error(`some problem with set anceta ${e}`);
                })
            }
            else{
                reject({message:'not find user'});
            }
        }).catch(e=>{
            console.error(e);
            reject({message:new Error(`some problem with set anceta ${e}`)})
        });
    })


    setQuiz = async ({array_quastion,array_competence,anceta_id}) => new Promise((resolve,reject)=>{
        Anceta.findAll({raw:true,where:{
            id_anceta:anceta_id,
        }}).then(data=>{
            if(data.length>0){
                for(const property in array_quastion){
                    AssessmentQuastion.create({
                        point:array_quastion[property].value,
                        quastion_id:array_quastion[property].quastion_id,
                        anceta_id
                    }).then(data=>{

                    }).catch(e=>{
                        console.error(e);
                        throw new Error(`DBHelper set Quiz quastion ${e}`);
                    })
                }
                for(const property in array_competence){
                    AssessmentCompetence.create({
                        point:array_competence[property].value,
                        competence_id:array_competence[property].competence_id,
                        anceta_id
                    }).then(data=>{
                        
                    }).catch(e=>{
                        console.error(e);
                        throw new Error(`DBHelper set Quiz competence ${e}`);
                    })
                }
                resolve({message:'Save correct',stattus:true});
            }
            else{
                reject({message:'Not find anceta',stattus:false});
            }
        }).catch(e=>{
            console.error(e);
            reject({message:new Error(`error for set quiz ${e}`)});
        })
    });


    getAncetasForPerson = async ({user_id}) => new Promise((resolve,reject)=>{
        Anceta.findAll({raw:false,where:{
            user_id,
        },
        include:[
            {
                model:TypeAnceta,
                include:[Quastion,Competence]
            }
            ,AssessmentCompetence,AssessmentQuastion]
        }).then(data=>{
            if(data.length>0){
                resolve({message:data,stattus:true});
            }else{
                reject({message:'Not find anceta',stattus:false})
            }
        }).catch(e=>{
            console.error(e);
            reject({message:new Error(`DBHelper getAncetasForPerson ${e}`)})
        })
    });

    setComanderAnceta = async ({comandervch,comandermpz,comander,zaohochenja,stagnenja,studyOpninion,yearPoint,mainOpinion,vidpovidnist,user_id}) =>
    new Promise((resolve,reject)=>{
        User.findAll({raw:true,where:{
            id_user:user_id
        }}).then(data=>{
            if(data.length>0){
                ComanderAnceta.create({comandervch,comandermpz,comander,zaohochenja,stagnenja,studyOpninion,yearPoint,mainOpinion,vidpovidnist,user_id}).then(data=>{
                    resolve({message:data,stattus:true});
                }).catch(e=>{
                    console.error(e);
                    reject({message:new Error(`DBHelper setComandeAnceta ${e}`)});
                })
            }else{
                reject({message:'no find user',stattus:false});
            }
        }).catch(e=>{
            console.error(e);
            reject({message:new Error(`DB set comander anceta ${e}`)})
        });
    })

    setComanderQuiz = async ({array,anceta_comander_id}) =>
    new Promise((resolve,reject)=>{
        ComanderAnceta.findAll({raw:true,where:{
            id_comander_anceta:anceta_comander_id
        }}).then(data=>{
            if(data.length>0){
                for(let property in array){
                    AssessmenetComanderTest.create({
                        point:array[property].value,
                        comander_quastion_id: array[property].comander_quastion_id,
                        anceta_comander_id
                    }).then(data=>{
                        console.log(data);
                    }).catch(e=>{
                        console.error(e);
                        reject({message:new Error(`DBHelper setComander Quiz ${e}`)});
                    })
                }
                resolve({message:'save correct',stattus:true})
            }
            else{
                reject({message:'Comander anceta not find',stattus:false})
            }
        }).catch(e=>{
            console.error(e);
            reject({message:new Error(`DBHelper setComander Quiz ${e}`)});
        })
    });

    getComanderTest = async ({user_id}) => new Promise((resolve,reject)=>{
        ComanderAnceta.findAll({raw:false,where:{
            user_id
        },include:[
            {
                model:AssessmenetComanderTest,
                include:[ComanderQuastion]
            }
        ]}).then(data=>{
            if(data.length>0){
                resolve({message:data,stattus:true});
            }else{
                reject({message:'Canot find comander test',stattus:false});
            }
        }).catch(e=>{
            console.error(e);
            reject({message:new Error(`DBHelper getComanderTest ${e}`)});
        });
    });
}

module.exports = new DBHelper();