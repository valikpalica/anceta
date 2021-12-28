const sequelize = require('../sequlize');
const Sequelize = require('sequelize');

const AssessmentCompetence = sequelize.define('AssessmentCompetence',{
    id_assessmenet_competence:{
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

module.exports = AssessmentCompetence;