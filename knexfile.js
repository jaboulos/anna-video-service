module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'ec2-54-183-116-44.us-west-1.compute.amazonaws.com',
      port: 5432,
      user: 'taco',
      password: 'tuesday',
      database: 'twitchvid'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};