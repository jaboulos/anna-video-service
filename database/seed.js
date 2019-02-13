const mongoose = require('mongoose');
const model = require('./models');
const sampleData = require('./sampleData');
const faker = require('faker');

mongoose.connect('mongodb://localhost/twitchVideoService', { useNewUrlParser: true });

model.Video.insertMany(sampleData.sampleVideos.data, (err, docs) => {
  if (err) console.log(err);
  else console.log('we did it!', docs);
})

const gameSeed = new model.Game(sampleData.sampleGame);
gameSeed.save((err, docs) => {
  if (err) console.log(err);
  else console.log('we did it!', docs);
});

const sampleUserGenerator = () => {
  const sampleUserArray = [{display_name: 'A_Seagull'}];
  for (let i = 0; i < 99999; i++) {
    sampleUserArray.push({display_name: faker.name.findName()})
  }
  return sampleUserArray;
}

(async () => {
  for (let i = 0; i < 100; i++) {
    const sampleUsers = sampleUserGenerator();
    await model.User.insertMany(sampleUsers);
  }
})();

