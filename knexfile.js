module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'taco',
      password: 'tuesday',
      database: 'twitchvid'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};