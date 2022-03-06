const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');




router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM details WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });




  router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM details WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
  
  router.post('/', (req, res) => {
    const { id,original_title, genrs,  overview, production_companies} = req.body;
    const query = `
          CALL detailAdd(?, ?, ?, ?, ?)
      `;
    mysqlConnection.query(
      query,
      [ id,original_title, genrs,  overview, production_companies],
      (err, rows, fields) => {
        if (!err) {
          res.json({ Status: 'Detail saved' });
        } else {
          console.log(err);
        }
      }
    );
  });
  
  router.put('/:id', (req, res) => {
    const {original_title, genrs,  overview, production_companies } = req.body;
    const { id } = req.params;
    const query = `
          CALL detailEdit(?, ?, ?, ?, ?)
      `;
    mysqlConnection.query(
      query,
      [id, original_title, genrs,  overview, production_companies],
      (err, rows, fields) => {
        if (!err) {
          res.json({ Status: 'Detail update' });
        } else {
          console.log(err);
        }
      }
    );
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM details WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json({ Status: 'Detail delete' });
      } else {
        console.log(err);
      }
    });
  });








  
module.exports = router;
