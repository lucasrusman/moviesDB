const { request, response } = require("express");
const Popular = require( '../models/popular')
const mysqlConnection = require('../database')



const getPopulars = (req = request, res = response) => {
    mysqlConnection.query('SELECT * FROM populars ORDER BY popularity DESC', (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
}

const getPopular = (req = request, res = response) => {

}

const postPopular = (req = request, res = response) => {

}

const putPopular = (req = request, res = response) => {

}

const deletePopular = (req = request, res = response) => {

}



module.exports = {
    getPopulars,
    getPopular,
    postPopular,
    putPopular,
    deletePopular
}