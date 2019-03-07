module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_IP,
      port: 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'twitchvid'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};