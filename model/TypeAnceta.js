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

TypeAnceta.hasMany(Anceta,{foreignKey:'type_anceta_id',onDelete:'cascade'});
TypeAnceta.hasMany(Quastion,{foreignKey:'type_anceta_id',onDelete:'cascade'});
TypeAnceta.hasMany(Competence,{foreignKey:'type_anceta_id',onDelete:'cascade'});


module.exports = TypeAnceta