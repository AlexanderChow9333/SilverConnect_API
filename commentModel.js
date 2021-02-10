// commentModel.js
var mongoose = require("mongoose");
// Setup schema
var commentSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  postID: {
    type: String,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});
// Export Comment model
var Comments = (module.exports = mongoose.model("comment", commentSchema));
module.exports.get = function (callback, limit) {
  Comments.find(callback).limit(limit);
};
