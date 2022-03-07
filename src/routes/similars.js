const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');




router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM similars WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });



router.post('/:id', (req, res) => {
  const { id } = req.params;
  const {id_similar, original_title, release_date, overview } = req.body;
  const query = `
        CALL similarAdd(?, ?, ?, ?, ?)
    `;
  mysqlConnection.query(
    query,
    [ id, id_similar, original_title, release_date, overview],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: 'Similar saved' });
      } else {
        console.log(err);
      }
    }
  );
});
  
router.put('/:id/:id_similar', (req, res) => {
  const { original_title, release_date, overview  } = req.body;
  const { id, id_similar } = req.params;
  const query = `
        CALL similarEdit(?, ?, ?, ?, ?)
    `;
  mysqlConnection.query(
    query,
    [id, id_similar, original_title, release_date, overview ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: 'Similar update' });
      } else {
        console.log(err);
      }
    }
  );
});
  
router.delete('/:id/:id_similar', (req, res) => {
  const { id , id_similar} = req.params;
  mysqlConnection.query('DELETE FROM similars WHERE id = ? and id_similar = ?', [id, id_similar], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: 'Similar delete' });
    } else {
      console.log(err);
    }
  });
});


module.exports = router;