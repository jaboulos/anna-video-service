const express = require('express');
const path = require('path');
const cors = require('cors');

const db = require('../database/config.js');
const Videos = require('../database/collections/videos.js');
const Users = require('../database/collections/users.js');
const Games = require('../database/collections/games.js');

const User = require('../database/models/user.js')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true, }));
app.use(express.static(path.join(__dirname, '../public')));

const port = 3049;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

app.get('/', (req, res) => {
  res.status(200);
});

app.get('/api/videos', (req, res) => {
  Videos.reset()
    .fetch()
    .then((videos) => {
      res.status(200).send(videos.models);
    });
});

app.get('/api/users', (req, res) => {
  Users.reset()
    .query('where', 'id','=', 1)
    .fetch()
    .then((users) => {
      res.status(200).send(users.models);
    });
});

//CREATE NEW ITEM
app.post('/api/users', (req, res) => {
  const username = req.body.username;
  new User({display_name: username})
    .save()
    .then(newUser => {
      res.status(200).send(newUser.attributes);
    })
    .catch(err => {
      console.error('something went wrong with creating a new user', err);
    })
});

//UPDATE ITEM
app.put('/api/users', (req, res) => {

});

//DELETE AN ITEM
app.delete('api/users', (req, res) => {

});



app.get('/api/games/', (req, res) => {
  Games.reset()
    .fetch()
    .then((games) => {
      res.status(200).send(games.models);
    });
});


module.exports = app;