const sequelize = require('../sequlize');
const Sequelize = require('sequelize');


const Anceta = sequelize.define('anceta',{
    id_anceta:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    surname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    patronime:{
        type:Sequelize.STRING,
        allowNull:false
    },
    posada:{
        type:Sequelize.STRING,
        allowNull:false
    },
    staff:{
        type:Sequelize.STRING,
        allowNull:false
    }
});



module.exports = Anceta;