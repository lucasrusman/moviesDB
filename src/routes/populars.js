const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');


router.get('/',   (req,res)=>{
  mysqlConnection.query('SELECT * FROM populars ORDER BY popularity DESC', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM populars WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.post('/', (req, res) => {
  console.log(req.body)
  const { popularity, realese_date, original_title, overview } = req.body;
  console.log( popularity, realese_date, original_title, overview );
  mysqlConnection.query('INSERT INTO populars (popularity, realese_date, original_title, overview) VALUES (?, ?, ?, ?); ',[popularity, realese_date, original_title, overview ] ,  (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.post('/edit/:id', (req, res) => {
  console.log("HOLSSSSSSSd")
  const { id } = req.params;
  const { popularity, realese_date, original_title, overview } = req.body;
  console.log(id,  popularity, realese_date, original_title, overview );

  mysqlConnection.query('UPDATE populars SET popularity = ?, realese_date = ?, original_title = ?, overview = ? WHERE id = ?;', [ popularity, realese_date, original_title, overview, id], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: 'Movie delete' });
    } else {
      console.log(err);
    }
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM populars WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: 'Movie delete' });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
