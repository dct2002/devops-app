require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

module.exports = app;