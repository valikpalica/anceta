const sequelize = require('../sequlize');
const Sequelize = require('sequelize');
const AssessmenetComanderTest = require('./AssessmentComanderTest');

const ComanderQuastion = sequelize.define('ComanderQuastion',{
    id_comander_quastion:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    quastion:{
        type:Sequelize.STRING,
        allowNull:false
    },
    group:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});



module.exports = ComanderQuastion;