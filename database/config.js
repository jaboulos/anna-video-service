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

db.knex.schema.hasTable('channel_mstr').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('channel_mstr', function(table) {
      table.increments('id').primary();
      table.integer('id_channel').unique();
      table.string('name', 144);
      table.string('url', 144);
      table.string('display_name', 144);
      table.string('logo', 144);
      table.string('language', 144);
      table.string('partner', 144);
      table.string('mature', 144);
      table.string('email', 144);
      table.integer('views');
      table.integer('followers');
      table.timestamp('created_at');
      table.timestamp('updated_at');
    }).then(function(table) {
      console.log('Created Table: ', table);
    });
  }
});

db.knex.schema.hasTable('vid_mstr').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('vid_mstr', function(table) {
      table.increments('id').primary();
      table.integer('vid_id').unique();
      table.integer('channel_id');
      table.foreign('channel_id').references('channel_mstr.id_channel');
      table.integer('length');
      table.string('url', 144);
      table.string('title', 144);
      table.string('language', 144);
      table.timestamp('created_at');
      table.timestamp('published_at');
    }).then(function(table) {
      console.log('Created Table: ', table);
    });
  }
});

db.knex.schema.hasTable('vid_dtl').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('vid_dtl', function(table) {
      table.increments('id').primary();
      table.integer('id_vid_mstr');
      table.foreign('id_vid_mstr').references('vid_mstr.vid_id');
      table.string('fps', 144);
      table.string('preview_url', 144);
      table.string('resolution', 144);
      table.string('tag_list', 144);
    }).then(function(table) {
      console.log('Created Table: ', table);
  });
  }
});

db.knex.schema.hasTable('game_mstr').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('game_mstr', function(table) {
      table.increments('id').primary();
      table.integer('id_vid_mstr');
      table.foreign('id_vid_mstr').references('vid_mstr.vid_id');
      table.string('title', 144);
      table.string('thumbnail_type', 144);
      table.string('thumbnail_url' ,144);
      table.string('image_size', 144);
    }).then(function(table) {
      console.log('Created Table: ', table);
  });
  }
});

db.knex.schema.hasTable('vid_description').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('vid_description', function(table) {
      table.increments('id').primary();
      table.integer('id_vid_mstr');
      table.foreign('id_vid_mstr').references('vid_mstr.vid_id');
      table.string('description_title', 144);
    }).then(function(table) {
      console.log('Created Table: ', table);
    });
  }
});

module.exports = db;