const db = require('../config.js');
const Video = require('../models/video.js');

let Videos = new db.Collection();

Videos.model = Video;

module.exports = Videos;