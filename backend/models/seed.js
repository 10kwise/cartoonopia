const mongoose = require('mongoose');
const User = require('./models/User.js');
const character = require('./models/character.js');
const Contribution = require('./models/Contribution.js');
const Favorite = require('./models/Favorite.js');
const adminList = require('./data/adminList.json');
const userList = require('./data/userlist.json');
const characters = require('./data/characters.json');
const contributions = require('./data/contributions.json');
const favorites = require('./data/favorites.json');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cartoonopia', { useNewUrlParser: true, useUnifiedTopology: true });

// Function to seed data
async function seedData() {
  try {
    // Insert admin list
    await User.insertMany(adminList);

    // Insert user list
    await User.insertMany(userList);

    // Insert characters
    await Character.insertMany(characters);

    // Insert contributions
    await Contribution.insertMany(contributions);

    // Insert favorites
    await Favorite.insertMany(favorites);

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.disconnect();
  }
}

// Seed the data
seedData();
