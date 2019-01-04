const express = require('express');
const db = require('../database/config.js');
const app = express();
const port = 3010;

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
  })
);

app.get('/', (req, res) => {
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});