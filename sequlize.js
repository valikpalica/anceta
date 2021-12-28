const Sequelize = require('sequelize');
const config = require('./configdb.json');


const sequelize = new Sequelize(config.db_name,config.user,config.password,{
    dialect:config.dialect,
    host:config.host,
    define: {
        timestamps: false
    }
})

module.exports = sequelize;