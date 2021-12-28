const sequelize = require('./sequlize');
require('./associations');

const syncDB = () =>
    sequelize.sync({force: true}).then(result=>{
    }).catch(e=>{
        console.log(e);
        throw new Error('Type Anceta DB error',e)
    })

module.exports = syncDB;