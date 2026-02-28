const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  await pool.query(
    'INSERT INTO users(name,email) VALUES($1,$2)',
    [name, email]
  );
  res.status(201).json({ message: 'User created' });
});

module.exports = router;