const sequelize = require('../sequlize');
const Sequelize = require('sequelize');
const ComanderAnceta = require('./AncetaComander');
const Anceta = require('./Anceta');

const User = sequelize.define('User',{
    id_user:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    surname:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    patronime:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    posada:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    rank:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    staff:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    graaduation:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    year:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    facultet:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    specialize:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    vidpovidnist:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});

User.belongsTo(ComanderAnceta,{foreignKey:'user_id',onDelete:'cascade'});
User.hasMany(Anceta,{foreignKey:'user_id',onDelete:'cascade'});
module.exports = User;