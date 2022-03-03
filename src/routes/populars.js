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
  const { popularity, id, release_date, original_title, overview } = req.body;
  const query = `
        CALL movieAdd(?, ?, ?, ?, ?)
    `;
  mysqlConnection.query(
    query,
    [popularity, id, release_date, original_title, overview],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: 'Movie saved' });
      } else {
        console.log(err);
      }
    }
  );
});

router.put('/:id', (req, res) => {
  const { popularity, release_date, original_title, overview } = req.body;
  const { id } = req.params;
  const query = `
        CALL movieEdit(?, ?, ?, ?, ?)
    `;
  mysqlConnection.query(
    query,
    [popularity, id, release_date, original_title, overview],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: 'Movie update' });
      } else {
        console.log(err);
      }
    }
  );
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
