const mongoose = require("mongoose");

// const Schema =mongoose.Schema

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    ///population
    createdBy: {
      type: String,
    },
    ///
    category: {
      type: String,
      enum: ["Historical", "Technology"],
    },
    coverfile: {
      type: String,
      default: "none",
    },
    covertype: {
      type: String,
    },
  },
  // for automatic createdAt and updatedAt
  { timestamps: true }
);

const Post = mongoose.model("Post111", postSchema);

module.exports = Post;
