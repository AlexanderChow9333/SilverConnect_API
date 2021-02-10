// postModel.js
var mongoose = require("mongoose");
// Setup schema
var postSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  create_date: {
    type: Date,
    default: Date.now,
  }
});
// Export post model
var Posts = (module.exports = mongoose.model("post", postSchema));
module.exports.get = function (callback, limit) {
  Posts.find(callback).limit(limit);
};
