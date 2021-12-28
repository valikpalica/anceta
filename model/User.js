const sequelize = require('../sequlize');
const Sequelize = require('sequelize');

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
    graduation:{
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
    }
});


module.exports = User;