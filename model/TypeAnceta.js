const sequelize =  require('../sequlize');
const Sequelize = require('sequelize');
const Anceta = require('./Anceta');
const Quastion = require('./Quastion');
const Competence = require('./Competence');

const TypeAnceta = sequelize.define('TypeAnceta',{
    id_type_anceta:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique: true
    }
})



module.exports = TypeAnceta