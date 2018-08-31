const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  left: {
    type: Number,
    unique: true,
  },
  top: {
    type: Number,
    unique: true,
  },
  width: {
    type: Number,
    unique: true,
  },
  height: {
    type: Number,
    unique: true,
  },
  bg: {
    type: String,
    unique: true,
  },
});
const PostModel = mongoose.model('items', PostSchema);
module.exports = PostModel;
