const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');


router.get('/', (req, res) => {
    
  console.log("asdf");
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM reviews WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
