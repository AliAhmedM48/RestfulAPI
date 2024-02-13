const DB_collection_NAME_MONGO_ATLAS = process.env.MONGOatlas_COLLECTION_NAME;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  location: String,
  bio: String,
  username: String,
  email: String,
  phone: String,
  age: Number,
  password: String,
});

const User = mongoose.model('User', userSchema, DB_collection_NAME_MONGO_ATLAS);

module.exports = User;
