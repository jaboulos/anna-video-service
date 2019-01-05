const express = require('express');
const path = require('path');
const db = require('../database/config.js');
const app = express();
const port = 3049;

app.use(express.json());
app.use(express.urlencoded({extended: true, }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  console.log('Made it');
  res.send('200');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});