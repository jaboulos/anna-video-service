const express = require('express');
const path = require('path');
const db = require('../database/config.js');
const Video = require('../database/models/video.js');
const Users = require('../database/collections/users.js');
const User = require('../database/models/user.js');
const Videos = require('../database/collections/videos.js');
const app = express();
const port = 3049;

app.use(express.json());
app.use(express.urlencoded({extended: true, }));
app.use(express.static(path.join(__dirname, '../public')));



app.get('/videos/api', (req, res) => {
  Videos.reset()
    .fetch()
    .then((videos) => {
      res.status(200).send(videos.models);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});