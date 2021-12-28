const sequelize = require('../sequlize');
const Sequelize = require('sequelize');

const ComanderAnceta  = sequelize.define('ComanderAnceta',{
    id_comander_anceta:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    comandervch:{
        type:Sequelize.STRING,
        allowNull:false
    },
    comandermpz:{
        type:Sequelize.STRING,
        allowNull:false
    },
    comander:{
        type:Sequelize.STRING,
        allowNull:false
    },
    zaohochenja:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    stagnenja:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    studyOpninion:{
        type:Sequelize.STRING,
        allowNull:false
    },
    yearPoint:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    mainOpinion:{
        type: Sequelize.STRING,
        allowNull:false
    },
    vidpovidnist:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});



module.exports = ComanderAnceta;