const sequelize = require('../sequlize');
const Sequelize = require('sequelize');

const AssessmentQuastion = sequelize.define('AssessmentQuastion',{
    id_assessmenet_quastion:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    point:{
        type:Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = AssessmentQuastion;