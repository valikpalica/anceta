const Anceta = require("./model/Anceta");
const AncetaComander = require('./model/AncetaComander');
const AssessmentCompetence  = require('./model/AssessmentCompetence');
const AssessmentQuastion = require('./model/AssessmentQuastion');
const AssessmentComanderTest = require('./model/AssessmentComanderTest');
const ComanderQuastion = require('./model/ComanderQuastion');
const Competence = require('./model/Competence');
const Quastion = require('./model/Quastion');
const User = require('./model/User');
const TypeAnceta = require('./model/TypeAnceta');
const AssessmenetComanderTest = require("./model/AssessmentComanderTest");


User.hasOne(AncetaComander,{foreignKey:'user_id',onDelete:'cascade'});
User.hasMany(Anceta,{foreignKey:'user_id',onDelete:'cascade'});


Anceta.hasMany(AssessmentCompetence,{foreignKey:'anceta_id',onDelete:'cascade'});
Anceta.hasMany(AssessmentQuastion,{foreignKey:'anceta_id',onDelete:'cascade'});
Anceta.belongsTo(TypeAnceta,{foreignKey:'type_anceta_id'});
AncetaComander.hasMany(AssessmentComanderTest,{foreignKey:'anceta_comander_id',onDelete: "cascade" });

ComanderQuastion.hasMany(AssessmentComanderTest,{foreignKey:'comander_quastion_id',onDelete: "cascade" });
AssessmenetComanderTest.belongsTo(ComanderQuastion,{foreignKey:'comander_quastion_id'});
Competence.hasMany(AssessmentCompetence,{foreignKey:'competence_id',onDelete:'cascade'});

Quastion.hasMany(AssessmentQuastion,{foreignKey:'quastion_id',onDelete:'cascade'});

TypeAnceta.hasMany(Anceta,{foreignKey:'type_anceta_id',onDelete:'cascade'});
TypeAnceta.hasMany(Quastion,{foreignKey:'type_anceta_id',onDelete:'cascade'});
TypeAnceta.hasMany(Competence,{foreignKey:'type_anceta_id',onDelete:'cascade'});



