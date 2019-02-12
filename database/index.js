const mongoose = require('mongoose');
const schema = require('./schemas');
const model = require('./models');

const db = mongoose.connect('mongodb://localhost/twitchVideoService');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongodb!')
});


