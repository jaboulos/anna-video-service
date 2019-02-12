const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const models = require('../database/models');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true, }));
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect('mongodb://localhost/twitchVideoService', { useNewUrlParser: true });

app.get('/', (req, res) => {
  res.status(200);
});

app.get('/api/videos', (req, res) => {
  models.Video.find()
    .then((videos) => {
      res.status(200).send(videos);
    })
    .catch(err => {
      console.log('something went wrong', err);
    })
});

app.get('/api/users', (req, res) => {
  models.User.find(null, null, { limit: 1 })
  .then((users) => {
    res.status(200).send(users);
  })
  .catch(err => {
    console.log('something went wrong', err);
  });
});

app.get('/api/games/', (req, res) => {
  models.Game.find()
  .then((games) => {
    res.status(200).send(games);
  })
  .catch(err => {
    console.log('something went wrong', err);
  });
});

module.exports = app;