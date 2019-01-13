const db = require('../config.js');

let Game = db.Model.extend({
  tableName: 'games'
});

module.exports = Game;