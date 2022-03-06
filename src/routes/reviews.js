const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');


router.get('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM reviews WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.post('/', (req, res) => {
  const {id, author, created_at, content } = req.body;
  const query = `
        CALL reviewAdd(?, ?, ?, ?)
    `;
  mysqlConnection.query(
    query,
    [id, author, created_at, content],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: 'Review saved' });
      } else {
        console.log(err);
      }
    }
  );
});

router.put('/:id', (req, res) => {
  const { author, created_at, content } = req.body;
  const { id } = req.params;
  const query = `
        CALL movieEdit(?, ?, ?)
    `;
  mysqlConnection.query(
    query,
    [ author, created_at, content],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: 'Review update' });
      } else {
        console.log(err);
      }
    }
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM reviews WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: 'Review delete' });
    } else {
      console.log(err);
    }
  });
});



module.exports = router;
