const DB_collection_NAME_MONGO_ATLAS = process.env.MONGOatlas_COLLECTION_NAME;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  interests: {
    type: [String],
    required: true
  },
  socialMedia: {
    twitter: String,
    linkedIn: String,
    facebook: String,
    github: String
  }
});

const User = mongoose.model('User', userSchema, DB_collection_NAME_MONGO_ATLAS);

module.exports = User;
