const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  display_name: String
});

const videoSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  user_id: String,
  user_name: String,
  title: String,
  description: String,
  created_at: String,
  published_at: String,
  url: String,
  thumbnail_url: String,
  viewable: String,
  view_count: String,
  language: String,
  type: String,
  duration: String
});

const gameSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  name: String,
  box_art_url: String
})

module.exports.userSchema = userSchema;
module.exports.videoSchema = videoSchema;
module.exports.gameSchema = gameSchema;
