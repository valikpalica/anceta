const sequelize = require("../sequlize");
const Sequelize = require('sequelize');
const AssessmentQuastion  =  require('./AssessmentQuastion');

const Quastion = sequelize.define('Quastion',{
    id_quastion:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    quastion:{
        type:Sequelize.STRING,
        allowNull:false
    }
});



module.exports = Quastion;
