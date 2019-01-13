const db = require('../config.js');

let User = db.Model.extend({
  tableName: 'users'
});

module.exports = User;