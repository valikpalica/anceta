const sequelize = require("../sequlize");
const Sequelize = require('sequelize');
const AssessmentCompetence = require('./AssessmentCompetence');
const Competence = sequelize.define('Competence',{
    id_competence:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    competence:{
        type:Sequelize.STRING,
        allowNull:false
    }
});



module.exports = Competence;
