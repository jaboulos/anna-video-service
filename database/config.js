
// const path = require('path');

// let knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host: 'ec2-54-183-116-44.us-west-1.compute.amazonaws.com',
//     port: 5432,
//     user: 'taco',
//     password: 'tuesday',
//     database: 'twitchvid'
//   },
// });

// let db = require('bookshelf')(knex);

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function(table) {
//       table.increments('id').primary();
//       table.string('display_name', 255);
//     }).then(function(table) {
//       console.log('Created Table: ', table);
//     });
//   }
// });

// db.knex.schema.hasTable('videos').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('videos', function(table) {
//       table.increments('id').primary();
//       table.string('user_id', 255);
//       table.string('user_name', 255);
//       table.string('title', 255);
//       table.string('description', 255);
//       table.string('created_at', 255);
//       table.string('published_at', 255);
//       table.string('url', 255);
//       table.string('thumbnail_url', 255);
//       table.string('viewable', 255);
//       table.integer('view_count');
//       table.string('language', 255);
//       table.string('type', 255);
//       table.string('duration', 255);
//     }).then(function(table) {
//       console.log('Created Table: ', table);
//     });
//   }
// });

// db.knex.schema.hasTable('games').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('games', function(table) {
//       table.increments('id').primary();
//       table.string('name', 255);
//       table.string('box_art_url', 255);
//     }).then(function(table) {
//       console.log('Created Table: ', table);
//     });
//   }
// });

// module.exports = db;

