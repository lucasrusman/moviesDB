const { DataTypes } = require("sequelize");
const mysqlConnection = require("../database");

const Popular = mysqlConnection.define('Movie', {
    popularity: {
        type: DataTypes.FLOAT
    },
    id: {
        type: DataTypes.NUMBER,
        primaryKey:true
    },
    release_date: {
        type: DataTypes.STRING
    },
    original_title: {
        type: DataTypes.STRING
    },
    overview: {
        type: DataTypes.STRING
    },
})

module.exports = Popular