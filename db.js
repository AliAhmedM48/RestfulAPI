require("dotenv").config();
const URI_MONGO_ATLAS = process.env.MONGOatlas_URL;
const DB_NAME_MONGO_ATLAS = process.env.MONGOatlas_DB_NAME;

const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(URI_MONGO_ATLAS, { dbName: DB_NAME_MONGO_ATLAS })
        .then(() => console.log("connected to MongoDB successfully 🎉"))
        .catch(err => console.error('Error connecting to MongoDB:', err.message))
};

module.exports = connectDB;