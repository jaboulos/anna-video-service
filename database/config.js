/*
  TODO:

    -Include code for creating 'twitchvid' DB and user information for migration
*/

let knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'taco',
    password: 'tuesday',
    database: 'twitchvid'
  }
});
let db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('user_id', 144);
      table.string('login', 144);
      table.string('display_name', 144);
      table.string('type', 144);
      table.string('broadcaster_type', 144);
      table.string('description', 144);
      table.string('profile_image_url', 144);
      table.string('offline_image_url', 144);
      table.integer('view_count');
    }).then(function(table) {
      console.log('Created Table: ', table);
    });
  }
});

db.knex.schema.hasTable('videos').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('videos', function(table) {
      table.increments('id').primary();
      table.string('user_id', 144);
      table.string('user_name', 144);
      table.string('title', 144);
      table.string('description', 144);
      table.string('created_at', 144);
      table.string('published_at', 144);
      table.string('url', 144);
      table.string('thumbnail_url', 144);
      table.string('viewable', 144);
      table.integer('view_count');
      table.string('language', 144);
      table.string('type', 144);
      table.string('duration', 144);
    }).then(function(table) {
      console.log('Created Table: ', table);
    });
  }
});

module.exports = db;