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

router.post('/:id', (req, res) => {
  const { id } = req.params;
  const { author, created_at, content } = req.body;
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

router.put('/:id/:author', (req, res) => {
  const { created_at, content } = req.body;
  const { id, author} = req.params;
  const query = `
        CALL reviewEdit(?, ?, ?, ?)
    `;
  mysqlConnection.query(
    query,
    [id, author, created_at, content],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: 'Review update' });
      } else {
        console.log(err);
      }
    }
  );
});

router.delete('/:id/:author', (req, res) => {
  const { id , author} = req.params;
  mysqlConnection.query('DELETE FROM reviews WHERE id = ? and author = ?', [id, author], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: 'Review delete' });
    } else {
      console.log(err);
    }
  });
});



module.exports = router;
