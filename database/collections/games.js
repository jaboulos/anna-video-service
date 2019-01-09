const db = require('../config.js');
const Game = require('../models/game.js');

let Games = new db.Collection();

Games.model = Game;

module.exports = Games;