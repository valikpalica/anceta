const sequelize = require('./sequlize');
require('./model/User');
require('./model/TypeAnceta');
require('./model/ComanderQuastion');

const syncDB = () =>
    sequelize.sync(/*{force: true}*/).then(result=>{
    }).catch(e=>{
        console.log(e);
        throw new Error('Type Anceta DB error',e)
    })

module.exports = syncDB;