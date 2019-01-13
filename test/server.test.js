const request = require('supertest');
const app = require('../server/app.js');

describe('GET / ', () => {
  test('It should respond with a GET method', () => {
    return request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('GET /api/videos ', () => {
  test('It should respond with a sample of video data', () => {
    return request(app).get('/api/videos').then((response) => {
      expect(response.body[0]).toEqual(
        {
          'id': 342810166,
          'user_id': '19070311',
          'user_name': 'A_Seagull',
          'title': 'hello',
          'description': '',
          'created_at': '2018-11-30T21:20:26Z',
          'published_at': '2018-11-30T21:20:26Z',
          'url': 'https://www.twitch.tv/videos/342810166',
          'thumbnail_url': 'https://static-cdn.jtvnw.net/s3_vods/002392d4795aacda0758_a_seagull_31472333760_1035646291/thumb/thumb0-320x180.jpg',
          'viewable': 'public',
          'view_count': 5207,
          'language': 'en',
          'type': 'archive',
          'duration': '3h34m34s'
        }
      );
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('GET /api/users ', () => {
  test('It should respond with a sample of user data', () => {
    return request(app).get('/api/users').then((response) => {
      expect(response.body[0]).toEqual(
        {
          'id': 19070311,
          'login': 'a_seagull',
          'display_name': 'A_Seagull',
          'type': '',
          'broadcaster_type': 'partner',
          'description': 'COMPETITIVE GAMING ENTHUSIAST',
          'profile_image_url': 'https://static-cdn.jtvnw.net/jtv_user_pictures/a_seagull-profile_image-4d2d235688c7dc66-300x300.png',
          'offline_image_url': 'https://static-cdn.jtvnw.net/jtv_user_pictures/f755a397-2b1c-45d8-a418-8893c6811755-channel_offline_image-1920x1080.png',
          'view_count': 27857135
        }
      );
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('GET /api/games ', () => {
  test('It should respond with a sample of games data', () => {
    return request(app).get('/api/games').then((response) => {
      expect(response.body[0]).toEqual(
        {
          'id': 488552,
          'name': 'Overwatch',
          'box_art_url': 'https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-60x85.jpg'
        }
      );
      expect(response.statusCode).toBe(200);
    });
  });
});
