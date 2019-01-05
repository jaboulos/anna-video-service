const db = require('../config.js');

let Video = db.Model.extend({
  tableName: 'videos'
});

module.exports = Video;