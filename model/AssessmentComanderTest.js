const sequelize = require('../sequlize');
const Sequelize = require('sequelize');


const AssessmenetComanderTest = sequelize.define('AssessmentComanderTest',{
    id_assessment_comander_test:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    point:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = AssessmenetComanderTest;