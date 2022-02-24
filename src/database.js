const { Sequelize } = require('sequelize');


const mysqlConnection = new Sequelize('moviedb', 'sqluser', 'password', {
    host: 'localhost',
    dialect : 'mysql'
    //logging : false,

})

module.exports = mysqlConnection;
