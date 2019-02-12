const mongoose = require('mongoose');
const schema = require('./schemas');

const User = mongoose.model('Users', schema.userSchema);

const Video = mongoose.model('Video', schema.videoSchema);

const Game = mongoose.model('Game', schema.gameSchema);

module.exports.User = User;
module.exports.Video = Video;
module.exports.Game = Game;
